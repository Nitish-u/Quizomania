import profilePic from "../../assets/svgs/avatar-default_svgrepo.com.svg";
import { memo, useCallback, useState } from "react";
import SlidingMenu from "../sliding menu/slidingMenu";
import { FaPlus } from "react-icons/fa6";
import { IoSunny, IoMoon } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { LuClipboardList } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";

const NavBar = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuClicked, setMenuClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const redirect = useCallback((e) => {
    const route = e.currentTarget.id;
    navigate(route);
  }, []);

  return (
    <>
      <SlidingMenu menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <nav
        className={`bg-white p-2 border-2 border-black px-4 rounded-2xl flex justify-between items-center`}
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
            className="logo sm:text-4xl text-3xl font-light sm:font-extralight leading-none cursor-pointer select-none"
            id="/" //redirect to home page
            onClick={redirect}
          >
            QUIZOMANIA
          </div>
        </div>
        <div className="right flex items-center gap-2">
          {location.pathname !== "/create" && (
            <>
              <PrimaryBtn
                className={"w-fit p-2.5 h-fit capitalize px-8 md:flex hidden"}
                id={"/create"}
                onClick={redirect}
                placeholder={
                  <>
                    CREATE
                    <LuClipboardList size="1.2rem" />
                  </>
                }
              />
              <PrimaryBtn
                className={
                  "w-fit p-2.5 h-fit capitalize  md:hidden max-[420px]:hidden"
                }
                id={"/create"}
                onClick={redirect}
                placeholder={<FaPlus size="1.2rem" />}
              />
              <div
                className={`parallelStick w-1 h-3 rounded-sm bg-gray-200 hidden min-[470px]:block`}
              ></div>
            </>
          )}
          <div
            className={`currentTheme border-2 border-black min-[470px]:block hidden w-fit rounded-full p-2 sm:hidden`}
            onClick={themeToggleHndler}
          >
            {isDarkMode ? <IoMoon size="1.2rem" /> : <IoSunny size="1.2rem" />}
          </div>
          <div
            className={`cursor-pointer themeToggleContainer border-2 border-black p-[0.4rem] w-24 rounded-full sm:block hidden`}
            onClick={themeToggleHndler}
          >
            <div
              className={`currentTheme p-1 border-2 border-black w-fit rounded-full transition-all duration-500 ease-in-out ${
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
            className={`parallelStick w-1 h-3 rounded-sm bg-gray-200 max-[420px]:hidden`}
          ></div>
          <div
            className={`profilePic h-10 border-2 border-black rounded-full p-1 overflow-hidden`}
          >
            <img src={profilePic} alt="" className="h-full" />
          </div>
        </div>
      </nav>
    </>
  );
});

export default NavBar;
