import React from "react";
import { Link } from "react-router-dom";
import { Skill } from "../server";
import { ArticleCard } from "../Component/ArticleCard";
const Home = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-1 sm:place-content-center p-6 text-cyan-700">
        <div className="flex flex-col gap-10 ">
          <section>
            <img
              className="rounded-full w-28 h-28 object-cover border-2 border-solid border-zinc-900"
              src="./assests/saket05.jpg"
              alt="no name"
            />
          </section>
          <section className="flex flex-col gap-7 sm:max-w-2xl">
            <h1 className=" text-5xl sm:font-extrabold text-white text-left">
              Front End , React Developer
            </h1>
            <p className="text-zinc-600">
              I’m Saket Kumar a frontend developer. Curiosity have let me in
              building new things.
            </p>
          </section>
        </div>
        <ul className="flex gap-9 text-white my-10 ">
          <li className="text-2xl">
            <Link to="https://github.com/saketkum11">
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
          <li className="text-2xl">
            <Link to="https://www.linkedin.com/in/saketkumar21/">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
          <li className="text-2xl">
            <Link to="https://www.instagram.com/k.saket601/">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li className="text-2xl">
            <Link to="https://twitter.com/saketkum11">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="grid place-content-center lg:grid-cols-2 justify-center items-start sm:gap-4  ">
        <ArticleCard />
        <div className="sm:pl-10 mt-12">
          <div className="flex flex-col gap-8 text-white border border-solid border-zinc-700 py-3 rounded-xl px-5 sm:text-sm">
            <Link
              className="text-center text-cyan-600 font-bold"
              to="https://drive.google.com/file/d/1k2JRAlVehgkK7KYEidyxruJDb-9pAm0m/view?usp=drive_link"
            >
              Resume Link
            </Link>
          </div>
        </div>
      </div>
      <Skill />
    </>
  );
};

export { Home };
