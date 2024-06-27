import { useEffect, useId, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function OptionsComp({ type, onFocusHandler, height }) {
  const id = useId();
  const [options, setOptions] = useState(["Option 1"]);
  const [optionsContainerMaxHeight, setOptionsContainerMaxHeight] =
    useState(164);
  function optionAdder() {
    const newOption = "Option " + (options.length + 1);
    setOptions((prevState) => {
      return [...prevState, newOption];
    });
  }
  function dltOption(e) {
    const item = e.currentTarget.previousSibling.children[1].innerText;
    const optionIndex = [...options].indexOf(item);
    setOptions((prevState) => {
      const updatedOptions = [...prevState];
      updatedOptions.splice(optionIndex, 1);
      return updatedOptions;
    });
  }

  useEffect(() => {
    const optionsContainer = document.getElementById("optionsContainer");
    const optionsContainerHeight =
      optionsContainer.getBoundingClientRect().height;
    console.log(optionsContainerHeight);
    setOptionsContainerMaxHeight(optionsContainerHeight);
  }, []);
  return (
    <div
      id="optionsContainer"
      className="px-4 h-full overflow-y-auto flex-1"
    >
      <div style={{height: `${optionsContainerMaxHeight}px`}}>
        {type == "checkbox" || type == "radio" ? (
          <div>
            {options.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 items-center justify-between"
                >
                  <div className="flex gap-2">
                    <input
                      type={type}
                      className="w-4 cursor-not-allowed"
                      id={index}
                      disabled
                    />
                    <label
                      htmlFor={index}
                      contentEditable
                      className="optionData text-xl outline-none cursor-pointer"
                      dangerouslySetInnerHTML={{ __html: elem }}
                      onFocusCapture={onFocusHandler}
                    />
                  </div>
                  <RxCross2
                    className="cursor-pointer w-6"
                    color="grey"
                    size="1.5rem"
                    onClick={dltOption}
                  />
                </div>
              );
            })}
            <p
              onClick={optionAdder}
              className="flex gap-1 items-center hover:underline cursor-pointer"
            >
              <IoMdAddCircleOutline size="1.2rem" />
              Add option
            </p>
          </div>
        ) : (
          <>
            <div
              className={`${
                type == "checkbox" || type == "radio" ? "hidden" : ""
              } border-b-2 border-slate-400 py-2`}
            >
              {type}
            </div>
            <p
              className={`${
                type == "checkbox" || type == "radio" ? "hidden" : ""
              } border-b-2 border-slate-400 py-2`}
            >
              {" "}
              &nbsp;
            </p>
            <p
              className={`${
                type == "checkbox" || type == "radio" ? "hidden" : ""
              } ${
                type == "Short Answer text" ? "hidden" : ""
              } border-b-2 border-slate-400 py-2`}
            >
              {" "}
              &nbsp;
            </p>
          </>
        )}
      </div>
    </div>
  );
}
