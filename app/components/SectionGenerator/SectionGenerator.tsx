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
            <SectionChildren
              {...items}
              generateType={items.generateType || generateType}
            />
          </div>
        );
      })}
    </div>
  );
};
const SectionChildren = ({
  child,
  generateType,
  level = 0,
}: SectionGeneratorType & { level?: number }) => {
  if (!child && !Array.isArray(child)) return <Fragment />;
  return (
    <Fragment>
      {child?.map((childItem) => {
        return (
          <Fragment key={v4()}>
            <SectionText
              {...childItem}
              generateType={childItem.generateType || generateType}
              level={level}
            />
            {childItem.child && (
              <SectionChildren
                {...childItem}
                generateType={childItem.generateType || generateType}
                level={level + 1}
              />
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
};
const SectionText = ({
  sectionData,
  generateType,
  level = 0,
}: SectionGeneratorType & { level?: number }) => {
  if (!sectionData) return <Fragment />;
  switch (generateType) {
    case "number":
      return (
        <p
          className="font-normal text-base text-gray-G1 whitespace-pre-line"
          style={{
            paddingLeft: level * 20 + "px",
          }}
        >
          {sectionData}
        </p>
      );
    case "dots":
      return (
        <div
          className="list-item mb-8"
          style={{
            paddingLeft: level * 20 + "px",
          }}
        >
          <p className="text-gray-G1 text-base font-normal">{sectionData}</p>
        </div>
      );
    case "dashed":
      return (
        <div
          className="mb-8 flex"
          style={{
            paddingLeft: level * 20 + "px",
          }}
        >
          <span className="mr-2">-</span>
          <p className="text-gray-G1 text-base font-normal">{sectionData}</p>
        </div>
      );
    case "none":
      return (
        <div
          className="mb-8 flex"
          style={{
            paddingLeft: level * 20 + "px",
          }}
        >
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
