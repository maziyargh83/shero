import React, { cloneElement } from "react";
import { FiInstagram, FiMail, FiPhoneCall } from "react-icons/fi";
import { TypoLogo } from "~/components/Icons/Logo";
import { t } from "~/utils";

export const ContactForm = () => {
  return (
    <div className="flex flex-wrap justify-center md:space-x-8">
      <Container>
        <TypoLogo width="234" height="65" />
        <p className="text-xl font-normal text-gray-G1 mt-10 border-b border-purple-P5 pb-6">
          {t("CONTACT_FORM_DESCRIPTION")}
        </p>
        <div className="mt-6 flex justify-start flex-col w-full">
          <div className="flex mt-1 items-center space-x-2">
            <FiMail />
            <p>support@Shero.info</p>
          </div>
          <div className="flex mt-1 items-center space-x-2">
            <FiPhoneCall />
            <p>+1 - 121212121</p>
          </div>
          <div className="flex mt-1 items-center space-x-2">
            <FiInstagram />
            <p>@Shero.application</p>
          </div>
        </div>
      </Container>
      <Container>
        <form action="">
          <InputWrapper title="Name">
            <input type={"text"} placeholder="Enter your name" />
          </InputWrapper>
          <InputWrapper
            title="Phone (optional)"
            placeHolderName="mobile number"
          >
            <input type={"text"} />
          </InputWrapper>
          <InputWrapper title="Email">
            <input type={"text"} />
          </InputWrapper>
          <InputWrapper
            title="Your message"
            placeHolder="Note..."
            className="rounded-2xl min-h-[120px] w-full  border border-color-[#F2F3F4] mt-3 px-6 text-xs font-medium p-3"
          >
            <textarea />
          </InputWrapper>
          <input
            className="mt-3 bg-purple-P2 text-white rounded-full w-full h-12"
            type={"submit"}
            value="Send"
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
    <div className="md:w-4/12 w-full bg-white p-12 rounded-2xl flex flex-col mt-6 md:mt-0">
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