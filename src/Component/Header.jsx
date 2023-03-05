import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-zinc-800 w-1/2 m-auto px-6 py-4 my-5 rounded-full border border-solid border-zinc-700">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <Link to="/">Saket kumar</Link>
          </div>
          <ul className="flex justify-center items-center">
            <li className="px-4">
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>
            <li className="px-4">
              <Link to="/articles" className="text-white">
                Articles
              </Link>
            </li>
            <li className="px-4">
              <Link to="/projects" className="text-white">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Header };
