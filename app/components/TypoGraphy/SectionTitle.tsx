import type React from "react";

interface SectionTitleProps {
  title?: string;
  titleClass?: React.HTMLAttributes<HTMLHeadingElement>["className"];

  subTitle?: string;
  subTitleClass?: React.HTMLAttributes<HTMLHeadingElement>["className"];

  description?: string;
  descriptionClass?: React.HTMLAttributes<HTMLHeadingElement>["className"];

  containerClass?: React.HTMLAttributes<HTMLHeadingElement>["className"];
}
export const SectionTitle = ({
  description,
  descriptionClass = "",
  subTitle,
  subTitleClass = "",
  title,
  titleClass = "",
  containerClass = "blobs",
}: SectionTitleProps) => {
  return (
    <div className={containerClass}>
      <div>
        <h1 className={titleClass}>{title}</h1>
      </div>
      <div>
        <h2 className={subTitleClass}>{subTitle}</h2>
      </div>
      <p className={descriptionClass}>{description}</p>
    </div>
  );
};
