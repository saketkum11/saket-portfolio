import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../server";

const HomeLayout = () => {
  return (
    <div className=" ">
      <div className=" bg-zinc-900 mx-auto border border-solid border-zinc-700 sm:max-w-7xl ">
        <Header />
        <main className="my-10 md:px-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export { HomeLayout };
