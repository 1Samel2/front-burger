import * as C from "./styles";
import { CategoryCarousel, OffersCarousel } from "../../components";

import Capa from "../../assets/capa-burger-home.svg";

export function Home() {
  return (
    <C.Container>
      <C.HomeLogo src={Capa} alt="logo da categoria" />
      <CategoryCarousel />
      <OffersCarousel/>
    </C.Container>
  );
}
