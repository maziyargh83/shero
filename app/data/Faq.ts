import type { languageKeys } from "~/types";

export interface FaqDataType {
  title: keyof typeof languageKeys;
  description: keyof typeof languageKeys;
  details?: (keyof typeof languageKeys)[];
}
export const FaqData: FaqDataType[] = [
  {
    title: "FAQ_1_TITLE",
    description: "FAQ_1_DESCRIPTION",
  },
  {
    title: "FAQ_2_TITLE",
    description: "FAQ_2_DESCRIPTION",
    details: [
      "FAQ_2_DETAIL_1",
      "FAQ_2_DETAIL_2",
      "FAQ_2_DETAIL_3",
      "FAQ_2_DETAIL_4",
    ],
  },
  {
    title: "FAQ_3_TITLE",
    description: "FAQ_3_DESCRIPTION",
  },
  {
    title: "FAQ_4_TITLE",
    description: "FAQ_4_DESCRIPTION",
  },
  {
    title: "FAQ_5_TITLE",
    description: "FAQ_5_DESCRIPTION",
  },
  {
    title: "FAQ_6_TITLE",
    description: "FAQ_6_DESCRIPTION",
  },
  {
    title: "FAQ_7_TITLE",
    description: "FAQ_7_DESCRIPTION",
  },
];
