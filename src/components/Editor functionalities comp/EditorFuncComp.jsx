import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { MdFormatBold, MdFormatItalic } from "react-icons/md";
import { FaUnderline } from "react-icons/fa";
import { LuListOrdered } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";
import { TbSubscript, TbSuperscript } from "react-icons/tb";
import { MdOutlineImage } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { FaAlignRight, FaAlignLeft, FaAlignCenter } from "react-icons/fa6";

export default function EditorFuncComp({alignmentArrowClicked, setAlignmentArrowClicked, fontArrowClicked, setFontArrowClicked}) {
  const alignmentIconsArray = [
    <FaAlignLeft size="1.2em" />,
    <FaAlignCenter size="1.2em" />,
    <FaAlignRight size="1.2em" />,
  ];

  const [fontSize, setFontSize] = useState({ type: "Normal text", size: 4 });
  const [alignmentType, setAlignmentType] = useState({
    index: 0,
    func: "justifyLeft",
  });
  function fontSizeChanger(e) {
    e.stopPropagation();
    const currentTarget = e.currentTarget;
    const fontSize = currentTarget.getAttribute("func-size");
    const fontType = currentTarget.innerText;
    setFontSize((prevState) => {
      return { ...prevState, type: fontType, size: fontSize };
    });
    setFontArrowClicked(false);
  }

  function alignmentTypeChanger(e) {
    const currentTarget = e.currentTarget;
    const iconIndex = currentTarget.getAttribute("func-index");
    const iconFunction = currentTarget.getAttribute("func-type");
    setAlignmentType((prevState) => {
      return { ...prevState, index: iconIndex, func: iconFunction };
    });
    setAlignmentArrowClicked(false);
  }

  function handleFunctionalKeyClick(...funcData) {
    const func = funcData[0];
    const val = funcData[1];
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
          document.execCommand(func, false);
        }
      }
    }
  }
  return (
    <>
      <IconContext.Provider
        value={{ color: "black", className: "functionalKeys", size: "1.6rem" }}
      >
        <div
          className="functionalKeysContainer bg-white select-none flex items-center w-fit gap-1 p-2 sm:px-4 rounded-lg max-w-full flex-wrap xl:flex-nowrap justify-center"
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          }}
        >
          <div className="relative" id="fontSizeContainer">
            <div
              className={`fontSizeContainer min-w-fit flex items-center font-semibold cursor-pointer ${
                fontArrowClicked ? "bg-slate-100" : ""
              } rounded-lg `}
              id="currentFontSizeContainer"
            >
              <span
                className="w-24"
                func-size={fontSize.size}
                onClick={() =>
                  handleFunctionalKeyClick("fontSize", fontSize.size)
                }
              >
                {fontSize.type}
              </span>
              <IoIosArrowDown
                size="1.2em"
                className="active:translate-y-1 transition-transform duration-300 mt-1"
                onClick={(e) => {
                  setAlignmentArrowClicked(false);
                  setFontArrowClicked(!fontArrowClicked);
                  e.stopPropagation();
                }}
              />
            </div>
            <span
              className={`fontSizes absolute top-10 ${
                fontArrowClicked ? "" : "hidden"
              } bg-white w-fit mt-4 rounded-xl cursor-pointer overflow-hidden z-30`}
              style={{
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
              }}
            >
              <p
                className="w-32 p-2 px-4 hover:bg-slate-200"
                func-size="7"
                onClick={fontSizeChanger}
              >
                Header
              </p>
              <p
                className="w-32 p-2 px-4 hover:bg-slate-200"
                func-size="6"
                onClick={fontSizeChanger}
              >
                Title
              </p>
              <p
                className="w-32 p-2 px-4 hover:bg-slate-200"
                func-size="5"
                onClick={fontSizeChanger}
              >
                Sub-title
              </p>
              <p
                className="w-32 p-2 px-4 hover:bg-slate-200"
                func-size="4"
                onClick={fontSizeChanger}
              >
                Normal text
              </p>
            </span>
          </div>
          <p className="bg-slate-200" id="pipe">
            &nbsp;
          </p>
          <div
            className="Bold icons"
            onClick={() => handleFunctionalKeyClick("bold")}
          >
            <MdFormatBold className="w-8" />
          </div>
          <div
            className="Italic icons"
            onClick={() => handleFunctionalKeyClick("italic")}
          >
            <MdFormatItalic />
          </div>
          <div
            className="Underline px-1 icons flex items-center justify-center"
            onClick={() => handleFunctionalKeyClick("underline")}
          >
            <FaUnderline size="1.1em" />
          </div>
          <p className="bg-slate-200" id="pipe">
            &nbsp;
          </p>
          <div
            className="UL icons"
            onClick={() => handleFunctionalKeyClick("insertUnorderedList")}
          >
            <GoListUnordered strokeWidth="1px" />
          </div>
          <div
            className="OL icons"
            onClick={() => handleFunctionalKeyClick("insertOrderedList")}
          >
            <LuListOrdered strokeWidth="2.3px" />
          </div>
          <p className="bg-slate-200" id="pipe">
            &nbsp;
          </p>
          <div
            className={`relative ${
              alignmentArrowClicked ? "bg-slate-100" : ""
            }`}
            id="alignmentContainersParent"
          >
            <div className="flex gap-1 items-center justify-center" id="alignmentContainer">
              <span
                func-type={alignmentType.func}
                onClick={() => handleFunctionalKeyClick(alignmentType.func)}
              >
                {alignmentIconsArray[alignmentType.index]}
              </span>
              <IoIosArrowDown
                size="1.2em"
                className="active:translate-y-1 transition-transform duration-300"
                onClick={(e) => {
                  setFontArrowClicked(false);
                  setAlignmentArrowClicked(!alignmentArrowClicked);
                  e.stopPropagation();
                }}
              />
            </div>
            <span
              className={`alignmentOptions absolute top-14 bg-white flex gap-2 p-2 rounded-lg items-center ${
                alignmentArrowClicked ? "" : "hidden"
              }`}
              style={{
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
              }}
            >
              <p
                func-index="0"
                func-type="justifyLeft"
                onClick={alignmentTypeChanger}
              >
                <FaAlignLeft size="1.5em" />
              </p>
              <div className="bg-slate-200" id="pipe">
                &nbsp;
              </div>
              <p
                func-index="1"
                func-type="justifyCenter"
                onClick={alignmentTypeChanger}
              >
                <FaAlignCenter size="1.5em" />
              </p>
              <div className="bg-slate-200" id="pipe">
                &nbsp;
              </div>
              <p
                func-index="2"
                func-type="justifyRight"
                onClick={alignmentTypeChanger}
              >
                <FaAlignRight size="1.5em" />
              </p>
            </span>
          </div>
          <p className="bg-slate-200" id="pipe">
            &nbsp;
          </p>
          <div className="icons" onClick={() => handleFunctionalKeyClick("subscript")}>
            <TbSubscript />
          </div>
          <div className="icons" onClick={() => handleFunctionalKeyClick("superscript")}>
            <TbSuperscript />
          </div>
          <p className="bg-slate-200" id="pipe">
            &nbsp;
          </p>
          <div
            className="attachment icons"
            onClick={() => handleFunctionalKeyClick("insertImage")}
          >
            <MdOutlineImage />
          </div>
          <p className="bg-slate-200 icons" id="pipe">
            &nbsp;
          </p>
          <div
            className="removeFormatting"
            onClick={() => handleFunctionalKeyClick("removeFormat")}
          >
            <CiCircleMinus strokeWidth="1px" />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
