import classNames from "classnames";

export const Section = ({
  padding = true,
  className,
  children,
}: {
  padding?: boolean;
  className?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      className={classNames("", {
        "px-5 xl:px-0": padding,
        [className!]: !!className,
      })}
    >
      {children}
    </div>
  );
};
