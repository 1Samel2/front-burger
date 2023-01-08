import React, { useEffect, useState } from "react";
import * as C from "./styles";
import api from "../../services/api";
import { CardProduct } from "../../components";
import formatCurrency from "../../utils/formatCurrency";
import Capa from "../../assets/capa-burger-home.svg";

export function Products({ location: { state } }) {
  let categoryId = 0
  if(state?.categoryId){
    categoryId = state.categoryId
  }
  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryId);

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

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [activeCategory, products]);

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
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </C.ProductsContainer>
    </C.Container>
  );
}
