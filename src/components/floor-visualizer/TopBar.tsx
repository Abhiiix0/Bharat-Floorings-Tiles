import RoomCard from "./RoomCard";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Room, useFloorVisualizerStore } from "../../store/floorVisualizer.store";

interface TopBarProps {
  rooms: Room[];
}

export default function TopBar({ rooms }: TopBarProps) {
  const selectedRoom = useFloorVisualizerStore((state) => state.selectedRoom);
  const setSelectedRoom = useFloorVisualizerStore(
    (state) => state.setSelectedRoom
  );

  return (
    <div className="w-full bg-white ">
      <ScrollArea className=" whitespace-nowrap rounded-md ">
        <div className="flex w-max gap-4 mr-4 p-2 ">
          {rooms.map((item) => {
            return (
              <RoomCard
                image={item.image}
                name={item.name}
                key={item.id}
                onClick={() => {
                  setSelectedRoom(item);
                }}
                isSelected={item.id === selectedRoom.id}
              />
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}
