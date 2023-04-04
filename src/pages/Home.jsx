import React from "react";
import { Link } from "react-router-dom";
import { Skill } from "../server";
import { ArticleCard } from "../Component/ArticleCard";
const Home = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-1 sm:place-content-center p-6">
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
              Software designer, founder, and amateur astronaut.
            </h1>
            <p className="text-zinc-600">
              I’m Saket, a software designer and entrepreneur based in New York
              City. I’m the founder and CEO of Planetaria, where we develop
              technologies that empower regular people to explore space on their
              own terms.
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
        <div className="sm:pl-10 mt-28">
          <div className="flex flex-col gap-8 text-white border border-solid border-zinc-700 py-3 rounded-xl px-5 sm:text-sm">
            <span>
              <i className="fa-solid fa-briefcase pr-4"></i> Work
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-5">
                  <figure className="rounded-full w-8 h-8">
                    <img src="./assests/Airbnb_logo_PNG2.png" alt="" />
                  </figure>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-col">
                      <span>AirBnb</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Product Design</span>
                      <span>Date 2019 — Present</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5">
                  <figure className="rounded-full w-8 h-8">
                    <img src="./assests/Airbnb_logo_PNG5.png" alt="" />
                  </figure>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-col">
                      <span>AirBnb</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Product Design</span>
                      <span>Date 2019 — Present</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5">
                  <figure className="rounded-full w-8 h-8">
                    <img src="./assests/Airbnb_logo_PNG5.png" alt="" />
                  </figure>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-col">
                      <span>AirBnb</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Product Design</span>
                      <span>Date 2019 — Present</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-5">
                  <figure className="rounded-full w-8 h-8">
                    <img src="./assests/Airbnb_logo_PNG5.png" alt="" />
                  </figure>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-col">
                      <span>AirBnb</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Product Design</span>
                      <span>Date 2019 — Present</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Skill />
    </>
  );
};

export { Home };
