export const ClipPath = ({
  size = 0,
  color = "#FFACA7",
}: {
  size?: string | number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 162 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="myClip">
          <path
            d="M156.545 60.0591C170.828 102.666 148.997 145.859 109.001 158.813C52.2508 177.425 -20.7092 132.022 6.76164 62.3137C36.1496 -11.6353 127.537 -27.4118 156.545 60.0591Z"
            fill={color}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
