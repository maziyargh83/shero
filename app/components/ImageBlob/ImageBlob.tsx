import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

export const ImageBlob = ({
  img,
  size,
  blobs,
}: {
  img: keyof typeof imagesKey;
  size?: number | string;
  blobs: JSX.Element[];
}) => {
  return (
    <div className="relative">
      <img src={imageBuilder(img)} alt="" />
      {blobs}
    </div>
  );
};
