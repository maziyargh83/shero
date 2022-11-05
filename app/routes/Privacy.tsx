import { v4 } from "uuid";
import {
  Blob,
  ContainerSection,
  ImageBlob,
  RowSection,
  SectionTitle,
} from "~/components";
import { t } from "~/utils";

export default function Privacy() {
  return (
    <div>
      <ContainerSection className="md:mt-20">
        <RowSection className="relative">
          <SectionTitle
            subTitle={t("PRIVACY_TITLE")}
            subTitleClass="text-gray-G1 font-bold text-4xl  my-24"
            description={t("PRIVACY_DESCRIPTION")}
            descriptionClass="text-base font-normal"
          />
        </RowSection>
        <RowSection className="relative flex justify-end items-start">
          <div className="relative">
            <ImageBlob
              img="PRIVACY_TITLE"
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
      <div className="mt-8 whitespace-pre-wrap">
        <p>{t("PRIVACY")}</p>
      </div>
    </div>
  );
}
