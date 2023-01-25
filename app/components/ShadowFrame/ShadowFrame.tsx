import classNames from "classnames";
import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

export const ShadowFrame = ({
  img,
  maxW = 250,
  maxH = 500,
  imgWidth,
  imgMinW,
  imgMaxW,
  className,
  transform = "140px",
}: {
  img: keyof typeof imagesKey;
  maxW?: number;
  imgWidth?: number;
  maxH?: number;
  imgMinW?: string;
  imgMaxW?: string;
  className?: string;
  transform?: string;
}) => {
  return (
    <div
      className={classNames("relative", { [className!]: !!className })}
      style={{
        maxWidth: maxW,
        maxHeight: maxH,
      }}
    >
      <img
        src={imageBuilder(img)}
        className="relative top-0 left-0"
        style={{
          minWidth: imgMinW,
          maxWidth: imgMaxW,
          width: imgWidth,
          transform: `translateX(${transform})`,
        }}
        alt=""
      />
    </div>
  );
};
