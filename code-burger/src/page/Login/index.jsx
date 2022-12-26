import * as C from "./styles";

import LoginImg from "../../assets/login-code-burger.svg";
import Logo from "../../assets/logo-login.svg";

function Login() {
  return (
    <>
      <C.Container>
        <C.LoginImage src={Logo} alt="login-image" />
        <C.ContainerItens>
          <img src={LoginImg} alt="logo"/>
          <C.H1>Login</C.H1>
          <C.Label>Email</C.Label>
          <C.input name="email"/>
          <C.Label>Senha</C.Label>
          <C.input name="password"/>
          <C.Button>Sign In</C.Button>
          <C.SignInLink>
            Não possui conta ? <a>Sign Up</a>
          </C.SignInLink>
        </C.ContainerItens>
      </C.Container>
    </>
  );
}

export default Login;
