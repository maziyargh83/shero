import { Blob } from "~/components/Blob";
import { ShadowFrame } from "~/components/ShadowFrame";
import { SectionTitle } from "~/components/TypoGraphy";
import { imageBuilder, isShero, t } from "~/utils";
export const Feature = () => {
  const shero = (
    <div className="hidden md:block">
      <SectionTitle
        subTitle={t("FEATURE_TITLE")}
        subTitleClass="text-gray-G1 font-bold text-4xl"
        description={t("FEATURE_DESCRIPTION")}
        descriptionClass="text-xl font-normal mt-2 text-gray-G2"
      />
      <div className="flex mt-28 ltr:space-x-24  justify-between">
        <div className="w-1/3 flex rtl:mx-9 flex-col">
          <ShadowFrame img="FRAME_1" maxW={320} maxH={700} imgMinW={"170%"} />
          <ShadowFrame
            img="FRAME_2"
            maxW={320}
            maxH={700}
            imgMinW={"170%"}
            className="mt-24"
          />
          <p className="mt-24 text-gray-G1 font-bold text-xl">
            {t("FEATURE_SECTION_1_TITLE")}
          </p>
          <p className="mt-2 text-gray-G1 font-medium text-lg">
            {t("FEATURE_SECTION_1")}
          </p>
          <Blob size={46} color="#FBCBC5" className="self-center mt-10" />
        </div>
        <div className="w-1/3 flex rtl:mx-9 flex-col">
          <img src={imageBuilder("ICON")} className="self-end shadow-mobile " />

          <ShadowFrame
            img="FRAME_3"
            maxW={320}
            maxH={700}
            imgMinW={"170%"}
            className="mt-11 shadow-mobile "
          />
          <p className="mt-24 text-gray-G1 font-bold text-xl">
            {t("FEATURE_SECTION_2_TITLE")}
          </p>
          <p className="mt-2 text-gray-G1 font-medium text-lg">
            {t("FEATURE_SECTION_2")}
          </p>
          <p className="mt-24 text-gray-G1 font-bold text-xl">
            {t("FEATURE_SECTION_3_TITLE")}
          </p>
          <p className="mt-2 text-gray-G1 font-medium text-lg">
            {t("FEATURE_SECTION_3")}
          </p>
          <ShadowFrame
            img="FRAME_4"
            maxW={320}
            maxH={700}
            imgMinW={"170%"}
            className="mt-24 shadow-mobile "
          />
        </div>
        <div className="w-1/3 flex rtl:mx-9 flex-col justify-center relative">
          <p className="mt-24 text-gray-G1 font-bold text-xl">
            {t("FEATURE_SECTION_4_TITLE")}
          </p>
          <p className="mt-2 text-gray-G1 font-medium text-lg">
            {t("FEATURE_SECTION_4")}
          </p>
          <p className="mt-24 text-gray-G1 font-bold text-xl">
            {t("FEATURE_SECTION_5_TITLE")}
          </p>
          <p className="mt-2 text-gray-G1 font-medium text-lg">
            {t("FEATURE_SECTION_5")}
          </p>
          <ShadowFrame
            img="FRAME_5"
            maxW={320}
            maxH={700}
            imgMinW={"170%"}
            className="mt-24 shadow-mobile "
          />
          <Blob size={21} color="#9E81EC" className="absolute bottom-2" />
        </div>
      </div>
    </div>
  );
  const luna = (
    <div className="hidden md:block">
      <SectionTitle
        subTitle={t("FEATURE_TITLE")}
        subTitleClass="text-gray-G1 font-bold text-4xl"
        description={t("FEATURE_DESCRIPTION")}
        descriptionClass="text-xl font-normal mt-2 text-gray-G2"
      />
      <div className="flex mt-28 ltr:space-x-24  justify-between">
        <div className="w-1/3 flex rtl:mx-9 flex-col">
          <ShadowFrame img="FRAME_1" maxW={320} maxH={700} imgMinW={"170%"} />
          <ShadowFrame
            img="FRAME_2"
            maxW={320}
            maxH={700}
            imgMinW={"170%"}
            className="mt-24"
          />

          <Blob size={46} color="#FBCBC5" className="self-center mt-10" />
        </div>
        <div className="w-1/3 flex rtl:mx-9 flex-col">
          <img src={imageBuilder("ICON")} className="self-end shadow-mobile " />

          <ShadowFrame
            img="FRAME_3"
            maxW={320}
            maxH={700}
            imgMinW={"170%"}
            className="mt-11 shadow-mobile "
          />

          <p className="mt-24 list-item   text-gray-G1 font-medium text-lg">
            ثبت و ردیابی دوره پریود
          </p>
          <p className="mt-2 list-item  text-gray-G1 font-medium text-lg">
            ثبت حالت روزانه
          </p>
          <p className="mt-2  list-item  text-gray-G1 font-medium text-lg">
            اعلام زمان تخمک گذاری
          </p>
          <p className="mt-2 list-item  text-gray-G1 font-medium text-lg">
            ثبت تغییرات جنین و مادر
          </p>
          <p className="mt-2 list-item  text-gray-G1 font-medium text-lg">
            اعلام زمان فاز PMS
          </p>

          <ShadowFrame
            img="FRAME_4"
            maxW={320}
            maxH={700}
            imgMinW={"170%"}
            className="mt-24 shadow-mobile "
          />
        </div>
        <div className="w-1/3 flex rtl:mx-9 flex-col justify-center relative">
          <p className="mt-24 text-green-G1 font-bold text-xl">
            {t("FEATURE_SECTION_4_TITLE")}
          </p>
          <p className="mt-2 text-gray-G1 font-medium text-lg">
            {t("FEATURE_SECTION_4")}
          </p>

          <ShadowFrame
            img="FRAME_5"
            maxW={320}
            maxH={700}
            imgMinW={"170%"}
            className="mt-24 shadow-mobile "
          />

          <p className="mt-24 list-item   text-gray-G1 font-medium text-lg">
            ثبت و ردیابی دوره پریود
          </p>
          <p className="mt-2 list-item  text-gray-G1 font-medium text-lg">
            ثبت حالت روزانه
          </p>
          <p className="mt-2  list-item  text-gray-G1 font-medium text-lg">
            اعلام زمان تخمک گذاری
          </p>
          <p className="mt-2 list-item  text-gray-G1 font-medium text-lg">
            ثبت تغییرات جنین و مادر
          </p>
          <p className="mt-2 list-item  text-gray-G1 font-medium text-lg">
            اعلام زمان فاز PMS
          </p>

          <Blob size={21} color="#9E81EC" className="absolute bottom-2" />
        </div>
      </div>
    </div>
  );
  return isShero() ? shero : luna;
};
