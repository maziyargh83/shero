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
    <div className="flex justify-center items-center flex-col w-full md:w-auto">
      <div className="flex items-center ltr:space-x-4 flex-row md:flex-col  w-full md:w-auto">
        <ImageBlob
          containerClassName="flex justify-center items-center  w-8  h-8 md:w-16 md:h-16"
          textComponent={
            <p className="text-xl md:text-5xl font-bold text-gray-G3">
              {number}
            </p>
          }
          blobs={[
            <Blob
              key={v4()}
              size={"100%"}
              color={"#FFFFFF"}
              className="absolute top-0 -z-10 "
            />,
            <Blob
              key={v4()}
              size={"100%"}
              color={"#E8FBFF"}
              className="absolute  -z-20 rotate-[150px] -top-2"
            />,
          ]}
        />
        <p className="text-sm md:text-xl font-normal md:mt-5 rtl:mx-4">
          {title}
        </p>
      </div>
      <div className="px-6 w-full md:w-auto">{children}</div>
    </div>
  );
};
