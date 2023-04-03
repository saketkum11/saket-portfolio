import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 m-auto  my-12 gap-6 p-2 max-w-4xl">
        <div className="md:flex items-center  gap-8 hover:bg-zinc-800 rounded-md p-5">
          <figure className="flex-1">
            <img
              src="./assests/agric.jpg.jpeg"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6 flex-1">
            <h2 className="text-white text-md my-4">Exsocial</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              minus deleniti dolorum. Quo perspiciatis doloribus fuga nulla
              adipisci nihil odit.
            </p>
            <div className="flex justify-between my-5">
              <Link to="/">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>github.com</span>
                </div>
              </Link>
              <Link to="/">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>Live Site</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex flex-row-reverse items-center  gap-8 hover:bg-zinc-800 rounded-md p-5 mt-28">
          <figure className="flex-1">
            <img
              src="./assests/agric.jpg.jpeg"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6 flex-1">
            <h2 className="text-white text-md my-4">Exsocial</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              minus deleniti dolorum. Quo perspiciatis doloribus fuga nulla
              adipisci nihil odit.
            </p>
            <div className="flex justify-between items-start my-5">
              <Link to="/">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>github.com</span>
                </div>
              </Link>
              <Link to="/">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>Live Site</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { ProjectCard };
