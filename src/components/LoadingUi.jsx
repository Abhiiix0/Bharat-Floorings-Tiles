import { Spin } from "antd";
import React from "react";

const LoadingUi = ({ LoadingUi }) => {
  return (
    <div
      className={` ${
        LoadingUi ? "block z-[1000]" : "hidden"
      } bg-black/30 grid place-content-center text-white  fixed top-0 left-0 w-full h-full`}
    >
      <Spin />
      Loading...
    </div>
  );
};

export default LoadingUi;
