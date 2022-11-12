import { TrackingIcon } from "~/components/Icons/Home/TrackingIcon";

export const DatePicker = () => {
  return (
    <div className="flex cursor-pointer bg-white items-center w-80 h-24 px-9 rounded-3xl mt-8 ">
      <TrackingIcon color="#FF6B4F" size={27} />
      <span className="ml-4 text-2xl font-bold text-purple-P1">Pick Date</span>
    </div>
  );
};
