import moment from "moment-jalaali";
import { getDateConfig } from "~/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactCalendar from "react-calendar";
import { CalendarTileProp } from "~/types";
import { isShero } from "~/utils";
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
      locale={isShero() ? "en" : "fa"}
      tileContent={CalendarTileProp}
      nextLabel={isShero() ? <FiChevronRight /> : <FiChevronLeft />}
      prevLabel={isShero() ? <FiChevronLeft /> : <FiChevronRight />}
      onChange={onChange}
      value={value}
    />
  );
};
