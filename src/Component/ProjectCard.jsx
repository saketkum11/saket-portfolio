import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 m-auto  my-12 gap-6 p-2 max-w-4xl">
        <div className="md:flex items-center  gap-8 hover:bg-zinc-800 rounded-md p-5">
          <figure className="flex-1">
            <img
              src="./assests/webkit-ui.jpeg"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6 flex-1">
            <h2 className="text-white text-md my-4">WebKit-Ui</h2>
            <p className="text-zinc-600">
              Webkit-Ui is a component-library that helps you to design a
              website.
            </p>
            <div className="flex justify-between my-5">
              <Link to="https://github.com/saketkum11/WebKit-UI.git">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>github.com</span>
                </div>
              </Link>
              <Link to="https://webkit-ui.netlify.app">
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
            <h2 className="text-white text-md my-4">AgricVideo App</h2>
            <p className="text-zinc-600">
              AgricVideo is a video list that has a variety of videos with new
              technology related to agriculture.
            </p>
            <div className="flex justify-between items-start my-5">
              <Link to="https://github.com/saketkum11/AgricVideo.git">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>github.com</span>
                </div>
              </Link>
              <Link to="https://agric-video.netlify.app">
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
        <div className="md:flex  items-center  gap-8 hover:bg-zinc-800 rounded-md p-5 mt-28">
          <figure className="flex-1">
            <img
              src="./assests/Farmstore.jpeg"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6 flex-1">
            <h2 className="text-white text-md my-4">Farmgistic App</h2>
            <p className="text-zinc-600">
              Farmgistic is an e-commerce site related to selling vegetables and
              fruit.
            </p>
            <div className="flex justify-between items-start my-5">
              <Link to="https://github.com/saketkum11/Farm-store.git">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>github.com</span>
                </div>
              </Link>
              <Link to="https://farmstore.netlify.app/">
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
              src="./assests/social-network.png"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6 flex-1">
            <h2 className="text-white text-md my-4">Social Networking App</h2>
            <p className="text-zinc-600">
              Social networking app that connect you with friends , strangers.
            </p>
            <div className="flex justify-between items-start my-5">
              <Link to="https://github.com/saketkum11/social-network.git">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>github.com</span>
                </div>
              </Link>
              <Link to="https://social-network-community.netlify.app/">
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
        <div className="md:flex  items-center  gap-8 hover:bg-zinc-800 rounded-md p-5 mt-28">
          <figure className="flex-1">
            <img
              src="./assests/pomodoro.png"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6 flex-1">
            <h2 className="text-white text-md my-4">Pomodoro App</h2>
            <p className="text-zinc-600">
              Pomodoro app which increases your effeciency level.
            </p>
            <div className="flex justify-between items-start my-5">
              <Link to="https://github.com/saketkum11/productivity-app.git">
                <div className="flex gap-4 text-white cursor-pointer">
                  <span>
                    <i className="fa-solid fa-link"></i>
                  </span>
                  <span>github.com</span>
                </div>
              </Link>
              <Link to="https://productivitypomodoro-app.netlify.app/login">
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
