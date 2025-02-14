"use client";
import BorderSvgComponent from "../../components/border/BorderSvgComponent";
import { boorderTilesSvg } from "../../data/borders";
import { useTilesBorderStore } from "../../store/tilesBorder.store";
import { useTilesStore } from "../../store/tiles.store";

interface BorderTilesPairProps {
  svgStringCorner: string;
  svgStringTopBottom: string;
  svgStringLeftRight: string;
}

export default function BorderTilesPair({
  svgStringCorner,
  svgStringLeftRight,
  svgStringTopBottom,
}: BorderTilesPairProps) {
  const borderCorner = useTilesBorderStore((state) => state.borderCorner);
  const borderLeftRight = useTilesBorderStore((state) => state.borderLeftRight);
  const borderTopBottom = useTilesBorderStore((state) => state.borderTopBottom);

  return (
    <div className="p-10">
      <div className="flex items-center">
        <BorderSvgComponent
          svgString={svgStringCorner}
          height={50}
          width={50}
          color={borderCorner.color}
          borderType={"corner"}
          isFloor={false}
        />
        <BorderSvgComponent
          svgString={svgStringTopBottom}
          height={50}
          width={100}
          color={borderTopBottom.color}
          borderType={"topBottom"}
          isFloor={false}
        />
      </div>
      <BorderSvgComponent
        svgString={svgStringLeftRight}
        height={100}
        width={50}
        color={borderLeftRight.color}
        borderType={"leftRight"}
        isFloor={false}
      />
    </div>
  );
}
