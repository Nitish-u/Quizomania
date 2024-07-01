import QuizCard from "../../components/QuizCard/quizCard";
import ThoughtComp from "../../components/thought comp/thoughtComp";

export default function HomePage() {
  return (
    <div className="quizesContainer flex-1 p-4 border-2 border-black rounded-md rounded-tl-2xl rounded-tr-2xl overflow-y-auto">
      <ThoughtComp />
      <div
        className="quizes columns-[240px] gap-4 quiz-section"
        style={{ columnFill: "balance-all" }}
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
}
