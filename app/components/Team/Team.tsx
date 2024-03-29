import { Fragment } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";
import { Blob } from "~/components/Blob";
import { ImageBlob } from "~/components/ImageBlob";
import { team } from "~/data/team";
import type { teamType } from "~/types";
export const Team = () => {
  return (
    <Fragment>
      <div className="flex md:hidden">
        <Swiper spaceBetween={50} modules={[Pagination]} slidesPerView={1}>
          {team.map((data, index) => (
            <SwiperSlide key={v4()}>
              <TeamBlob data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:flex flex-wrap  justify-between sm:justify-start">
        {team.map((data) => (
          <TeamBlob data={data} key={v4()} />
        ))}
      </div>
    </Fragment>
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
              className="absolute top-0 -z-10 -left-2 -rotate-12"
              key={v4()}
            />,
            <Blob
              color="#E3DBFA"
              size={"100%"}
              className="absolute -top-2 -right-2 -z-20"
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
