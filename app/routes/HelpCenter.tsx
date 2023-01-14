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
              // {
              //   title: "Reminders",
              // },
              {
                title: "Period",
              },
              {
                title: "Partner",
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
          <Box
            title={"Today"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Today"}>
              <p className="text-lg font-normal text-gray-G6">
                Based on the information you entered in your profile, this
                circle shows the stages you go through during your period. The
                length of your period is 31 days, including: - Day 1 to 5 of the
                period: you will have your period (bleeding) - Day 11 to 19 of
                the period: the window of fertility and ovulation - Day 24 to 31
                of the period: Premenstrual syndrome (PMS)
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Notification"}>
              <p className="text-lg font-normal text-gray-G6">Notification</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Add  Log"}>
              <p className="text-lg font-normal text-gray-G6">Notification</p>
            </BoxContent>
          </Box>
          <Box
            title={"Profile"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Edit Profile"}>
              <p className="text-lg font-normal text-gray-G6">
                1- After completing the registration process and entering the
                "Today" page in the Shero application, click on your profile
                picture at the top of the right page. 2- After entering the
                profile page, click on the "Edit" option at the top left of the
                page. 3- By entering the "Edit Profile" page, you can edit
                "Name", "Date of Birth", "Height", "Weight", "Period Length" and
                "Period Cycle". Please note that it is not possible to edit the
                "mobile number" and if you need to change it, create a new
                account or contact Shero support if you need to keep your
                previous information.
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Edit cycle length"}>
              <p className="text-lg font-normal text-gray-G6">
                Edit cycle length
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Edit period days"}>
              <p className="text-lg font-normal text-gray-G6">
                Edit cycle length
              </p>
            </BoxContent>
          </Box>
          <Box
            title={"Logs"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Edit Profile"}>
              <p className="text-lg font-normal text-gray-G6">
                1- After completing the registration process and entering the
                "Today" page or the "Calendar" page in the Shero application,
                click on the "+" button. 2- In the "Register new status" menu,
                click on the field of the marks you want to enter, and after
                registering the marks, press the "Add" button to save the marks
                you want. Make sure that the information you record is recorded
                on the date written on the upper right side of the page, and if
                you need to change it, select the desired day from the
                "Calendar" tab and then click the "+" button. Register for the
                same day.
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"BBT"}>
              <p className="text-lg font-normal text-gray-G6">BBT</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"LH"}>
              <p className="text-lg font-normal text-gray-G6">LH</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Sex"}>
              <p className="text-lg font-normal text-gray-G6">Sex</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Spot"}>
              <p className="text-lg font-normal text-gray-G6">Spot</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"vaginal discharge"}>
              <p className="text-lg font-normal text-gray-G6">
                vaginal discharge
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Weight"}>
              <p className="text-lg font-normal text-gray-G6">Weight</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Modd"}>
              <p className="text-lg font-normal text-gray-G6">Modd</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"symptoms"}>
              <p className="text-lg font-normal text-gray-G6">symptoms</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Period information"}>
              <p className="text-lg font-normal text-gray-G6">
                Period information
              </p>
            </BoxContent>
          </Box>
          <Box
            title={"Goals"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Change goal"}>
              <p className="text-3xl font-medium text-purple-P1 mb-16">
                Change goal
              </p>

              <p className="text-lg font-normal text-gray-G6">
                You can download the Shero application through one of the
                commands below.
              </p>
            </BoxContent>
          </Box>
          <Box
            title={"Period"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Change goal"}>
              <p className="text-3xl font-medium text-purple-P1 mb-16">
                Reminder
              </p>

              <p className="text-lg font-normal text-gray-G6">
                After completing the registration process and entering the
                "Today" page in the Shero application, click on your profile
                picture at the top of the right page. After entering the profile
                page, click on the "My reminders" option. On the reminders page,
                you can add smart reminders and personalized reminders. The
                smart reminder will automatically remind you before the expected
                days for your period and ovulation, and the personalized
                reminder can be set to set a reminder for yourself for periodic
                checkups or medication use. - To create a smart reminder, in the
                smart tab, click on one of the default options and enter the
                reminder settings page by pressing the "Add reminder" button, or
                click on the three dots if you need to edit or delete previous
                reminders. - To add a new smart reminder, enter the desired text
                and the appropriate time and hour for the reminder and press the
                "Register" button to register your smart reminder. - To add a
                new smart reminder, enter the desired text and the appropriate
                time and hour for the reminder and press the "Register" button
                to register your smart reminder. - To add a new personalized
                reminder, enter the desired text and the appropriate date and
                time for the reminder and press the "Register" button to
                register your smart reminder. For the personalized reminder, you
                can also choose weekly or monthly repetition and desired sound.
              </p>
            </BoxContent>
          </Box>

          <Box
            title={"Partner"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"Change goal"}>
              <p className="text-3xl font-medium text-purple-P1 mb-16">
                Add partners
              </p>

              <p className="text-lg font-normal text-gray-G6">
                After completing the registration process and entering the
                "Today" page in the Shero application, click on your profile
                picture at the top of the right page. After entering the profile
                page, click on the "My companion" option. Then click "Add
                Companion". In this section, enter the name of your companion
                and his mobile number and press the "Next" button. In this
                section, you can choose what information your companion has
                access to from your profile. Turn off the options you don't want
                your companion to see in this section and click the "Final
                Registration" option. Now your companion has been added and you
                can inform him by sharing the application with him or ask him to
                download the application. By going back to my companion menu,
                you can see your companion's profile. If necessary, click on the
                three dots in front of its name to delete the companion, and
                after confirmation, delete the companion.
              </p>
            </BoxContent>
          </Box>
        </div>
      </Section>
    </div>
  );
}
