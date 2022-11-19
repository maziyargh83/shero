import classNames from "classnames";
import { v4 } from "uuid";
import { Portal } from "~/components/Portal";

interface TabsProps {
  data: TabsDataProps[];
  box?: boolean;
  activeIndex: number;
  mobilePortal?: boolean;
  onChange: (selected: { index: number; title: string }) => void;
  activePortal?: boolean;
}
interface TabsDataProps {
  title: string;
  icon?: JSX.Element;
  box?: boolean;
  active?: boolean;
  activePortal?: boolean;
  onClick?: () => void;
}
export const Tabs = ({
  activeIndex,
  data = [],
  onChange,
  box,
  mobilePortal,
  activePortal,
}: TabsProps) => {
  const jsx = (
    <div
      className={classNames("", {
        "md:flex hidden": !activePortal && mobilePortal,
        flex: activePortal || !mobilePortal,
        "z-10 h-20 items-center  bg-purple-P1 w-full pl-8 fixed top-20":
          activePortal,
      })}
    >
      {data.map((el, index) => {
        return (
          <Tab
            title={el.title}
            active={index == activeIndex}
            onClick={() => onChange({ index, title: el.title })}
            icon={el.icon}
            key={v4()}
            box={box}
            activePortal={activePortal}
          />
        );
      })}
    </div>
  );
  if (mobilePortal && activePortal)
    return <Portal wrapperId="TabsToolBar">{jsx}</Portal>;
  return jsx;
};
const Tab = ({
  onClick,
  title,
  icon,
  active,
  box,
  activePortal,
}: TabsDataProps) => {
  return (
    <div
      className={classNames(
        "flex px-6 justify-between items-center h-14 space-x-4 cursor-pointer",
        {
          "bg-gray-G1 text-white rounded-3xl": !activePortal && active,
          "h-12 rounded-2xl": box,
          "bg-gray-G4": box && active && !activePortal,
          "text-white": activePortal,
          "text-purple-P2 bg-white rounded-full px-11": activePortal && active,
        }
      )}
      onClick={onClick}
    >
      <span
        className={classNames("text-lg font-medium", {
          "text-sm": box,
        })}
      >
        {title}
      </span>
      {icon}
    </div>
  );
};
