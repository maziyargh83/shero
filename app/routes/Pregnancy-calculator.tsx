import {
  Section,
  ContainerSection,
  RowSection,
  SectionTitle,
  DatePicker,
} from "~/components";
import { imageBuilder, t } from "~/utils";
import styles from "~/styles/calendar.css";
import { useState } from "react";
import moment from "moment-jalaali";
import { getDateConfig } from "~/data";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
type resultType = {
  week: number;
  day: number;
  endDate: string;
  remainDays: number;
};
export default function PregnancyCalculator() {
  const [date, changeData] = useState<Date>(new Date());
  const [result, setResult] = useState<resultType>();
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
        <Section>
          <p>congratulations !</p>

          <p>
            You are 8 weeks pregnant and You will meet your baby onJuly 29, 2023
          </p>
        </Section>
      )}
    </div>
  );
}
