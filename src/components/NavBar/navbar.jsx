import menuIcon from "../../assets/svgs/hamburger-menu_svgrepo.com.svg";
import filterIcon from "../../assets/svgs/filter icon.svg";
import createBtnIcon from "../../assets/svgs/clipboard-list-alt_svgrepo.com.svg";
import lightThemeIcon from "../../assets/svgs/sun-2_svgrepo.com.svg";
import darkThemeIcon from "../../assets/svgs/moon_svgrepo.com.svg";
import profilePic from "../../assets/svgs/avatar-default_svgrepo.com.svg";
import searchIcon from "../../assets/svgs/search_svgrepo.com.svg";
import plusIcon from "../../assets/svgs/plus-svgrepo-com.svg";
import { useState } from "react";

export default function NavBar() {
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

  return (
    <>
      <nav
        className={`bg-[var(${offWhite})] p-2 border-2 border-[var(${black100})] px-4 rounded-2xl flex justify-between items-center`}
      >
        <div className="left flex gap-2 items-center">
          <div className="hamburger">
            <img src={menuIcon} alt="menu icon" />
          </div>
          <div className="logo text-4xl font-extralight leading-none sm:-mt-[6px]">
            QUIZOMANIA
          </div>
        </div>
        <div className="right flex items-center gap-2">
          <div className="thingsTokeepUptoTabScreen hidden sm:flex items-center gap-2">
            <label htmlFor="searchBar" className="relative">
              <img
                src={searchIcon}
                alt="search icon"
                className="absolute top-[0.3rem] right-1"
              />
              <input
                id="searchBar"
                type="text"
                placeholder="search quizes"
                className={`w-40 p-2 px-4 border-2 border-[var(${black100})] rounded-full`}
              />
            </label>
            <div
              className={`parallelStick w-1 h-3 rounded-sm bg-[var(${black10})]`}
            ></div>
            <div className="filterIcon">
              <img src={filterIcon} alt="filter icon" />
            </div>
            <div
              className={`parallelStick w-1 h-3 rounded-sm bg-[var(${black10})]`}
            ></div>
          </div>
          <button
            className={`hidden md:block lg:hidden w-10 p-2 bg-[var(${black100})] rounded-full`}
          >
            <img src={plusIcon} alt="" />
          </button>
          <div
            className={`parallelStick hidden md:block lg:hidden w-1 h-3 rounded-sm bg-[var(${black10})]`}
          ></div>
          <div
            className={`currentTheme hidden md:block lg:hidden border-2 border-[var(${black100})] w-fit rounded-full p-2`}
          >
            <img src={lightThemeIcon} alt="light theme icon" />
          </div>
          <div className="thingsToKeepUptoWideScreen hidden lg:flex items-center gap-2">
            <button
              className={`bg-[var(${black100})] text-[var(--offWhite)] border-2 border-[var(${black100})] flex p-2 px-6 rounded-full gap-2 hover:bg-white hover:text-black transition-colors duration-500`}
            >
              CREATE <img src={createBtnIcon} alt=" create quiz button icon" />
            </button>
            <div
              className={`parallelStick w-1 h-3 rounded-sm bg-[var(${black10})]`}
            ></div>
            <div
              className={`cursor-pointer themeToggleContainer border-2 border-[var(${black100})] p-[0.4rem] w-24 rounded-full`}
              onClick={themeToggleHndler}
            >
              <div
                className={`currentTheme border-2 border-[var(${black100})] w-fit rounded-full transition-all duration-500 ease-in-out ${
                  isDarkMode ? "translate-x-[3.25rem]" : ""
                }`}
              >
                <img
                  src={isDarkMode ? darkThemeIcon : lightThemeIcon}
                  alt="light theme icon"
                  className="scale-75"
                />
              </div>
            </div>
            <div
              className={`parallelStick w-1 h-3 rounded-sm bg-[var(${black10})]`}
            ></div>
          </div>
          <div
            className={`profilePic h-10 border-2 border-[var(${black100})] rounded-full p-1 overflow-hidden`}
          >
            <img src={profilePic} alt="" className="h-full" />
          </div>
        </div>
      </nav>
    </>
  );
}
