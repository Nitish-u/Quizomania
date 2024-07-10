import React from "react";
import FilterComp from "./FilterComp";

export default function SearchAndFilter() {
  return (
    <div className="flex gap-4 items-center max-w-full">
      <input
        type="text"
        placeholder="Search for quizes..."
        className="outline-none border-2 border-black p-3 rounded-tl-xl rounded-full w-full"
      />
      <div className="flex-1 shrink-0 max-w-fit self-stretch">
        <FilterComp />
      </div>
    </div>
  );
}
