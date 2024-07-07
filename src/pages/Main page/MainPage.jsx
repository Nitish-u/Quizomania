import React, { memo } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const MainPage = memo(() => {
  return (
    <div className="h-full flex flex-col gap-4">
      <NavBar />
      <Outlet />
    </div>
  );
});

export default MainPage;
