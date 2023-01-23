import moment from "moment-jalaali";
import { Fragment } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CONFIG from "~/Config";
import { HeaderMenu } from "~/components/Header/HeaderMenu";
import { HeaderWrapper } from "~/components/Header/HeaderWrapper";
import { FooterWave } from "~/components/Icons";
import { TypoLogo } from "~/components/Icons/Logo";
import { HeaderData } from "~/data";
import { imageBuilder } from "~/utils";
export const Footer = () => {
  return (
    <Fragment>
      <FooterWave />

      <footer className="xl:container xl:p-0 px-16 mx-auto mb-14">
        <div className="flex md:justify-between justify-center  flex-wrap items-center border-b-2 pb-4">
          <div className="mx-auto xl:mx-0">
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
        <div className="flex justify-center md:justify-between items-center mt-9">
          <div>All rights reserved. &copy; {moment().year()}</div>
          <div className="flex space-x-7">
            <a href={CONFIG.instagramUrl} target={"_blank"} rel="noreferrer">
              <FaInstagram />
            </a>
            {/* <FaTwitter /> */}
            {/* <FaLinkedin /> */}
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
