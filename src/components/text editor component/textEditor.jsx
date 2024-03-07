import React, { useState, useEffect } from "react";
import teer from "../../assets/svgs/teer.svg";
import ulIcon from "../../assets/svgs/list-ul-alt_svgrepo.com.svg";
import olIcon from "../../assets/svgs/list-ol_svgrepo.com.svg";
import attachMent from "../../assets/svgs/attachment-right-svgrepo-com.svg";
import insertLink from "../../assets/svgs/link_svgrepo.com.svg";
import rightAlign from "../../assets/svgs/align-right_svgrepo.com.svg";
import leftAlign from "../../assets/svgs/align-left_svgrepo.com.svg";
import centerAlign from "../../assets/svgs/align-center_svgrepo.com.svg";
import negativeIcon from "../../assets/svgs/negative sign.svg";
import subscriptIcon from "../../assets/svgs/subscript-svgrepo-com.svg";
import superscriptIcon from "../../assets/svgs/superscript-svgrepo-com.svg";

export default function TextEditor({ editorHeading, questionBox, editorPlaceHolder, short }) {
  const [alignment, setAlignment] = useState({
    src: leftAlign,
    func: "justifyLeft",
  });

  const [fontSize, setFontSize] = useState("1");

  const [alignmentTeerClicked, setAlignmentTeerClicked] = useState(false);

  const [textSizeTeerClicked, setTextSizeTeerClicked] = useState(false);

  function alignmentTeerControl() {
    setAlignmentTeerClicked(!alignmentTeerClicked);
  }

  function textSizeTeerControl() {
    setTextSizeTeerClicked(!textSizeTeerClicked);
  }

  function fontSizeChanger(e) {
    const size = e.target.innerText;
    setFontSize(size);
    setTextSizeTeerClicked(false);
  }

  function alignmentIconSelector(e) {
    const alignmentType = e.target.getAttribute("data-align");
    const imgSrc = e.target.getAttribute("src");
    if (alignmentType && imgSrc) {
      setAlignment((prevState) => {
        return { ...prevState, src: imgSrc, func: alignmentType };
      });
    }
    setAlignmentTeerClicked(false);
  }

  useEffect(()=>{
    const handleFunctionalKeyClick = (event) => {
      console.log('triggered');
      const func = event.target.getAttribute("data-func");
      const val = event.target.getAttribute("data-value");
      if (val) {
        document.execCommand("fontSize", false, Number(val));
      } else {
        if (func) {
          if (func == "insertImage" || func == "createLink") {
            const url = prompt("Enter url here", "http://");
            if(url !== null){
              document.execCommand(func, false, url);
            }
          } else {
            document.execCommand(func, false);
          }
        }
      }
    };
    const functionalKeysContainer = document.querySelectorAll("[data-func], [data-value]");
    const nodeList = Array.from(functionalKeysContainer);
    nodeList.forEach((node) => {
      node.addEventListener("click", handleFunctionalKeyClick);
    })
    
    return () => {
      nodeList.forEach((node) => {
        node.removeEventListener("click", handleFunctionalKeyClick);
      })
    }
  }, [])

//   useEffect(() => {
//     const handleFunctionalKeyClick = (event) => {
//         const func = event.target.getAttribute("data-func");
//         const val = event.target.getAttribute("data-value");
//         if (val) {
//             document.execCommand("fontSize", false, Number(val));
//         } else {
//             if (func) {
//                 if (func == "insertImage" || func == "createLink") {
//                     const url = prompt("Enter url here", "http://");
//                     document.execCommand(func, false, url);
//                 } else {
//                     document.execCommand(func, false);
//                 }
//             }
//         }
//     };

//     const functionalKeysContainers = document.querySelectorAll("[data-func], [data-value]");
//     functionalKeysContainers.forEach(container => {
//         container.addEventListener("click", handleFunctionalKeyClick);
//     });

//     return () => {
//         functionalKeysContainers.forEach(container => {
//             container.removeEventListener("click", handleFunctionalKeyClick);
//         });
//     };
// }, []);

  // function AddingEventListeners(){
  // }

  // useEffect(() => {
  //   AddingEventListeners();
  // })


  return (
    <div className="flex justify-center items-center flex-col w-full h-dvh">
      <h1 className="m-2 text-xl font-semibold">{editorHeading || "Solution / Explanation :-"}</h1>
      <div className={`EditorContainer flex-col flex gap-2 relative w-fit ${questionBox ? "" : "pb-20"}`}>
        <div
          id="functionalKeys"
          className="functions bg-white flex gap-1 items-center border-2 border-black rounded-md w-fit p-1  right-2 bottom-[0.5rem] m-auto select-none"
        >
          <div className="bold" title="Bold" data-func="bold">
            B
          </div>
          <div className="pipe">|</div>
          <div className="italic" title="Italic" data-func="italic">
            I
          </div>
          <div className="pipe">|</div>
          <div className="underline" title="Underline" data-func="underline">
            U
          </div>
          <div className="pipe">|</div>

          <div
            className={`${
              short ? "hidden" : "flex"
            } attachment w-fit items-center`}
          >
            <p
              className="text-2xl px-4 py-1 active:bg-[var(--black25)] rounded-lg cursor-pointer"
              data-value={fontSize}
            >
              {fontSize}
            </p>
            <div className="teer-container w-fit group">
              <img
                src={teer}
                alt="teer icon"
                className={`teerStyles ${
                  textSizeTeerClicked ? "rotate-180" : ""
                }`}
                title="slect other alignment modes"
                onClick={textSizeTeerControl}
              />
              <div
                className={`different-alignments bg-white ${
                  textSizeTeerClicked
                    ? "-translate-y-36 flex"
                    : "-translate-y-20 hidden"
                } gap-1 items-center border-2 border-black rounded-md w-fit p-1 absolute bottom-0  left-32 select-none text-xl`}
                onClick={fontSizeChanger}
              >
                <p className="font-sizes">1</p>
                <p className="font-sizes">2</p>
                <p className="font-sizes">3</p>
                <p className="font-sizes">4</p>
                <p className="font-sizes">5</p>
                <p className="font-sizes">6</p>
                <p className="font-sizes">7</p>
              </div>
            </div>
          </div>
          <div className={`${short ? "hidden" : ""} pipe`}>|</div>
          <div
            className={`${
              short ? "hidden" : "flex"
            } attachment w-fit items-center`}
            title={`Align ${alignment.func.slice(7, alignment.func.length)}`}
          >
            <img
              src={alignment.src}
              alt="attachment icon"
              className="p-2 w-11 cursor-pointer active:bg-[var(--black25)] rounded-lg"
              title={`Align ${alignment.func.slice(7, alignment.func.length)}`}
              data-func={alignment.func}
            />
            <div className="teer-container w-fit group">
              <img
                src={teer}
                alt="teer icon"
                className={`teerStyles ${
                  alignmentTeerClicked ? "rotate-180" : ""
                }`}
                title="slect other alignment modes"
                onClick={alignmentTeerControl}
              />
              <div
                className={`different-alignments bg-white ${
                  alignmentTeerClicked
                    ? "-translate-y-36 flex"
                    : "-translate-y-20 hidden"
                } gap-1 items-center border-2 border-black rounded-md w-fit p-1 absolute bottom-0  left-56 select-none`}
                onClick={alignmentIconSelector}
              >
                <img
                  src={leftAlign}
                  alt="attachment icon"
                  className="alignmentIcons"
                  title="Left align"
                  data-align="justifyLeft"
                />
                <div className="pipe">|</div>
                <img
                  src={centerAlign}
                  alt="attachment icon"
                  className="alignmentIcons"
                  title="Center align"
                  data-align="justifyCenter"
                />
                <div className="pipe">|</div>
                <img
                  src={rightAlign}
                  alt="attachment icon"
                  className="alignmentIcons"
                  title="Right align"
                  data-align="justifyRight"
                />
              </div>
            </div>
          </div>
          <div className={`${short ? "hidden" : ""} pipe`}>|</div>
          <div
            className={`${
              short ? "hidden" : ""
            } unorderedList otherFunctionalIcons`}
            title="unordered-list-icon"
          >
            <img
              src={ulIcon}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="unordered-list-icon"
              data-func="insertUnorderedList"
            />
          </div>
          <div className={`${short ? "hidden" : ""} pipe`}>|</div>
          <div
            className={`${
              short ? "hidden" : ""
            } attachment otherFunctionalIcons`}
            title="ordered-list-icon"
          >
            <img
              src={olIcon}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="ordered-list-icon"
              data-func="insertOrderedList"
            />
          </div>
          <div className={`${short ? "hidden" : ""} pipe`}>|</div>
          <div
            className={`${
              short ? "hidden" : ""
            } attachment otherFunctionalIcons`}
            title="subscript"
          >
            <img
              src={subscriptIcon}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="subscript"
              data-func="subscript"
            />
          </div>
          <div className={`${short ? "hidden" : ""} pipe`}>|</div>
          <div
            className={`${
              short ? "hidden" : ""
            } attachment otherFunctionalIcons`}
            title="superscript"
          >
            <img
              src={superscriptIcon}
              alt="superscript icon"
              className="p-2 w-full cursor-pointer"
              title="superscript"
              data-func="superscript"
            />
          </div>
          <div className={`${short ? "hidden" : ""} pipe`}>|</div>
          <div
            className={`${
              short ? "hidden" : ""
            } attachment otherFunctionalIcons`}
            title="Add image"
          >
            <img
              src={attachMent}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="Add image"
              data-func="insertImage"
            />
          </div>
          <div className={`${short ? "hidden" : ""} pipe`}>|</div>
          <div
            className={`${
              short ? "hidden" : ""
            } attachment otherFunctionalIcons`}
            title="insert link"
          >
            <img
              src={insertLink}
              alt="attachment icon"
              className="p-2 w-full cursor-pointer"
              title="insert link"
              data-func="createLink"
            />
          </div>
          <div className={`${short ? "hidden" : ""} pipe`}>|</div>

          <div
            className="removeDecoration p-2 active:bg-[var(--black25)] rounded-lg cursor-pointer"
            title="Remove all Decorations"
          >
            <img
              src={negativeIcon}
              alt=""
              className="h-6"
              title="Remove all Decorations"
              data-func="removeFormat"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
