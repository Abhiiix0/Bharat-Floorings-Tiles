const BigArrowRight = ({ size = 24, color = "white", className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 110 30"
      fill="none"
    >
      <path
        d="M109.414 16.4142C110.195 15.6332 110.195 14.3668 109.414 13.5858L96.6863 0.857864C95.9053 0.0768156 94.6389 0.0768156 93.8579 0.857864C93.0768 1.63891 93.0768 2.90524 93.8579 3.68629L105.172 15L93.8579 26.3137C93.0768 27.0948 93.0768 28.3611 93.8579 29.1421C94.6389 29.9232 95.9053 29.9232 96.6863 29.1421L109.414 16.4142ZM0 17H108V13H0V17Z"
        fill={color}
      />
    </svg>
  );
};

export default BigArrowRight;
