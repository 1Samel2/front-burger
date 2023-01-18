import * as C from "./styles";
import Orders from "./Orders";
import ListProducts from "./ListProducts";
import { SidMenuAdmin } from "../../components";
import paths from "../../constants/paths";
import NewProduct from "./NewProduct";
export function Admin({ match: { path } }) {
  return (
    <C.Container>
      <SidMenuAdmin path={path} />
      <C.ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.ProductsEdit && <ListProducts />}
        {path === paths.NewProduct && <NewProduct/>}
      </C.ContainerItems>
    </C.Container>
  );
}
