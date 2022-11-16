import classNames from "classnames";
import type { headerTypeValue } from "~/types/headerTypes";
import { capitalizeFirstChar, t } from "~/utils";

export const HeaderMenu = (headerData: headerTypeValue) => {
  return (
    <a
      href={headerData.link}
      className={classNames("text-base text-gray-G1 font-medium", {
        [headerData.className!]: headerData.className!!,
      })}
    >
      {capitalizeFirstChar(t(headerData.title))}
    </a>
  );
};
