import React from "react";

interface CustomHeaderProps {
  bgImg: string; // Background image source (URL or imported image)
  title: string; // Header title
  ShowTitle: boolean;
  titleStyle: string;
  level2: boolean;
  children?: React.ReactNode; // Allows wrapping components
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ level2=false ,titleStyle = false ,ShowTitle=true ,bgImg, title, children }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${level2 ? " h-[245px] flex w-full flex-col justify-between md:h-[400px] lg:h-[500px] 3xl:h-[733px] pb-7 md:pb-16 3xl:pb-[94px] lg:pb-20" : "3xl:h-[435px] h-[229px] xl:h-[360px] flex flex-col justify-between w-full"}`}
    >
      {/* Header */}
      {children}

      {/* Title */}
    
      <p className={` ${level2 ? " px-5 lg:px-[100px] text-white text-[40px] md:text-7xl lg:text-[100px] 3xl:text-[143px] font-Gloock  " : " text-[40px] text-white px-5 md:hidden heading-gloock mb-7" }`}>
        {title}
      </p>
      
    </section>
  );
};

export default CustomHeader;
