import {
  useMotionValue,
  useDragControls,
  animate,
  motion,
} from "framer-motion";
import type { PanInfo } from "framer-motion";
import { useWindowSize } from "~/hook";
import { useState, useEffect } from "react";
import { usePreventScroll } from "@react-aria/overlays";
import classNames from "classnames";
import { FiX } from "react-icons/fi";
import { Portal } from "~/components";
import { HeaderData } from "~/data";
import { HeaderMenu } from "~/components/Header/HeaderMenu";
import { imageBuilder } from "~/utils";
import { LogoSvg } from "~/components/Icons/Logo";
interface MobileMenuProps {
  close: VoidFunction;
}
export const MobileMenu = ({ close }: MobileMenuProps) => {
  const height = useMotionValue(window.innerHeight * 0.6);
  const width = useMotionValue(window.innerWidth * 0.9);
  const size = useWindowSize();
  const [fullOpen, setFullOpen] = useState(false);
  const controls = useDragControls();
  usePreventScroll({ isDisabled: false });

  const handleFullOpen = () => {
    if (height.get() === window.innerHeight) {
      setFullOpen(true);
      return;
    }
    if (fullOpen) setFullOpen(false);
  };
  const handleMove = (event: MouseEvent, { delta, velocity }: PanInfo) => {
    if (velocity.y < 0) {
      if (height.get() > window.innerHeight * 0.9) {
        animate(height, window.innerHeight);
        animate(width, window.innerWidth);

        setFullOpen(true);
        return;
      }
    }
    height.set(
      Math.min(
        Math.max(height.get() + delta.y * -1, window.innerHeight * 0.6),
        window.innerHeight
      )
    );

    width.set(
      Math.min(
        Math.max(width.get() + delta.y * 0.1 * -1, window.innerWidth * 0.9),
        window.innerWidth
      )
    );
    handleFullOpen();
  };
  const dragEnd = (event: MouseEvent, { delta }: PanInfo) => {
    if (height.get() > window.innerHeight * 0.9) {
      animate(height, window.innerHeight);
      animate(width, window.innerWidth);

      setFullOpen(true);
      return;
    }
    handleFullOpen();
  };
  useEffect(() => {
    height.set(
      Math.min(
        Math.max(height.get(), window.innerHeight * 0.6),
        window.innerHeight
      )
    );

    width.set(
      Math.min(
        Math.max(width.get(), window.innerWidth * 0.9),
        window.innerWidth
      )
    );
  }, [size]);
  return (
    <Portal wrapperId="mobile-menu">
      <motion.div
        drag="y"
        dragElastic={0}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragMomentum={false}
        onDrag={handleMove}
        className={"fixed top-0 left-0 right-0 bottom-0 z-50"}
        style={{ background: "rgba(0,0,0,0.4)" }}
        onClick={close}
        onDragEnd={dragEnd}
        dragControls={controls}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={classNames(
            "translate-x-[50%] transition-[border-radius] bg-gradient-to-b from-purple-P1 to-[#FEAAA8] duration-200 rounded-b-none rounded-2xl",
            {
              "rounded-none": fullOpen,
            }
          )}
          layout
          onPointerDown={(event) => controls.start(event)}
          style={{
            position: "absolute",
            width,
            right: "50%",
            transform: "translateX(50%)",
            height,
            bottom: 0,
          }}
        >
          {fullOpen && (
            <div className="absolute top-4 left-4 ">
              <FiX onClick={close} className="text-white" />
            </div>
          )}
          <div className="flex justify-center my-16 ">
            <LogoSvg />
          </div>
          <div
            draggable={false}
            className={"flex flex-col justify-center w-full space-y-10"}
          >
            {HeaderData.map((data) => {
              return (
                <HeaderMenu
                  close={close}
                  key={data.title + "_menu_item"}
                  extra
                  headerData={{
                    ...data,
                    className: "text-center text-white text-xl font-bold ",
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Portal>
  );
};
