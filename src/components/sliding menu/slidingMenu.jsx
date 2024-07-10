import { memo, useCallback, useState } from "react";
import profilePic from "../../assets/svgs/avatar-default_svgrepo.com.svg";
import { GrScorecard } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineBookmarkBorder, MdOutlineEdit } from "react-icons/md";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";
import { useLocation, useNavigate } from "react-router-dom";

const SlidingMenu = memo(({ menuClicked, setMenuClicked }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  function showEditOption() {
    setEdit(!edit);
  }
  const editOptions = [{option: "Change pic", function: "changePic"}, {option: "Edit profile", function: "editProfile" }, {option: "View Picture", function: "viewProfile"}, {option: "Close", function: "close"}];
  const handleEditOptionClick = useCallback((option) => {
    switch(option){
      case "editProfile":
        navigate("/editProfile");
        setMenuClicked(false);
        break;
    }
    setEdit(false);
  }, [])
  const redirect = useCallback((e) => {
    const route = e.currentTarget.id;
    navigate(route);
    setMenuClicked(false);
  }, []);

  return (
    <div
      className={`menuContainer select-none w-fit min-w-72 p-4 rounded-3xl text-center flex flex-col items-center gap-2 customShadowForQuizCard absolute z-20 left-12 top-24 bg-white  ${
        menuClicked ? "" : "-translate-x-96"
      } transition-transform duration-500`}
    >
      <div
        className="profilePic p-4 rounded-full profilePicShadow relative transition-shadow duration-700"
        onClick={showEditOption}
      >
        <img
          src={profilePic}
          alt="profile pic"
          className="w-24 cursor-pointer"
        />
        <div className="text-white transition-opacity duration-700 cursor-pointer absolute bg-black bg-opacity-90 flex items-center justify-center rounded-full bottom-0 right-0 p-2">
          <MdOutlineEdit size="1rem" />
        </div>
        <div
          className={`profileActions bg-white rounded-xl absolute shadow-2xl left-1/2 -translate-x-1/2 top-36 w-36 overflow-hidden cursor-pointer ${
            menuClicked ? (edit ? "" : "hidden") : "hidden"
          }`}
        >
          {editOptions.map(elem => {
            return (
              <div
              key={elem.function}
                className="px-6 py-2 hover:bg-slate-200 active:bg-slate-300"
                onClick={() => handleEditOptionClick(elem.function)}
              >
                {elem.option}
              </div>
            );
          })}
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
      {pathname !== "/create" && <PrimaryBtn
        className={"w-full p-3"}
        id={"/create"}
        onClick={redirect}
        placeholder={
          <>
            CREATE
            <LuClipboardList size="1.2rem" />
          </>
        }
      />}
      <PrimaryBtn
        className={"w-full p-3 bg-white"}
        styles={{color: "black"}}
        placeholder={
          <>
            YOUR QUIZES
            <LuClipboardList size="1.2rem" />
          </>
        }
      />
      <PrimaryBtn
        className={"w-full p-3 bg-white"}
        styles={{color: "black"}}
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
});

export default SlidingMenu;
