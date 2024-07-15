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

  const recentAttempts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae accusantium dignissimos facilis corrupti hic repellendus debitis, praesentium at numquam aperiam voluptatem recusandae quo nobis animi ut corporis quis minima!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae accusantium dignissimos facilis corrupti hic repellendus debitis, praesentium at numquam aperiam voluptatem recusandae quo nobis animi ut corporis quis minima!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae accusantium dignissimos facilis corrupti hic repellendus debitis, praesentium at numquam aperiam voluptatem recusandae quo nobis animi ut corporis quis minima!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae accusantium dignissimos facilis corrupti hic repellendus debitis, praesentium at numquam aperiam voluptatem recusandae quo nobis animi ut corporis quis minima!",
  ];
  const editOptions = [
    { option: "Change pic", function: "changePic" },
    { option: "Edit profile", function: "editProfile" },
    { option: "View Picture", function: "viewProfile" },
    { option: "Close", function: "close" },
  ];
  const handleEditOptionClick = useCallback((option) => {
    switch (option) {
      case "editProfile":
        navigate("/editProfile");
        setMenuClicked(false);
        break;
    }
    setEdit(false);
  }, []);
  const redirect = useCallback((e) => {
    const route = e.currentTarget.id;
    navigate(route);
    setMenuClicked(false);
  }, []);

  return (
    <div
      className={`menuContainer text-xs sm:text-[1em] select-none w-fit max-w-72 p-4 rounded-3xl text-center flex flex-col items-center sm:gap-2 gap-1 customShadowForQuizCard absolute z-20 left-12 top-24 bg-white  ${
        menuClicked
          ? ""
          : "-translate-x-[120%] rounded-r-[100%] overflow-x-hidden"
      } transition-all duration-1000`}
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
          {editOptions.map((elem) => {
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
      {pathname !== "/create" && (
        <PrimaryBtn
          className={"w-full p-3 max-[420px]:flex hidden"}
          id={"/create"}
          onClick={redirect}
          placeholder={
            <>
              CREATE
              <LuClipboardList size="1.2rem" />
            </>
          }
        />
      )}
      <PrimaryBtn
        className={"w-full p-3 bg-white hover:bg-white"}
        styles={{ color: "black" }}
        placeholder={
          <>
            YOUR QUIZES
            <LuClipboardList size="1.2rem" />
          </>
        }
      />
      <PrimaryBtn
        className={"w-full p-3 bg-white hover:bg-white"}
        styles={{ color: "black" }}
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
        <div className="attemptListFromHistory text-left sm:gap-1 sm:text-sm font-sans">
          {recentAttempts.map((elem, index) => {
            return (
              <p className="cursor-pointer hover:bg-gray-200 transition-colors duration-200 pl-2 rounded-md line-clamp-1 w-full" key={index}>
                {elem}
              </p>
            );
          })}
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
