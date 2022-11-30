import { useCallback } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
interface NumberInputProps {
  amount: number;
  setAmount: (amount: number) => void;
}
export const NumberInput = ({ amount, setAmount }: NumberInputProps) => {
  const updateAmount = useCallback(
    (type: "up" | "down") => {
      if (type == "up") {
        setAmount(amount + 1);
        return;
      }
      if (amount > 0) setAmount(amount - 1);
    },
    [amount]
  );
  return (
    <div className="flex justify-between items-center mt-8">
      <div
        className=" p-6 bg-white rounded-3xl shadow-sm "
        onClick={() => updateAmount("up")}
      >
        <FiPlus className="text-purple-P1" />
      </div>
      <div>
        <span className="mx-9 text-2xl">{amount}</span>
      </div>
      <div
        className=" p-6 bg-white rounded-3xl shadow-sm"
        onClick={() => updateAmount("down")}
      >
        <FiMinus className="text-purple-P1" />
      </div>
    </div>
  );
};
