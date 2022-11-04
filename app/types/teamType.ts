import type { imagesKey } from "~/types/imageTypes";

export interface teamType {
  name: string;
  role: string;
  img: keyof typeof imagesKey;
}
