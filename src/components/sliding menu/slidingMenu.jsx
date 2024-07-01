import { useState } from "react";
import profilePic from "../../assets/svgs/avatar-default_svgrepo.com.svg";
import { GrScorecard } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineBookmarkBorder, MdOutlineEdit } from "react-icons/md";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";

export default function SlidingMenu({ menuClicked }) {
  const [edit, setEdit] = useState(false);
  function showEditOption() {
    setEdit(!edit);
  }
  return (
    <div
      className={`menuContainer select-none w-fit p-4 rounded-3xl text-center flex flex-col items-center gap-2 customShadowForQuizCard absolute z-20 left-12 top-24 bg-white  ${
        menuClicked ? "" : "-translate-x-96"
      } transition-transform duration-500`}
    >
      <div className="profilePic p-4 rounded-full profilePicShadow relative hover:shadow-none transition-shadow duration-700">
        <img
          src={profilePic}
          alt="profile pic"
          className="w-24 cursor-pointer"
        />
        <div
          className="text-slate-700 opacity-0 hover:opacity-100 transition-opacity duration-700 cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-200 bg-opacity-90 flex items-center justify-center rounded-full"
          onClick={showEditOption}
        >
          <MdOutlineEdit size="2rem" />
        </div>
        <div
          className={`profileActions bg-white rounded-xl absolute shadow-2xl -bottom-16 -right-28 w-36 overflow-hidden cursor-pointer ${
            menuClicked ? (edit ? "" : "hidden") : "hidden"
          }`}
        >
          <p
            className="px-6 py-2 hover:bg-slate-200 active:bg-slate-300"
            onClick={showEditOption}
          >
            change pic
          </p>
          <p
            className="px-6 py-2 hover:bg-slate-200 active:bg-slate-300"
            onClick={showEditOption}
          >
            edit profile
          </p>
        </div>
      </div>
      <div className="username text-3xl">someone</div>
      <div className="streakAndAvgScrore flex w-full justify-between px-4">
        <div className="streak">
          <span className="text-xl">🔥</span> 10 days
        </div>
        <div className="avgScore flex gap-2 items-center">
          <GrScorecard />
          80%
        </div>
      </div>
      <div className="totalAttempts">Quizes attempted: 10</div>
      <PrimaryBtn
        placeholder={
          <>
            YOUR QUIZES
            <LuClipboardList size="1.2rem" />
          </>
        }
      />
      <PrimaryBtn
        placeholder={
          <>
            SAVED
            <MdOutlineBookmarkBorder size="1.5rem" />
          </>
        }
      />
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
        <div className="language flex justify-center items-center cursor-pointer">
          English
          <IoIosArrowDown size="1.5rem" className="mt-1" />
        </div>
      </div>
    </div>
  );
}
