import { usePreventScroll } from "@react-aria/overlays";
import classNames from "classnames";
import { Fragment, useCallback, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Portal } from "~/components/Portal";
import { Tabs } from "~/components/Tabs";
import { useWindowSize } from "~/hook";
import type { imagesKey } from "~/types";
import { imageBuilder } from "~/utils";

interface BoxType {
  title?: string;
  children?: JSX.Element | JSX.Element[];
  tabs?: JSX.Element | JSX.Element[];
  hideMobile?: boolean;
  activeBox?: string;
  changeActiveBox?: (boxId?: string) => void;
}
type TabData = { title: string }[];
export const Box = ({
  children,
  title,
  tabs,
  activeBox,
  hideMobile = true,
  changeActiveBox,
}: BoxType) => {
  const [tabsId, setTabsId] = useState<TabData>([]);
  const [activeTab, setActiveTab] = useState<string>();
  const { width } = useWindowSize();
  usePreventScroll({ isDisabled: activeBox !== title });
  const activePopUp = useCallback(() => activeBox === title, [activeBox]);
  useEffect(() => {
    if (Array.isArray(children) && children.length > 1) {
      const ids = children.map((item) => ({ title: item.key })) as TabData;
      setTabsId(ids);
      setActiveTab(ids[0].title);
    }
  }, []);
  const activeTabIndex = useCallback(() => {
    return tabsId.findIndex((item) => item.title === activeTab);
  }, [activeTab]);
  const getActiveContent = useCallback(() => {
    if (!children || !Array.isArray(children))
      return <Fragment>{children}</Fragment>;
    if (children.length > 1) {
      return children.find((item) => item.key === activeTab);
    }
    return children;
  }, [activeTab]);
  const jsx = (
    <Fragment>
      {hideMobile && title && !activePopUp() && (
        <MobileButton
          title={title}
          changeActiveBox={() => changeActiveBox && changeActiveBox(title)}
        />
      )}
      <div
        id={title + "_id"}
        className={classNames(
          "overflow-hidden scrollbar-hidden bg-white w-full rounded-3xl h-[700px] ",
          {
            "hidden md:block  py-14  mb-6 px-20 overflow-hidden":
              !!hideMobile && !activePopUp(),
            "block w-[90%] px-7 pt-4 mx-auto h-[80%] ": activePopUp(),
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {tabsId && tabsId.length > 1 && (
            <div className="flex justify-between items-center">
              <Tabs
                box
                data={tabsId}
                activeIndex={activeTabIndex()}
                onChange={({ title }) => {
                  setActiveTab(title);
                }}
              />
              <FiX
                className="md:hidden"
                size={30}
                onClick={() => changeActiveBox && changeActiveBox(undefined)}
              />
            </div>
          )}
          {(tabsId.length == 0 || (width && width > 767)) && (
            <div
              className={classNames(
                "md:mb-7 flex justify-between items-center ",
                {
                  "md:mt-10": tabsId.length > 0,
                }
              )}
            >
              <p className="text-3xl font-medium text-purple-P1">{activeTab}</p>
              <FiX
                size={30}
                className="md:hidden"
                onClick={() => changeActiveBox && changeActiveBox(undefined)}
              />
            </div>
          )}
        </div>

        <div className="overflow-auto scrollbar-hidden h-full mt-3 md:mt-0">
          {getActiveContent()}
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
  <div className="px-2 my-3 w-1/2">
    <div
      onClick={changeActiveBox}
      className="flex text-xs font-medium text-gray-G2 md:hidden cursor-pointer  bg-white justify-center items-center min-h-[51px] shadow-sm rounded-2xl"
    >
      {title}
    </div>
  </div>
);
