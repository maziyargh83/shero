import classNames from "classnames";
import { FiBook } from "react-icons/fi";
import { v4 } from "uuid";
import { Blob } from "~/components/Blob";
import {
  ChatIcon,
  Path1,
  Path2,
  Path3,
  Path4,
  PregnancyIcon,
} from "~/components/Icons";
import { TrackingIcon } from "~/components/Icons/Home/TrackingIcon";
import { ImageBlob } from "~/components/ImageBlob";
import { imageBuilder, t } from "~/utils";
interface SectionProps {
  icon: JSX.Element;
  path: JSX.Element;
  title: string;
  className: string;
  pathClassName: string;
}
const Section = ({
  icon,
  title,
  className,
  pathClassName,
  path,
}: SectionProps) => {
  return (
    <ImageBlob
      icon={icon}
      containerClassName={classNames(
        "w-36 h-36 flex flex-col  absolute  justify-center items-center",
        {
          [className!]: !!className,
        }
      )}
      textComponent={
        <span className="text-base font-semibold text-purple-P1 w-[90%] mx-auto text-center">
          {title}
        </span>
      }
      notRelative
      blobs={[
        <Blob
          key={v4()}
          size={140}
          color={"#FFFFFF"}
          className="absolute top-0 -z-10"
        />,
        <Blob
          key={v4()}
          size={140}
          color={"#E8FBFF"}
          className="absolute  -z-20 rotate-[150px] -top-2"
        />,
        <div
          className={classNames("absolute  -z-40", {
            [pathClassName]: !!pathClassName,
          })}
          key={v4()}
        >
          {path}
        </div>,
      ]}
    />
  );
};
export const FeatureSection = () => {
  const data: SectionProps[] = [
    {
      title: t("FEATURE_SECTION_CONTENT"),
      icon: <FiBook size={50} className="text-purple-P1" />,
      className: "top-4 left-0",
      pathClassName: "top-[100%] -translate-y-[50%] left-[50%]",
      path: <Path1 />,
    },
    {
      title: t("FEATURE_SECTION_CALENDAR"),
      icon: <TrackingIcon color="#3E1F90" />,
      className: "top-4 right-0",
      pathClassName: "top-[100%]  -translate-y-[50%] right-[50%]",
      path: <Path2 />,
    },
    {
      title: t("FEATURE_SECTION_COMMUNITY"),
      icon: <ChatIcon color="#3E1F90" />,
      className: "bottom-4 left-0",
      pathClassName: "bottom-[100%] left-[50%] translate-y-[50%]",
      path: <Path3 />,
    },
    {
      title: t("FEATURE_SECTION_PREGNANCY"),
      icon: <PregnancyIcon color="#3E1F90" />,
      className: "bottom-4 right-0",
      pathClassName: "bottom-[100%] translate-y-[50%] right-[50%]",
      path: <Path4 />,
    },
  ];
  return (
    <div className="h-[500px] relative mt-12">
      {data.map((item) => {
        return (
          <Section
            className={item.className}
            icon={item.icon}
            title={item.title}
            key={v4()}
            pathClassName={item.pathClassName}
            path={item.path}
          />
        );
      })}
      <img
        src={imageBuilder("ICON")}
        className="w-[125px]  top-[50%] left-[50%] absolute -translate-x-[50%] -translate-y-[50%]"
        alt=""
      />
    </div>
  );
};
