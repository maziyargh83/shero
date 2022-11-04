import { v4 } from "uuid";
import { Blob } from "~/components/Blob";
import { ImageBlob } from "~/components/ImageBlob";
import { team } from "~/data/team";
import type { teamType } from "~/types";
export const Team = () => {
  return (
    <div className="flex flex-wrap  justify-between sm:justify-start">
      {team.map((data) => (
        <TeamBlob data={data} key={v4()} />
      ))}
    </div>
  );
};
const TeamBlob = ({ data }: { data: teamType }) => {
  return (
    <div className="xl:w-1/5 md:w-1/4 mx-auto sm:mx-0  mt-14 flex justify-center items-center">
      <div className="text-center inline-block">
        <ImageBlob
          clipPath
          blobs={[
            <Blob
              color="#FBCBC5"
              size={"100%"}
              className="absolute top-1 -z-10 -left-2 -rotate-12"
              key={v4()}
            />,
            <Blob
              color="#E3DBFA"
              size={"100%"}
              className="absolute -top-3 -right-3 -z-20"
              key={v4()}
            />,
          ]}
          img={data.img}
        />
        <div className="mt-6">
          <h6 className="text-gray-G1 text-base font-bold">{data.name}</h6>
          <span className="text-gray-G1 text-sm font-normal">{data.role}</span>
        </div>
      </div>
    </div>
  );
};
