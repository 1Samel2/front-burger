import { useEffect, useRef, useState } from "react";
import * as C from "./styles";
import api from "../../services/api";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

import Xbacon from "../../assets/hamburguer.png";
import Suco from "../../assets/suco.png";
import Xbac from "../../assets/batata.png";
import Xbaco from "../../assets/panqueca.png";
import Xbacuo from "../../assets/panqueca.png";

export default function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("categories");
      console.log(response);
    }
    loadCategories();
  }, []);
  return (
    <C.Container>
      <C.H1>Categorias</C.H1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
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
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Xbacon} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>

        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Suco} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>

        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Xbaco} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>

        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Xbac} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>

        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Xbacuo} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>
      </Swiper>
      <C.H1>Ofertas</C.H1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
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
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Xbacon} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>

        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Suco} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>

        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Xbaco} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>

        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Xbac} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>

        <SwiperSlide>
          <C.BoxOfCategory>
            <img src={Xbacuo} alt=""></img>
            <button type="button">Hamburguer</button>
          </C.BoxOfCategory>
        </SwiperSlide>
      </Swiper>
    </C.Container>
  );
}
