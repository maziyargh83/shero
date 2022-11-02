import type { languageKeys } from "~/types";
import { t } from "~/utils";

interface LogsType {
  icon: () => JSX.Element;
  title: keyof typeof languageKeys;
}
export const Logs = ({ icon: Icon, title }: LogsType) => {
  return (
    <div className="inline-flex items-center bg-white rounded-full p-2 ">
      <div className="bg-purple-P5 rounded-[100px] mr-2">
        <Icon />
      </div>
      <span className="text-gray-G5 text-lg font-medium whitespace-nowrap">
        {t(title)}
      </span>
    </div>
  );
};
