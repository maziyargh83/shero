import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import classNames from "classnames";
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  opened?: boolean;
}
export const Accordion = ({ title, children, opened }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(opened || false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div
      onClick={toggle}
      className="w-full bg-white rounded-xl md:rounded-3xl mb-4 cursor-pointer"
    >
      <div className="flex justify-between items-center p-3 md:py-7 md:px-12">
        <h3 className="text-purple-P1 text-sm md:text-2xl font-medium  flex-1">
          {title}
        </h3>
        <motion.div
          className={classNames("transition-all duration-500", {
            "rotate-180 ": isOpen,
          })}
        >
          <FaPlus size={15} className="text-purple-P1" />
        </motion.div>
      </div>
      <motion.div
        className={classNames(
          "overflow-hidden transition-[height] duration-500",
          {
            "h-0": !isOpen,
            "h-auto": isOpen,
          }
        )}
      >
        <div className=" p-3 md:py-7 md:px-12">{children}</div>
      </motion.div>
    </div>
  );
};
