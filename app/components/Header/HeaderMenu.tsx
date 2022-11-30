import classNames from "classnames";
import type { headerTypeValue } from "~/types/headerTypes";
import { capitalizeFirstChar, t } from "~/utils";

export const HeaderMenu = (headerData: headerTypeValue) => {
  return (
    <a
      href={headerData.link}
      className={classNames("xl:text-base text-xs  font-medium", {
        [headerData.className!]: headerData.className!!,
      })}
    >
      {capitalizeFirstChar(t(headerData.title))}
    </a>
  );
};
