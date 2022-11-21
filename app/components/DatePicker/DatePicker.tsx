import { TrackingIcon } from "~/components/Icons/Home/TrackingIcon";
import { useState } from "react";
import { Calendar } from "~/components/Calendar";
import moment from "moment-jalaali";
import { getDateConfig } from "~/data";
interface DatePickerProps {
  onChange: (date: Date) => void;
  value?: Date;
}
export const DatePicker = ({ onChange = () => {}, value }: DatePickerProps) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpenCalendar((prev) => !prev)}
        className="flex  cursor-pointer bg-white items-center p-8 rounded-3xl mt-8 "
      >
        <TrackingIcon color="#FF6B4F" size={27} />
        <span className="ml-4 text-2xl font-bold text-purple-P1">
          {value
            ? moment(value).format(getDateConfig("defaultDate"))
            : "Choose date"}
        </span>
      </div>
      {openCalendar && (
        <div className="absolute top-[110%]  w-80 left-[50%]  -translate-x-[50%]">
          <Calendar value={value} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
