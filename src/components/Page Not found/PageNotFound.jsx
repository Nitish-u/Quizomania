import React, { memo } from "react";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const PageNotFound = memo(() => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="heading sm:text-9xl font-black text-5xl">404</div>
      <p>Page not found.</p>
      <PrimaryBtn
        placeholder={"Go to Home page"}
        onClick={() => navigate("/")}
        className={"w-fit mt-4"}
      />
    </div>
  );
});
export default PageNotFound;
