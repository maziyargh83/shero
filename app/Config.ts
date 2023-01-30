import {
  SHERO_PRODUCT,
  LANGUAGE_EN,
  LANGUAGE_FA,
  LUNA_PRODUCT,
} from "~/data/constants";
import type { configType } from "~/types";

export const CONFIG: configType = {
  imageUrlPrefix: "/images/",
  product: SHERO_PRODUCT,
  language: LANGUAGE_EN,
  disableTheme: ["routes/diaries/$objectId"],
};
export default CONFIG;
