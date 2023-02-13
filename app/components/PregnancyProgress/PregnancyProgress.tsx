import moment from "moment-jalaali";
import { Fragment, useMemo } from "react";
import type { PregnancyResultType } from "~/types";
import { imageBuilder } from "~/utils";
import { t } from "~/utils";
export const PregnancyProgress = ({
  date,

  week,
}: PregnancyResultType & { date: Date }) => {
  const precent = useMemo(() => {
    return (moment().diff(moment(date), "day") / (40 * 7)) * 100;
  }, [date]);
  console.log(precent);

  return (
    <div className="relative">
      <div className="flex">
        <Progress handleMarker first week={week} percent={precent} />
        <p className="text-xs md:text-base font-normal left-0 md:left-[10%] -bottom-[30px] text-gray-G7 absolute">
          {t("TRIMESTER_1")}
        </p>
        <p className="text-xs md:text-base font-normal left-[50%] -translate-x-[50%] -bottom-[30px] text-gray-G7 absolute">
          {t("TRIMESTER_2")}
        </p>
        <p className="text-xs md:text-base font-normal right-0 md:right-[10%] -bottom-[30px] text-gray-G7 absolute">
          {t("TRIMESTER_3")}
        </p>
      </div>
    </div>
  );
};
const Progress = ({
  percent = 0,
  week,
  first = false,
  handleMarker = false,
}: {
  percent?: number;
  week: number;
  first?: boolean;
  handleMarker?: boolean;
}) => {
  return (
    <div className="relative h-4 w-full">
      {((percent > 0 && percent < 100) || (first && percent < 100)) && (
        <Marker week={week} position={percent} />
      )}
      {handleMarker && (
        <Fragment>
          <div
            className="w-3 h-full absolute top-0 bullet-progress bg-background-light"
            style={{ left: 100 / 3 + "%" }}
          />
          <div
            className="w-3 h-full absolute top-0 bullet-progress bg-background-light"
            style={{ left: (100 / 3) * 2 + "%" }}
          />
        </Fragment>
      )}
      <div
        className=" bg-white rounded-full  h-full w-full overflow-hidden"
        style={{
          direction: "ltr",
        }}
      >
        <div
          className="h-full bg-green-G2 rounded-full"
          style={{ width: `${percent}%`, direction: "ltr" }}
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
        <p className="text-2xl font-normal text-white">{t("week")}</p>
      </div>
    </div>
  );
};
