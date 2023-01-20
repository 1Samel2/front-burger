import { useEffect, useState } from "react";
import * as C from "./styles";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "../../../components/";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import apiCodeBurger from "../../../services/api";

export default function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { push } = useHistory();

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

  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append("name", data.name);
    productDataFormData.append("price", data.price);
    productDataFormData.append("category_id", data.category.id);
    productDataFormData.append("file", data.file[0]);

    await toast.promise(apiCodeBurger.post("products", productDataFormData), {
      pending: "Criando novo produto...",
      sucess: "Produto criando",
      error: "Falha ao criar o produto",
    });
    setTimeout(() => {
      push("/listar-produtos");
    }, 2000);
  };

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
        <C.LabelInputAlign>
          <C.Label>Nome</C.Label>
          <C.Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message} </ErrorMessage>
        </C.LabelInputAlign>

        <C.LabelInputAlign>
          <C.Label>Preço</C.Label>
          <C.Input type="number" {...register("price")} />
          <ErrorMessage>{errors.price?.message} </ErrorMessage>
        </C.LabelInputAlign>

        <C.LabelInputAlign>
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
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </C.LabelInputAlign>

        <C.LabelInputAlign>
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
          <ErrorMessage>{errors.category?.message} </ErrorMessage>
        </C.LabelInputAlign>
        <C.ButtonAdd>Adicionar produto</C.ButtonAdd>
      </form>
    </C.Container>
  );
}
