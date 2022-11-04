import classNames from "classnames";
import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

export const ImageBlob = ({
  img,
  size,
  blobs,
  clipPath,
}: {
  img: keyof typeof imagesKey;
  size?: number | string;
  blobs: JSX.Element[];
  clipPath?: boolean;
}) => {
  return (
    <div className="relative">
      <img
        className={classNames("", {
          "clip-path": !!clipPath,
        })}
        src={imageBuilder(img)}
        alt=""
      />
      {blobs}
    </div>
  );
};
