import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="h-full flex flex-col gap-4">
      <NavBar />
      <Outlet />
    </div>
  );
}
