import * as C from "./styles";
import Orders from "./Orders";
import ListProducts from "./ListProducts";
import { SidMenuAdmin } from "../../components";
import paths from "../../constants/paths";
export function Admin({ match: { path } }) {
  return (
    <C.Container>
      <SidMenuAdmin />
      <C.ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.ProductsEdit && <ListProducts />}
        {/*{path === paths.Order && <Orders/>}*/}
      </C.ContainerItems>
    </C.Container>
  );
}
