import { SHERO_PRODUCT, LANGUAGE_EN } from "~/data/constants";
import type { configType } from "~/types";

export const CONFIG: configType = {
  imageUrlPrefix: "/images/",
  product: SHERO_PRODUCT,
  language: LANGUAGE_EN,
  disableTheme: ["routes/diaries/$objectId"],
};
export default CONFIG;
