"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropDowns = ({ section, subsection, color }) => {
  const [click, setClick] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="font-bold relative">
        <div
          onClick={() => setClick(!click)}
          className={`flex h-fit items-center font-bold cursor-pointer text-[13px] sm:text-base font-Inter text-[${color}]`}
        >
          {section}{" "}
          {click ? (
            <IoIosArrowDown className={`ml-1 text-text-[${color}]`} />
          ) : (
            <IoIosArrowUp className={`ml-1 text-text-[${color}]`} />
          )}
        </div>

        <div className="cursor-pointer  font-bold text-lg  font-Inter">
          {selected}
        </div>
        {click && (
          <div className="absolute top-6 left-0 font-normal bg-slate-100 rounded-sm  p-1  z-[2000]">
            {subsection.map(({ id, subs }) => (
              <div
                onClick={() => {
                  setSelected(subs);
                  setClick(!click);
                }}
                className=" cursor-pointer text-lg  font-Inter"
                key={id}
              >
                {subs}
              </div>
            ))}
            <div
              onClick={() => {
                setSelected("dummy");
                setClick(!click);
              }}
              key="dummy"
              className=" cursor-pointer  text-lg font-Inter"
            >
              dummy
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDowns;
