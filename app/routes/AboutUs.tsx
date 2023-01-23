import { v4 } from "uuid";
import {
  Blob,
  ContactForm,
  ContainerSection,
  ImageBlob,
  RowSection,
  Section,
  SectionTitle,
  Team,
} from "~/components";
import { t } from "~/utils";

export default function AboutUs() {
  return (
    <div>
      <Section>
        <ContainerSection className="md:mt-20">
          <RowSection className="relative">
            <SectionTitle
              subTitle={t("ABOUT_US_TITLE")}
              subTitleClass="text-gray-G1 font-bold text-4xl"
              description={t("ABOUT_US_DESCRIPTION")}
              descriptionClass="text-xl font-normal mt-7 text-gray-G2"
            />
          </RowSection>
          <RowSection className="relative flex justify-end items-center mt-20 md:mt-0">
            <div className="relative">
              <ImageBlob
                img="ABOUT_TITLE"
                className="w-80"
                blobs={[
                  <Blob
                    type={3}
                    size={"100%"}
                    className="absolute -z-10 w-full h-full -top-10 -left-10"
                    key={v4()}
                  />,
                ]}
              />
            </div>
          </RowSection>
        </ContainerSection>
      </Section>
      <Section className="mt-52">
        <SectionTitle
          subTitle={t("TEAM_NAME")}
          subTitleClass="text-gray-G1 font-bold text-4xl"
        />
        <Team />
      </Section>
      <Section className="mt-32">
        <SectionTitle
          subTitle={t("CONTACT_US_SUBMIT_TITLE")}
          subTitleClass="text-gray-G1 font-bold text-4xl"
          description={t("CONTACT_US_SUBMIT_DESCRIPTION")}
          descriptionClass="text-xl font-normal mt-2 text-gray-G2"
        />

        <div className="mt-3 md:mt-12">
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
