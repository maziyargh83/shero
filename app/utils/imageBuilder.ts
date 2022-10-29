import CONFIG from "~/Config";
import { images } from "~/data";
import type { imagesKey } from "~/types";
export const imageBuilder = (key: keyof typeof imagesKey) => {
  const url = images[key].url;
  if (typeof url === "object" && !Array.isArray(url) && url !== null) {
    return CONFIG.imageUrlPrefix + url[CONFIG.product];
  }
  return CONFIG.imageUrlPrefix + url;
};
