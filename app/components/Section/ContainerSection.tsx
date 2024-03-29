import classNames from "classnames";
import { isShero } from "~/utils";

export const ContainerSection = ({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return (
    <div
      className={classNames("flex flex-wrap", {
        [className!]: !!className,
      })}
    >
      {children}
    </div>
  );
};
