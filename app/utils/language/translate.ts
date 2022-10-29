import CONFIG from "~/Config";
import type { languageKeys } from "~/types";
import FA from "./fa";
import EN from "./en";
const getLang = () => {
  if (CONFIG.language == "en") return EN;
  return FA;
};
const translate = (key: keyof typeof languageKeys): string => {
  const LANG = getLang();
  const data = LANG[key];

  return data;
};

export { translate as t };
export default translate;
