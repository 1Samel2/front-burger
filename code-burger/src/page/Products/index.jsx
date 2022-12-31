import React, { useEffect, useState } from "react";
import * as C from "./styles";
import api from "../../services/api";
import { CardProduct } from "../../components/CardProduct";
import formatCurrency from "../../utils/formatCurrency";
import Capa from "../../assets/capa-burger-home.svg";

export const Products = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [products, setProducts] = useState([]);

  console.log(categories);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      const newCategories = [{ id: 0, name: "Todas" }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get("products");

      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) };
      });
      setProducts(newProducts);
    }

    loadProducts();
    loadCategories();
  }, []);

  return (
    <C.Container>
      <C.ProductsImg src={Capa} alt="logo categorias" />
      <C.CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <C.CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </C.CategoryButton>
          ))}
      </C.CategoriesMenu>

      <C.ProductsContainer>
        {products &&
          products.map((product) => (
            <CardProduct key={product} product={product} />
          ))}
      </C.ProductsContainer>
    </C.Container>
  );
};
