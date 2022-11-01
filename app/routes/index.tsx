/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import { Fragment } from "react";
import { AiFillRightCircle } from "react-icons/ai";
import {
  Blob,
  ContainerSection,
  DownloadIcon,
  FrameMobileHome,
  ImageBlob,
  RowSection,
  ScrollSlider,
  SectionTitle,
} from "~/components";
import { imageBuilder, t } from "~/utils";

export default function Index() {
  return (
    <Fragment>
      <div className="blobs absolute hidden md:block right-0 w-1/3" />
      <ContainerSection className="md:mt-20">
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
            descriptionClass="text-xl font-normal mt-7"
            containerClass=""
          />
          <div className="blobs md:hidden" />

          <div className="flex space-x-12 mt-5">
            <DownloadIcon rate="4.9" image="GOOGLE_PLAY" />
            <DownloadIcon rate="4.5" image="APP_STORE" />
          </div>
          <div className="mt-7 flex items-center space-x-2">
            <span className="text-purple-P1 font-medium text-base">
              {t("GETTING_START")}
            </span>
            <AiFillRightCircle className="text-purple-P3" />
          </div>
        </RowSection>
        <RowSection className="justify-center flex items-center">
          <FrameMobileHome />
        </RowSection>
      </ContainerSection>
      <div className="flex relative justify-evenly items-center py-32">
        <ImageBlob
          img="PERSON_2"
          blobs={[
            <Blob
              size={315}
              className="absolute -left-2 -top-3 -z-10"
              color="#E3DBFA"
            />,
            <Blob
              size={315}
              className="absolute -right-4 rotate-90 -top-4 -z-20"
              color="#D7F7F3"
            />,
          ]}
        />
        <ImageBlob
          img="PERSON_1"
          blobs={[
            <Blob
              size={390}
              className="absolute -bottom-4 rotate-90 left-2 -z-10"
              color="#E3DBFA"
            />,
            <Blob
              size={390}
              className="absolute rotate-90 -left-3 -top-4 -z-10"
              color="#FBCBC5"
            />,
          ]}
        />
        <ImageBlob
          img="PERSON_3"
          blobs={[
            <Blob
              size={225}
              className="absolute -top-2 -rotate-12 -right-4 -z-20"
              color="#E3DBFA"
            />,
            <Blob
              size={225}
              className="absolute -bottom-3 -right-2 -rotate-90 -z-10"
              color="#FBCBC5"
            />,
          ]}
        />
        <Blob
          size={29}
          color={"#FBCBC5"}
          className="absolute right-16 bottom-16"
        />
        <Blob
          size={58}
          color={"#E3DBFA"}
          className="absolute right-28 bottom-5"
        />
      </div>
      <div className="hidden md:block">
        <SectionTitle
          subTitle={t("FEATURE_TITLE")}
          subTitleClass="text-gray-G1 font-bold text-4xl"
          description={t("FEATURE_DESCRIPTION")}
          descriptionClass="text-xl font-normal mt-2"
        />
        <div className="flex mt-28 space-x-24 justify-between">
          <div className="w-1/3 flex flex-col">
            <img src={imageBuilder("FRAME_1")} />
            <img src={imageBuilder("FRAME_2")} className="mt-24" />
            <p className="mt-24 text-gray-G1 font-medium text-xl">
              {t("FEATURE_SECTION_3")}
            </p>
            <Blob size={46} color="#FBCBC5" className="self-center mt-10" />
          </div>
          <div className="w-1/3 flex flex-col">
            <img src={imageBuilder("ICON")} className="self-end" />
            <img src={imageBuilder("FRAME_3")} className="mt-11" />
            <p className="mt-24 text-gray-G1 font-medium text-xl">
              {t("FEATURE_SECTION_2")}
            </p>
            <img className="mt-24" src={imageBuilder("FRAME_4")} />
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center relative">
            <p className="text-gray-G1 font-medium text-xl">
              {t("FEATURE_SECTION_3")}
            </p>
            <img className="mt-24 " src={imageBuilder("FRAME_5")} />
            <Blob size={21} color="#9E81EC" className="absolute bottom-2" />
          </div>
        </div>
      </div>
      <div>
        <ScrollSlider />
      </div>
    </Fragment>
  );
}
