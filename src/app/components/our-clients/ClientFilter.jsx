"use client";
import GridLogo from "../../../../public/icons/GridLogo";
import DropDowns from "../DropDowns";
import LinesLogo from "../../../../public/icons/LinesLogo.jsx";
const allCleints = [{ id: 1, subs: "ALL CLIENTS" }];
const ClientFilter = ({ changeView, setChangeView }) => {
  return (
    <div className="flex items-center justify-between">
      <din className="flex lg:items-center lg:gap-0 gap-4 lg:flex-row flex-col w-full lg:justify-between lg:w-1/5">
        <div className="effect gap-2 flex relative ">
          <div
            className={`absolute effect h-9 w-[38px] z-0 mt-[2px] ${
              changeView ? "bg-[#949291]" : "bg-[#2A2523]"
            } ${changeView ? "ml-[50px]" : null}`}
          ></div>
          <div
            onClick={() => setChangeView(false)}
            className="p-[5px] z-10  cursor-pointer"
          >
            <GridLogo color={`${changeView ? "#000" : "#fff"}`} />
          </div>
          <div
            onClick={() => setChangeView(true)}
            className="p-[5px] z-10 cursor-pointer "
          >
            <LinesLogo color={`${changeView ? "#fff" : "#000"}`} />
          </div>
        </div>
        <div className="w-2/4">
          <DropDowns section={"Client type"} subsection={allCleints} />
        </div>
      </din>
      <div className="lg:text-base text-xs font-Inter">Showing 299 clients</div>
    </div>
  );
};

export default ClientFilter;
