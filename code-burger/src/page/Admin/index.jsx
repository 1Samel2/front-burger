import * as C from "./styles";
import Orders from "./Orders";
import ListProducts from "./ListProducts";
import { SidMenuAdmin } from "../../components";
export function Admin() {
  return (
    <C.Container>
      <SidMenuAdmin />
      <C.ContainerItems>
        {/*  <Orders /> */}
        <ListProducts />
      </C.ContainerItems>
    </C.Container>
  );
}
