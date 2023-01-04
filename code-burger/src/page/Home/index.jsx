import * as C from "./styles";
import { CategoryCarousel } from "../../components";
import Capa from "../../assets/capa-burger-home.svg";

export function Home() {
  return (
    <C.Container>
      <C.HomeLogo src={Capa} alt="logo da categoria" />
      <CategoryCarousel />
    </C.Container>
  );
}
