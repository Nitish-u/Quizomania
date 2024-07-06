import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { functions, fontVarients, alignments } from "./eidtorFunctionCompData";

export default function EditorFuncComp({
  alignmentArrowClicked,
  setAlignmentArrowClicked,
  fontArrowClicked,
  setFontArrowClicked,
}) {
  const [fontSize, setFontSize] = useState(0);
  const [alignmentType, setAlignmentType] = useState(0);

  function handleFunctionalKeyClick(...funcData) {
    const func = funcData[0];
    const val = funcData[1];
    console.log("func: ", func)
    console.log("val: ", val)
    if (val) {
      document.execCommand("fontSize", false, Number(val));
    } else {
      if (func) {
        if (func == "insertImage") {
          const url = prompt("Enter url here", "http://");
          if (url !== null) {
            document.execCommand(func, false, url);
          }
        } else {
          console.log(func);
          document.execCommand(func, false);
        }
      }
    }
  }
  return (
    <IconContext.Provider value={{size: "1.5rem"}}>
    <div className="flex items-center p-2 rounded-xl gap-4 shadow-[0_0_4px_gray]">
      {/* font size changer section */}
      <div className="fontSizesContainer justify-between flex items-center relative select-none">
        <div className="active:bg-gray-100 p-1 w-24 rounded-md cursor-pointer flex-1 text-center break-keep" onClick={() => handleFunctionalKeyClick("fontSize", fontVarients[fontSize].size)}>{fontVarients[fontSize].sizeName}</div>
        <div
          className={`h-full grid items-center rounded-md cursor-pointer group transition-colors duration-500 ${
            fontArrowClicked ? "bg-gray-100" : ""
          }`}
          onClick={() => setFontArrowClicked(!fontArrowClicked)}
        >
          <IoIosArrowDown
            className={`group-active:translate-y-1 transition-transform duration-500 ${
              fontArrowClicked ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`absolute rounded-xl bg-white overflow-hidden cursor-pointer top-8 left-1/2 -translate-x-1/2 ${
            fontArrowClicked ? "" : "hidden"
          }`}
        >
          {fontVarients.map((elem, index) => {
            return (
              <p
                className={`w-32 text-center py-1 hover:bg-gray-100 ${
                  fontSize == index ? "bg-gray-100" : ""
                }`}
                key={elem.sizeName}
                onClick={() => {
                  setFontSize(index);
                  setFontArrowClicked(!fontArrowClicked);
                  handleFunctionalKeyClick("fontSize", fontVarients[index].size);
                }}
              >
                {elem.sizeName}
              </p>
            );
          })}
        </div>
      </div>
      {/* Alignment section */}
      <div className="alignmentContainer flex gap-1 items-center relative">
        <div className="p-1 active:bg-gray-100 cursor-pointer rounded-md" onClick={() => handleFunctionalKeyClick(alignments[alignmentType].type)}>{alignments[alignmentType].icon}</div>
        <div
          className={`h-full grid items-center rounded-md cursor-pointer group transition-colors duration-500 ${
            alignmentArrowClicked ? "bg-gray-100" : ""
          }`}
          onClick={() => setAlignmentArrowClicked(!alignmentArrowClicked)}
        >
          <IoIosArrowDown
            className={`group-active:translate-y-1 transition-transform duration-500 ${
              alignmentArrowClicked ? "rotate-180" : ""
            }`}
          />
        </div>
        <div className={`alignmentOptionsContainer absolute flex items-center gap-1 border-2 border-black top-8 rounded-md bg-white overflow-hidden ${alignmentArrowClicked ? "" : "hidden"}`}>
          {alignments.map((elem, index) => {
            return <div className="p-1 hover:bg-gray-100 cursor-pointer" key={elem.type} onClick={() => {setAlignmentType(index); setAlignmentArrowClicked(!alignmentArrowClicked); handleFunctionalKeyClick(alignments[index].type)}}>{elem.icon}</div>
          })}
        </div>
      </div>
      {/* other fucntions */}
      {functions.map((elem,index) => {
        return <div key={elem.function} className="p-1 active:bg-gray-100">{elem.icon}</div>
      })}
    </div>
    </IconContext.Provider>
  );
}
