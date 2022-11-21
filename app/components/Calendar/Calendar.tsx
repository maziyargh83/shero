import moment from "moment-jalaali";
import { getDateConfig } from "~/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactCalendar from "react-calendar";

interface CalendarProps {
  onChange: (date: Date) => void;
  value?: Date;
}
export const Calendar = ({ onChange = () => {}, value }: CalendarProps) => {
  return (
    <ReactCalendar
      maxDetail="month"
      minDetail="month"
      navigationLabel={({ date }) =>
        moment(date).format(getDateConfig("monthName"))
      }
      formatShortWeekday={(_, date) =>
        moment(date).format(getDateConfig("dayName"))[0]
      }
      next2Label=""
      prev2Label=""
      nextLabel={<FiChevronRight />}
      prevLabel={<FiChevronLeft />}
      onChange={onChange}
      value={value}
    />
  );
};
