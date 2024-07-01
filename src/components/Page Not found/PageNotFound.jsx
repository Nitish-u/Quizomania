import React from "react";

export default function PageNotFound() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="heading sm:text-9xl font-black text-5xl">404</div>
      <p>Page not found.</p>
      <PrimaryBtn />
    </div>
  );
}
