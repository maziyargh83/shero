import {
  Section,
  ContainerSection,
  RowSection,
  SectionTitle,
  DatePicker,
  PregnancyProgress,
} from "~/components";
import { imageBuilder, t } from "~/utils";
import { Fragment, useState } from "react";
import moment from "moment-jalaali";
import { getDateConfig } from "~/data";
import type { PregnancyResultType } from "~/types";
import styles from "~/styles/calendar.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function PregnancyCalculator() {
  const [date, changeData] = useState<Date>(new Date());
  const [result, setResult] = useState<PregnancyResultType>();
  const calculate = () => {
    const week = moment().diff(moment(date), "week");
    const weekInDay = week * 7;
    const days = moment().diff(moment(date), "day");
    // end date
    const finalDate = moment(date).add(40, "w");
    const remainDays = finalDate.clone().diff(moment(), "d");

    const endDate = finalDate.format(getDateConfig("monthNameWithYear"));
    setResult({
      week: week,
      day: days - weekInDay,
      endDate: endDate,
      remainDays,
    });
  };
  return (
    <div>
      <Section>
        <ContainerSection className="md:mt-20">
          <RowSection className="relative ">
            <SectionTitle
              subTitle={t("PREGNANCY_TITLE")}
              subTitleClass="text-gray-G1 font-bold text-4xl"
              description={t("PREGNANCY_DESCRIPTION")}
              descriptionClass="text-base font-normal mt-7 text-gray-G2"
            />
          </RowSection>
          <RowSection className="relative flex justify-end items-center mt-20 md:mt-0">
            <div className="relative">
              <img src={imageBuilder("PREGNANCY_TITLE")} alt="" />
            </div>
          </RowSection>
        </ContainerSection>
      </Section>
      <Section className="mt-12">
        <div className="flex self-center justify-center items-center flex-col">
          <p className="text-gray-G1 font-normal text-xl">
            The first day of your last period
          </p>
          <DatePicker value={date} onChange={changeData} />
          <button onClick={calculate} className="period-button">
            Calculate
          </button>
        </div>
      </Section>
      {!!result && (
        <Fragment>
          <Section className="mt-32">
            <div className="justify-center flex flex-col items-center">
              <p className="text-green-G1 text-2xl font-medium">
                {t("PREGNANCY_CONGRATULATION")}
              </p>

              <p className="font-normal text-2xl">
                {t("PREGNANCY_RESULT", {
                  week: result.week,
                  date: result.endDate,
                })}
              </p>
            </div>
          </Section>
          <Section className="">
            <div className="w-[80%] mx-auto mt-52">
              <PregnancyProgress date={date} {...result} />
              <p className="font-normal text-base mt-10">
                At 8 week pregnant, you’re actually not pregnant yet. As your
                pregnancy is calculated from the first day of your last
                menstruation, your baby does not yet exist, and your body is
                preparing for the ovulation during which you’ll get pregnant.
              </p>
              <div className="flex justify-between items-center mt-10 flex-wrap">
                <p className="text-base font-normal text-gray-G4 ">
                  {t("PREGNANCY_MORE_DETAIL")}
                </p>
                <a
                  href="/Download"
                  className="bg-purple-P2 mt-3 md:mt-0 py-4 px-5 rounded-full text-white"
                >
                  {t("PREGNANCY_DOWNLOAD")}
                </a>
              </div>
            </div>
          </Section>
        </Fragment>
      )}
    </div>
  );
}
