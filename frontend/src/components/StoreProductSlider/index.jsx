import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StoreProductCard from "../common/StoreProductCard";
import shoppingbag from "../../assets/icons/shopping-bag.svg";
import quicklook from "../../assets/icons/eye.svg";
import StoreSections from "../common/StoreSections";
import { Pagination, Navigation } from "swiper";
import "./store_productSlider.css";
import "swiper/css/bundle";

const StoreProductSlider = ({ products }) => {
  return (
    <section className="store__grid-container" id="sale">
      <StoreSections
        title="Produtos em promoção"
        subtitle="Todos os produtos com 10% off"
      />

      <div className="store__slider store__container">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          cssMode={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            578: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="store__slider--swiper"
        >
          {products.map(
            (product) =>
              product.price < 20 && (
                <SwiperSlide key={product._id}>
                  <StoreProductCard
                    productImage={product.img}
                    productPrice={product.price}
                    productName={product.name}
                    id={product._id}
                    bagIcon={shoppingbag}
                    eyeIcon={quicklook}
                  />
                </SwiperSlide>
              )
          )}
          {/* {products.map((product, i) => ( 
            <SwiperSlide key={i}>
              <StoreProductCard
                productImage={product.img}
                productPrice={product.price}
                productName={product.name}
                id={product._id}
                bagIcon={shoppingbag}
                eyeIcon={quicklook}
              />
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </section>
  );
};

export default StoreProductSlider;
