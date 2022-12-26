import * as C from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import LoginImg from "../../assets/login-code-burger.svg";
import Logo from "../../assets/logo-burger.svg";
import Button from "../../components/Button";
import api from "../../services/api";

export default function Login() {
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
    const response = await api.post("sessions", {
      email: clientData.email,
      password: clientData.password,
    });
    console.log(response);
  };
  return (
    <>
      <C.Container>
        <C.LoginImage src={Logo} alt="login-image" />
        <C.ContainerItens>
          <img src={LoginImg} alt="logo" />
          <C.H1>Login</C.H1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <C.Label>Email</C.Label>
            <C.input
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <C.Error>{errors.email?.message}</C.Error>
            <C.Label>Senha</C.Label>
            <C.input
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <C.Error>{errors.password?.message}</C.Error>
            <Button type="submit" style={{marginTop:30, marginBottom: 30}}>Sign In</Button>
          </form>
          <C.SignInLink>
            Não possui conta ? <a>Sign Up</a>
          </C.SignInLink>
        </C.ContainerItens>
      </C.Container>
    </>
  );
}
