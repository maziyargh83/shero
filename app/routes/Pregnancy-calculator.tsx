import { v4 } from "uuid";
import {
  Section,
  ContainerSection,
  RowSection,
  SectionTitle,
  DatePicker,
} from "~/components";
import { TrackingIcon } from "~/components/Icons/Home/TrackingIcon";
import { imageBuilder, t } from "~/utils";

export default function PregnancyCalculator() {
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
          <DatePicker />
          <button className="period-button">Calculate</button>
        </div>
      </Section>
    </div>
  );
}
