import * as C from "./styles";
import Orders from "./Orders";
import ListProducts from "./ListProducts";
import { SidMenuAdmin } from "../../components";
import paths from "../../constants/paths";
import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";
export function Admin({ match: { path } }) {
  return (
    <C.Container>
      <SidMenuAdmin path={path} />
      <C.ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.ListProducts && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
        {path === paths.EditProduct && <EditProduct />}
      </C.ContainerItems>
    </C.Container>
  );
}
