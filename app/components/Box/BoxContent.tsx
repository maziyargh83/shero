import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

interface BoxContentProps {
  children?: JSX.Element | JSX.Element[];
  image?: keyof typeof imagesKey;
}
export const BoxContent = ({ children, image }: BoxContentProps) => {
  return (
    <div className="flex justify-between h-full  w-full flex-wrap">
      <div className="md:w-2/3 w-full">
        <div>{children}</div>
      </div>
      <div className="md:w-1/3 mt-10 md:h-full md:mt-0 w-full flex justify-center items-end">
        {!!image && <img src={imageBuilder(image)} alt="" />}
      </div>
    </div>
  );
};
