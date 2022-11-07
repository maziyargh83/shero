import type { languageKeys } from "~/types/langKeys";

export type headerTypeValue = {
  title: keyof typeof languageKeys;
  link: string;
  className?: string;
};
export type headerType = Array<headerTypeValue>;
