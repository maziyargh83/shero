import type { languageKeys } from "~/types";
import { t } from "~/utils";

interface LogsType {
  icon: () => JSX.Element;
  title: keyof typeof languageKeys;
}
export const Logs = ({ icon: Icon, title }: LogsType) => {
  return (
    <div>
      {t(title)} <Icon />
    </div>
  );
};
