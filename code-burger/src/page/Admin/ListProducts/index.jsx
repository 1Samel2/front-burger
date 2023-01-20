import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import apiCodeBurger from "../../../services/api";
import formatCurrency from "../../../utils/formatCurrency";
import paths from "../../../constants/paths";
import { useHistory } from "react-router-dom";
import * as C from "./styles";

export default function ListProducts() {
  const [products, setProducts] = useState();
  const { push } = useHistory();

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurger.get("products");
      setProducts(data);
    }
    loadOrders();
  }, []);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <C.Check />;
    }
    return <C.Cancel />;
  }

  function editProduct(product) {
    push(paths.EditProduct, { product })
}

  return (
    <C.Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Editar produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell>
                    <C.Img src={product.url} alt="image-produto" />
                  </TableCell>
                  <TableCell>
                    <C.Edit onClick={() => editProduct(product)}/>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </C.Container>
  );
}
