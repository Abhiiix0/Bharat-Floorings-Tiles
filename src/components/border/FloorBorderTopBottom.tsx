import BorderSvgComponent from "./BorderSvgComponent";
import { useTilesBorderStore } from "../../store/tilesBorder.store";

interface FloorBorderTopBottomProps {
  svgString: string;
  rotation: number;
  height: number;
  width: number;
}

export default function FloorBorderTopBottom({
  svgString,
  rotation,
  height,
  width,
}: FloorBorderTopBottomProps) {
  const borderTopBottom = useTilesBorderStore((state) => state.borderTopBottom);

  return (
    <div className="flex">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index}>
          <BorderSvgComponent
            svgString={svgString}
            height={height}
            width={width}
            color={borderTopBottom.color}
            borderType={"topBottom"}
            isFloor={true}
            rotation={rotation}
          />
        </div>
      ))}
    </div>
  );
}
