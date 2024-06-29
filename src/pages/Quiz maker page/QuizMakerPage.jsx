import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/navbar";
import QuizMakersLeft from "../../components/QuizMakersLeft/QuizMakersLeft";
import QuestionCardComp from "../../components/QuestionCardComp/QuestionCardComp";

export default function QuizMakerPage() {
  const [questions, setQuestions] = useState([]);
  const [quizCardContainersHeight, setQuizCardContainersHeight] = useState(300);
  console.log(questions);
  useEffect(() => {
    const quizCardContainersCalcHeight = document
      .getElementById("quizCardContainer")
      ?.getBoundingClientRect().height;
    console.log(quizCardContainersCalcHeight);
    setQuizCardContainersHeight(quizCardContainersCalcHeight);
  }, []);
  return (
    <div className="flex flex-col gap-4 h-full">
      <NavBar />
      <div className="hero h-full flex flex-wrap gap-4 relative w-full">
          <QuizMakersLeft questions={questions} setQuestions={setQuestions} />
        <div
          className="quizCardContainer overflow-y-auto h-full flex-1 w-full"
          id="quizCardContainer"
        >
          <div
            className="p-4 columns-3xs max-w-full h-fit"
            style={{ height: `${quizCardContainersHeight}px`, width: "" }}
          >
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
        </div>
      </div>
    </div>
  );
}
