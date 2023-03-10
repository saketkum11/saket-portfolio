import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../server";

const HomeLayout = () => {
  return (
    <div className=" ">
      <div className=" bg-zinc-900 grid grid-col-1 border border-solid border-zinc-700 mx-auto sm:max-w-6xl ">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export { HomeLayout };
