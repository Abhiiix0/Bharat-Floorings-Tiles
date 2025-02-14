import BorderSvgComponent from "./BorderSvgComponent";
import { useTilesBorderStore } from "../../store/tilesBorder.store";

interface FloorBorderLeftRightProps {
  svgString: string;
  rotation: number;
  height: number;
  width: number;
}

export default function FloorBorderLeftRight({
  svgString,
  rotation,
  height,
  width,
}: FloorBorderLeftRightProps) {
  const borderLeftRight = useTilesBorderStore((state) => state.borderLeftRight);

  return (
    <div className="flex flex-col">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index}>
          <BorderSvgComponent
            svgString={svgString}
            height={height}
            width={width}
            color={borderLeftRight.color}
            borderType={"topBottom"}
            isFloor={true}
            rotation={rotation}
          />
        </div>
      ))}
    </div>
  );
}
