import { useEffect } from "react";
import * as C from "./styles";
import api from "../../services/api";


export default function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("categories");
      console.log(response);
    }
    loadCategories()
  }, []);
  return (
    <C.Container>
      <H1>Categoria</H1>
    </C.Container>
  );
}
