import { useEffect, useState } from "react";
import * as C from "./styles";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import apiCodeBurger from "../../../services/api";

export default function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get("categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <C.Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <C.Label>Nome</C.Label>
        <C.Input type="text" {...register("name")} />

        <C.Label>Preço</C.Label>
        <C.Input type="number" {...register("price")} />

        <C.LabelUpload>
          {fileName || (
            <>
              Carregue a imagem do produto
              <DriveFolderUploadIcon />
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register("file")}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name);
            }}
          />
        </C.LabelUpload>

        <Controller
          name="category_id"
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(cat) => cat.name}
                getOptionValue={(cat) => cat.id}
                placeholder="Categorias"
              />
            );
          }}
        ></Controller>

        <C.ButtonAdd>Adicionar produto</C.ButtonAdd>
      </form>
    </C.Container>
  );
}
