import * as C from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import LoginImg from "../../assets/login-code-burger.svg";
import Logo from "../../assets/logo-login.svg";

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

  const onSubmit = (data) => console.log(data);
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
            <C.Button type="submit">Sign In</C.Button>
          </form>
          <C.SignInLink>
            Não possui conta ? <a>Sign Up</a>
          </C.SignInLink>
        </C.ContainerItens>
      </C.Container>
    </>
  );
}
