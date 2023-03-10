import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" border-solid border-t-2 border-zinc-800">
      <nav className=" m-auto px-2 py-3 my-5 ">
        <div className="flex flex-col items-center justify-center gap-7">
          <ul className="flex justify-center items-center max-w-sm">
            <li className="px-4">
              <Link
                to="/about"
                className="text-white text-xs hover:text-pink-600 focus:text-pink-600"
              >
                About
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/article"
                className="text-white text-xs hover:text-pink-600 focus:text-pink-600"
              >
                Articles
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/projects"
                className="text-white text-xs hover:text-pink-600 focus:text-pink-600"
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className="text-zinc-600 text-xs">
            <p>© 2023 Spencer Sharp. All rights reserved.</p>
          </div>
        </div>
      </nav>
    </div>
  );
};
export { Footer };
