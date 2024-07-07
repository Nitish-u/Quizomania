import React, { memo } from "react";

const PrimaryBtn = memo(({ className, onClick, placeholder }) => {
  return (
    <button
      className={`border-2 h-12 border-black bg-[var(--black100)] rounded-full p-3 px-14 text-white flex justify-center items-center gap-2 ${className}`}
      onClick={onClick}
    >
      {placeholder}
    </button>
  );
});

export default PrimaryBtn;
