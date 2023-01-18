import { FiStar } from "react-icons/fi";
import type { commentType } from "~/types";
import { imageBuilder } from "~/utils";
import { t } from "~/utils";
export const Comment = ({ message, name, img }: commentType) => {
  return (
    <div className="p-6 bg-white rounded-3xl h-56">
      <div className="flex items-center">
        <div className="w-1/4 mr-2">
          <img className="w-20 h-20" src={imageBuilder(img)} alt="" />
        </div>
        <div className="flex-1">
          <p className="text-xs md:text-base font-medium text-gray-G1">
            {t(message)}
          </p>
        </div>
      </div>
      <div className="flex  flex-wrap justify-between mt-9 items-center">
        <div className="text-gray-G5 text-xs md:text-xl  font-medium">
          {t(name)}
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
