import * as C from "./styles";
import { CategoryCarousel } from "../../components/CategoryAndOffersCarousel";
import Capa from "../../assets/capa-burger-home.svg";

export default function Home() {
  return (
    <C.Container>
      <C.HomeLogo src={Capa} alt="logo da categoria" />
      <CategoryCarousel />
    </C.Container>
  );
}
