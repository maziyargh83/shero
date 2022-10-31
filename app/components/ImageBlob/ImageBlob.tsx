import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

export const ImageBlob = ({
  img,
  blobs,
}: {
  img: keyof typeof imagesKey;
  blobs: JSX.Element[];
}) => {
  return (
    <div className="relative">
      <img src={imageBuilder(img)} alt="" />
      {blobs}
    </div>
  );
};
