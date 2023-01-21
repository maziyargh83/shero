import classNames from "classnames";
import { isShero } from "~/utils";

export const HeaderWrapper = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div
      className={classNames("md:flex hidden space-x-8 rtl:space-x-reverse ")}
    >
      {children}
    </div>
  );
};
