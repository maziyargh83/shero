import CONFIG from "~/Config";
import { SHERO_PRODUCT } from "~/data";

export const isShero = () => {
  return CONFIG.product === SHERO_PRODUCT;
};
