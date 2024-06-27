import React, { useCallback, useEffect, useState } from "react";
import EditableComp from "../../components/Editable Area/editableAreaComp";
import EditorFuncComp from "../../components/Editor functionalities comp/EditorFuncComp";
import OptionsComp from "../../components/Options Comp/OptionsComp";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineCheckBox, MdOutlineRadioButtonChecked } from "react-icons/md";
import { ImParagraphJustify } from "react-icons/im";
import { BsTextParagraph } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";

export default function QuizMakersLeft({ questions, setQuestions }) {
  const [alignmentArrowClicked, setAlignmentArrowClicked] = useState(false);
  const [fontArrowClicked, setFontArrowClicked] = useState(false);

  const [typeSelectorClicked, setTypeSelectorClicked] = useState(false);
  const [optionType, setOptionType] = useState("radio");

  const [questionType, setQuestionType] = useState({
    type: "Choose question type",
    iconIndex: -1,
  });

  const questionTypeIconsArray = [
    <MdOutlineCheckBox />,
    <MdOutlineRadioButtonChecked />,
    <BsTextParagraph />,
    <ImParagraphJustify />,
  ];

  const optionsHandler = useCallback(() => {
    setTypeSelectorClicked(!typeSelectorClicked);
  }, []);

  function typeSelector(e) {
    const questionType = e.currentTarget.innerText;
    const index = Number(e.currentTarget.getAttribute("id"));
    setQuestionType((prevState) => {
      return { ...prevState, type: questionType, iconIndex: index };
    });
    setOptionType(e.currentTarget.getAttribute("func-type"));
    setTypeSelectorClicked(false);
  }

  function focusAction() {
    setAlignmentArrowClicked(false);
    setFontArrowClicked(false);
  }

  const addQuestion = useCallback(() => {
    const options = [];
    const editableDivs = document.getElementsByClassName("editableDiv");
    if (
      editableDivs[0].innerText.trim() == "" ||
      editableDivs[1].innerText.trim() == "" ||
      editableDivs[0].innerText.trim() == "Enter your question here..." ||
      editableDivs[1].innerText.trim() == "Enter your explanation here..."
    ) {
      alert("Please enter complete details to proceed!");
    } else {
      const optionElements = Array.from(
        document.getElementsByClassName("optionData")
      );
      if (optionType == "checkbox" || optionType == "radio") {
        optionElements.forEach((elem) => {
          options.push(elem.innerHTML);
        });
      }
      const questionData = {
        type: optionType,
        question: editableDivs[0].innerHTML,
        explanation: editableDivs[1].innerHTML,
        options,
      };
      setQuestions((prevState) => [...prevState, questionData]);
    }
  });

  return (
    <div className="functionalCompConatiner border-2 border-black rounded-xl rounded-tl-2xl p-4 relative flex flex-col gap-4 h-full max-w-[700px]">
      <div className="h-fit max-h-full flex flex-col gap-4">
        <div
          className={`w-full border-2 border-black rounded-3xl p-2 flex items-center justify-center gap-1 bg-[#0b1215] text-[#fbfbfb] cursor-pointer active:bg-slate-950`}
          onClick={optionsHandler}
        >
          {questionTypeIconsArray[questionType.iconIndex]}
          {questionType.type} <FaArrowDownLong />
        </div>
        <div
          id="questionTypesConatiner"
          className={`rounded-2xl overflow-hidden shadow-2xl mt-4 absolute w-[95%] bg-white z-50 top-16 ${
            typeSelectorClicked ? "" : "hidden"
          }`}
        >
          <p
            id="0"
            className="flex items-center gap-1 p-2 w-full justify-center hover:bg-slate-200 cursor-pointer"
            onClick={typeSelector}
            func-type="checkbox"
          >
            <MdOutlineCheckBox /> Multple Correct type
          </p>
          <p
            id="1"
            className="flex items-center gap-1 p-2 w-full justify-center hover:bg-slate-200 cursor-pointer"
            onClick={typeSelector}
            func-type="radio"
          >
            <MdOutlineRadioButtonChecked /> Single Correct type
          </p>
          <p
            id="2"
            className="flex items-center gap-1 p-2 w-full justify-center hover:bg-slate-200 cursor-pointer"
            onClick={typeSelector}
            func-type="Short Answer text"
          >
            <BsTextParagraph /> Short Answer type
          </p>
          <p
            id="3"
            className="flex items-center gap-1 p-2 w-full justify-center hover:bg-slate-200 cursor-pointer"
            onClick={typeSelector}
            func-type="Long Answer text"
          >
            <ImParagraphJustify /> Long Answer type
          </p>
        </div>
        <div className="sticky">
          <EditorFuncComp
            fontArrowClicked={fontArrowClicked}
            setFontArrowClicked={setFontArrowClicked}
            alignmentArrowClicked={alignmentArrowClicked}
            setAlignmentArrowClicked={setAlignmentArrowClicked}
          />
        </div>
        <EditableComp
          heading="Question:-"
          placeHolder="Enter your question here..."
          height="8rem"
          maxHeight="fill-container"
          onFocusHandler={focusAction}
          title="something that tells about the answer"
        />
      </div>
      <OptionsComp
        type={optionType}
        onFocusHandler={focusAction}
      />
      <div className="self-end min-w-fit h-fit w-full flex flex-col gap-4">
        <EditableComp
          heading="Solution/Explanation:-"
          placeHolder="Enter your explanation here..."
          height="8rem"
          maxHeight="8rem"
          onFocusHandler={focusAction}
          title="not necessary but good to have"
        />
        <div
          className="w-full border-2 border-black rounded-3xl p-2 bg-slate-800 text-white flex justify-center items-center gap-1 "
          onClick={addQuestion}
        >
          <LuClipboardList />
          CREATE
        </div>
      </div>
    </div>
  );
}
