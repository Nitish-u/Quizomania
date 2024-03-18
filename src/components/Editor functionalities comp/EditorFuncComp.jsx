import React, { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from "react-icons/md";
import { LuListOrdered } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";
import { TbSubscript, TbSuperscript } from "react-icons/tb";
import { MdAttachment, MdInsertLink } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { FaAlignRight, FaAlignLeft, FaAlignCenter } from "react-icons/fa6";

export default function EditorFuncComp({alignmentTeerClicked, setAlignmentTeerClicked, textSizeTeerClicked, setTextSizeTeerClicked}) {
  const alignmentIconsArray = [
    <FaAlignLeft size="1.2rem" />,
    <FaAlignCenter size="1.2rem" />,
    <FaAlignRight size="1.2rem" />,
  ];
  const [alignment, setAlignment] = useState({
    svg: <FaAlignLeft size="1.2rem" />,
    func: "justifyLeft",
  });
  const [fontSize, setFontSize] = useState("1");
  function alignmentTeerControl() {
    setTextSizeTeerClicked(false);
    setAlignmentTeerClicked(!alignmentTeerClicked);
  }

  function textSizeTeerControl() {
    setAlignmentTeerClicked(false);
    setTextSizeTeerClicked(!textSizeTeerClicked);
  }

  function fontSizeChanger(e) {
    const size = e.target.innerText;
    setFontSize(size);
    setTextSizeTeerClicked(false);
  }

  function alignmentIconSelector(e) {
    const iconFunc = e.currentTarget.getAttribute("data-func");
    let alignmentIconIndex = 0;
    switch (iconFunc) {
      case "justifyLeft":
        alignmentIconIndex = 0;
        break;
      case "justifyCenter":
        alignmentIconIndex = 1;
        break;
      case "justifyRight":
        alignmentIconIndex = 2;
        break;
    }
    const svgIcon = alignmentIconsArray[alignmentIconIndex];
    if (svgIcon && iconFunc) {
      setAlignment((prevState) => {
        return { ...prevState, svg: svgIcon, func: iconFunc };
      });
      setAlignmentTeerClicked(false);
    } else {
      console.log("invalid target");
    }
  }
  function handleFunctionalKeyClick(...funcData) {
    const func = funcData[0];
    const val = funcData[1];
    if (val) {
      document.execCommand("fontSize", false, Number(val));
    } else {
      if (func) {
        if (func == "insertImage" || func == "createLink") {
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
      <div className="functions bg-white flex gap-1 items-center border-2 border-black rounded-md w-fit p-1 select-none m-auto flex-wrap">
        <MdFormatBold
          size="1.5rem"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("bold");
          }}
        />
        <div className="pipe">|</div>
        <MdFormatItalic
          size="1.5rem"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("italic");
          }}
        />
        <div className="pipe">|</div>
        <MdFormatUnderlined
          size="1.5rem"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("underline");
          }}
        />
        <div className="pipe">|</div>
        <div className={`flex attachment w-fit items-center`}>
          <p
            className="text-2xl font-semibold w-6 text-center ml-1 py-1 active:bg-[var(--black25)] rounded-lg cursor-pointer"
            data-value={fontSize}
            onClick={() => {
              handleFunctionalKeyClick("fontSize", fontSize);
            }}
          >
            {fontSize}
          </p>
          <div className="teer-container w-fit group">
            <FaArrowDownLong
              className={`teerStyles ${
                textSizeTeerClicked ? "rotate-180" : ""
              }`}
              size="1.5rem"
              onClick={textSizeTeerControl}
            />
            <div
              className={`different-alignments bg-white ${
                textSizeTeerClicked
                  ? "-translate-y-36 flex"
                  : "-translate-y-20 hidden"
              } gap-1 items-center border-2 border-black rounded-md w-fit p-1 absolute top-[17.5rem] left-32 select-none text-xl`}
            >
              <p className="font-sizes" onClick={fontSizeChanger}>
                1
              </p>
              <p className="font-sizes" onClick={fontSizeChanger}>
                2
              </p>
              <p className="font-sizes" onClick={fontSizeChanger}>
                3
              </p>
              <p className="font-sizes" onClick={fontSizeChanger}>
                4
              </p>
              <p className="font-sizes" onClick={fontSizeChanger}>
                5
              </p>
              <p className="font-sizes" onClick={fontSizeChanger}>
                6
              </p>
              <p className="font-sizes" onClick={fontSizeChanger}>
                7
              </p>
            </div>
          </div>
        </div>
        <div className={`pipe`}>|</div>
        <div className={`flex attachment w-fit items-center`}>
          <div
            className="currentAlignmentIconContainer cursor-pointer active:bg-[var(--black25)] rounded-lg p-2"
            onClick={() => {
              handleFunctionalKeyClick(alignment.func);
            }}
          >
            {alignment.svg}
          </div>
          <div className="teer-container w-fit group">
            <FaArrowDownLong
              className={`teerStyles ${
                alignmentTeerClicked ? "rotate-180" : ""
              }`}
              size="1.5rem"
              onClick={alignmentTeerControl}
            />
            <div
              className={`different-alignments bg-white ${
                alignmentTeerClicked
                  ? "-translate-y-36 flex"
                  : "-translate-y-20 hidden"
              } gap-1 items-center border-2 border-black rounded-md w-fit p-1 absolute top-[17.5rem] left-56 select-none`}
            >
              <div data-func="justifyLeft" onClick={alignmentIconSelector}>
                <FaAlignLeft
                  className="p-2 w-11 cursor-pointer active:bg-[var(--black25)] rounded-lg"
                  size="2.75rem"
                />
              </div>
              <div className="pipe">|</div>
              <div data-func="justifyCenter" onClick={alignmentIconSelector}>
                <FaAlignCenter
                  className="p-2 w-11 cursor-pointer active:bg-[var(--black25)] rounded-lg"
                  size="2.75rem"
                />
              </div>
              <div className="pipe">|</div>
              <div data-func="justifyRight" onClick={alignmentIconSelector}>
                <FaAlignRight
                  className="p-2 w-11 cursor-pointer active:bg-[var(--black25)] rounded-lg"
                  size="2.75rem"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`pipe`}>|</div>
        <GoListUnordered
          size="1.5rem"
          strokeWidth="0.8px"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("insertUnorderedList");
          }}
        />
        <div className={`pipe`}>|</div>
        <LuListOrdered
          size="1.5rem"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("insertOrderedList");
          }}
        />
        <div className={`pipe`}>|</div>
        <TbSubscript
          size="1.8rem"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("subscript");
          }}
        />
        <div className={`pipe`}>|</div>
        <TbSuperscript
          size="1.8rem"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("superscript");
          }}
        />
        <div className={`pipe`}>|</div>
        <MdAttachment
          size="1.8rem"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("insertImage");
          }}
        />
        <div className={`pipe`}>|</div>
        <MdInsertLink
          size="1.8rem"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("createLink");
          }}
        />
        <div className={`pipe`}>|</div>
        <CiCircleMinus
          size="1.8rem"
          strokeWidth="0.8px"
          className="otherFunctionalIcons"
          onClick={() => {
            handleFunctionalKeyClick("removeFormat");
          }}
        />
      </div>
    </>
  );
}
