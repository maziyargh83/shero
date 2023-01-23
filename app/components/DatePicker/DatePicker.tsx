import { TrackingIcon } from "~/components/Icons/Home/TrackingIcon";
import { useRef, useState } from "react";
import { Calendar } from "~/components/Calendar";
import moment from "moment-jalaali";
import { getDateConfig } from "~/data";
import { useOutsideClick } from "~/hook";
import { t } from "~/utils";
interface DatePickerProps {
  onChange: (date: Date) => void;
  value?: Date;
  maxDate?: Date;
}
export const DatePicker = ({
  onChange = () => {},
  value,
  maxDate,
}: DatePickerProps) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const firstRef = useRef(null);

  useOutsideClick([firstRef], () => setOpenCalendar(false));
  return (
    <div className="relative">
      <div
        onClick={() => setOpenCalendar((prev) => !prev)}
        className="flex  cursor-pointer bg-white items-center p-8 rounded-3xl mt-8 "
      >
        <TrackingIcon color="#FF6B4F" size={27} />
        <span className="rtl:mr-4 ltr:ml-4 text-2xl font-bold text-purple-P1">
          {value
            ? moment(value).format(getDateConfig("defaultDate"))
            : t("CHOICE")}
        </span>
      </div>
      {openCalendar && (
        <div
          ref={firstRef}
          className="absolute z-50 top-[110%]  w-80 left-[50%]  -translate-x-[50%]"
        >
          <Calendar
            maxDate={maxDate}
            value={value}
            onChange={(d) => {
              onChange(d);
              setOpenCalendar(false);
            }}
          />
        </div>
      )}
    </div>
  );
};
