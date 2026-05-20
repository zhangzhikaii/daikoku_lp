type Props = {
  color: string;
  text: string;
  size: number;
};

const MarkerIcon = ({ color, text, size }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 水滴 */}
      <path
        d="
          M32 2
          C18 2 8 12 8 26
          C8 44 32 62 32 62
          C32 62 56 44 56 26
          C56 12 46 2 32 2Z
        "
        fill={color}
      />

      {/* 中间圆 */}
      <circle cx="32" cy="26" r="14" fill="white" />

      {/* 字母 */}
      <text
        x="32"
        y="32"
        textAnchor="middle"
        fontSize="18"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fill={color}
      >
        {text}
      </text>
    </svg>
  );
};

export default MarkerIcon;
