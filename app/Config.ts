import {
  SHERO_PRODUCT,
  LANGUAGE_EN,
  LANGUAGE_FA,
  LUNA_PRODUCT,
} from "~/data/constants";
import type { configType } from "~/types";

export const CONFIG: configType = {
  imageUrlPrefix: "/images/",
  product: LUNA_PRODUCT,
  language: LANGUAGE_FA,
  disableTheme: ["routes/diaries/$objectId"],
};
export default CONFIG;
