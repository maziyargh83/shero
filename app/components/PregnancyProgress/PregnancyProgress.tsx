import moment from "moment-jalaali";
import type { PregnancyResultType } from "~/types";
import { imageBuilder } from "~/utils";
const yearDays = 280;
export const PregnancyProgress = ({
  date,
  remainDays,
}: PregnancyResultType & { date: Date }) => {
  const getDatePercent = (years: number, days: number) => {
    return years * (moment().diff(moment(date), "day") / days);
  };

  return (
    <div className="relative">
      <Marker position={getDatePercent(yearDays, remainDays)} />
      <div className="flex space-x-3">
        <Progress percent={getDatePercent(yearDays / 3, remainDays)} />
        <Progress percent={getDatePercent(yearDays / 2, remainDays)} />
        <Progress percent={getDatePercent(yearDays, remainDays)} />
      </div>
    </div>
  );
};
const Progress = ({ percent = 0 }: { percent?: number }) => {
  return (
    <div className="h-4 w-1/3 bg-white rounded-full overflow-hidden">
      <div
        className="h-full bg-green-G2  rounded-full"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};
const Marker = ({ position }: { position: number }) => {
  console.log(position);

  return (
    <div
      className="w-[95px] h-[120px] absolute bottom-[100%] -translate-x-[50%] bg-red"
      style={{
        left: `${position}%`,
      }}
    >
      <img
        src={imageBuilder("MARKER")}
        className="absolute top-0 -z-10"
        alt=""
      />
      <div className="text-center p-2">
        <p className="text-2xl font-normal text-white">8</p>
        <p className="text-2xl font-normal text-white">week</p>
      </div>
    </div>
  );
};
