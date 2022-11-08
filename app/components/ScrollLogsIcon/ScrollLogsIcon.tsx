import {
  SYMPTOM_BELLY,
  SYMPTOM_BODY,
  SYMPTOM_COMMON,
  SYMPTOM_HEAD,
} from "~/data/LogIcon";
import type { languageKeys, LogType } from "~/types";
import { Logs } from "~/components";
import { v4 } from "uuid";
export const ScrollWheel = ({ data }: { data: LogType }) => {
  return (
    <div className="flex px-8 space-x-10 mb-6 overflow-scroll scrollbar-hidden">
      {Object.keys(data).map((key) => {
        return (
          <Logs
            title={key as keyof typeof languageKeys}
            icon={data[key].svg}
            key={v4()}
          />
        );
      })}
    </div>
  );
};
export const ScrollLogsIcon = () => {
  return (
    <div className="relative">
      <div className="absolute h-full hidden xl:block left-0 w-20 top-0 left-gradient-logs" />
      <div className="absolute h-full hidden xl:block right-0 w-20 top-0 right-gradient-logs -rotate-180" />
      <ScrollWheel data={SYMPTOM_BELLY} />
      <ScrollWheel data={SYMPTOM_BODY} />
      <ScrollWheel data={SYMPTOM_COMMON} />
      {/* <ScrollWheel data={SYMPTOM_HEAD} /> */}
    </div>
  );
};
