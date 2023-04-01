import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 m-auto  my-12 gap-6 p-2 max-w-4xl">
        <div className="grid sm:grid-cols-2 gap-8 hover:bg-zinc-800 rounded-md p-5 h-full">
          <figure className="col-span-1 hfull-">
            <img
              src="./assests/agric.jpg.jpeg"
              className="object-cover  col-span-1 h-full border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6">
            <h2 className="text-white text-md my-4">AgricVideo</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, mollitia. Quisquam, nemo sapiente, unde quo alias minima
              veritatis accusamus adipisci sit asperiores impedit ipsum eveniet
              quidem eius magni quaerat, laudantium dignissimos velit incidunt.
              Ducimus amet nam facere debitis tenetur illum, voluptatum sunt
              deserunt beatae excepturi? Amet animi incidunt repellendus sequi.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              sed.
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
                  <span>Live demo</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 items-center  gap-8 hover:bg-zinc-800 rounded-md p-5">
          <figure className="col-span-1">
            <img
              src="./assests/agric.jpg.jpeg"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6">
            <h2 className="text-white text-md my-4">Exsocial</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, mollitia. Quisquam, nemo sapiente, unde quo alias minima
              veritatis accusamus adipisci sit asperiores impedit ipsum eveniet
              quidem eius magni quaerat, laudantium dignissimos velit incidunt.
              Ducimus amet nam facere debitis tenetur illum, voluptatum sunt
              deserunt beatae excepturi? Amet animi incidunt repellendus sequi.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              sed.
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
                  <span>github.com</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 items-center  gap-8 hover:bg-zinc-800 rounded-md p-5">
          <figure className="col-span-1">
            <img
              src="./assests/agric.jpg.jpeg"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6">
            <h2 className="text-white text-md my-4">Farm-store</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, mollitia. Quisquam, nemo sapiente, unde quo alias minima
              veritatis accusamus adipisci sit asperiores impedit ipsum eveniet
              quidem eius magni quaerat, laudantium dignissimos velit incidunt.
              Ducimus amet nam facere debitis tenetur illum, voluptatum sunt
              deserunt beatae excepturi? Amet animi incidunt repellendus sequi.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              sed.
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
                  <span>github.com</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 items-center  gap-8 hover:bg-zinc-800 rounded-md p-5">
          <figure className="col-span-1">
            <img
              src="./assests/agric.jpg.jpeg"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6">
            <h2 className="text-white text-md my-4">Pomodoro App</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, mollitia. Quisquam, nemo sapiente, unde quo alias minima
              veritatis accusamus adipisci sit asperiores impedit ipsum eveniet
              quidem eius magni quaerat, laudantium dignissimos velit incidunt.
              Ducimus amet nam facere debitis tenetur illum, voluptatum sunt
              deserunt beatae excepturi? Amet animi incidunt repellendus sequi.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              sed.
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
                  <span>github.com</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 items-center  gap-8 hover:bg-zinc-800 rounded-md p-5">
          <figure className="col-span-1">
            <img
              src="./assests/agric.jpg.jpeg"
              className="object-cover  col-span-1 border-zinc-700 border-solid font-2xl"
              alt=""
            />
          </figure>
          <div className="my-6">
            <h2 className="text-white text-md my-4">Webkit-UI</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, mollitia. Quisquam, nemo sapiente, unde quo alias minima
              veritatis accusamus adipisci sit asperiores impedit ipsum eveniet
              quidem eius magni quaerat, laudantium dignissimos velit incidunt.
              Ducimus amet nam facere debitis tenetur illum, voluptatum sunt
              deserunt beatae excepturi? Amet animi incidunt repellendus sequi.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              sed.
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
                  <span>github.com</span>
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
