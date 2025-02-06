const MinusIcon = ({ size = 24, color = "black", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      className={className}
    >
      <line x1="22" y1="11.5" x2="4.37114e-08" y2="11.5" stroke={color} />
    </svg>
  );
};

export default MinusIcon;
