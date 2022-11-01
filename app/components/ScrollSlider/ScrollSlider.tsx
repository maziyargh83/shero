import { Blob2 } from "~/components/Icons";

export const ScrollSlider = () => {
  return (
    <div className="mt-32 h-screen flex justify-center items-center">
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
          <Blob2 color="#FFEBEB" />
          <Blob2 color="#FFFFFF" />
        </div>
      </div>
    </div>
  );
};
