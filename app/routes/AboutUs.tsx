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
import { imageBuilder, isShero, t } from "~/utils";
import styles from "swiper/swiper-bundle.min.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
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
        {!isShero() && (
          <div className="flex bg-white rounded-3xl px-8 py-10  md:py-16 md:px-12 w-full md:w-[70%] mx-auto items-center flex-col mt-12 md:flex-row">
            <div className="w-2/6">
              <img src={imageBuilder("KARAFS")} alt="" />
            </div>
            <div className="pr-5">
              <p className="text-gray-G1 text-base font-normal mt-8 md:mt-0">
                ما در یک محیط دوستانه دور هم جمع شدیم تا به همدیگه برای سالم‌تر
                زندگی کردن، کمک کنیم. ما تلاش می‌کنیم برای هر مشکلی که در
                زمینه‌ی سلامتی و سبک زندگی سالم وجود داره، راهکار هوشمندی ارائه
                کنیم. تا الان با اپلیکیشن‌های کرفس، بنتو، جیم و دنج سعی کردیم به
                این هدف برسیم و تونستیم به بیش از ۴ میلیون نفر تو این مسیر کمک
                کنیم.
              </p>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
