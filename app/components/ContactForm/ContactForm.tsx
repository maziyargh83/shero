import React, { cloneElement } from "react";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import CONFIG from "~/Config";
import { LogoSvg } from "~/components/Icons/Logo";
import { Social } from "~/data/Scoial";
import { isShero, t } from "~/utils";
import { getDirection } from "~/utils/helpers/direction";
export const ContactForm = () => {
  return (
    <div className="flex flex-wrap justify-center ltr:md:space-x-8">
      <Container>
        <div className="flex w-full justify-center">
          <LogoSvg size={104} />
        </div>

        <p className="text-xl font-normal text-gray-G1 mt-10 border-b border-purple-P5 pb-6">
          {t("CONTACT_FORM_DESCRIPTION")}
        </p>
        <div className="mt-6 flex justify-start flex-col w-full">
          {Social.email && (
            <div className="flex mt-4 items-center">
              <FiMail className="text-purple-P2 mx-2" />
              <p>{Social.email}</p>
            </div>
          )}
          {!isShero() && (
            <div className="flex mt-4 items-center">
              <FiPhone className="text-purple-P2 mx-2" />
              <p>۰۲۱ - ۹۱۰۰۶۹۰۱</p>
            </div>
          )}
          {Social.instagram && (
            <div className="flex mt-4 items-center">
              <FiInstagram className="text-purple-P2 mx-2" />
              <p style={{ direction: "ltr" }}>{Social.instagram}</p>
            </div>
          )}
          {Social.twitter && (
            <div className="flex mt-4 items-center">
              <FaTwitter className="text-purple-P2 mx-2" />
              <p style={{ direction: "ltr" }}>{Social.twitter}</p>
            </div>
          )}
        </div>
      </Container>
      <Container>
        <form
          action={`mailto:${Social.email}`}
          method="post"
          enctype="application/x-www-form-urlencoded"
        >
          <InputWrapper
            placeHolder={t("CONTACT_PLACEHOLDER_NAME")}
            title={t("CONTACT_NAME")}
          >
            <input type={"text"} name="name" required />
          </InputWrapper>
          <InputWrapper
            title={t("CONTACT_PHONE")}
            placeHolder={t("CONTACT_PLACEHOLDER_PHONE")}
          >
            <input type={"text"} name="phone" />
          </InputWrapper>

          <InputWrapper
            placeHolder={t("CONTACT_PLACEHOLDER_EMAIL")}
            title={t("CONTACT_EMAIL")}
          >
            <input type={"email"} name="email" required />
          </InputWrapper>
          <InputWrapper
            title={t("CONTACT_MESSAGE")}
            placeHolder={t("CONTACT_PLACEHOLDER_MESSAGE")}
            className="rounded-2xl min-h-[120px] w-full  border border-color-[#F2F3F4] mt-3 px-6 text-xs font-medium p-3"
          >
            <textarea name="message" />
          </InputWrapper>
          <input
            className="mt-3 bg-purple-P2 text-white rounded-full w-full h-12"
            type={"submit"}
            value={t("SEND")}
          />
        </form>
      </Container>
    </div>
  );
};
const Container = ({
  children,
}: {
  children?: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="md:w-4/12 w-full rtl:md:mx-4 bg-white p-12 rounded-2xl flex flex-col mt-6 md:mt-0">
      {children}
    </div>
  );
};
const InputWrapper = ({
  title,
  placeHolderName,
  children,
  placeHolder,
  className,
}: {
  title?: string;
  placeHolderName?: string;
  placeHolder?: string;
  className?: string;
  children?: JSX.Element;
}) => {
  return (
    <div className="mt-3">
      <h3 className="text-sm font-medium ">{title}</h3>
      {children &&
        cloneElement<HTMLInputElement>(children, {
          className: className
            ? className
            : "w-full h-12 border border-color-[#F2F3F4] rounded-full mt-3 px-6 text-xs font-medium",
          placeholder: placeHolder
            ? placeHolder
            : "Enter your " + (placeHolderName || title?.toLocaleLowerCase()),
        })}
    </div>
  );
};
