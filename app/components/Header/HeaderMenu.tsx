import type { headerTypeValue } from "~/types/headerTypes";
import { capitalizeFirstChar, t } from "~/utils";

export const HeaderMenu = (headerData: headerTypeValue) => {
  return (
    <a href={headerData.link} className="text-base font-medium">
      {capitalizeFirstChar(t(headerData.title))}
    </a>
  );
};
