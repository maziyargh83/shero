import classNames from "classnames";

export const ContainerSection = ({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return (
    <div
      className={classNames("flex ", {
        [className!]: !!className,
      })}
    >
      {children}
    </div>
  );
};
