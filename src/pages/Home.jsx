import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../server";
const Home = () => {
  return (
    <>
      <div className="px-10 my-10">
        <div className="grid grid-cols-1 gap-10">
          <section>
            <div className="">
              <img
                className="rounded-full w-28 h-28 object-cover border-2 border-solid border-zinc-900"
                src="./assests/female.jpg"
                alt="no name"
              />
            </div>
          </section>
          <section className="flex flex-col gap-7">
            <h1 className=" text-4xl font-bold text-white text-left">
              Software designer, founder, and amateur astronaut.
            </h1>
            <p className="text-zinc-600">
              I’m Spencer, a software designer and entrepreneur based in New
              York City. I’m the founder and CEO of Planetaria, where we develop
              technologies that empower regular people to explore space on their
              own terms.
            </p>
          </section>
        </div>
        <ul className="flex gap-9 text-white my-10 ">
          <li className="text-2xl">
            <Link>
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
          <li className="text-2xl">
            <Link>
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li className="text-2xl">
            <Link>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
          <li className="text-2xl">
            <Link>
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
        </ul>
        <Card />
        <div className="flex flex-col gap-8 text-white border border-solid border-zinc-700 max-w-lg py-3 rounded-xl px-5">
          <span>
            <i class="fa-solid fa-briefcase pr-4"></i> Work
          </span>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            ut eius provident illo omnis consectetur sapiente laborum,
            distinctio tenetur minima!
          </p>
        </div>
      </div>
    </>
  );
};

export { Home };
