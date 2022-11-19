import { Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Comment } from "~/components/Comment/Comment";
import type { commentType } from "~/types";
import { v4 } from "uuid";

export const CommentSlider = ({
  data = [1, 2, 3, 4],
}: {
  data: commentType[];
}) => {
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <div className="comment-slider">
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
        {data.map((slideContent, index) => (
          <SwiperSlide key={v4()} virtualIndex={index}>
            <Comment {...slideContent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
