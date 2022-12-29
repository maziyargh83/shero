import moment from "moment-jalaali";
import { useCallback, useMemo } from "react";
import type { PregnancyResultType } from "~/types";
import { imageBuilder } from "~/utils";
export const PregnancyProgress = ({
  date,

  week,
}: PregnancyResultType & { date: Date }) => {
  const precent = useCallback(
    (d = 1) => {
      return (moment().diff(moment(date), "day") / (40 * 7)) * 100;
    },
    [date]
  );
  return (
    <div className="relative">
      <div className="flex space-x-3">
        <Progress first week={week} percent={precent(3)} />
        <Progress week={week} percent={precent(3) >= 98 ? precent(2) : 0} />
        <Progress week={week} percent={precent(2) >= 98 ? precent(1) : 0} />
      </div>
    </div>
  );
};
const Progress = ({
  percent = 0,
  week,
  first = false,
}: {
  percent?: number;
  week: number;
  first?: boolean;
}) => {
  return (
    <div className="relative h-4 w-1/3">
      {((percent > 0 && percent < 100) || (first && percent < 100)) && (
        <Marker week={week} position={percent} />
      )}
      <div className=" bg-white rounded-full  h-full w-full overflow-hidden">
        <div
          className="h-full bg-green-G2  rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
const Marker = ({ position, week }: { position: number; week: number }) => {
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
        <p className="text-2xl font-normal text-white">{week}</p>
        <p className="text-2xl font-normal text-white">week</p>
      </div>
    </div>
  );
};
