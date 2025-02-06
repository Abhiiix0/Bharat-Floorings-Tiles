const PlusIcon = ({ size = 24, color = "black", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      className={className}
    >
      <line x1="10.5" y1="22" x2="10.5" y2="2.18557e-08" stroke={color} />
      <line y1="10.5" x2="22" y2="10.5" stroke={color} />
    </svg>
  );
};

export default PlusIcon;
