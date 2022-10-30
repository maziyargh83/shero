import { imageBuilder } from "~/utils";

export const FrameMobileHome = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img
          className="image"
          src={imageBuilder("FRAME_MAIN")}
          alt="mobile framer"
        />
      </div>
    </div>
  );
};
