import { useEffect, useState } from "react";
import * as C from "./styles";
import api from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import formatCurrency from "../../utils/formatCurrency";
import { useHistory } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);
  const { putProductInCart } = useCart();
  const { push } = useHistory();

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
          offers.map((product) => (
            <SwiperSlide key={product.id}>
              <C.BoxOfCategory>
                <img src={product.url} alt="foto das product"></img>
                <p>
                  {product.name}
                  <span>{product.formatedPrice}</span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    putProductInCart(product)
                    push('/cart')
                }}
                >
                  Peça agora
                </button>
              </C.BoxOfCategory>
            </SwiperSlide>
          ))}
      </Swiper>
    </C.Container>
  );
}
