import NavBar from "../../components/NavBar/navbar";
import QuizCard from "../../components/QuizCard/quizCard";
import Footer from "../../components/footer/footer";
import ThoughtComp from "../../components/thought comp/thoughtComp";
import SlidingMenu from "../../components/sliding menu/slidingMenu";
import { useState } from "react";

export default function HomePage() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <>
      <SlidingMenu isOpen={menuClicked}/>
      <div className="parent h-dvh md:p-4 bg-[var(--offWhite)]">
        <div className="parentContainerOfHomePage p-4 pb-0 md:border-2 border-black rounded-3xl flex flex-col gap-4 h-full">
          <NavBar isOpen={menuClicked} setIsOpen={setMenuClicked} />
          <div className="quizesContainer h-full p-4 border-2 border-black rounded-2xl overflow-y-scroll">
            <ThoughtComp />
            <div className="quizes flex flex-wrap gap-4 justify-center quiz-section">
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
          <Footer />
        </div>
      </div>
    </>
  );
}
