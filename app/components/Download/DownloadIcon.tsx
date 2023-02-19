import classNames from "classnames";
import { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { market } from "~/data/market";
import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

export const DownloadIcon = ({
  rate,
  image,
  className,
  shadow = false,
}: {
  rate?: string;
  image: keyof typeof imagesKey;
  className?: string;
  shadow?: boolean;
}) => {
  const link = useMemo(() => {
    switch (image) {
      case "GOOGLE_PLAY":
        return market.googlePlay;
      case "BAZAR":
        return market.cafeBazar;
      case "PWA":
        return market.PWA;
      case "APP_STORE":
        return market.appStore;
      default:
        return "#";
    }
  }, [image]);
  return (
    <a
      href={link}
      className={classNames("", {
        [className!]: !!className,
      })}
    >
      {!!rate && (
        <div className="inline-flex items-center ltr:space-x-2">
          <FaStar color="#FFBA07" />
          <span className="text-gray-G4 text-sm font-medium rtl:mx-2">
            {rate}
          </span>
        </div>
      )}
      <img
        src={imageBuilder(image)}
        className={classNames("mt-2", { "download-shadow": shadow })}
        alt="download icon"
      />
    </a>
  );
};
