import React, { useState } from "react";
import NavBar from "../../components/NavBar/navbar";
import QuizMakersLeft from "../../components/QuizMakersLeft/QuizMakersLeft";

export default function QuizMakerPage() {
  const [questions, setQuestions] = useState([]);
  return (
    <div className="flex flex-col gap-4 h-full">
      <NavBar />
      <div className="hero h-full flex flex-wrap gap-4">
        <QuizMakersLeft questions={questions} setQuestions={setQuestions}  />
        <div className="quizCardContainer h-full p-4 flex-1"></div>
      </div>
    </div>
  );
}
