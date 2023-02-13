import moment from "moment-jalaali";
import { getDateConfig } from "~/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactCalendar from "react-calendar";
import type { CalendarTileProp } from "~/types";
import { getDay, getMonth, getYear, isShero } from "~/utils";
import { Calendar as DatePicker } from "react-modern-calendar-datepicker";
import type { DayValue } from "react-modern-calendar-datepicker";
import { useMemo } from "react";

if (!isShero()) moment.loadPersian({ dialect: "persian-modern" });

interface CalendarProps {
  onChange?: (date: Date) => void;
  value?: Date;
  maxDate?: Date;
  CalendarTileProp?: CalendarTileProp;
}
export const Calendar = ({
  onChange = () => {},
  value = new Date(),
  maxDate = undefined,
  CalendarTileProp = undefined,
}: CalendarProps) => {
  const migrateDate = (date: Date): DayValue => {
    const _date = moment(date);

    return {
      day: getDay(_date),
      month: getMonth(_date),
      year: getYear(_date),
    };
  };
  const persianDate = useMemo(() => {
    return migrateDate(value);
  }, [value]);
  const changeDate = (data: DayValue) => {
    const date = moment(
      `${data?.year}/${data?.month}/${data?.day}`,
      "jYYYY/jM/jD"
    );

    onChange(date.toDate());
  };
  if (!isShero()) {
    return (
      <DatePicker
        value={persianDate}
        onChange={changeDate}
        shouldHighlightWeekends
        locale="fa"
      />
    );
  }
  return (
    <ReactCalendar
      maxDetail="month"
      minDetail="month"
      maxDate={maxDate}
      navigationLabel={({ date }) =>
        moment(date).format(getDateConfig("monthName"))
      }
      formatShortWeekday={(_, date) =>
        moment(date).format(getDateConfig("dayName"))[0]
      }
      next2Label=""
      prev2Label=""
      // locale={isShero() ? "en" : "fa"}
      // calendarType="Arabic"
      tileContent={CalendarTileProp}
      nextLabel={isShero() ? <FiChevronRight /> : <FiChevronLeft />}
      prevLabel={isShero() ? <FiChevronLeft /> : <FiChevronRight />}
      onChange={onChange}
      value={value}
    />
  );
};
