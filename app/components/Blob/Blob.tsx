import { Blob1 } from "~/components/Icons";

export const Blob = ({
  type = 1,
  className,
  size,
  color,
}: {
  type?: number;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  size?: number;
  color?: string;
}) => {
  switch (type) {
    case 1:
      return (
        <div className={className}>
          <Blob1 color={color} size={size} />
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
