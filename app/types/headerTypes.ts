import type { languageKeys } from "~/types/langKeys";
import type { configType } from "~/types";
export type headerTypeValue = {
  title: keyof typeof languageKeys;
  link: string;
  className?: string;
  extra?: boolean;
  extra_mobile?: boolean;
  condition?: configType["product"];
};
export type headerType = Array<headerTypeValue>;
