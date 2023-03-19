import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";

const Header = () => {
  const [navFlag, setNavFlag] = useState(false);
  const handleNavigation = () => {
    setNavFlag((flag) => !flag);
  };
  return (
    <>
      <nav className="bg-zinc-800 m-auto px-2 py-3 my-5  border border-solid border-zinc-700">
        <div className="flex justify-between items-center px-3 sm:px-10">
          <div className="text-white text-3xl font-bold">
            <Link to="">Saket Kumar</Link>
          </div>
          <div className="text-3xl flex items-center md:hidden text-white">
            <button className="block" onClick={handleNavigation}>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          {navFlag && <Nav />}
          <div className="hidden md:block">
            <ul className="flex justify-center items-center ">
              <li className="px-4">
                <Link
                  to="/"
                  className="text-white text-xs hover:text-yellow-300 focus:text-yellow-300"
                >
                  Home
                </Link>
              </li>
              <li className="px-4">
                <Link
                  to="/about"
                  className="text-white text-xs hover:text-yellow-600 focus:text-yellow-600"
                >
                  About
                </Link>
              </li>
              <li className="px-4">
                <Link
                  to="/article"
                  className="text-white text-xs hover:text-yellow-600 focus:text-yellow-600"
                >
                  Articles
                </Link>
              </li>
              <li className="px-4">
                <Link
                  to="/projects"
                  className="text-white text-xs hover:text-yellow-600 focus:text-yellow-600"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Header };
