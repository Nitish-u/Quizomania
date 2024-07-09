import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { GoCheck } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const InputComp = memo(({ value, type }) => {
  const ref = useRef(null);
  const [oldValue, setOldValue] = useState(value);
  const [editable, setEditable] = useState(false);
  const [innerText, setInnerText] = useState(value || "Unknown");

  const handleEditClick = useCallback(() => {
    setEditable((prev) => !prev);
    if (!editable) {
      setTimeout(() => {
        ref.current.focus();
      }, 0);
    }
  }, [editable]);

  const saveChanges = useCallback(() => {
    setOldValue(innerText);
    setEditable(false);
  }, [innerText]);

  const handleChange = useCallback((e) => {
    setInnerText(e.target.value);
  }, []);

  const cancelEdit = useCallback(() => {
    setInnerText(oldValue);
    setEditable(false);
  }, [oldValue]);

  useEffect(() => {
    if (value) {
      setInnerText(value);
      setOldValue(value);
    }
  }, [value]);

  return (
    <div className="flex items-center gap-4 py-0 justify-between sm:p-2 w-full">
      <input
        type={type}
        ref={ref}
        readOnly={!editable}
        className={`outline-none w-full text-xl flex-1 ${
          editable
            ? "shadow-[inset_0_0_6px_gray]"
            : "shadow-[0_0_6px_gray]"
        } rounded-xl transition-shadow duration-500 sm:p-4 p-2`}
        onChange={handleChange}
        value={innerText}
      />
      <MdOutlineModeEditOutline
        className={`shrink-0 p-2 active:bg-gray-200 rounded-full cursor-pointer ${
          editable ? "hidden" : "block"
        }`}
        size="2.5rem"
        onClick={handleEditClick}
      />
      <GoCheck
        className={`shrink-0 p-2 active:bg-gray-200 rounded-full cursor-pointer ${
          !editable ? "hidden" : "block"
        }`}
        size="2.5rem"
        onClick={saveChanges}
      />
      <RxCross2
        className={`shrink-0 p-2 active:bg-gray-200 rounded-full cursor-pointer ${
          !editable ? "hidden" : "block"
        }`}
        size="2.5rem"
        onClick={cancelEdit}
      />
    </div>
  );
});

export default InputComp;
