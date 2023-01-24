import classNames from "classnames";
import {
  Blob,
  PregnancyIcon,
  ShadowFrame,
  TryToConceiveIcon,
} from "~/components";
import { TrackingIcon } from "~/components/Icons/Home/TrackingIcon";
import { imageBuilder } from "~/utils";

export const FrameMobileHome = ({
  downloadPage,
}: {
  downloadPage?: boolean;
}) => {
  return (
    <div className="inline-flex  flex-col md:flex-row self-center justify-center items-center md:mt-0 mt-24 relative ">
      <div className="relative">
        <div className="relative phone">
          <ShadowFrame
            img="FRAME_MAIN"
            maxW={340}
            maxH={670}
            imgWidth={478}
            imgMaxW="initial"
          />
        </div>

        <Blob className="absolute -top-20 -z-10 -right-10 " />
        <Blob color="#FFEBEB" className="absolute -top-14 -z-20 -right-24 " />
        <Blob color="#FF7878" className="absolute top-5 -z-30 -right-10 " />
        <Blob color="#F2F0FE" className="absolute bottom-5 -z-30 -left-20 " />
        <Blob color="#E3DBFA" className="absolute -bottom-10 -z-30 -left-10 " />
        {!downloadPage && (
          <Blob className=" hidden absolute md:block bottom-5 -z-30 -right-60 " />
        )}
      </div>
      {!downloadPage && (
        <div className="flex relative md:static mt-14 ltr:space-x-4 md:mt-0">
          <Box
            className="bg-blue-B2 bottom-48 rtl:mx-4 -left-24"
            icon={<TryToConceiveIcon />}
          />
          <Box
            className="bg-green-G2 bottom-24  rtl:mx-4 -left-12"
            icon={<PregnancyIcon />}
          />
          <Box
            className="bg-red-R2 md:w-28 md:h-28  rtl:mx-4 bottom-32 -right-12"
            icon={<TrackingIcon />}
          />
        </div>
      )}
    </div>
  );
};
const Box = ({
  icon,
  className,
}: {
  icon: JSX.Element;
  className: React.HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <div
      className={classNames(
        "rounded-3xl w-20 h-20 flex justify-center items-center md:absolute",
        { [className!]: !!className }
      )}
    >
      {icon}
    </div>
  );
};
