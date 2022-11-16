import { v4 } from "uuid";
import { Blob } from "~/components/Blob";
import { ImageBlob } from "~/components/ImageBlob";

export const Column = ({
  children,
  title,
  number,
}: {
  children?: JSX.Element;
  title: string;
  number: number;
}) => {
  return (
    <div className="flex  items-center flex-col">
      <div>
        <ImageBlob
          containerClassName="flex justify-center items-center w-16 h-16"
          textComponent={
            <p className="text-5xl font-bold text-gray-G3">{number}</p>
          }
          blobs={[
            <Blob
              key={v4()}
              size={74}
              color={"#FFFFFF"}
              className="absolute top-0 -z-10 "
            />,
            <Blob
              key={v4()}
              size={74}
              color={"#E8FBFF"}
              className="absolute  -z-20 rotate-[150px] -top-2"
            />,
          ]}
        />
      </div>
      <p className="text-xl font-normal mt-5">{title}</p>
      <div>{children}</div>
    </div>
  );
};
