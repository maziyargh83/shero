import { Link } from "@remix-run/react";
import classNames from "classnames";
import { Fragment } from "react";
import CONFIG from "~/Config";
import type { headerTypeValue } from "~/types/headerTypes";
import { capitalizeFirstChar, t } from "~/utils";

export const HeaderMenu = ({
  headerData,
  extra,
  extra_mobile,
  close = () => {},
}: {
  headerData: headerTypeValue;
  extra?: boolean;
  extra_mobile?: boolean;
  close?: () => void;
}) => {
  if (!extra && headerData.extra) return <Fragment />;
  if (!extra_mobile && headerData.extra_mobile) return <Fragment />;
  if (headerData?.condition && headerData?.condition !== CONFIG.product)
    return <Fragment />;
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
