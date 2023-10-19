import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="md:hidden absolute left-3 right-3 rounded-md top-24">
        <div className="md:block">
          <ul className="flex flex-col justify-center items-center bg-zinc-800 w-full gap-4 p-4">
            <li className="px-4">
              <Link
                to="/"
                className="text-white text-xs hover:text-yellow-600 focus:text-yellow-600"
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
          </ul>
        </div>
      </div>
    </>
  );
};

export { Nav };
