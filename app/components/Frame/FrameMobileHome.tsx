import classNames from "classnames";
import { Blob, PregnancyIcon, TryToConceiveIcon } from "~/components";
import { TrackingIcon } from "~/components/Icons/Home/TrackingIcon";
import { imageBuilder } from "~/utils";

export const FrameMobileHome = () => {
  return (
    <div className="inline-flex self-center justify-center items-center relative ">
      <div>
        <img
          className="image"
          src={imageBuilder("FRAME_MAIN")}
          alt="mobile framer"
        />
        <Box
          className="bg-blue-B2 bottom-48 -left-24"
          icon={<TryToConceiveIcon />}
        />
        <Box
          className="bg-green-G2 bottom-24 -left-12"
          icon={<PregnancyIcon />}
        />
        <Box
          className="bg-red-R2 md:w-28 md:h-28 bottom-32 -right-12"
          icon={<TrackingIcon />}
        />
        <Blob className="static md:absolute -top-20 -z-10 -right-10 " />
        <Blob
          color="#FFEBEB"
          className="static md:absolute -top-14 -z-20 -right-24 "
        />
        <Blob
          color="#FF7878"
          className="static md:absolute top-5 -z-30 -right-10 "
        />
        <Blob
          color="#F2F0FE"
          className="static md:absolute bottom-5 -z-30 -left-20 "
        />
        <Blob
          color="#E3DBFA"
          className="static md:absolute -bottom-10 -z-30 -left-10 "
        />
        <Blob className="static md:absolute bottom-5 -z-30 -right-60 " />
      </div>
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
        "rounded-3xl w-20 h-20 flex justify-center items-center static md:absolute",
        { [className!]: !!className }
      )}
    >
      {icon}
    </div>
  );
};
