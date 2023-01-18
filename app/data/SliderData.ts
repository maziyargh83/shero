import type { imagesKey, languageKeys } from "~/types";

export interface SliderDataType {
  title: keyof typeof languageKeys;
  description: keyof typeof languageKeys;
  img: keyof typeof imagesKey;
  color: string;
  color2: string;
}
export const SliderData: SliderDataType[] = [
  {
    title: "SLIDER_1_TITLE",
    description: "SLIDER_1_DESCRIPTION",
    img: "SLIDER_1",
    color: "#FFEBEB",
    color2: "#FFFFFF",
  },
  {
    title: "SLIDER_2_TITLE",
    description: "SLIDER_2_DESCRIPTION",
    img: "SLIDER_2",
    color: "#DBFAE4",
    color2: "#FFFFFF",
  },
  {
    title: "SLIDER_3_TITLE",
    description: "SLIDER_3_DESCRIPTION",
    img: "SLIDER_3",
    color: "#EAEBEE",
    color2: "#FFFFFF",
  },
];
