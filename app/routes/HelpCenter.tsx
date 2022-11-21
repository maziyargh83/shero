import { useState } from "react";
import { v4 } from "uuid";
import {
  Blob,
  Box,
  BoxContent,
  ContainerSection,
  DownloadIcon,
  ImageBlob,
  RowSection,
  Section,
  SectionTitle,
  Tabs,
} from "~/components";
import { useWindowSize } from "~/hook";
import { t } from "~/utils";

export default function GettingStarted() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeBox, setActiveBox] = useState<string>();
  const { width } = useWindowSize();
  const scrollToEl = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      el?.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <div>
      <Section>
        <ContainerSection className="md:mt-20">
          <RowSection className="relative">
            <SectionTitle
              subTitle={t("HELP_CENTER_TITLE")}
              subTitleClass="text-gray-G1 font-bold text-4xl"
              description={t("HELP_CENTER_DESCRIPTION")}
              descriptionClass="text-xl font-normal mt-7 text-gray-G2"
            />
          </RowSection>
          <RowSection className="relative flex justify-end items-center mt-20 md:mt-0">
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
      </Section>
      <Section className="mt-24">
        <div className="mb-16">
          <Tabs
            activeIndex={activeTabIndex}
            data={[
              { title: "Download" },
              { title: "Today" },
              {
                title: "Profile",
              },
              {
                title: "Logs",
              },
              {
                title: "Goals",
              },
              {
                title: "Reminders",
              },
              {
                title: "Edit period",
              },
              {
                title: "Add partners",
              },
            ]}
            onChange={({ index, title }) => {
              setActiveTabIndex(index);
              width && width < 767 && setActiveBox(title);
              width && width > 767 && scrollToEl(title + "_id");
            }}
            mobilePortal
            activePortal={!!activeBox}
          />
        </div>
        <div className="flex flex-wrap md:block">
          <Box
            title={"Download"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Android"}>
              <p className="text-lg font-normal text-gray-G6">
                You can download the Shero application through one of the
                commands below.
              </p>
              <DownloadIcon image="GOOGLE_PLAY" className="my-10" />
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Ios"}>
              <p className="text-lg font-normal text-gray-G6">
                You can download the Shero application through one of the
                commands below.
              </p>
              <DownloadIcon image="APP_STORE" className="my-10" />
            </BoxContent>
          </Box>
        </div>
      </Section>
    </div>
  );
}
