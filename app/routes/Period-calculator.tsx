import { FiMinus, FiPlus } from "react-icons/fi";
import {
  Section,
  ContainerSection,
  RowSection,
  SectionTitle,
  DatePicker,
  Column,
} from "~/components";
import { t, imageBuilder } from "~/utils";

export default function PeriodCalculator() {
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
        <div className="flex justify-between">
          <Column title="When did your last period start?" number={1}>
            <DatePicker />
          </Column>
          <Column title="How many days did it last?" number={2}>
            <div className="flex justify-between items-center mt-8">
              <div className=" p-6 bg-white rounded-3xl shadow-sm ">
                <FiPlus />
              </div>
              <div className="">
                <span className="mx-9 text-2xl">3</span>
              </div>
              <div className=" p-6 bg-white rounded-3xl shadow-sm">
                <FiMinus />
              </div>
            </div>
          </Column>
          <Column title="Average cycle length (days)" number={3}>
            <div className="flex justify-between items-center mt-8">
              <div className=" p-6 bg-white rounded-3xl shadow-sm ">
                <FiPlus />
              </div>
              <div className="">
                <span className="mx-9 text-2xl">3</span>
              </div>
              <div className=" p-6 bg-white rounded-3xl shadow-sm">
                <FiMinus />
              </div>
            </div>
          </Column>
        </div>
        <button className="period-button">Calculate</button>
      </Section>
    </div>
  );
}
