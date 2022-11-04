import { Blob1, Blob2, Blob3 } from "~/components/Icons";

export const Blob = ({
  type = 1,
  className,
  size,
  color,
}: {
  type?: number;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  size?: number | string;
  color?: string;
}) => {
  switch (type) {
    case 1:
      return (
        <div className={className}>
          <Blob1 color={color} size={size} />
        </div>
      );
    case 2:
      return (
        <div className={className}>
          <Blob2 color={color} size={size} />
        </div>
      );
    case 3:
      return (
        <div className={className}>
          <Blob3 color={color} size={size} />
        </div>
      );
    default:
      return (
        <div className={className}>
          <Blob1 />
        </div>
      );
  }
};
