const PlayBtn = ({ size = 24, color = "white", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 62 62"
      fill="none"
      className={className}
    >
      <circle
        cx="30.9893"
        cy="30.9893"
        r="29.9893"
        stroke="#F6F5EC"
        strokeWidth="2"
      />
      <path
        d="M23.5909 45.2438C23.485 45.2438 23.3786 45.2181 23.2819 45.1667C23.0672 45.0525 22.9326 44.829 22.9326 44.5854V17.3926C22.9326 17.1494 23.0669 16.9259 23.2819 16.8113C23.4968 16.6974 23.7572 16.7106 23.9589 16.8466L44.1389 30.443C44.3206 30.5654 44.4296 30.7701 44.4296 30.989C44.4296 31.2079 44.3206 31.4127 44.1389 31.5351L23.9586 45.1312C23.848 45.2059 23.7196 45.2438 23.5909 45.2438Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayBtn;
