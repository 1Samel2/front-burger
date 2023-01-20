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

export default function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const {
    push,
    location: {
      state: { product },
    },
  } = useHistory();


  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do produto"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.object().required("Escolha uma categoria"),
    offer: Yup.bool(),
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
    productDataFormData.append("offer", data.offer);

    await toast.promise(
      apiCodeBurger.put(`products/${product.id}`, productDataFormData),
      {
        pending: "Editando novo produto...",
        success: "Produto editado com sucesso",
        error: "Falha ao editar o produto",
      }
    );

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
          <C.Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message} </ErrorMessage>
        </C.LabelInputAlign>

        <C.LabelInputAlign>
          <C.Label>Preço</C.Label>
          <C.Input
            type="number"
            {...register("price")}
            defaultValue={product.price}
          />
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
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Categorias"
                  defaultValue={product.category}
                />
              );
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message} </ErrorMessage>
        </C.LabelInputAlign>

        <C.ContainerInput>
          <input
            type="checkbox"
            {...register("offer")}
            defaultChecked={product.offer}
          />
          <C.Label>Produto em oferta ?</C.Label>
        </C.ContainerInput>
        <C.ButtonAdd>Editar produto</C.ButtonAdd>
      </form>
    </C.Container>
  );
}
