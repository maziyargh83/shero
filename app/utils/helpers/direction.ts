import { isShero } from "~/utils/helpers/product";

export const getDirection = () => {
  return isShero() ? "ltr" : "rtl";
};
