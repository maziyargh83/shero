import type { Moment } from "moment-jalaali";
import { isShero } from "~/utils/helpers/product";

export const getDay = (data: Moment) => {
  return isShero() ? data.date() : data.jDate();
};
export const getMonth = (data: Moment) => {
  return isShero() ? data.month() : data.jMonth();
};
export const getYear = (data: Moment) => {
  return isShero() ? data.year() : data.jYear();
};
