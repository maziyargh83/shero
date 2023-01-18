import { Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Comment } from "~/components/Comment/Comment";
import type { commentType } from "~/types";
import { v4 } from "uuid";
import { CommentData } from "~/data/CommentData";

export const CommentSlider = () => {
  return (
    <div className="comment-slider mt-10">
      <Swiper
        modules={[Virtual, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        height={300}
        virtual
      >
        {CommentData.map((slideContent, index) => (
          <SwiperSlide key={v4()} virtualIndex={index}>
            <Comment {...slideContent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
