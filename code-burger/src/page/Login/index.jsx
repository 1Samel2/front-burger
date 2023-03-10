import * as C from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import LoginImg from "../../assets/logo-burger.svg";
import { Button, ErrorMessage } from "../../components";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useUser } from "../../hooks/UserContext";

export function Login() {
  const history = useHistory();
  const { putUserData, userData } = useUser();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigátorio"),
    password: Yup.string()
      .required("A senha é obrigatório")
      .min(6, "A senha deve ter pelomenos 6 digítos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("sessions", {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Seja bem-vindo(a)",
        error: "Verifique seu e-mail e senha",
      }
    );

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        history.push("/pedidos");
      } else {
        history.push("/");
      }
    }, 1000);
  };
  return (
    <>
      <C.Container>
        <C.ContainerItens>
          <img src={LoginImg} alt="logo" />
          <C.H1>Entrar</C.H1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <C.Label>Email</C.Label>
            <C.input
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <C.Label>Senha</C.Label>
            <C.input
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <Button type="submit" style={{ marginTop: 30, marginBottom: 30 }}>
              Sign In
            </Button>
          </form>
          <C.SignInLink>
            Não possui conta ? <Link to="/register">Cadastre-se</Link>
          </C.SignInLink>
        </C.ContainerItens>
      </C.Container>
    </>
  );
}
