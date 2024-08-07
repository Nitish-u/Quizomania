import React, { useCallback, useState } from "react";
import FilterOptions from "./FilterOptions";

export default function FilterComp() {
  const [showFilterOptions, setShowfilterOptions] = useState(false);
  const [interests, setInterests] = useState([]);
  const toggleFilter = useCallback((e) => {
    const id = e.currentTarget.id;
    if(id == "clear all"){
      setInterests(prevState => []);
      console.log("changed state");
    }
    setShowfilterOptions((prevState) => !prevState);
  }, []);
  return (
    <div className="relative">
      <div
        className="flex flex-col justify-evenly cursor-pointer aspect-square h-12 rounded-xl active:bg-gray-200 transition-all duration-500"
        onClick={toggleFilter}
      >
        <div className="border-2 border-black h-fit w-9 rounded-full relative mx-auto">
          <div
            className={`aspect-square border-2 border-black w-3 absolute top-1/2 -translate-y-1/2 bg-white rounded-[4px] ${
              showFilterOptions ? "left-[17px]" : "left-[4px]"
            } transition-all duration-500`}
          ></div>
        </div>
        <div className="border-2 border-black h-fit w-9 rounded-full relative mx-auto">
          <div
            className={`aspect-square border-2 border-black w-3 absolute top-1/2 -translate-y-1/2 bg-white rounded-[4px] ${
              showFilterOptions ? "left-[4px]" : "left-[17px]"
            } transition-all duration-500`}
          ></div>
        </div>
      </div>
      <div
        className={`absolute z-10 right-0 top-16 max-w-[100vw] transition-all duration-500 ${
          showFilterOptions ? "" : "translate-x-96 scale-0"
        }`}
      >
        <FilterOptions interests={interests} setInterests={setInterests} toggleFilter={toggleFilter} />
      </div>
    </div>
  );
}
