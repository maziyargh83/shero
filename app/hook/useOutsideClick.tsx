import { MutableRefObject, useEffect } from "react";

export const useOutsideClick = <T extends Array<MutableRefObject<any>>>(
  ref: T,
  callback: () => void
): void => {
  useEffect(() => {
    const handler = (event: MouseEvent): void => {
      // Check if the mouse click was within the element's ref.

      if (!ref || ref.length === 0) return;
      const node = ref.find((x) => x?.current?.contains(event?.target as Node));

      if (!node) {
        callback();
      }
    };

    if (typeof window !== "undefined")
      window.addEventListener("mousedown", handler);

    return (): void => {
      if (typeof window !== "undefined")
        window.removeEventListener("mousedown", handler);
    };
  }, [ref, callback]);
};
