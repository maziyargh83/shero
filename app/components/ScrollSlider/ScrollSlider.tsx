import { Blob } from "~/components";
import { imageBuilder } from "~/utils";

export const ScrollSlider = () => {
  return (
    <div className="mt-32 hidden xl:flex h-screen  justify-center items-center">
      <div className="w-full h-[90%] bg-purple-P2 rounded-3xl flex px-16">
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
          <div className="flex justify-center items-center h-full">
            <div className="relative inline-flex justify-center items-center">
              <img
                src={imageBuilder("SLIDER_1")}
                className="z-40 relative"
                alt=""
              />
              <Blob
                size={670}
                className="absolute z-10 top-[50%] opacity-60 -translate-y-[50%] rotate-45"
                color="#FFFFFF"
              />
              <Blob
                type={2}
                size={670}
                className="absolute -translate-y-[50%] z-20 top-[50%]"
                color="#FFEBEB"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
