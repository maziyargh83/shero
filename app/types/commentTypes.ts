import type { imagesKey } from "~/types/imageTypes";
import type { languageKeys } from "~/types/langKeys";

export interface commentType {
  img: keyof typeof imagesKey;
  name: keyof typeof languageKeys;
  message: keyof typeof languageKeys;
}
