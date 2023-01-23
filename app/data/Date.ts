import CONFIG from "~/Config";
import type { LANGS } from "~/data/constants";
import type { MomentDateConfig } from "~/types";

export const DateConfig: Record<
  keyof typeof LANGS,
  Record<keyof typeof MomentDateConfig, string>
> = {
  fa: {
    monthName: "jMMM",
    dayName: "dddd",
    defaultDate: "jYYYY/jMM/jDD",
    monthNameWithYear: "jDD jMMMM  jYYYY",
  },
  en: {
    monthName: "MMM",
    dayName: "dddd",
    defaultDate: "YYYY/MM/DD",
    monthNameWithYear: "MMM DD,YYYY",
  },
};

export const getDateConfig = (date: keyof typeof MomentDateConfig): string => {
  return DateConfig[CONFIG.language][date];
};
