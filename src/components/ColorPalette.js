import { ColorResult, CompactPicker } from "react-color";
import { useTilesStore } from "../store/tiles.store";
import Remix from "../../public/icons/remix";
import "./color.css";
export default function ColorPalette() {
  const selectedColor = useTilesStore((state) => state.selectedColor);
  const setSelectedColor = useTilesStore((state) => state.setSelectedColor);

  const handleChangeComplete = (color) => {
    setSelectedColor(color.hex);
  };
  const colorCodes = [
    {
      id: 1,
      Ccode: "#F0E7DC",
    },
    {
      id: 2,
      Ccode: "#FFFCF3",
    },
    {
      id: 3,
      Ccode: "#EED6CA",
    },
    {
      id: 4,
      Ccode: "#F3BF8F",
    },
    {
      id: 5,
      Ccode: "#E1A080",
    },
    {
      id: 6,
      Ccode: "#BE8979",
    },
    {
      id: 7,
      Ccode: "#94796E",
    },
    {
      id: 8,
      Ccode: "#E49994",
    },
    {
      id: 9,
      Ccode: "#E99CA2",
    },
    {
      id: 10,
      Ccode: "#E8A08C",
    },
    {
      id: 11,
      Ccode: "#AE635D",
    },
    {
      id: 12,
      Ccode: "#916660",
    },
    {
      id: 13,
      Ccode: "#5B4C4D",
    },
    {
      id: 14,
      Ccode: "#BFA98E",
    },
    {
      id: 15,
      Ccode: "#77796E",
    },
    {
      id: 16,
      Ccode: "#698A76",
    },
    {
      id: 17,
      Ccode: "##6B8175",
    },
    {
      id: 18,
      Ccode: "#9CBEA5",
    },
    {
      id: 19,
      Ccode: "#72BAE4",
    },
    {
      id: 20,
      Ccode: "#7EA8B4",
    },
    {
      id: 21,
      Ccode: "#3E5984",
    },
    {
      id: 2,
      Ccode: "#FFFCF3",
    },
  ];
  return (
    <div className=" items-start px-3 flex justify-between 3xl:justify-center">
      <div className=" grid grid-cols-9 gap-1 ">
        {colorCodes?.map((color, i) => (
          <button
            onClick={() => setSelectedColor(color?.Ccode)}
            style={{ backgroundColor: color.Ccode }}
            key={i}
            className={` h-[18px] w-[18px] border 3xl:h-6 3xl:w-6  rounded-full`}
          ></button>
        ))}
      </div>
      <div className=" 3xl:ml-7 h-full flex items-start ">
        <div
          className=""
          style={{
            backgroundColor: selectedColor,
          }}
        >
          <Remix className="remix-color  3xl:h-8 3xl:w-8"></Remix>
        </div>
      </div>
    </div>
  );
}
