import * as C from "./styles";
import CategoryCarousel from "../../components/CategoryCarousel";
import Capa from "../../assets/capa-burger-home.svg";

export default function Home() {
  return (
    <C.Container>
      <C.HomeLogo src={Capa} alt="logo da categoria" />
      <CategoryCarousel/>
    </C.Container>
  );
}
