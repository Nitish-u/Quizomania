import NavBar from "../../components/NavBar/navbar";
import QuizCard from "../../components/QuizCard/quizCard";
import ThoughtComp from "../../components/thought comp/thoughtComp";
import { useState } from "react";

export default function HomePage() {
  return (
    <>
          <NavBar />
          <div className="quizesContainer h-[83.7dvh] max-[1024px]:h-full p-4 border-2 border-black rounded-md rounded-tl-2xl rounded-tr-2xl overflow-y-auto mt-4 max-[1024px]:pb-20">
            <ThoughtComp />
            <div className="quizes columns-[240px] gap-4 quiz-section" style={{columnFill: "balance-all"}}>
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
            </div>
          </div>
    </>
  );
}
