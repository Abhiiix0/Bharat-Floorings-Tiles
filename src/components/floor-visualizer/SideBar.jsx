"use client";
import React, { useEffect, useState } from "react";
import { useFloorVisualizerStore } from "../../store/floorVisualizer.store";
const SideBar = ({ handelRoomVisual, handleVisualizeClick }) => {
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
  const [roomsData, setRoomsData] = useState([]);

  const transformRoomData = (oldData) => {
    return {
      id: oldData?.id,
      image: oldData?.thumbImg,
      layer: oldData?.layerImg,
      name: oldData?.name,
      sizes: [
        {
          size: oldData.size,
          properties: {
            top: parseFloat(oldData.top),
            left: parseFloat(oldData.left),
            perspective: parseFloat(oldData.perspective),
            rotateX: parseFloat(oldData.rotateX),
            scale: parseFloat(oldData.scale),
          },
        },
      ],
    };
  };

  async function getAllRoomsFun() {
    const res = await fetch(
      "https://dev-projects-bft-data-entry-service.hph94m.easypanel.host/product/rooms"
    );
    const result = await res.json();

    setRoomsData(result);
    console.log("res", result);
    console.log("formate data", transformRoomData(...result));
  }
  useEffect(() => {
    getAllRoomsFun();
  }, []);

  return (
    <div className=" rounded flex items-center h-full w-fit mr-28 absolute top-0 right-0">
      <div className=" h-fit mt-[-100px] w-72 3xl:w-[335px] relative p-5 bg-white">
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
        {roomsData?.length === 0 ? (
          <div className=" flex cursor-pointer rounded w-[100%]  h-28 3xl:h-[165px] 3xl:w-[293px] overflow-hidden items-center gap-2 mb-4">
            <div class="flex items-center justify-center w-full h-full bg-gray-300 rounded-sm dark:bg-gray-100">
              <svg
                class="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        ) : (
          <>
            {roomsData?.slice(0, 3).map((rm) => (
              <div
                key={rm.id}
                className=" flex cursor-pointer rounded w-[100%]  h-28 3xl:h-[165px] 3xl:w-[293px] overflow-hidden items-center gap-2 mb-4"
              >
                <img
                  onClick={() => {
                    setSelectedRoom(transformRoomData(rm));
                    handelRoomVisual(true);
                    handleVisualizeClick();
                  }}
                  width={100}
                  height={100}
                  alt="image"
                  loading="lazy"
                  src={rm?.thumbImg}
                  className="hover:scale-110 object-cover h-full w-full  duration-100 ease-linear transition-all"
                ></img>
              </div>
            ))}
          </>
        )}

        <div className="h-28 3xl:h-[165px] cursor-pointer font-Inter text-sm font-medium text-[#979797] border-dashed border-2 border-[#C7C7C7] flex items-center justify-center flex-col gap-3 rounded overflow-hidden 3xl:w-[293px] bg-[#F6F6F6]">
          <svg
            className=" h-[28px] 3xl:h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="51"
            viewBox="0 0 63 51"
            fill="none"
          >
            <path
              d="M54.1961 0H54.1933C53.1045 0 52.2233 0.89632 52.2233 1.99732V6.9287H47.3594C46.2707 6.9287 45.3895 7.82502 45.3895 8.92601C45.3895 10.0299 46.2707 10.9233 47.3594 10.9233L52.2233 10.9262V15.8547C52.2233 16.9586 53.1045 17.8549 54.1933 17.8549C55.282 17.8549 56.1661 16.9586 56.1661 15.8547V10.9262H61.0271C62.1158 10.9262 62.9999 10.0299 62.9999 8.92602C62.9999 7.82214 62.1158 6.9287 61.0271 6.9287H56.1661V1.99732C56.1661 0.893447 55.282 0 54.1961 0ZM23.4663 10.9148H23.4691C26.0531 10.9148 28.1482 13.0389 28.1482 15.6588C28.1482 18.2816 26.0531 20.4057 23.4663 20.4057C20.8822 20.4057 18.7843 18.2816 18.7843 15.6588C18.7843 13.0389 20.8822 10.9148 23.4663 10.9148ZM23.4663 6.91719V6.92007C18.7047 6.92007 14.8441 10.8312 14.8441 15.659C14.8441 20.4868 18.7045 24.4008 23.4663 24.4008C28.2278 24.4008 32.0884 20.4868 32.0884 15.659C32.0884 10.8311 28.228 6.91719 23.4663 6.91719ZM46.4269 22.9562V22.962C46.4269 22.9591 46.4297 22.9591 46.4297 22.9591C46.731 22.9591 47.0295 23.0715 47.2626 23.2934L59.0373 35.2345V45.7686C59.0202 46.4257 58.4943 46.956 57.8462 46.9733H5.168C4.51703 46.956 3.99112 46.4257 3.97125 45.7686V43.1948L16.323 30.6715C16.559 30.4438 16.8631 30.3286 17.1673 30.3286C17.4658 30.3286 17.7671 30.4409 18.003 30.6658L26.7416 39.5168C27.0998 39.9001 27.6086 40.1365 28.1686 40.1365C28.7628 40.1365 29.2944 39.8713 29.6554 39.4534L45.5832 23.2985C45.8191 23.0709 46.1233 22.9556 46.4275 22.9556L46.4269 22.9562ZM40.7073 0L5.20213 0.00576362L5.1936 0.00288216H5.19076L5.18792 0.00576362H5.18507C2.35377 0.00576362 0.0539975 2.30286 0 5.15333V45.8323C0.0540106 48.6972 2.35945 51 5.19643 51H57.8149C60.6462 51 62.946 48.6972 63 45.8323L62.9972 34.4018C62.9972 33.8542 62.7811 33.3584 62.4286 32.9982L50.0172 20.4093C49.0137 19.4294 47.7174 18.9423 46.424 18.9423L46.4155 18.9451H46.4127L46.407 18.948H46.4041C45.0823 18.948 43.7661 19.461 42.757 20.4813L28.1572 35.2837L20.7577 27.7785C19.7571 26.8014 18.4608 26.3143 17.1645 26.3143H17.1617H17.156C15.8313 26.3143 14.5095 26.8273 13.4975 27.8505L3.9715 37.5117V5.21967C3.9914 4.56254 4.5173 4.03508 5.16825 4.01781L40.7077 3.99764C41.7964 3.99764 42.6805 3.10132 42.6805 1.99745C42.6805 0.893575 41.7961 0 40.7073 0Z"
              fill="#979797"
            />
          </svg>
          <p className=" text-xs 3xl:text-sm">
            Click to upload an image <br />
            or drag and drop it here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
