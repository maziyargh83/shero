import type { languageKeys } from "~/types/langKeys";

export type headerTypeValue = {
  title: keyof typeof languageKeys;
  link: string;
  className?: string;
  extra?: boolean;
};
export type headerType = Array<headerTypeValue>;
