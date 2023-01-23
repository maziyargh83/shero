import { Link } from "@remix-run/react";
import classNames from "classnames";
import { Fragment } from "react";
import type { headerTypeValue } from "~/types/headerTypes";
import { capitalizeFirstChar, t } from "~/utils";

export const HeaderMenu = ({
  headerData,
  extra,
  close = () => {},
}: {
  headerData: headerTypeValue;
  extra?: boolean;
  close?: () => void;
}) => {
  if (!extra && headerData.extra) return <Fragment />;
  return (
    <Link
      to={headerData.link}
      onClick={close}
      className={classNames("xl:text-base text-xs  font-medium", {
        [headerData.className!]: headerData.className!!,
      })}
    >
      {capitalizeFirstChar(t(headerData.title))}
    </Link>
  );
};
