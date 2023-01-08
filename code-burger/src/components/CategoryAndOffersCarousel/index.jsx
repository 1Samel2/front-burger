import { useEffect, useState } from "react";
import * as C from "./styles";
import api from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

 

  return (
    <C.Container>
      <C.H1>Categorias</C.H1>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          568: { slidesPerView: 5 },
        }}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categories &&
          categories.map((category) => (
            <SwiperSlide key={category.id}>
              <C.BoxOfCategory>
                <img src={category.url} alt="foto da categoria"></img>
                <C.Button
                  to={{
                    pathname: "/products",
                    state: { categoryId: category.id },
                  }}
                >
                  {category.name}
                </C.Button>
              </C.BoxOfCategory>
            </SwiperSlide>
          ))}
      </Swiper>
    </C.Container>
  );
}
