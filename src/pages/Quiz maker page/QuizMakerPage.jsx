import React from "react";
import NavBar from "../../components/NavBar/navbar";
import QuizMakersLeft from "../../components/QuizMakersLeft/QuizMakersLeft";

export default function QuizMakerPage() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <NavBar />
      <div className="hero h-full flex flex-wrap">
        <QuizMakersLeft />
        <div className="quizCardContainer h-full lg:w-1/2 p-4"></div>
      </div>
    </div>
  );
}
