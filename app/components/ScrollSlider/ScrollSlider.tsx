import { Fragment } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";
import { Blob } from "~/components";
import { SliderData } from "~/data/SliderData";
import { useWindowSize } from "~/hook";
import { imageBuilder } from "~/utils";
import type { SliderDataType } from "~/data/SliderData";
import { t } from "~/utils";
export const ScrollSlider = () => {
  const { height } = useWindowSize();
  if (!height) return <Fragment />;
  return (
    <div className="mt-32 hidden xl:flex h-screen  justify-center items-center scrollSlide">
      <div className="w-full h-[90%] bg-purple-P2 flex items-center rounded-3xl ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
          }}
          slidesPerView={1}
          height={height}
        >
          {SliderData.map((data) => {
            return (
              <SwiperSlide key={v4()}>
                <Slide {...data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

/*

*/
const Slide = ({ title, description, img, color, color2 }: SliderDataType) => {
  return (
    <div className="w-full h-full flex px-16">
      <div className="w-5/12 flex justify-center items-center">
        <div>
          <h3 className="text-white text-4xl font-bold">{t(title)}</h3>
          <p className="text-white text-2xl font-medium mt-6">
            {t(description)}
          </p>
        </div>
      </div>
      <div className="w-7/12">
        <div className="flex justify-center items-center w-full h-full">
          <div className="relative inline-flex w-full h-full justify-center items-center">
            <img
              src={imageBuilder(img)}
              className="z-40 w-[60%] xl:w-[70%]  absolute top-[50%]  -translate-y-[50%] "
              alt=""
            />
            <Blob
              size={"100%"}
              className="absolute z-10 top-[50%] opacity-60 -translate-y-[50%] rotate-45 w-full h-full"
              color={color}
            />
            <Blob
              type={2}
              size={"100%"}
              color={color2}
              className="absolute -translate-y-[50%] z-20 top-[50%]  w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
