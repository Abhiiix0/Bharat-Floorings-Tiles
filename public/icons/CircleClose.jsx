const CircleClose = ({ size = 24, color = "white", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      className={className}
    >
      <line
        x1="9.41789"
        y1="28.4198"
        x2="28.4174"
        y2="9.42031"
        stroke={color}
        stroke-width="2"
      />
      <line
        x1="9.70711"
        y1="9.29289"
        x2="28.7066"
        y2="28.2924"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};

export default CircleClose;
