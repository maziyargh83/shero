import { HeaderMenu } from "~/components/Header/HeaderMenu";
import { HeaderWrapper } from "~/components/Header/HeaderWrapper";
import { HeaderData } from "~/data";
import { capitalizeFirstChar, imageBuilder, t } from "~/utils";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
export const Header = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 30) {
        setScrolled(true);
      } else if (scrollY.get() <= 30) {
        setScrolled(false);
      }
    };
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <header
      className={classNames(
        "flex container px-8 sm:px-0 transition-colors duration-300 mx-auto sticky top-0 justify-between items-center h-20 sm:h-32",
        { "bg-white/70": scrolled }
      )}
    >
      <div className="block sm:hidden">
        <FaBars />
      </div>
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
          className="text-base font-bold rounded-full border-2 border-purple-P1 text-purple-P1 px-8 py-2 "
        >
          {capitalizeFirstChar(t("HEADER_DOWNLOAD"))}
        </a>
      </div>
    </header>
  );
};
