import type { languageKeys } from "~/types";
import { t } from "~/utils";

interface LogsType {
  icon: () => JSX.Element;
  title: keyof typeof languageKeys;
}
export const Logs = ({ icon: Icon, title }: LogsType) => {
  return (
    <div className="inline-flex items-center flex-col md:flex-row md:min-h-[auto] min-h-[110px] rtl:ml-5 bg-white rounded-full p-2 ">
      <div className="bg-purple-P5 rounded-[100px] rtl:md:ml-2 ltr:md:mr-2">
        <Icon />
      </div>
      <span className="text-gray-G5 text-[9px] md:text-lg font-medium text-center md:mt-0 mt-1 md:whitespace-nowrap">
        {t(title)}
      </span>
    </div>
  );
};
