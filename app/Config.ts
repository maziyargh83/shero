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
  email: "support@Shero.info",
  instagram: "@Shero.application",
  instagramUrl: "https://www.instagram.com/sheroapp/",
};
export default CONFIG;
