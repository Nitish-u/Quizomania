import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { GoCheck } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const CustomTextArea = memo(({ userDescription }) => {
  const ref = useRef(null);
  const [description, setDescription] = useState("No description provided!");
  const [editable, setEditable] = useState(false);

  const changeHndl = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const handleEditClick = useCallback(() => {
    setEditable((prevEditable) => !prevEditable);
    if (!editable) {
      setTimeout(() => {
        ref.current.focus();
        ref.current.setSelectionRange(description.length, description.length);
      }, 0);
    }
  }, [editable, description]);

  const cancelEdit = useCallback(() => {
    setDescription(userDescription);
    setEditable(false);
  }, [userDescription]);

  useEffect(() => {
    setDescription(userDescription);
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4 min-w-72">
      <label htmlFor="description">Description:</label>
      <div className="relative flex-1">
        <textarea
          ref={ref}
          readOnly={!editable}
          id="description"
          className="block h-full w-full shadow-[inset_0_0_6px_gray]  p-4 resize-none rounded-xl min-h-40"
          value={description}
          onChange={changeHndl}
        ></textarea>
        <div className="flex items-center z-10 absolute bottom-2 right-2">
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
            onClick={handleEditClick}
          />
          <RxCross2
            className={`shrink-0 p-2 active:bg-gray-200 rounded-full cursor-pointer ${
              !editable ? "hidden" : "block"
            }`}
            size="2.5rem"
            onClick={cancelEdit}
          />
        </div>
      </div>
    </div>
  );
});

export default CustomTextArea;
