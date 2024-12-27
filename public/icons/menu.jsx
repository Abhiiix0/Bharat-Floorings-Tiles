const Menu = ({ size = 24, color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      width={size}
      height={size} // Adjust height based on size for a good aspect ratio
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="14.5" x2="24" y2="14.5" stroke={color} />
      <line y1="7.5" x2="24" y2="7.5" stroke={color} />
      <line y1="0.5" x2="24" y2="0.5" stroke={color} />
    </svg>
  );
};

export default Menu;
