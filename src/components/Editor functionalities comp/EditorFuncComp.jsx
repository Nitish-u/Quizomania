import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { MdFormatBold, MdFormatItalic } from "react-icons/md";
// import { FaKickstarter, FaUnderline } from "react-icons/fa";
// import { FaUnderline } from "react-icons/fa6";
import { MdFormatUnderlined } from "react-icons/md";
import { LuListOrdered } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";
import { TbSubscript, TbSuperscript } from "react-icons/tb";
import { MdOutlineImage } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { FaAlignRight, FaAlignLeft, FaAlignCenter } from "react-icons/fa6";
import { MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight } from "react-icons/md";


export default function EditorFuncComp({
  alignmentArrowClicked,
  setAlignmentArrowClicked,
  fontArrowClicked,
  setFontArrowClicked,
}) {
  const alignmentIconsArray = [
    <FaAlignLeft size="1.2em" />,
    <FaAlignCenter size="1.2em" />,
    <FaAlignRight size="1.2em" />,
  ];

  const fontVarients = [
    { size: 3, sizeName: "Normal text" },
    { size: 5, sizeName: "Sub-title" },
    { size: 6, sizeName: "Title" },
    { size: 7, sizeName: "Header" },
  ];

  const alignments = [
    { type: "justifyLeft", icon: <MdFormatAlignLeft /> },
    { type: "justifyCenter", icon: <MdFormatAlignCenter /> },
    { type: "justifyRight", icon: <MdFormatAlignRight /> },
  ];

  const functions = [
    {
      function: "bold",
      icon: <MdFormatBold />,
    },
    {
      function: "italic",
      icon: <MdFormatItalic />,
    },
    {
      function: "underline",
      icon: <MdFormatUnderlined />,
    },
    {
      function: "insertUnorderdList",
      icon: <GoListUnordered />,
    },
    {
      function: "insertOrderedList",
      icon: <LuListOrdered />,
    },
    {
      function: "subscript",
      icon: <TbSubscript />,
    },
    {
      function: "superscript",
      icon: <TbSuperscript />,
    },
    {
      function: "insertImage",
      icon: <MdOutlineImage />,
    },
    {
      function: "removeFormat",
      icon: <CiCircleMinus />,
    },
  ];

  const [fontSize, setFontSize] = useState(0);

  // const [fontSize, setFontSize] = useState({ type: "Normal text", size: 4 });
  const [alignmentType, setAlignmentType] = useState(0);
  // const [alignmentType, setAlignmentType] = useState({
  //   index: 0,
  //   func: "justifyLeft",
  // });
  // function fontSizeChanger(e) {
  //   e.stopPropagation();
  //   const currentTarget = e.currentTarget;
  //   const fontSize = currentTarget.getAttribute("func-size");
  //   const fontType = currentTarget.innerText;
  //   setFontSize((prevState) => {
  //     return { ...prevState, type: fontType, size: fontSize };
  //   });
  //   setFontArrowClicked(false);
  // }

  // function alignmentTypeChanger(e) {
  //   const currentTarget = e.currentTarget;
  //   const iconIndex = currentTarget.getAttribute("func-index");
  //   const iconFunction = currentTarget.getAttribute("func-type");
  //   setAlignmentType((prevState) => {
  //     return { ...prevState, index: iconIndex, func: iconFunction };
  //   });
  //   setAlignmentArrowClicked(false);
  // }

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
    // <>
    //   <IconContext.Provider
    //     value={{ color: "black", className: "functionalKeys", size: "1.6rem" }}
    //   >
    //     <div
    //       className="functionalKeysContainer bg-white select-none flex items-center w-fit gap-1 p-2 sm:px-4 rounded-lg max-w-full flex-wrap xl:flex-nowrap justify-center"
    //       style={{
    //         boxShadow:
    //           "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    //       }}
    //     >
    //       <div className="relative" id="fontSizeContainer">
    //         <div
    //           className={`fontSizeContainer min-w-fit flex items-center font-semibold cursor-pointer rounded-lg active:bg-white`}
    //           id="currentFontSizeContainer"
    //         >
    //           <span
    //             className="w-24 h-full"
    //             func-size={fontSize.size}
    //             onClick={() =>
    //               handleFunctionalKeyClick("fontSize", fontSize.size)
    //             }
    //           >
    //             {fontSize.type}
    //           </span>
    //           <div
    //             className={`grow ${
    //               fontArrowClicked ? "bg-slate-100" : ""
    //             } w-fit group`}
    //             style={{ padding: 0 }}
    //             onClick={(e) => {
    //               setAlignmentArrowClicked(false);
    //               setFontArrowClicked(!fontArrowClicked);
    //               e.stopPropagation();
    //             }}
    //           >
    //             <IoIosArrowDown
    //               size="1.2em"
    //               className={`group-active:translate-y-1 transition-transform h-full duration-300 my-auto`}
    //             />
    //           </div>
    //         </div>
    //         <span
    //           className={`fontSizes absolute top-10 ${
    //             fontArrowClicked ? "" : "hidden"
    //           } bg-white w-fit mt-4 rounded-xl cursor-pointer overflow-hidden z-30`}
    //           style={{
    //             boxShadow:
    //               "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    //           }}
    //         >
    //           {fontSizes.map((elem) => {
    //             return (
    //               <p
    //                 key={elem.sizeName}
    //                 className="w-32 p-2 px-4 hover:bg-slate-200"
    //                 func-size={elem.size}
    //                 onClick={fontSizeChanger}
    //               >
    //                 {elem.sizeName}
    //               </p>
    //             );
    //           })}
    //         </span>
    //       </div>
    //       <p className="bg-slate-200" id="pipe">
    //         &nbsp;
    //       </p>
    //       <div
    //         className="Bold icons"
    //         onClick={() => handleFunctionalKeyClick("bold")}
    //       >
    //         <MdFormatBold className="w-8" />
    //       </div>
    //       <div
    //         className="Italic icons"
    //         onClick={() => handleFunctionalKeyClick("italic")}
    //       >
    //         <MdFormatItalic />
    //       </div>
    //       <div
    //         className="Underline px-1 icons flex items-center justify-center"
    //         onClick={() => handleFunctionalKeyClick("underline")}
    //       >
    //         <FaUnderline size="1.1em" />
    //       </div>
    //       <p className="bg-slate-200" id="pipe">
    //         &nbsp;
    //       </p>
    //       <div
    //         className="UL icons"
    //         onClick={() => handleFunctionalKeyClick("insertUnorderedList")}
    //       >
    //         <GoListUnordered strokeWidth="1px" />
    //       </div>
    //       <div
    //         className="OL icons"
    //         onClick={() => handleFunctionalKeyClick("insertOrderedList")}
    //       >
    //         <LuListOrdered strokeWidth="2.3px" />
    //       </div>
    //       <p className="bg-slate-200" id="pipe">
    //         &nbsp;
    //       </p>
    //       <div
    //         className={`relative ${
    //           alignmentArrowClicked ? "bg-slate-100" : ""
    //         }`}
    //         id="alignmentContainersParent"
    //       >
    //         <div
    //           className="flex gap-1 items-center justify-center"
    //           id="alignmentContainer"
    //         >
    //           <span
    //             func-type={alignmentType.func}
    //             onClick={() => handleFunctionalKeyClick(alignmentType.func)}
    //           >
    //             {alignmentIconsArray[alignmentType.index]}
    //           </span>
    //           <IoIosArrowDown
    //             size="1.2em"
    //             className="active:translate-y-1 transition-transform duration-300"
    //             onClick={(e) => {
    //               setFontArrowClicked(false);
    //               setAlignmentArrowClicked(!alignmentArrowClicked);
    //               e.stopPropagation();
    //             }}
    //           />
    //         </div>
    //         <span
    //           className={`alignmentOptions absolute top-14 bg-white flex gap-2 p-2 rounded-lg items-center ${
    //             alignmentArrowClicked ? "" : "hidden"
    //           }`}
    //           style={{
    //             boxShadow:
    //               "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    //           }}
    //         >
    //           <p
    //             func-index="0"
    //             func-type="justifyLeft"
    //             onClick={alignmentTypeChanger}
    //           >
    //             <FaAlignLeft size="1.5em" />
    //           </p>
    //           <div className="bg-slate-200" id="pipe">
    //             &nbsp;
    //           </div>
    //           <p
    //             func-index="1"
    //             func-type="justifyCenter"
    //             onClick={alignmentTypeChanger}
    //           >
    //             <FaAlignCenter size="1.5em" />
    //           </p>
    //           <div className="bg-slate-200" id="pipe">
    //             &nbsp;
    //           </div>
    //           <p
    //             func-index="2"
    //             func-type="justifyRight"
    //             onClick={alignmentTypeChanger}
    //           >
    //             <FaAlignRight size="1.5em" />
    //           </p>
    //         </span>
    //       </div>
    //       <p className="bg-slate-200" id="pipe">
    //         &nbsp;
    //       </p>
    //       <div
    //         className="icons"
    //         onClick={() => handleFunctionalKeyClick("subscript")}
    //       >
    //         <TbSubscript />
    //       </div>
    //       <div
    //         className="icons"
    //         onClick={() => handleFunctionalKeyClick("superscript")}
    //       >
    //         <TbSuperscript />
    //       </div>
    //       <p className="bg-slate-200" id="pipe">
    //         &nbsp;
    //       </p>
    //       <div
    //         className="attachment icons"
    //         onClick={() => handleFunctionalKeyClick("insertImage")}
    //       >
    //         <MdOutlineImage />
    //       </div>
    //       <p className="bg-slate-200 icons" id="pipe">
    //         &nbsp;
    //       </p>
    //       <div
    //         className="removeFormatting"
    //         onClick={() => handleFunctionalKeyClick("removeFormat")}
    //       >
    //         <CiCircleMinus strokeWidth="1px" />
    //       </div>
    //     </div>
    //   </IconContext.Provider>
    // </>
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
            return <div className="p-1 hover:bg-gray-100 cursor-pointer" onClick={() => {setAlignmentType(index); setAlignmentArrowClicked(!alignmentArrowClicked); handleFunctionalKeyClick(alignments[index].type)}}>{elem.icon}</div>
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
