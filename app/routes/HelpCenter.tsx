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
            subTitle={t("HELP_CENTER_TITLE")}
            subTitleClass="text-gray-G1 font-bold text-4xl"
            description={t("HELP_CENTER_DESCRIPTION")}
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
            data={[{ title: "Today" }, { title: "Profile" }, { title: "Logs" }]}
            onChange={setActiveTabIndex}
          />
        </div>
        <Box
          title={"Today"}
          tabs={
            <div className="mb-12">
              <Tabs
                box
                activeIndex={activeTabIndex}
                data={[
                  { title: "Today" },
                  { title: "Profile" },
                  { title: "Logs" },
                ]}
                onChange={setActiveTabIndex}
              />
            </div>
          }
          rightFrame="FRAME_MAIN_DARK_HALF"
        >
          <p className="text-gray-G6 text-lg font-normal">
            Based on the information you entered in your profile, this circle
            shows the stages you go through during your period. The length of
            your period is 31 days, including: - Day 1 to 5 of the period: you
            will have your period (bleeding) - Day 11 to 19 of the period: the
            window of fertility and ovulation - Day 24 to 31 of the period:
            Premenstrual syndrome (PMS)
          </p>
        </Box>
      </div>
    </div>
  );
}
