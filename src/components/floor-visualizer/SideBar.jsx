import Image from "next/image";
import React, { useState } from "react";
import { useFloorVisualizerStore } from "../../store/floorVisualizer.store";

const SideBar = ({ rooms, handelRoomVisual, handleVisualizeClick }) => {
  const [visualizerInfo, setvisualizerInfo] = useState(true);
  const handelVisualizerInfo = () => {
    if (visualizerInfo) {
      setvisualizerInfo(false);
    } else {
      setvisualizerInfo(true);
    }
  };
  const setSelectedRoom = useFloorVisualizerStore(
    (state) => state.setSelectedRoom
  );
  return (
    <div className=" rounded flex items-center h-full w-fit mr-28 absolute top-0 right-0">
      <div className=" h-fit mt-[-100px] w-72 3xl:w-[335px] 3xl:h-[766px] relative p-5 bg-white">
        <div
          className={` ${
            visualizerInfo ? " hidden" : "block"
          } bg-black text-sm font-Inter font-medium text-[#979797] w-[316px] h-[100px] absolute top-[-10px] left-[-120%] p-[0.7rem]`}
        >
          Preview your tile design by choosing one of these images. You can also
          upload your own image to see exactly how the tiles will look in your
          own space
        </div>
        <div
          onClick={() => handelVisualizerInfo()}
          className=" w-[31px] h-[31px]  bg-black group-hover:block border-[5px] cursor-pointer text-white grid place-content-center rounded-full border-white absolute top-[-15px] left-[-15px] text-xl font-bold"
        >
          ?
        </div>

        {rooms?.slice(0, 3)?.map((rm) => (
          <div
            key={rm.id}
            className=" flex overflow-hidden cursor-pointer items-center gap-2 mb-4"
          >
            <Image
              onClick={() => {
                setSelectedRoom(rm);
                handelRoomVisual(true);
                handleVisualizeClick();
              }}
              alt="image"
              src={rm?.image}
              className="hover:scale-110 object-cover  h-28 3xl:h-[165px] 3xl:w-[293px] duration-100 ease-linear transition-all"
            ></Image>
          </div>
        ))}
        <div className="h-28 3xl:h-[165px] 3xl:w-[293px] bg-slate-100"></div>
      </div>
    </div>
  );
};

export default SideBar;
