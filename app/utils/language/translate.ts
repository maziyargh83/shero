import CONFIG from "~/Config";
import type { languageKeys } from "~/types";
import FA from "./fa";
import EN from "./en";
const getLang = () => {
  if (CONFIG.language == "en") return EN;
  return FA;
};
const translate = (key: keyof typeof languageKeys, args?: any): string => {
  const LANG = getLang();
  let data = LANG[key];
  if (!data || data.length == 0) return key;
  if (typeof data == "string") return data;

  const result = data(args);
  return result;
};

export { translate as t };
export default translate;
