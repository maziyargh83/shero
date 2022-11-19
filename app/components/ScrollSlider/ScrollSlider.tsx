import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Blob } from "~/components";
import { useWindowSize } from "~/hook";
import { imageBuilder } from "~/utils";

export const ScrollSlider = () => {
  const { height } = useWindowSize();
  if (!height) return <Fragment />;
  return (
    <div className="mt-32 hidden xl:flex h-screen  justify-center items-center scrollSlide">
      <div className="w-full h-[90%] bg-purple-P2 flex items-center rounded-3xl ">
        <Swiper slidesPerView={1} height={height}>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

/*

*/
const Slide = () => {
  return (
    <div className="w-full h-full flex px-16">
      <div className="w-5/12 flex justify-center items-center">
        <div>
          <h3 className="text-white text-4xl font-bold">
            Menstrual calendar 🗓
          </h3>
          <p className="text-white text-2xl font-medium mt-6">
            Record period information and predict ovulation time
          </p>
        </div>
      </div>
      <div className="w-7/12">
        <div className="flex justify-center items-center w-full h-full">
          <div className="relative inline-flex w-full h-full justify-center items-center">
            <img
              src={imageBuilder("SLIDER_1")}
              className="z-40   absolute top-[50%]  -translate-y-[50%] "
              alt=""
            />
            <Blob
              size={"100%"}
              className="absolute z-10 top-[50%] opacity-60 -translate-y-[50%] rotate-45 w-full h-full"
              color="#FFFFFF"
            />
            <Blob
              type={2}
              size={"100%"}
              className="absolute -translate-y-[50%] z-20 top-[50%]  w-full h-full"
              color="#FFEBEB"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
