import * as C from "./styles";
import { useUser } from "../../hooks/UserContext";
import { useHistory } from "react-router-dom";
export function Header() {
  const {logout, userData} = useUser()
  const {
    push,
    location: { pathname },
  } = useHistory();

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <C.Container>
      <C.ContainerLeft>
        <C.PageLink onClick={() => push("/")} isActive={pathname === "/"}>
          Home
        </C.PageLink>
        <C.PageLink
          onClick={() => push("/products")}
          isActive={pathname.includes("/products")}
        >
          Ver Produtos
        </C.PageLink>
      </C.ContainerLeft>

      <C.ContainerRight>
        <C.PageLink>
          <C.Cart onClick={() => push("/cart")} />
        </C.PageLink>
        <C.Line />
        <C.PageLink>
          <C.User />
        </C.PageLink>

        <C.ContainerText>
          <p>Olá, {userData.name}</p>
          <C.PageLinkExit onClick={logoutUser}>Sair</C.PageLinkExit>
        </C.ContainerText>
      </C.ContainerRight>
    </C.Container>
  );
}
