import { Fragment } from "react";
import { v4 } from "uuid";
import type { SectionGeneratorDataType, SectionGeneratorType } from "~/types";

export const SectionGenerator = ({
  data,
  generateType,
}: SectionGeneratorDataType) => {
  return (
    <div>
      {data.map((items, i) => {
        return (
          <div key={v4()}>
            <SectionHeader
              {...items}
              generateType={items.generateType || generateType}
              index={i + 1}
            />
            <SectionText
              {...items}
              generateType={items.generateType || generateType}
            />
          </div>
        );
      })}
    </div>
  );
};
const SectionText = ({ sectionData, generateType }: SectionGeneratorType) => {
  if (!sectionData) return <Fragment />;
  switch (generateType) {
    case "number":
      return (
        <p className="font-normal text-base text-gray-G1 whitespace-pre-line">
          {sectionData}
        </p>
      );
    case "dots":
      return (
        <div className="list-item mb-8">
          <p className="text-gray-G1 text-base font-normal">{sectionData}</p>
        </div>
      );
    default:
      return <Fragment />;
  }
};
const SectionHeader = ({
  generateType,
  title,
  index,
}: {
  index: number;
} & SectionGeneratorType) => {
  if (!title) return <Fragment />;
  switch (generateType) {
    case "number":
      return (
        <div className="mt-16 mb-2 text-gray-G1 font-bold text-lg">
          {index} - {title}
        </div>
      );
    default:
      return <Fragment />;
  }
};
