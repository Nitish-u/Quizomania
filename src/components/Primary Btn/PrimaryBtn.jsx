import React, { memo } from "react";

const PrimaryBtn = memo(({ id, className, onClick, placeholder }) => {
  return (
    <button
      id={id}
      className={`border-2 border-black bg-black rounded-full text-white flex justify-center items-center gap-2 ${className}`}
      onClick={onClick}
    >
      {placeholder}
    </button>
  );
});

export default PrimaryBtn;
