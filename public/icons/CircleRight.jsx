const CircleRight = ({ color = "white", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      className={className}
    >
      <path
        d="M11.1141 22L2 12.8545L4.98264 9.8243L11.1138 15.9944L25.0174 2L28 5.00322L11.1141 22Z"
        fill="white"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default CircleRight;
