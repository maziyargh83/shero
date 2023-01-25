import { useState } from "react";
import { v4 } from "uuid";
import {
  Blob,
  Box,
  BoxContent,
  ContainerSection,
  DownloadIcon,
  FAQ,
  ImageBlob,
  RowSection,
  Section,
  SectionTitle,
  Tabs,
} from "~/components";
import { helpCenter } from "~/data/HelpCenter";
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
                className="w-80"
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
              { title: "دانلود" },
              { title: "راهنمای داشبورد" },
              {
                title: "ویرایش اطلاعات پروفایل",
              },
              {
                title: "ثبت علائم",
              },
              {
                title: "تغییر هدف",
              },
              // {
              //   title: "Reminders",
              // },
              {
                title: "کلینیک",
              },
              {
                title: "تغییر پریود",
              },
              {
                title: "اضافه‌کردن همراه",
              },
              {
                title: "ثبت یادآور",
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
          {helpCenter.map((item) => {
            return (
              <Box
                key={v4()}
                title={item.title}
                activeBox={activeBox}
                changeActiveBox={setActiveBox}
              >
                {item.tabs?.map((data) => {
                  return (
                    <BoxContent image={data.image} key={data.title}>
                      {data.component()}
                    </BoxContent>
                  );
                })}
              </Box>
            );
          })}
        </div>
      </Section>
      <Section className="mt-24">
        <FAQ />
      </Section>
    </div>
  );
}
