import { HeaderMenu } from "~/components/Header/HeaderMenu";
import { HeaderWrapper } from "~/components/Header/HeaderWrapper";
import { HeaderData } from "~/data";
import { capitalizeFirstChar, imageBuilder, t } from "~/utils";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoSvg, TypoLogo } from "~/components/Icons/Logo";
import { MobileMenu } from "~/components/Header/MobileMenu";
import { Link } from "@remix-run/react";
export const Header = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <header
      className={classNames(
        "z-50 transition-colors duration-300 w-full fixed top-0 ",
        {
          "bg-white/70 backdrop-blur-sm": scrolled,
          "bg-white md:bg-transparent": !scrolled,
        }
      )}
    >
      <div className="flex container px-8 md:px-0 mx-auto justify-between  h-20 md:h-32 items-center">
        {/* <div className="w-1/3 md:hidden">
          <Link
            to="/Download"
            className={classNames(
              "text-base md:hidden  font-bold rounded-full transition-colors duration-300 border-2 border-purple-P1 px-4 py-2 ",
              {
                "bg-purple-P1 text-white": scrolled,
                "text-purple-P1": !scrolled,
              }
            )}
          >
            {capitalizeFirstChar(t("HEADER_DOWNLOAD"))}
          </Link>
        </div> */}
        <div className="md:hidden w-1/2">
          <Link to="/">
            <TypoLogo />
          </Link>
        </div>
        <div className="md:flex items-center hidden">
          <Link to="/" className="md:mr-8">
            <LogoSvg />
          </Link>
          <HeaderWrapper>
            {HeaderData.map((data) => {
              return (
                <HeaderMenu key={data.title + "_menu_item"} headerData={data} />
              );
            })}
          </HeaderWrapper>
        </div>
        <div>
          <Link
            to="/Download"
            className={classNames(
              "text-base hidden md:inline-block font-bold rounded-full transition-colors duration-300 border-2 border-purple-P1  px-8 py-2 ",
              {
                "bg-purple-P1 text-white hover:shadow-xl": scrolled,
                "text-purple-P1 hover:text-white hover:bg-purple-P1": !scrolled,
              }
            )}
          >
            {capitalizeFirstChar(t("HEADER_DOWNLOAD"))}
          </Link>
        </div>
        <div
          className="md:hidden w-1/2 flex justify-end items-center"
          onClick={() => setShowMobile(true)}
        >
          <FaBars />
        </div>
      </div>
      {showMobile && <MobileMenu close={() => setShowMobile(false)} />}
    </header>
  );
};
