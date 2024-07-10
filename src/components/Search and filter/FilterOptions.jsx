import React, { memo } from "react";
import InterestsComp from "../Interests Comp/InterestsComp";

const FilterOptions = memo(({ toggleFilter }) => {
  return (
    <div className="p-4 border-2 border-black rounded-xl bg-white flex flex-col gap-4 max-w-full">
      <InterestsComp placeholder={"topics"} />
      <div className="btns flex gap-4 justify-center">
        <button
          className="border-2 border-black text-black bg-white p-2 w-28 rounded-full"
          onClick={toggleFilter}
        >
          Clear all
        </button>
        <button
          className="border-2 border-black text-white bg-black p-2 w-28 rounded-full"
          onClick={toggleFilter}
        >
          Apply
        </button>
      </div>
    </div>
  );
});
export default FilterOptions;
