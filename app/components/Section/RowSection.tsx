import classNames from "classnames";

export const RowSection = ({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return (
    <div
      className={classNames("md:w-1/2 w-full", { [className!]: className!! })}
    >
      {children}
    </div>
  );
};
