import filterIcon from "../../assets/svgs/filter icon.svg";
import profilePic from "../../assets/svgs/avatar-default_svgrepo.com.svg";
import { memo, useState } from "react";
import SlidingMenu from "../sliding menu/slidingMenu";

import { GoSearch } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { IoSunny, IoMoon } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { LuClipboardList } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const NavBar = memo(() => {
  const navigate = useNavigate();
  const [menuClicked, setMenuClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const black10 = "--black10";
  const black100 = "--black100";
  const offWhite = "--offWhite";

  function themeToggleHndler(e) {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }

  function menuOpener() {
    setMenuClicked(!menuClicked);
  }

  return (
    <>
      <SlidingMenu menuClicked={menuClicked} />
      <nav
        className={`bg-[var(--offWhite)] p-2 border-2 border-[var(--black100)] px-4 rounded-2xl flex justify-between items-center`}
      >
        <div className="left flex gap-2 items-center">
          <div
            className="hamburger cursor-pointer active:bg-[var(--black25)] p-2 rounded-full"
            onClick={menuOpener}
          >
            {menuClicked ? (
              <RxCross2 size="1.7rem" />
            ) : (
              <RxHamburgerMenu size="1.7rem" />
            )}
          </div>
          <div
            className="logo sm:text-4xl text-3xl font-light sm:font-extralight leading-none cursor-pointer"
            onClick={() => navigate("/")}
          >
            QUIZOMANIA
          </div>
        </div>
        <div className="right flex items-center gap-2">
          <div className="thingsTokeepUptoTabScreen hidden sm:flex items-center gap-2">
            <label htmlFor="searchBar" className="relative">
              <GoSearch
                className="absolute top-[0.6rem] right-2"
                size="1.5rem"
                strokeWidth="0.5"
              />
              <input
                id="searchBar"
                type="text"
                placeholder="search quizes"
                className={`w-40 p-2 px-4 border-2 border-[var(--black100)] rounded-full`}
              />
            </label>
            <div
              className={`parallelStick w-1 h-3 rounded-sm bg-[var(--black10)]`}
            ></div>
            <div className="filterIcon">
              <img src={filterIcon} alt="filter icon" />
            </div>
            <div
              className={`parallelStick w-1 h-3 rounded-sm bg-[var(--black10)]`}
            ></div>
          </div>
          <button
            className={`hidden md:block lg:hidden p-2 bg-black text-white border-2 hover:bg-white hover:text-black rounded-full`}
          >
            <FaPlus size="1.5rem" />
          </button>
          <div
            className={`parallelStick hidden md:block lg:hidden w-1 h-3 rounded-sm bg-[var(--black10)]`}
          ></div>
          <div
            className={`currentTheme hidden md:block lg:hidden border-2 border-[var(--black100)] w-fit rounded-full p-2`}
            onClick={themeToggleHndler}
          >
            {isDarkMode ? <IoMoon size="1.2rem" /> : <IoSunny size="1.2rem" />}
          </div>
          <div className="thingsToKeepUptoWideScreen hidden lg:flex items-center gap-2">
            <button
              className={`bg-[var(--black100)] text-[var(--offWhite)] border-2 border-[var(--black100)] flex items-center p-2 px-6 rounded-full gap-2 hover:bg-white hover:text-black transition-colors duration-500 active:bg-slate-200`}
              onClick={() => navigate("/create")}
            >
              CREATE
              <LuClipboardList className="-mt-1" size="1.2rem" />
            </button>
            <div
              className={`parallelStick w-1 h-3 rounded-sm bg-[var(--black10)]`}
            ></div>
            <div
              className={`cursor-pointer themeToggleContainer border-2 border-[var(--black100)] p-[0.4rem] w-24 rounded-full`}
              onClick={themeToggleHndler}
            >
              <div
                className={`currentTheme p-1 border-2 border-[var(--black100)] w-fit rounded-full transition-all duration-500 ease-in-out ${
                  isDarkMode ? "translate-x-[3.25rem]" : ""
                }`}
              >
                {isDarkMode ? (
                  <IoMoon size="1.1rem" />
                ) : (
                  <IoSunny size="1.1rem" />
                )}
              </div>
            </div>
            <div
              className={`parallelStick w-1 h-3 rounded-sm bg-[var(--black10)]`}
            ></div>
          </div>
          <div
            className={`profilePic h-10 border-2 border-[var(--black100)] rounded-full p-1 overflow-hidden`}
          >
            <img src={profilePic} alt="" className="h-full" />
          </div>
        </div>
      </nav>
    </>
  );
});

export default NavBar;
