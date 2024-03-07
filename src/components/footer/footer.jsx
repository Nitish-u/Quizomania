import { useState } from "react";
import filterIcon from "../../assets/svgs/filter icon.svg";
import lightThemeIcon from "../../assets/svgs/sun-2_svgrepo.com.svg";
import darkThemeIcon from "../../assets/svgs/moon_svgrepo.com.svg";

import { GoSearch } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { IoSunny, IoMoon } from "react-icons/io5";


export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchBarClicked, setSearchBarClicked] = useState(false);

  function searchBarWidthHndler(e) {
    if (searchBarClicked) {
      setSearchBarClicked(false);
    } else {
      setSearchBarClicked(true);
    }
  }

  function themeToggleHndler(e) {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }
  return (
    <div className="footer flex justify-between items-center sm:px-10 w-full py-5 rounded-tl-3xl rounded-tr-3xl customShadowForFooter">
      <div className="logo font-black text-2xl tracking-[0.25rem] cursor-pointer hidden sm:block">
        CODEBOT
      </div>
      <div className="mobileButtonsContainer flex gap-4 items-center sm:hidden justify-center w-full">
        <label htmlFor="searchBar" className="relative">
          <GoSearch
            className="absolute top-[0.4rem] right-[0.3rem] bg-white rounded-full cursor-pointer"
            size="1.8rem"
            onClick={searchBarWidthHndler}
          />
          <input
            id="searchBar"
            type="text"
            placeholder="search quizes"
            className={`${
              searchBarClicked ? "w-[19rem]" : "w-10"
            } h-10 p-2 border-2 border-[var(--black100)] rounded-full transition-all duration-500 ease-in-out`}
          />
        </label>
        <button
          className={`bg-black text-white active:text-black w-10 h-10 rounded-full p-1 ${
            searchBarClicked ? "hidden" : ""
          }`}
        >
          <FaPlus size="1.5rem" className="m-auto" />
        </button>
        <div className={`filterIcon w-10 ${searchBarClicked ? "hidden" : ""}`}>
          <img src={filterIcon} alt="filter icon" className="w-full" />
        </div>
        <div
          className={`cursor-pointer themeToggleContainer border-2 border-[var(--black100)] p-[0.4rem] min-w-24 rounded-full ${
            searchBarClicked ? "hidden" : ""
          }`}
          onClick={themeToggleHndler}
        >
          <div
            className={`currentTheme p-1 border-2 border-[var(--black100)] w-fit rounded-full transition-all duration-500 ease-in-out ${
              isDarkMode ? "translate-x-[3.1rem]" : ""
            }`}
          >
            {isDarkMode ? <IoMoon size="1.2rem" /> : <IoSunny size="1.2rem" />}
          </div>
        </div>
      </div>
      <div className="footerOptions sm:flex gap-4 hidden">
        <p className="hover:underline cursor-pointer">help</p>
        <p className="hover:underline cursor-pointer">contact us!</p>
        <p className="hover:underline cursor-pointer">Terms and conditions</p>
      </div>
    </div>
  );
}
