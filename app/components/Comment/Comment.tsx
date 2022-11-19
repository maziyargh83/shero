import { FiStar } from "react-icons/fi";
import type { commentType } from "~/types";
import { imageBuilder } from "~/utils";

export const Comment = ({}: commentType) => {
  return (
    <div className="p-6 bg-white rounded-3xl mt-32">
      <div className="flex items-center">
        <div className="w-1/4 mr-2">
          <img src={imageBuilder("PROFILE1")} />
        </div>
        <div className="flex-1">
          <p className="text-xs md:text-base font-medium text-gray-G1">
            It's a very good application 👌🏻 every woman really needs this
            software, I'm the one who is very satisfied 😍 I suggest you to
            install it 🙂 give it five stars 🔥
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-9 items-center">
        <div className="text-gray-G5 text-xs md:text-xl  font-medium">
          Fa****mi
        </div>
        <div className="flex">
          <FiStar fill="#F1BD37" size={30} stroke="0" />
          <FiStar fill="#F1BD37" size={30} stroke="0" />
          <FiStar fill="#F1BD37" size={30} stroke="0" />
          <FiStar fill="#F1BD37" size={30} stroke="0" />
          <FiStar fill="#F1BD37" size={30} stroke="0" />
        </div>
      </div>
    </div>
  );
};
