import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import QuizMakersLeft from "../../components/QuizMakersLeft/QuizMakersLeft";
import QuestionCardComp from "../../components/QuestionCardComp/QuestionCardComp";
import { FaHandPointLeft } from "react-icons/fa6";

export default function QuizMakerPage() {
  const [questions, setQuestions] = useState([]);
  return (
    <div className="hero flex-1 flex flex-wrap gap-4 relative w-full overflow-hidden">
      <QuizMakersLeft questions={questions} setQuestions={setQuestions} />
      <div className="quizCardContainer overflow-y-auto h-full flex-1 w-full">
        {questions.length != 0 ? (
          <div className="p-4 columns-3xs h-fit w-full">
            {questions.map((elem, index) => {
              return (
                <QuestionCardComp
                  key={"Question: " + index}
                  small={true}
                  explanation={elem.explanation}
                  options={elem.options}
                  question={elem.question}
                  type={elem.type}
                />
              );
            })}
          </div>
        ) : (
          <div className="h-full w-full flex flex-col justify-center items-center gap-4">
            <div className="heading md:text-7xl text-5xl font-black">
              No Questions
            </div>
            <div className="text-center max-w-[60vw]">
              <FaHandPointLeft className="inline mr-4 -mt-1" size="1.5rem" />
              Try adding some questions from the sliding menu on the left.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
