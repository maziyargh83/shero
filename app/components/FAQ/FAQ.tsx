import { useState } from "react";
import { v4 } from "uuid";
import { Accordion } from "~/components/Accordion";
import { FaqData } from "~/data/Faq";
import type { languageKeys } from "~/types";
import { t } from "~/utils";
export const FAQ = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <div className="mt-16 md:mt-32">
      {(loadMore ? FaqData : FaqData.slice(0, 5)).map((data) => {
        return (
          <Accordion title={t(data.title)} key={v4()}>
            <p className="text-sm md:text-2xl font-medium text-gray-G1">
              {t(data.description)}
            </p>
            {data.details && <RenderDetail data={data.details} />}
          </Accordion>
        );
      })}
      {!loadMore && (
        <button
          className="py-4 bg-gray-G10 rounded-xl flex w-full justify-center items-center"
          onClick={() => setLoadMore(true)}
        >
          <span className="text-gray-G3 font-medium text-base md:text-xl">
            {t("FAQ_MORE")}
          </span>
        </button>
      )}
    </div>
  );
};
const RenderDetail = ({ data }: { data: (keyof typeof languageKeys)[] }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <p
            className="list-item ml-3 text-sm md:text-2xl font-medium text-gray-G1"
            key={v4()}
          >
            {t(item)}
          </p>
        );
      })}
    </div>
  );
};
