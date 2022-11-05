import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

interface BoxType {
  title?: string;
  children?: JSX.Element | JSX.Element[];
  tabs?: JSX.Element | JSX.Element[];
  rightFrame: keyof typeof imagesKey;
}
export const Box = ({ children, rightFrame, title, tabs }: BoxType) => {
  return (
    <div className="bg-white w-full rounded-3xl py-14 px-20 h-[700px] overflow-hidden mb-6">
      {tabs}
      <div className="mb-20">
        <p className="text-3xl font-medium text-purple-P1">{title}</p>
      </div>

      <div className="flex justify-between">
        <div className="w-2/3">
          <div>{children}</div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img src={imageBuilder(rightFrame)} alt="" />
        </div>
      </div>
    </div>
  );
};
