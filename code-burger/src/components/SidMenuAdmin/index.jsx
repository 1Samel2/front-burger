import * as C from "./styles";
import listLink from "./menu-list";
import { useUser } from "../../hooks/UserContext";
export function SidMenuAdmin() {
  const { logout } = useUser();
  return (
    <C.Container>
      <hr></hr>
      {listLink.map((item) => (
        <C.ItemContainer key={item.id} isActive={true}>
          <item.icon className="icon" />
          <C.ListLink to={item.link}>{item.label} </C.ListLink>
        </C.ItemContainer>
      ))}
      <hr></hr>
      <C.ItemContainer>
        <C.Logout />
        <C.ListLink to="/login" onClick={logout}>
          Sair
        </C.ListLink>
      </C.ItemContainer>
    </C.Container>
  );
}
