import { FiMinus, FiPlus } from "react-icons/fi";
import {
  Section,
  ContainerSection,
  RowSection,
  SectionTitle,
  DatePicker,
  Column,
  NumberInput,
  Calendar,
} from "~/components";
import { t, imageBuilder } from "~/utils";
import styles from "~/styles/calendar.css";
import { useState } from "react";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function PeriodCalculator() {
  const [days, setDays] = useState(3);
  const [cycle, setCycle] = useState(28);
  const [result, setResult] = useState<boolean>(false);
  return (
    <div className="">
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
              <img src={imageBuilder("PERIOD_TITLE")} alt="" />
            </div>
          </RowSection>
        </ContainerSection>
      </Section>
      <Section className="text-center mt-32">
        <div className="flex justify-center md:justify-between flex-wrap space-y-10 md:space-y-0">
          <Column title="When did your last period start?" number={1}>
            <DatePicker />
          </Column>
          <Column title="How many days did it last?" number={2}>
            <NumberInput amount={days} setAmount={setDays} />
          </Column>
          <Column title="Average cycle length (days)" number={3}>
            <NumberInput amount={cycle} setAmount={setCycle} />
          </Column>
        </div>
        <button onClick={() => setResult(true)} className="period-button">
          Calculate
        </button>
      </Section>
      <Section className="mt-10">
        <div className="flex space-y-10 md:space-x-3 flex-wrap md:flex-nowrap">
          <Calendar />
          <Calendar />
          <Calendar />
        </div>
      </Section>
    </div>
  );
}
