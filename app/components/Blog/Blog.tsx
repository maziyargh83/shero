import { Fragment } from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";
import { t } from "~/utils";
export const Blog = ({ blogData }: { blogData: any }) => {
  return (
    <Fragment>
      <Swiper
        modules={[Virtual]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        virtual
      >
        {blogData.map((item, index) => {
          return (
            <SwiperSlide key={v4()} virtualIndex={index}>
              <BlogItem
                key={v4()}
                permalink={item.permalink}
                excerpt={item.excerpt}
                title={item.title}
                img={item.media.medium}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};
const BlogItem = ({
  title,
  img,
  excerpt,
  permalink,
}: {
  title: string;
  excerpt: string;
  permalink: string;
  img: string;
}) => {
  return (
    <div className="rounded-3xl flex flex-col w-full p-4 min-h-[600px] max-h-[601px] bg-white">
      <div
        className="rounded-3xl h-[250px] w-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      />
      <p
        className="text-xl my-4 font-bold "
        style={{
          color: "#1E0E62",
        }}
      >
        {title}
      </p>
      <p
        className="text-base font-light"
        style={{
          color: "rgba(21, 20, 57, 0.4)",
        }}
        dangerouslySetInnerHTML={{
          __html: excerpt.replace("[", "").replace("]", ""),
        }}
      />
      <div className="flex-1" />
      <div>
        <a
          href={permalink}
          target={"_blank"}
          rel={"noreferrer"}
          className="text-base font-medium border rounded-full inline-block py-5 px-14 mt-6 hover:bg-[#EBEAED] duration-200 transition-all hover:text-white  border-[#EBEAED]"
        >
          بیشتر
        </a>
      </div>
    </div>
  );
};
