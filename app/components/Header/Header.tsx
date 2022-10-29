import { HeaderMenu } from "~/components/Header/HeaderMenu";
import { HeaderWrapper } from "~/components/Header/HeaderWrapper";
import { HeaderData } from "~/data";
import { capitalizeFirstChar, imageBuilder, t } from "~/utils";
export const Header = () => {
  return (
    <header className="flex container mx-auto sticky top-0 justify-between items-center  h-32">
      <div className="flex items-center ">
        <img
          className="w-14 h-14 md:mr-8"
          src={imageBuilder("LOGO")}
          alt="logo"
        />
        <HeaderWrapper>
          {HeaderData.map((data) => {
            return <HeaderMenu key={data.title + "_menu_item"} {...data} />;
          })}
        </HeaderWrapper>
      </div>
      <div>
        <a
          href="/download"
          className="text-base  hidden sm:block font-bold rounded-full border-2 border-purple-P1 text-purple-P1 px-8 py-2 "
        >
          {capitalizeFirstChar(t("HEADER_DOWNLOAD"))}
        </a>
      </div>
    </header>
  );
};
