import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import classNames from "classnames";
interface AccordionProps {
  title: string;
  children: JSX.Element;
  opened?: boolean;
}
export const Accordion = ({ title, children, opened }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(opened || false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div
      onClick={toggle}
      className="w-full bg-white rounded-3xl mb-4 cursor-pointer"
    >
      <div className="flex justify-between items-center py-7 px-12">
        <h3 className="text-purple-P1 text-2xl font-medium"> {title}</h3>
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
        <div className=" px-12 py-6">{children}</div>
      </motion.div>
    </div>
  );
};
