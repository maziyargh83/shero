import { Fragment } from "react";
import {
  ContainerSection,
  FrameMobileHome,
  RowSection,
  SectionTitle,
} from "~/components";
import { t } from "~/utils";

export default function Index() {
  return (
    <Fragment>
      <ContainerSection>
        <RowSection>
          <SectionTitle
            title={t("APP_NAME")}
            titleClass="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-P2 to-[#FEAAA8] inline-block font-black"
            subTitle={t("APP_SUBTITLE")}
            subTitleClass="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#8A919F] to-gray-G1 inline-block  font-bold"
            description={t("APP_DESCRIPTION")}
            descriptionClass="text-xl font-normal mt-7"
            containerClass=""
          />
        </RowSection>
        <RowSection>
          <FrameMobileHome />
        </RowSection>
      </ContainerSection>
    </Fragment>
  );
}
