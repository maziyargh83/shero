/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useEffect } from "react";
import { AiFillRightCircle } from "react-icons/ai";
import {
  Blob,
  CommentSlider,
  ContainerSection,
  DownloadIcon,
  FAQ,
  FeatureSection,
  FrameMobileHome,
  ImageBlob,
  RowSection,
  ScrollLogsIcon,
  ScrollSlider,
  Section,
  SectionTitle,
} from "~/components";
import { imageBuilder, t } from "~/utils";
import { v4 } from "uuid";
import styles from "swiper/swiper-bundle.min.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <Fragment>
      <Section className="pt-5">
        <div className="blobs absolute hidden md:block right-0 w-1/3" />
        <ContainerSection className="md:mt-20 relative">
          <RowSection className="relative">
            <Blob
              size={29}
              color={"#E3DBFA"}
              className="absolute hidden md:block right-[40%] -top-16"
            />
            <Blob
              size={29}
              color={"#FFACA7"}
              className="absolute  hidden md:block right-0 top-14"
            />

            <SectionTitle
              title={t("APP_NAME")}
              titleClass="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-P2 to-[#FEAAA8] inline-block font-black"
              subTitle={t("APP_SUBTITLE")}
              subTitleClass="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#8A919F] to-gray-G1 inline-block  font-bold"
              description={t("APP_DESCRIPTION")}
              descriptionClass="text-xl font-normal mt-7 text-gray-G2"
              containerClass=""
            />
            <div className="blobs md:hidden" />

            <div className="flex md:space-x-12 mt-5 flex-col  md:flex-row">
              <DownloadIcon
                className="self-center"
                rate="4.9"
                image="GOOGLE_PLAY"
              />
              <DownloadIcon
                className="self-center mt-8 md:mt-0"
                rate="4.5"
                image="APP_STORE"
              />
            </div>
            <a href="HelpCenter ">
              <div className="mt-7 flex justify-center md:justify-start items-center space-x-2">
                <span className="text-purple-P1 font-medium text-base">
                  {t("GETTING_START")}
                </span>
                <AiFillRightCircle className="text-purple-P3" />
              </div>
            </a>
          </RowSection>
          <RowSection className="justify-center flex items-center">
            <FrameMobileHome />
          </RowSection>
        </ContainerSection>
      </Section>
      <Section>
        <div className="flex flex-col md:flex-row relative px-8 justify-evenly items-center py-12 md:py-32">
          <div className="self-start md:self-auto">
            <ImageBlob
              img="PERSON_2"
              className="w-24 h-24  md:h-auto md:w-auto"
              blobs={[
                <Blob
                  key={v4()}
                  size={"100%"}
                  className="absolute -top-1 -left-1 md:-left-2 md:-top-3 -z-10"
                  color="#E3DBFA"
                />,
                <Blob
                  key={v4()}
                  size={"100%"}
                  className="absolute -top-2 -right-2 md:-right-4 rotate-90 md:-top-4 -z-20"
                  color="#D7F7F3"
                />,
              ]}
            />
          </div>
          <div className="self-end md:self-auto">
            <ImageBlob
              img="PERSON_1"
              className="w-36 h-36 md:h-auto md:w-auto"
              blobs={[
                <Blob
                  key={v4()}
                  size={"100%"}
                  className="absolute w-full top-1 left-2 md:-bottom-4 rotate-90 md:left-2 -z-10"
                  color="#E3DBFA"
                />,
                <Blob
                  key={v4()}
                  size={"100%"}
                  className="absolute w-full -left-2 -top-1 rotate-90 md:-left-3 md:-top-4 -z-10"
                  color="#FBCBC5"
                />,
              ]}
            />
          </div>
          <div className="self-start md:self-auto">
            <ImageBlob
              img="PERSON_3"
              className="w-28 h-28  md:h-auto md:w-auto"
              blobs={[
                <Blob
                  key={v4()}
                  size={"100%"}
                  className="absolute  w-full h-full -top-1 -right-1 md:-top-2 -rotate-12 md:-right-4 -z-20"
                  color="#E3DBFA"
                />,
                <Blob
                  key={v4()}
                  size={"100%"}
                  className="absolute w-full  h-full  -bottom-2 -right-1 md:-bottom-3 md:-right-2 md:-rotate-90 -z-10"
                  color="#FBCBC5"
                />,
              ]}
            />
          </div>
          <Blob
            size={29}
            color={"#FBCBC5"}
            className="absolute hidden xl:block right-16 bottom-16"
          />
          <Blob
            size={58}
            color={"#E3DBFA"}
            className="absolute  hidden xl:block right-28 bottom-5"
          />
        </div>
      </Section>
      <Section className="sm:hidden">
        <SectionTitle
          subTitle={t("FEATURE_TITLE")}
          subTitleClass="text-gray-G1 font-bold text-4xl"
          description={t("FEATURE_DESCRIPTION")}
          descriptionClass="text-xl font-normal mt-2 text-gray-G2"
        />
        <div className="flex w-full justify-center items-center">
          <img src={imageBuilder("FRAME_2")} className="mt-24" />
        </div>
        <FeatureSection />
      </Section>
      <Section>
        <div className="hidden md:block">
          <SectionTitle
            subTitle={t("FEATURE_TITLE")}
            subTitleClass="text-gray-G1 font-bold text-4xl"
            description={t("FEATURE_DESCRIPTION")}
            descriptionClass="text-xl font-normal mt-2 text-gray-G2"
          />
          <div className="flex mt-28 space-x-24 justify-between">
            <div className="w-1/3 flex flex-col">
              <img src={imageBuilder("FRAME_1")} className="shadow-mobile " />
              <img
                src={imageBuilder("FRAME_2")}
                className="mt-24 shadow-mobile "
              />
              <p className="mt-24 text-gray-G1 font-medium text-xl">
                {t("FEATURE_SECTION_3")}
              </p>
              <Blob size={46} color="#FBCBC5" className="self-center mt-10" />
            </div>
            <div className="w-1/3 flex flex-col">
              <img
                src={imageBuilder("ICON")}
                className="self-end shadow-mobile "
              />
              <img
                src={imageBuilder("FRAME_3")}
                className="mt-11 shadow-mobile "
              />
              <p className="mt-24 text-gray-G1 font-medium text-xl">
                {t("FEATURE_SECTION_2")}
              </p>
              <img
                className="mt-24 shadow-mobile "
                src={imageBuilder("FRAME_4")}
              />
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center relative">
              <p className="text-gray-G1 font-medium text-xl">
                {t("FEATURE_SECTION_3")}
              </p>
              <img
                className="mt-24 shadow-mobile "
                src={imageBuilder("FRAME_5")}
              />
              <Blob size={21} color="#9E81EC" className="absolute bottom-2" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <ScrollSlider />
      </Section>
      <Section padding={false} className="mt-12 md:mt-24">
        <div className="md:hidden px-5 md:px-0 mb-12">
          <SectionTitle
            subTitle={t("LOG_KEY_TITLE")}
            subTitleClass="text-gray-G1 font-bold text-4xl"
            description={t("LOG_KEY_DESCRIPTION")}
            descriptionClass="text-xl font-normal mt-2 text-gray-G2"
          />
        </div>
        <ScrollLogsIcon />
      </Section>
      <Section className="mt-32">
        <SectionTitle
          subTitle={t("FREQUENCY_TITLE")}
          subTitleClass="text-gray-G1 font-bold text-4xl"
          description={t("FREQUENCY_DESCRIPTION")}
          descriptionClass="text-xl font-normal mt-2 text-gray-G2"
        />
        <FAQ />
      </Section>
      <Section className="mt-16 md:mt-32 ">
        <SectionTitle
          subTitle={t("COMMENT_TITLE")}
          subTitleClass="text-gray-G1 font-bold text-4xl"
          description={t("COMMENT_DESCRIPTION")}
          descriptionClass="text-xl font-normal mt-7 text-gray-G2"
        />
        <CommentSlider />
      </Section>
    </Fragment>
  );
}
