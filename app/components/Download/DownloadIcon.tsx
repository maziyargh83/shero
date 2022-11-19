import classNames from "classnames";
import { FaStar } from "react-icons/fa";
import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

export const DownloadIcon = ({
  rate,
  image,
  className,
}: {
  rate?: string;
  image: keyof typeof imagesKey;
  className?: string;
}) => {
  return (
    <div
      className={classNames("", {
        [className!]: !!className,
      })}
    >
      {!!rate && (
        <div className="inline-flex items-center space-x-2">
          <FaStar color="#FFBA07" />
          <span className="text-gray-G4 text-sm font-medium">{rate}</span>
        </div>
      )}
      <img src={imageBuilder(image)} className={"mt-2"} alt="download icon" />
    </div>
  );
};
