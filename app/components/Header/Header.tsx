import { HeaderMenu } from "~/components/Header/HeaderMenu";
import { HeaderWrapper } from "~/components/Header/HeaderWrapper";
import { HeaderData } from "~/data";
import { capitalizeFirstChar, imageBuilder, t } from "~/utils";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { TypoLogo } from "~/components/Icons/Logo";
import { MobileMenu } from "~/components/Header/MobileMenu";
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
        <div className="md:hidden">
          <TypoLogo />
        </div>
        <div className="md:flex items-center hidden">
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
            href="/Download"
            className={classNames(
              "text-base hidden md:inline-block font-bold rounded-full transition-colors duration-300 border-2 border-purple-P1 text-purple-P1 px-8 py-2 ",
              {
                "bg-purple-P1 text-white": scrolled,
              }
            )}
          >
            {capitalizeFirstChar(t("HEADER_DOWNLOAD"))}
          </a>
        </div>
        <div className="block md:hidden" onClick={() => setShowMobile(true)}>
          <FaBars />
        </div>
      </div>
      {showMobile && <MobileMenu close={() => setShowMobile(false)} />}
    </header>
  );
};
