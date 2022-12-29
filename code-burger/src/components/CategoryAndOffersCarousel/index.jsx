import { useEffect, useRef, useState } from "react";
import * as C from "./styles";
import api from "../../services/api";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import formatCurrency from "../../utils/formatCurrency";

export default function CategoryCarousel() {
  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get("products");
      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });
      setOffers(onlyOffers);
    }
    loadOffers();
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
                <button type="button">{category.name}</button>
              </C.BoxOfCategory>
            </SwiperSlide>
          ))}
      </Swiper>
      <C.H1>Ofertas</C.H1>
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
        {offers &&
          offers.map((ofertas) => (
            <SwiperSlide key={ofertas.id}>
              <C.BoxOfCategory>
                <img src={ofertas.url} alt="foto das ofertas"></img>
                <p>
                  {ofertas.name}
                  <span>{ofertas.formatedPrice}</span>
                </p>
                <button type="button">Peça agora</button>
              </C.BoxOfCategory>
            </SwiperSlide>
          ))}
      </Swiper>
    </C.Container>
  );
}
