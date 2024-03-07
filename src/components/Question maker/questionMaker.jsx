import React, { useState, useEffect, useId } from "react";
import ulIcon from "../../assets/svgs/list-ul-alt_svgrepo.com.svg";
import olIcon from "../../assets/svgs/list-ol_svgrepo.com.svg";
import attachMent from "../../assets/svgs/attachment-right-svgrepo-com.svg";
import negativeIcon from "../../assets/svgs/negative sign.svg";
import subscriptIcon from "../../assets/svgs/subscript-svgrepo-com.svg";
import superscriptIcon from "../../assets/svgs/superscript-svgrepo-com.svg";

export default function TextEditor() {
  const id = useId();
  const [editorText, setEditorText] = useState("Enter question here...");

  function handleChange(e) {
    setEditorText(e.target.value);
  }

  function handleFunctionalKeyClick(func) {
    console.log("triggered");
    // const func = event.target.getAttribute("data-func");
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
      <div className="EditorContainer flex-col flex gap-2 relative w-fit">
        <div className="border-2 border-black rounded-xl p-2">
          <div
            className="w-[45rem] max-w-full h-fit max-h-20 overflow-y-scroll text-3xl outline-none"
            id="editor"
            contentEditable
            onChange={handleChange}
            dangerouslySetInnerHTML={{ __html: editorText }}
          />
        </div>
        <div
          id={id}
          className="functions bg-white flex gap-1 items-center border-2 border-black rounded-md w-fit p-1  right-2 bottom-[0.5rem] m-auto select-none"
        >
          <div
            className="bold"
            title="Bold"
            data-func="bold"
            onClick={() => {
              handleFunctionalKeyClick("bold");
            }}
          >
            B
          </div>
          <div className="pipe">|</div>
          <div
            className="italic"
            title="Italic"
            data-func="italic"
            onClick={() => {
              handleFunctionalKeyClick("italic");
            }}
          >
            I
          </div>
          <div className="pipe">|</div>
          <div
            className="underline"
            title="Underline"
            data-func="underline"
            onClick={() => {
              handleFunctionalKeyClick("underline");
            }}
          >
            U
          </div>
          <div className="pipe">|</div>
          <div
            className="unorderedList otherFunctionalIcons"
            title="unordered-list-icon"
          >
            <img
              src={ulIcon}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="unordered-list-icon"
              onClick={() => {
                handleFunctionalKeyClick("insertUnorderedList");
              }}
            />
          </div>
          <div className="pipe">|</div>
          <div
            className="attachment otherFunctionalIcons"
            title="ordered-list-icon"
          >
            <img
              src={olIcon}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="ordered-list-icon"
              onClick={() => {
                handleFunctionalKeyClick("insertOrderedList");
              }}
            />
          </div>
          <div className="pipe">|</div>
          <div className="attachment otherFunctionalIcons" title="subscript">
            <img
              src={subscriptIcon}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="subscript"
              onClick={() => {
                handleFunctionalKeyClick("subscript");
              }}
            />
          </div>
          <div className="pipe">|</div>
          <div className="attachment otherFunctionalIcons" title="superscript">
            <img
              src={superscriptIcon}
              alt="superscript icon"
              className="p-2 w-full cursor-pointer"
              title="superscript"
              onClick={() => {
                handleFunctionalKeyClick("superscript");
              }}
            />
          </div>
          <div className="pipe">|</div>
          <div className="attachment otherFunctionalIcons" title="Add image">
            <img
              src={attachMent}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="Add image"
              data-func="insertImage"
              onClick={() => {
                handleFunctionalKeyClick("insertImage");
              }}
            />
          </div>
          <div className="pipe">|</div>
          <div
            className="removeDecoration p-2 active:bg-[var(--black25)] rounded-lg cursor-pointer"
            title="Remove all Decorations"
          >
            <img
              src={negativeIcon}
              alt=""
              className="h-6"
              title="Remove all Decorations"
              onClick={() => {
                handleFunctionalKeyClick("removeFormat");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
