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
  SectionTitle,
} from "~/components";
import { t } from "~/utils";

export default function Index() {
  return (
    <Fragment>
      <ContainerSection className="md:mt-20">
        <RowSection>
          <SectionTitle
            title={t("APP_NAME")}
            titleClass="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-P2 to-[#FEAAA8] inline-block font-black"
            subTitle={t("APP_SUBTITLE")}
            subTitleClass="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#8A919F] to-gray-G1 inline-block  font-bold"
            description={t("APP_DESCRIPTION")}
            descriptionClass="text-xl font-normal mt-7"
            containerClass=""
          />
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
      <div className="flex justify-evenly mt-32">
        <ImageBlob
          img="PERSON_2"
          blobs={[
            <Blob
              size={320}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
            <Blob
              size={320}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
            <Blob
              size={320}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
          ]}
        />
        <ImageBlob
          img="PERSON_1"
          blobs={[
            <Blob
              size={370}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
            <Blob
              size={370}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
            <Blob
              size={370}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
          ]}
        />
        <ImageBlob
          img="PERSON_3"
          blobs={[
            <Blob
              size={230}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
            <Blob
              size={230}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
            <Blob
              size={230}
              className="absolute top-0 -z-10"
              color="#D7F7F3"
            />,
          ]}
        />
      </div>
    </Fragment>
  );
}
