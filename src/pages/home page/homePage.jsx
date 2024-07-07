import { memo } from "react";
import QuizCard from "../../components/QuizCard/quizCard";
import ThoughtComp from "../../components/thought comp/thoughtComp";

const HomePage = memo(() => {
  return (
    <div className="quizesContainer flex-1 p-4 border-2 border-black rounded-md rounded-tl-2xl rounded-tr-2xl overflow-y-auto">
      <ThoughtComp />
      <div
        className="quizes quiz-section grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))" }}
      >
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
  );
});

export default HomePage;
