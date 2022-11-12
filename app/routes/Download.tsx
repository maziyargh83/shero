import { FaAndroid, FaApple } from "react-icons/fa";
import {
  ContainerSection,
  DownloadIcon,
  DownloadWrapper,
  FrameMobileHome,
  RowSection,
  Section,
  SectionTitle,
} from "~/components";
import { t } from "~/utils";

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
          <div className="md:flex space-x-7 mt-28 hidden">
            <DownloadWrapper
              icon={<FaAndroid size={30} className="text-gray-G7" />}
            >
              <DownloadIcon image="GOOGLE_PLAY" />
            </DownloadWrapper>
            <DownloadWrapper
              icon={<FaApple size={30} className="text-gray-G7" />}
            >
              <DownloadIcon image="APP_STORE" />
            </DownloadWrapper>
          </div>
        </RowSection>
        <RowSection className="relative flex justify-center items-center">
          <div className="relative">
            <FrameMobileHome downloadPage />
          </div>
        </RowSection>
        <div className="flex flex-wrap justify-center mt-28 md:hidden">
          <DownloadWrapper
            icon={<FaAndroid size={30} className="text-gray-G7" />}
          >
            <DownloadIcon className="mx-auto" image="GOOGLE_PLAY" />
          </DownloadWrapper>
          <DownloadWrapper
            icon={<FaApple size={30} className="text-gray-G7" />}
          >
            <DownloadIcon className="mx-auto" image="APP_STORE" />
          </DownloadWrapper>
        </div>
      </ContainerSection>
    </Section>
  );
}
