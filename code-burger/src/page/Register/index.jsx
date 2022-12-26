import * as C from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import RegisterImg from "../../assets/register-img.svg";
import Logo from "../../assets/logo-burger.svg";
import Button from "../../components/Button";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("O seu nome é obrigatório"),
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigátorio"),
    password: Yup.string()
      .required("A senha é obrigatório")
      .min(6, "A senha deve ter pelomenos 6 digítos"),
    confirmPassword: Yup.string()
      .required("A senha é obrigatória")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        "users",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      );
      if (status === 201) {
        toast.success("Cadastro criado com sucesso");
      } else if (status === 409) {
        toast.error("E-mail já cadastrado! Faça login para continuar");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Falha no sistema!");
    }
  };

  return (
    <>
      <C.Container>
        <C.RegisterImage src={RegisterImg} alt="register-image" />
        <C.ContainerItens>
          <img src={Logo} alt="logo" />
          <C.H1>Cadastre-se</C.H1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <C.Label>Nome</C.Label>
            <C.input
              type="text"
              {...register("name")}
              error={errors.name?.message}
            />
            <C.Error>{errors.name?.message}</C.Error>
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
            <C.Label>Confirmar Senha</C.Label>
            <C.input
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
            <C.Error>{errors.confirmPassword?.message}</C.Error>
            <Button type="submit" style={{ marginTop: 30, marginBottom: 30 }}>
              Sign In
            </Button>
          </form>
          <C.SignInLink>
            Já possui conta ? <a>Sign Up</a>
          </C.SignInLink>
        </C.ContainerItens>
      </C.Container>
    </>
  );
}