import React, { useCallback, useState } from "react";
import FilterOptions from "./FilterOptions";

export default function FilterComp() {
  const [showFilterOptions, setShowfilterOptions] = useState(false);
  const toggleFilter = useCallback(() => {
    setShowfilterOptions((prevState) => !prevState);
  }, []);
  return (
    <div className="relative">
      <div
        className="flex flex-col justify-evenly cursor-pointer aspect-square h-12 rounded-xl active:bg-gray-200 transition-all duration-500"
        onClick={toggleFilter}
      >
        <div className="border-2 border-black h-fit w-8 rounded-full relative mx-auto">
          <div
            className={`aspect-square border-2 border-black w-3 absolute top-1/2 -translate-y-1/2 bg-white rounded-[4px] ${
              showFilterOptions ? "left-[15px]" : "left-[2px]"
            } transition-all duration-500`}
          ></div>
        </div>
        <div className="border-2 border-black h-fit w-8 rounded-full relative mx-auto">
          <div
            className={`aspect-square border-2 border-black w-3 absolute top-1/2 -translate-y-1/2 bg-white rounded-[4px] ${
              showFilterOptions ? "left-[2px]" : "left-[15px]"
            } transition-all duration-500`}
          ></div>
        </div>
      </div>
      <div
        className={`absolute z-10 right-0 top-full max-w-[100vw]  ${
          showFilterOptions ? "block" : "hidden"
        }`}
      >
        <FilterOptions />
      </div>
    </div>
  );
}
