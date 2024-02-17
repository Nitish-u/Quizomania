import profilePic from "../../assets/svgs/avatar-default_svgrepo.com.svg";
import score from "../../assets/svgs/Report Card.svg";
import downArrow from "../../assets/svgs/down-arrow-backup-2_svgrepo.com.svg";

export default function SlidingMenu() {
  return (
    <div className="menuContainer w-fit p-4 rounded-3xl text-center flex flex-col items-center gap-3 customShadowForQuizCard">
      <div className="profilePic p-4 rounded-full profilePicShadow">
        <img src={profilePic} alt="profile pic" className="w-32" />
      </div>
      <div className="username text-3xl">someone</div>
      <div className="streakAndAvgScrore flex w-full justify-between px-4">
        <div className="streak">🔥 10 days</div>
        <div className="avgScore flex gap-2">
          <img src={score} alt="score icon" />
          80%
        </div>
      </div>
      <div className="totalAttempts">Total attempted: 10</div>
      <button className="border-2 h-12 border-black bg-[var(--black100)] rounded-full p-3 px-14 text-white flex justify-center items-center w-full gap-2">
        YOUR QUIZES
        <svg
          className="svgIcon"
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.83334 5.02088C5.98913 5.02153 5.54662 5.03226 5.20361 5.20703C4.88216 5.37081 4.62082 5.63215 4.45704 5.9536C4.27084 6.31903 4.27084 6.79741 4.27084 7.75417V15.9542C4.27084 16.9109 4.27084 17.3893 4.45704 17.7548C4.62082 18.0762 4.88216 18.3375 5.20361 18.5013C5.56904 18.6875 6.04742 18.6875 7.00418 18.6875H13.4958C14.4526 18.6875 14.931 18.6875 15.2964 18.5013C15.6179 18.3375 15.8792 18.0762 16.043 17.7548C16.2292 17.3893 16.2292 16.9109 16.2292 15.9542V7.75417C16.2292 6.79741 16.2292 6.31903 16.043 5.9536C15.8792 5.63215 15.6179 5.37081 15.2964 5.20703C14.9534 5.03226 14.5109 5.02153 13.6667 5.02088M6.83334 5.02088V6.72917H13.6667V5.02088M6.83334 5.02088V4.77066C6.83334 4.38392 6.98697 4.01304 7.26043 3.73958C7.53388 3.46613 7.90477 3.3125 8.2915 3.3125H12.2085C12.5952 3.3125 12.9662 3.46613 13.2396 3.73958C13.513 4.01304 13.6667 4.38392 13.6667 4.77066V5.02088M12.8125 11H10.25M12.8125 14.4167H10.25M7.68751 11H7.69605M7.68751 14.4167H7.69605"
            stroke="#FAF9F6"
            stroke-width="1.89984"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button className="border-2 h-12 border-black bg-[var(--black100)] rounded-full px-14 text-white flex justify-center items-center w-full gap-2">
        SAVED
        <svg
          className="-mb-1"
          width="15"
          height="60"
          viewBox="0 0 47 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 3L43.5 3V53L24 36.5L3.5 53V3Z"
            stroke="white"
            stroke-width="6"
          />
        </svg>
      </button>
      <div className="attemptHistory w-full flex flex-col gap-2">
        <div className="heading text-left text-sm font-semibold">
          Recently attempted:
        </div>
        <hr />
        <div className="attemptListFromHistory text-left">
          <p className="cursor-pointer hover:bg-[var(--black25)] transition-colors duration-200 px-2 rounded-md">
            Lorem ipsum dolor sit amet....
          </p>
          <p className="cursor-pointer hover:bg-[var(--black25)] transition-colors duration-200 px-2 rounded-md">
            Lorem ipsum dolor sit amet....
          </p>
          <p className="cursor-pointer hover:bg-[var(--black25)] transition-colors duration-200 px-2 rounded-md">
            Lorem ipsum dolor sit amet....
          </p>
          <p className="cursor-pointer hover:bg-[var(--black25)] transition-colors duration-200 px-2 rounded-md">
            Lorem ipsum dolor sit amet....
          </p>
          <p className="cursor-pointer hover:bg-[var(--black25)] transition-colors duration-200 px-2 rounded-md">
            Lorem ipsum dolor sit amet....
          </p>
          <p className="hover:underline text-blue-700 cursor-pointer px-2 w-fit">
            see more...
          </p>
        </div>
      </div>
      <hr className="w-full" />
      <div className="languageContainer">
        <div className="language flex justify-center items-center">
          English
          <img src={downArrow} alt="down arrow icon" />
        </div>
      </div>
    </div>
  );
}
