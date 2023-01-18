import { useEffect, useState } from "react";
import * as C from "./styles";
import { useForm } from "react-hook-form";
import Select from "react-select";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import apiCodeBurger from "../../../services/api";

export default function NewProduct() {
  const [products, setProducts] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurger.get("products");

      setProducts();
    }
    loadOrders;
  }, []);

  return (
    <C.Container>
      <form noValidate>
        <C.Label>Nome</C.Label>
        <C.Input type="text" {...register("name")} />

        <C.Label>Preço</C.Label>
        <C.Input type="number" {...register("price")} />

        <C.LabelUpload>
          Imagem do produto
          <input type="file" accept="image/png, image/jpeg" />
          <DriveFolderUploadIcon />
        </C.LabelUpload>

        <Select />
        <C.ButtonAdd>Adicionar produto</C.ButtonAdd>
      </form>
    </C.Container>
  );
}
