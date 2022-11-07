import { useState } from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { v4 } from "uuid";
import {
  Blob,
  Box,
  ContainerSection,
  DownloadIcon,
  ImageBlob,
  RowSection,
  SectionTitle,
  Tabs,
} from "~/components";
import { t } from "~/utils";

export default function GettingStarted() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div>
      <ContainerSection className="md:mt-20">
        <RowSection className="relative">
          <SectionTitle
            subTitle={t("GETTING_STARTED_TITLE")}
            subTitleClass="text-gray-G1 font-bold text-4xl"
            description={t("GETTING_STARTED_DESCRIPTION")}
            descriptionClass="text-xl font-normal mt-7 text-gray-G2"
          />
        </RowSection>
        <RowSection className="relative flex justify-end items-center">
          <div className="relative">
            <ImageBlob
              img="GETTING_STARTED"
              blobs={[
                <Blob
                  type={3}
                  size={"100%"}
                  color="#EAEBEE"
                  className="absolute -z-10 w-full h-full -top-10 -left-10"
                  key={v4()}
                />,
              ]}
            />
          </div>
        </RowSection>
      </ContainerSection>
      <div className="mt-24">
        <div className="mb-16">
          <Tabs
            activeIndex={activeTabIndex}
            data={[
              { title: "Android", icon: <FaAndroid size={25} /> },
              { title: "IOS", icon: <FaApple size={25} /> },
              { title: "PWA", icon: <TbWorld size={25} /> },
            ]}
            onChange={setActiveTabIndex}
          />
        </div>
        <Box
          title={t("GETTING_STARTED_DOWNLOAD_ANDROID")}
          rightFrame="FRAME_MAIN_DARK_HALF"
        >
          <p className="text-gray-G6 text-lg font-normal">
            {t("GETTING_STARTED_DOWNLOAD_DETAIL")}
          </p>
          <div className="mt-11">
            <DownloadIcon image="GOOGLE_PLAY" />
          </div>
        </Box>
        <Box
          title={t("GETTING_STARTED_DOWNLOAD_IOS")}
          rightFrame="FRAME_MAIN_DARK_HALF"
        >
          <p className="text-gray-G6 text-lg font-normal">
            {t("GETTING_STARTED_DOWNLOAD_DETAIL")}
          </p>
          <div className="mt-11">
            <DownloadIcon image="APP_STORE" />
          </div>
        </Box>
        <Box
          title={t("GETTING_STARTED_DOWNLOAD_PWA")}
          rightFrame="FRAME_MAIN_DARK_HALF"
        >
          <p className="text-gray-G6 text-lg font-normal">
            {t("GETTING_STARTED_DOWNLOAD_DETAIL")}
          </p>
          <div className="mt-11">
            <DownloadIcon image="PWA" />
          </div>
        </Box>
      </div>
    </div>
  );
}
