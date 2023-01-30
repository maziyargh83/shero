import moment from "moment-jalaali";
import { Fragment } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CONFIG from "~/Config";
import { HeaderMenu } from "~/components/Header/HeaderMenu";
import { HeaderWrapper } from "~/components/Header/HeaderWrapper";
import { FooterWave } from "~/components/Icons";
import { TypoLogo } from "~/components/Icons/Logo";
import { HeaderData } from "~/data";
import { Social } from "~/data/Scoial";
import { imageBuilder, isShero } from "~/utils";
export const Footer = () => {
  return (
    <Fragment>
      <FooterWave />

      <footer className="xl:container xl:p-0 px-16 mx-auto mb-14">
        <div className="flex md:justify-between justify-center  flex-wrap items-center border-b-2 pb-4">
          <div className="mx-auto my-4 md:my-0 xl:mx-0">
            <TypoLogo color="black" />
          </div>

          <div>
            <HeaderWrapper>
              {HeaderData.map((data) => {
                return (
                  <HeaderMenu
                    extra
                    key={data.title + "_menu_item"}
                    headerData={data}
                  />
                );
              })}
            </HeaderWrapper>
          </div>
        </div>
        <div className="flex justify-center md:justify-between flex-col md:flex-row  items-center mt-9">
          <div className="text-base font-normal text-gray-G1">
            {isShero()
              ? ` All rights reserved. &copy; ${moment().year()}}`
              : "این وبسایت متعلق به شرکت کاوشگران رادین فناور سلامت © به شماره ثبت 536101 است."}
          </div>
          <div className="flex ltr:space-x-7 mt-4 md:mt-0">
            <a
              href={Social.instagramUrl}
              className="rtl:mx-3"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href={Social.twitterLink}
              className="rtl:mx-3"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
