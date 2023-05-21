import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css/bundle";
import StoreSections from "../common/StoreSections";
import { comments } from "../../data";
import "./store_usercomments.css";

const index = () => {
  return (
    <div className="users-comments store__container">
      <StoreSections title="O que dizem sobre nós" subtitle="Depoimentos" />
      <div className="comments-slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          cssMode={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        >
          {comments.map((comment, i) => (
            <SwiperSlide key={i}>
              <article className="user-comment">
                  <img
                     className="user-comment__img"
                     src={comment.userImg}
                     alt={comment.name}
                     title={comment.name}
                  />
                  <span className="user-comment__rating">
                      {comment.stars}
                  </span>
                  <blockquote className="user-comment__content">
                     <q>{comment.quote}</q>
                  </blockquote>
                  <p className="user-comment__data">
                     {comment.name} - <small>{comment.date}</small>
                  </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default index;
