import Image, { StaticImageData } from "next/image";
import { Card } from "../ui/card";

interface RoomCardProps {
  image: string | StaticImageData;
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function RoomCard({
  image,
  name,
  isSelected,
  onClick,
}: RoomCardProps) {
  return (
    <Card
      className={`rounded-sm p-1 ${isSelected ? "border border-black" : ""} `}
      onClick={onClick}
    >
      <div className="h-24 w-44">
        <Image
          src={image}
          alt={name}
          objectFit="contain"
          className="rounded-md"
        />
      </div>

      <div className="flex items-center justify-center pt-2">
        <h2 className="text-sm">{name}</h2>
      </div>
    </Card>
  );
}
