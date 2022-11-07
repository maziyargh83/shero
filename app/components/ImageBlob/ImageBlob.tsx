import classNames from "classnames";
import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

export const ImageBlob = ({
  img,
  size,
  blobs,
  clipPath,
  className,
  icon,
  containerClassName,
  textComponent,
  notRelative = false,
}: {
  img?: keyof typeof imagesKey;
  size?: number | string;
  blobs: JSX.Element[];
  icon?: JSX.Element;
  textComponent?: JSX.Element;
  clipPath?: boolean;
  className?: string;
  containerClassName?: string;
  notRelative?: boolean;
}) => {
  return (
    <div
      className={classNames("", {
        [containerClassName!]: !!containerClassName,
        relative: !notRelative,
      })}
    >
      {img && (
        <img
          className={classNames("", {
            "clip-path": !!clipPath,
            [className!]: !!className,
          })}
          src={imageBuilder(img)}
          alt=""
        />
      )}
      {icon}
      {textComponent}
      {blobs}
    </div>
  );
};
