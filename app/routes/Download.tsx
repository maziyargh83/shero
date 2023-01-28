import { Fragment } from "react";
import { FaAndroid, FaApple, FaStar } from "react-icons/fa";
import {
  ContainerSection,
  DownloadIcon,
  DownloadWrapper,
  FrameMobileHome,
  RowSection,
  Section,
  SectionTitle,
} from "~/components";
import { imagesKey } from "~/types";
import { imageBuilder, isShero, t } from "~/utils";

export default function Download() {
  return (
    <Section className="mt-32">
      <ContainerSection>
        <RowSection className="relative">
          <SectionTitle
            subTitle={t("DOWNLOAD_TITLE")}
            subTitleClass="text-gray-G1 font-bold text-4xl"
            description={t("DOWNLOAD_DESCRIPTION")}
            descriptionClass="text-base font-normal mt-8 text-gray-G2"
          />
          <div className="hidden md:flex">
            <Icons />
          </div>
        </RowSection>
        <RowSection className="relative flex justify-center items-center">
          <div className="relative">
            <FrameMobileHome downloadPage />
          </div>
        </RowSection>
        <div className="md:hidden flex">
          <Icons />
        </div>
      </ContainerSection>
    </Section>
  );
}
export const Icons = () => {
  return (
    <div className="flex flex-col">
      <div className="space-y-7 md:space-y-0 md:flex-row md:space-x-7 mt-28 flex flex-col">
        <div>
          {isShero() && (
            <div className="inline-flex items-center">
              <FaStar color="#FFBA07" />
              <span className="text-gray-G4 text-sm font-medium mx-2">4.1</span>
            </div>
          )}
          <DownloadWrapper
            icon={<FaAndroid size={30} className="text-gray-G7" />}
          >
            <DownloadIcon image="GOOGLE_PLAY" />
            {!isShero() && <DownloadIcon image="BAZAR" />}
          </DownloadWrapper>
        </div>
        <div>
          {isShero() && (
            <div className="inline-flex items-center">
              <FaStar color="#FFBA07" />
              <span className="text-gray-G4 text-sm font-medium mx-2">4.9</span>
            </div>
          )}
          <DownloadWrapper
            icon={<FaApple size={30} className="text-gray-G7" />}
          >
            <DownloadIcon image="APP_STORE" />
            {!isShero() && <DownloadIcon image="PWA" />}
          </DownloadWrapper>
        </div>
      </div>
      {!isShero() && (
        <div className=" flex justify-center flex-1 items-center space-y-12 md:space-y-0 md:justify-between  mt-8 flex-col md:flex-row">
          <Logo icon="APPLE" rate="4.9" />
          <Logo icon="PLAY" rate="4.1" />
          <Logo icon="BAZARICON" rate="4.5" />
        </div>
      )}
    </div>
  );
};
const Logo = ({
  icon,
  rate,
}: {
  icon: keyof typeof imagesKey;
  rate: string;
}) => {
  return (
    <div className="flex items-center">
      <div className="inline-flex items-center">
        <span className="text-gray-G4 text-sm font-medium">{rate}</span>
        <FaStar className=" mx-2" color="#FFBA07" />
      </div>
      <img src={imageBuilder(icon)} alt="" />
    </div>
  );
};
