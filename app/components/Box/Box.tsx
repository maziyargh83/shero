import { usePreventScroll } from "@react-aria/overlays";
import classNames from "classnames";
import { Fragment, useCallback } from "react";
import { Portal } from "~/components/Portal";
import { Tabs } from "~/components/Tabs";
import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

interface BoxType {
  title?: string;
  children?: JSX.Element | JSX.Element[];
  tabs?: JSX.Element | JSX.Element[];
  rightFrame: keyof typeof imagesKey;
  hideMobile?: boolean;
  activeBox?: string;
  changeActiveBox?: (boxId: string) => void;
}
export const Box = ({
  children,
  rightFrame,
  title,
  tabs,
  activeBox,
  hideMobile = true,
  changeActiveBox,
}: BoxType) => {
  usePreventScroll({ isDisabled: activeBox !== title });
  const activePopUp = useCallback(() => activeBox === title, [activeBox]);

  const jsx = (
    <Fragment>
      {hideMobile && title && !activePopUp() && (
        <MobileButton
          title={title}
          changeActiveBox={() => changeActiveBox && changeActiveBox(title)}
        />
      )}
      <div
        className={classNames(
          "bg-white w-full rounded-3xl px-20 h-[700px] overflow-hidden",
          {
            "hidden md:block  py-14  mb-6": !!hideMobile && !activePopUp(),
            "block px-5 h-[80%]": activePopUp(),
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {tabs}
        <div className="mb-20">
          <p className="text-3xl font-medium text-purple-P1">{title}</p>
        </div>

        <div className="flex justify-between">
          <div className="w-2/3">
            <div>{children}</div>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <img src={imageBuilder(rightFrame)} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
  if (activeBox === title) {
    return (
      <Fragment>
        <MobileButton
          title={title!}
          changeActiveBox={() => changeActiveBox && changeActiveBox(title!)}
        />
        <Portal wrapperId={title + "-popUp"}>
          <div
            className="fixed top-0 pt-48  right-0 bottom-0 left-0 bg-black/40 "
            onClick={(e) => {
              changeActiveBox && changeActiveBox(undefined);
            }}
          >
            {jsx}
          </div>
        </Portal>
      </Fragment>
    );
  }
  return jsx;
};

const MobileButton = ({
  changeActiveBox,
  title,
}: {
  changeActiveBox: () => void;
  title: string;
}) => (
  <Fragment>
    <div
      onClick={changeActiveBox}
      className="flex text-base font-medium text-gray-G2 md:hidden mx-2 w-1/2 bg-white justify-center items-center h-14 shadow-sm rounded-2xl"
    >
      {title}
    </div>
  </Fragment>
);
