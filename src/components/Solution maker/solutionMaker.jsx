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

export default function TextEditor() {
  const alignmentIconsArray = [
    <FaAlignLeft size="1.5rem" />,
    <FaAlignCenter size="1.5rem" />,
    <FaAlignRight size="1.5rem" />,
  ];

  const [editorText, setEditorText] = useState("Enter explanation here...");
  const [alignment, setAlignment] = useState({
    svg: (
      <FaAlignLeft
        size="1.5rem"
      />
    ),
    func: "justifyLeft",
  });
  const [fontSize, setFontSize] = useState("1");
  const [alignmentTeerClicked, setAlignmentTeerClicked] = useState(false);
  const [textSizeTeerClicked, setTextSizeTeerClicked] = useState(false);

  function handleChange(e) {
    setEditorText(e.target.value);
  }

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
    console.log("triggered");
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
    <div className="flex justify-center items-center flex-col w-full h-dvh">
      <h1 className="m-2 text-xl font-semibold">
        {"Solution / Explanation :-"}
      </h1>
      <div
        className={`EditorContainer flex-col flex gap-2 relative w-fit pb-20`}
      >
        <div className="border-2 border-black rounded-xl w-[48rem] rounded-tr-none rounded-br-none">
          <div
            className="h-52 max-h-full overflow-y-scroll outline-none p-2"
            id="editor"
            contentEditable
            onChange={handleChange}
            onFocus={() => {
              setAlignmentTeerClicked(false);
              setTextSizeTeerClicked(false);
            }}
            dangerouslySetInnerHTML={{ __html: editorText }}
          />
        </div>
        <div className="functions bg-white flex gap-1 items-center border-2 border-black rounded-md w-fit p-1  right-2 bottom-[0.5rem] m-auto select-none">
          <MdFormatBold
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("bold");
            }}
          />
          <div className="pipe">|</div>
          <MdFormatItalic
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("italic");
            }}
          />
          <div className="pipe">|</div>
          <MdFormatUnderlined
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("underline");
            }}
          />
          <div className="pipe">|</div>

          <div className={`flex attachment w-fit items-center`}>
            <p
              className="text-2xl font-semibold px-4 py-1 active:bg-[var(--black25)] rounded-lg cursor-pointer"
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
                } gap-1 items-center border-2 border-black rounded-md w-fit p-1 absolute bottom-0  left-32 select-none text-xl`}
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
                } gap-1 items-center border-2 border-black rounded-md w-fit p-1 absolute bottom-0  left-56 select-none`}
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
            size="2rem"
            strokeWidth="0.8px"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("insertUnorderedList");
            }}
          />
          <div className={`pipe`}>|</div>
          <LuListOrdered
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("insertOrderedList");
            }}
          />
          <div className={`pipe`}>|</div>
          <TbSubscript
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("subscript");
            }}
          />
          <div className={`pipe`}>|</div>
          <TbSuperscript
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("superscript");
            }}
          />
          <div className={`pipe`}>|</div>
          <MdAttachment
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("insertImage");
            }}
          />
          <div className={`pipe`}>|</div>
          <MdInsertLink
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("createLink");
            }}
          />
          <div className={`pipe`}>|</div>
          <CiCircleMinus
            size="2rem"
            strokeWidth="0.8px"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("removeFormat");
            }}
          />
        </div>
      </div>
    </div>
  );
}
