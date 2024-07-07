import { memo } from "react";

const ThoughtComp = memo(() => {
  return (
    <div className="thoughtContainer sm:w-1/2 m-auto text-center py-4 pb-4 sm:py-8">
      <div className="thought font-bold text-xl sm:text-3xl">
        "The only limit to our realization of tomorrow will be our doubts of
        today."
      </div>
      <div className="speaker">--Franklin D. Roosevelt</div>
    </div>
  );
});

export default ThoughtComp;
