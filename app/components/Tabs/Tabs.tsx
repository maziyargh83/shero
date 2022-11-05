import classNames from "classnames";
import { v4 } from "uuid";

interface TabsProps {
  data: TabsDataProps[];
  box?: boolean;
  activeIndex: number;
  onChange: (selected: number) => void;
}
interface TabsDataProps {
  title: string;
  icon?: JSX.Element;
  box?: boolean;

  active?: boolean;
  onClick?: () => void;
}
export const Tabs = ({ activeIndex, data = [], onChange, box }: TabsProps) => {
  return (
    <div className="flex">
      {data.map((el, index) => {
        return (
          <Tab
            title={el.title}
            active={index == activeIndex}
            onClick={() => onChange(index)}
            icon={el.icon}
            key={v4()}
            box={box}
          />
        );
      })}
    </div>
  );
};
const Tab = ({ onClick, title, icon, active, box }: TabsDataProps) => {
  return (
    <div
      className={classNames(
        "flex px-6 justify-between items-center h-14 space-x-4 cursor-pointer",
        {
          "bg-gray-G1 text-white rounded-3xl": active,
          "h-12 rounded-2xl": box,
          "bg-gray-G4": box && active,
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
