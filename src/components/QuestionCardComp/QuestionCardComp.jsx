import { useState } from "react";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineInfo } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { MdModeEditOutline } from "react-icons/md";

export default function QuestionCardComp({
  small,
  type,
  question,
  explanation,
  options,
  editing
}) {
  const [openSolutionSection, setOpenSolutionSection] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  function solutionRevealer() {
    setOpenSolutionSection(!openSolutionSection);
  }

  return (
    <div className={`relative w-full break-inside-avoid mb-4`}>
      <div
        className={`QuestionContainer h-full ${
          openSolutionSection ? "rotatey" : ""
        } p-4 bg-white rounded-xl flex flex-col gap-2 transition-transform duration-1000`}
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          backfaceVisibility: "hidden",
          transform: openSolutionSection
            ? "perspective(1000px) rotateY(180deg)"
            : "",
        }}
      >
        <div className="header flex items-center justify-between">
          <p className="text-sm">Question:</p>
          {editing && <div><MdModeEditOutline /></div>}
          <button
            title="View solution"
            onClick={solutionRevealer}
            className={`rounded-full ${
              small
                ? "hover:border-none"
                : "text-xs border-[1px] p-1 px-2 hover:border-black"
            } w-fit bg-black text-white flex items-center gap-1`}
          >
            {small ? "" : "Explanation"}
            {small ? (
              <MdOutlineInfo size="1.2rem" />
            ) : (
              <LuClipboardList className="flex-none" size="1rem" />
            )}
          </button>
        </div>
        <div
          className={`font-semibold ${small ? "text-lg" : "text-lg"}`}
          dangerouslySetInnerHTML={{ __html: question }}
        >
          {/* {question} */}
        </div>
        <div className="AnswerContainer h-full">
          {options ? (
            <div
              className={`flex flex-col ${small ? "text-xs" : "text-sm"} gap-1`}
            >
              {options.map((elem, index) => (
                <div className="flex gap-1" key={elem}>
                  <input
                    type={type}
                    id={index + elem}
                    name={type == "radio" ? question : ""}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor={index + elem}
                    key={index + Math.random()}
                    className="flex gap-2 cursor-pointer text-sm"
                    dangerouslySetInnerHTML={{ __html: elem }}
                  ></label>
                </div>
              ))}
            </div>
          ) : (
            <textarea
              type="text"
              placeholder={type}
              className="min-h-32 h-full border-2 border-black w-full rounded-xl p-2 resize-none"
            />
          )}
        </div>
      </div>

      <div
        className={`w-full ${
          small ? "" : "pb-6"
        } box-border overflow-hidden p-2 px-3 rounded-xl h-full bg-white absolute top-0 transition-transform duration-1000`}
        style={{
          backfaceVisibility: "hidden",
          transform: openSolutionSection
            ? "perspective(1000px) rotateY(359.99deg)"
            : "perspective(1000px) rotateY(180deg)",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        {showSolution ? (
          <>
            <div className="text-xs py-2 flex justify-between items-center pr-1">
              <span>Explanation:</span>
              <span
                className="cursor-pointer active:bg-slate-100 p-1 rounded-full"
                onClick={solutionRevealer}
              >
                <TbArrowsExchange size="1.8em" />
              </span>
            </div>
            <p
              className="ExplanationBlock text-sm h-[91%] overflow-y-auto"
              style={{ scrollbarWidth: "thin" }}
              dangerouslySetInnerHTML={{ __html: explanation == "" ? "No explanation provided!" : explanation }}
            ></p>
          </>
        ) : (
          <div className="flex flex-col gap-4 justify-center h-full">
            <p className="text-center">
              If you view the solution then you will not be able to change your
              answer/selection.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="border-2 border-white shadow-md w-fit px-4 rounded-full"
                onClick={solutionRevealer}
              >
                back
              </button>
              <button
                className="border-2 border-white shadow-md w-fit px-4 rounded-full"
                onClick={() => setShowSolution(true)}
              >
                view
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
