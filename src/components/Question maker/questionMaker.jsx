import React, { useState } from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from "react-icons/md";
import { LuListOrdered } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";
import { TbSubscript, TbSuperscript } from "react-icons/tb";
import { MdAttachment } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";

export default function QuestionMaker() {
  const [editorText, setEditorText] = useState("Enter question here...");

  function handleChange(e) {
    setEditorText(e.target.value);
  }

  function handleFunctionalKeyClick(func) {
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

  return (
    <div className="flex justify-center items-center flex-col w-full h-dvh">
      <div className="EditorContainer flex-col flex gap-1 relative w-fit">
        <div className="border-2 border-black rounded-xl p-1">
          <div
            className="w-[45rem] max-w-full p-2 h-fit max-h-20 overflow-y-scroll text-3xl outline-none"
            id="editor"
            contentEditable
            onChange={handleChange}
            dangerouslySetInnerHTML={{ __html: editorText }}
          />
        </div>
        <div className="functions bg-white flex gap-1 items-center border-2 border-black rounded-md w-fit p-1 m-auto select-none">
          <MdFormatBold
            className="cursor-pointer rounded-lg w-fit h-fit p-1 active:bg-[var(--black25)]"
            size="2rem"
            onClick={() => {
              handleFunctionalKeyClick("bold");
            }}
          />
          <div className="pipe">|</div>
          <MdFormatItalic
            className="cursor-pointer rounded-lg w-fit h-fit p-1 active:bg-[var(--black25)]"
            size="2rem"
            onClick={() => {
              handleFunctionalKeyClick("italic");
            }}
          />
          <div className="pipe">|</div>
          <MdFormatUnderlined
            className="cursor-pointer rounded-lg w-fit h-fit p-1 active:bg-[var(--black25)]"
            size="2rem"
            onClick={() => {
              handleFunctionalKeyClick("underline");
            }}
          />
          <div className="pipe">|</div>
          <GoListUnordered
            className="otherFunctionalIcons"
            size="2rem"
            strokeWidth="0.8px"
            onClick={() => {
              handleFunctionalKeyClick("insertUnorderedList");
            }}
          />
          <div className="pipe">|</div>
          <LuListOrdered
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("insertOrderedList");
            }}
          />
          <div className="pipe">|</div>
          <TbSubscript
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("subscript");
            }}
          />
          <div className="pipe">|</div>
          <TbSuperscript
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("superscript");
            }}
          />
          <div className="pipe">|</div>
          <MdAttachment
            size="2rem"
            className="otherFunctionalIcons"
            onClick={() => {
              handleFunctionalKeyClick("insertImage");
            }}
          />
          <div className="pipe">|</div>
          <CiCircleMinus
            size="2rem"
            strokeWidth="0.5px"
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
