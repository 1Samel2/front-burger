import { useEffect, useState } from "react";
import * as C from "./styles";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import apiCodeBurger from "../../../services/api";

export default function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do produto"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.object().required("Escolha uma categoria"),
    file: Yup.mixed().test("required", "Carregue um arquivo", (value) => {
      return value && value.length > 0;
    }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
        <C.Error>{errors.name?.message} </C.Error>

        <C.Label>Preço</C.Label>
        <C.Input type="number" {...register("price")} />
        <C.Error>{errors.price?.message} </C.Error>

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
        <C.Error>{errors.file?.message} </C.Error>

        <Controller
          name="category"
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
        <C.Error>{errors.category?.message} </C.Error>

        <C.ButtonAdd>Adicionar produto</C.ButtonAdd>
      </form>
    </C.Container>
  );
}
