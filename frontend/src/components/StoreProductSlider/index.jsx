import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import shoppingbag from "../../assets/icons/shopping-bag.svg";
import quicklook from "../../assets/icons/eye.svg";

import { Pagination, Navigation } from "swiper";
import "./store_productSlider.css";
import "swiper/css/bundle";

import StoreProductCard from "../common/StoreProductCard";
import StoreSections from "../common/StoreSections";
import StoreLoader from "../StoreMessages/StoreLoader";
import StoreMessage from "../StoreMessages/StoreMessage";

const StoreProductSlider = ({ products, loading, error  }) => {
  return (
    <section className="slider-container" id="sale">
      <StoreSections
         title="Produtos em promoção"
         subtitle="Todos os produtos com 10% off"
      />

      <div className="slider-swiper store__container">
          {loading ? (
            <div className="store__grid">
              <StoreLoader/>
              <StoreLoader/>
              <StoreLoader/>
              <StoreLoader/>
            </div>
          ): error ? (
            <StoreMessage>{error}</StoreMessage>
          ): (
          <Swiper
            className="slider-swiper__element"
            slidesPerView={4} spaceBetween={20}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            loopFillGroupWithBlank={true}
            pagination={{ clickable: true}}
            navigation={true} modules={[Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20},
              578: { slidesPerView: 2, spaceBetween: 20},
              640: { slidesPerView: 2, spaceBetween: 20},
              992: { slidesPerView: 3, spaceBetween: 30},
              1240:{ slidesPerView: 4, spaceBetween: 20},
            }}
          >
            {products.map(
              (product) =>
                product.price < 20 && (
                  <SwiperSlide key={product._id}>
                    <StoreProductCard
                      productImage={product.image} productPrice={product.price}
                      productName={product.name} eyeIcon={quicklook}
                      id={product._id} bagIcon={shoppingbag}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
          )}
      </div>
    </section>
  );
};

export default StoreProductSlider;
