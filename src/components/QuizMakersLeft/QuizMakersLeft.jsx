import { memo, useCallback, useEffect, useState } from "react";
import EditableComp from "../../components/Editable Area/editableAreaComp";
import EditorFuncComp from "../../components/Editor functionalities comp/EditorFuncComp";
import OptionsComp from "../../components/Options Comp/OptionsComp";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { questionTypes } from "./QuizMakersLeftData";

const QuizMakersLeft = memo(
  ({
    questions,
    setQuestions,
    toBeEdited,
    showCreatorMenu,
    setShowCreatorMenu,
  }) => {
    console.log(questions[toBeEdited]);
    const [options, setOptions] = useState(["Option 1"]);
    const [editorText, setEditorText] = useState({
      question: "Enter your question here...",
      explanation: "Enter your explanation here...",
    });
    const [alignmentArrowClicked, setAlignmentArrowClicked] = useState(false);
    const [fontArrowClicked, setFontArrowClicked] = useState(false);
    const [typeSelectorClicked, setTypeSelectorClicked] = useState(false);
    const [questionTypeIndex, setQuestionTypeIndex] = useState(
      questionTypes.length - 1
    );

    useEffect(() => {
      if (Object.keys(toBeEdited).length !== 0) {
        setOptions(toBeEdited.options);
        setEditorText({
          question: toBeEdited.question,
          explanation: toBeEdited.explanation,
        });
        setQuestionTypeIndex(
          toBeEdited.type === "checkbox"
            ? 0
            : toBeEdited.type === "radio"
            ? 1
            : toBeEdited.type === "Short answer type"
            ? 2
            : 3
        );
      }
    }, [toBeEdited]);

    const [creatorSectionMesurements, setCreatorSectionMesurements] = useState({
      height: 0,
      width: 0,
    });

    const optionsHandler = useCallback(() => {
      setTypeSelectorClicked((prevState) => !prevState);
    }, []);

    function typeSelector(e) {
      const index = Number(e.currentTarget.getAttribute("id"));
      setQuestionTypeIndex((prevState) => index);
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
        editableDivs[0].innerText.trim() == "Enter your question here..."
      ) {
        alert("Please enter complete details to proceed!");
      } else {
        const optionElements = Array.from(
          document.getElementsByClassName("optionData")
        );
        if (
          questionTypes[questionTypeIndex].funcType == "checkbox" ||
          questionTypes[questionTypeIndex].funcType == "radio"
        ) {
          optionElements.forEach((elem) => {
            options.push(elem.innerHTML);
          });
        }
        const questionData = {
          type: questionTypes[questionTypeIndex].funcType,
          question: editableDivs[0].innerHTML,
          explanation:
            editableDivs[1].innerText == "Enter your explanation here..."
              ? ""
              : editableDivs[1].innerHTML,
          options,
          key: `question: ${questions.length + 1}`,
        };
        setQuestions((prevState) => [...prevState, questionData]);
        setEditorText((prevState) => {
          return {
            ...prevState,
            question: "Enter your question here...",
            explanation: "Enter your explanation here...",
          };
        });
        if (
          questionTypes[questionTypeIndex].funcType == "checkbox" ||
          questionTypes[questionTypeIndex].funcType == "radio"
        ) {
          setOptions(() => ["Option 1"]);
        }
      }
    }, [questionTypeIndex]);
    console.log(questions);

    useEffect(() => {
      const mainContainer = document.getElementById("mainContainer");
      setCreatorSectionMesurements((prevState) => {
        return {
          ...prevState,
          height: mainContainer?.getBoundingClientRect().height,
          width: mainContainer?.getBoundingClientRect().width,
        };
      });
    }, []);

    const handleChange = useCallback((event) => {
      const Identifier = event.target.getAttribute("id");
      setEditorText((prevState) => {
        return { ...prevState, [Identifier]: event.target.value };
      });
    }, []);

    return (
      <div
        className="absolute z-10 h-full transition-all duration-500 rounded-[100%]"
        style={{
          transform: showCreatorMenu
            ? ""
            : `translateX(${-creatorSectionMesurements.width + 45}px)`,
        }}
      >
        <div
          className={`relative h-full transition-all duration-500 flex items-center gap-1 sm:gap-4 pr-1`}
          id="mainContainer"
        >
          <div
            className={`showCloseBtn h-40 rounded-xl px-2 flex items-center z-10 active:scale-95 cursor-pointer opacity-100 order-2 bg-transparent transition-all duration-200 shadow-[0_0_4px_gray]  active:shadow-none`}
            style={{ backdropFilter: "blur(5px)" }}
            onClick={() => setShowCreatorMenu(!showCreatorMenu)}
          >
            <IoIosArrowForward
              className={`transition-all duration-500 ${
                showCreatorMenu ? "rotate-180" : ""
              }`}
              size="1.5rem"
            />
          </div>
          <div
            className={`functionalCompConatiner order-1 border-2 border-black rounded-xl rounded-tl-2xl p-4 relative flex flex-col gap-4 max-w-[700px] bg-white transition-all duration-500 ${
              showCreatorMenu ? "" : "opacity-0"
            } overflow-y-auto`}
            id="functionalCompConatiner"
            style={{
              height:
                window.innerWidth > 678
                  ? "fit-content"
                  : `${creatorSectionMesurements.height}px`,
            }}
          >
            <div className="h-fit max-h-full flex flex-col gap-4">
              <div
                className={`w-full border-2 border-black rounded-3xl p-2 flex items-center justify-center gap-1 bg-black text-white cursor-pointer active:scale-[.99] transition-all duration-200`}
                onClick={optionsHandler}
              >
                {questionTypes[questionTypeIndex].icon}
                {questionTypes[questionTypeIndex].placeHolder}{" "}
                <FaArrowDownLong />
              </div>
              <div
                id="questionTypesConatiner"
                className={`rounded-2xl overflow-hidden shadow-2xl mt-4 absolute w-full left-1/2 -translate-x-1/2 bg-white z-50 top-14 ${
                  typeSelectorClicked ? "" : "hidden"
                }`}
              >
                {questionTypes.map((elem, index) => {
                  if (index != questionTypes.length - 1) {
                    return (
                      <p
                        id={index}
                        className="flex items-center gap-1 p-2 w-full justify-center hover:bg-slate-200 cursor-pointer"
                        onClick={typeSelector}
                        key={"selctOption" + index}
                        func-type={elem.funcType}
                      >
                        {elem.icon} {elem.placeHolder}
                      </p>
                    );
                  }
                })}
              </div>
              <div className="sticky top-0">
                <EditorFuncComp
                  fontArrowClicked={fontArrowClicked}
                  setFontArrowClicked={setFontArrowClicked}
                  alignmentArrowClicked={alignmentArrowClicked}
                  setAlignmentArrowClicked={setAlignmentArrowClicked}
                />
              </div>
              <EditableComp
                id={"question"}
                handleChange={handleChange}
                editorText={editorText.question}
                setEditorText={setEditorText}
                heading="Question:-"
                onFocusHandler={focusAction}
                title="something that tells about the answer"
              />
            </div>
            <OptionsComp
              options={options}
              setOptions={setOptions}
              type={questionTypes[questionTypeIndex].funcType}
              onFocusHandler={focusAction}
            />
            <EditableComp
              id={"explanation"}
              handleChange={handleChange}
              editorText={editorText.explanation}
              setEditorText={setEditorText}
              heading="Solution/Explanation:-"
              onFocusHandler={focusAction}
              title="not necessary but good to have"
            />
            <div
              className="w-full border-2 border-black rounded-3xl p-2 bg-black text-white flex justify-center items-center gap-1  cursor-pointer active:scale-95"
              onClick={addQuestion}
            >
              <LuClipboardList />
              CREATE
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default QuizMakersLeft;
