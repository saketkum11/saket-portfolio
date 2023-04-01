import React, { useState } from "react";

const Skill = () => {
  const [programming, setProgramming] = useState("");
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-6">
        <h1 className="text-white text-3xl m-auto my-3">Tech Stack</h1>
        <div className="flex flex-wrap justify-center max-w-5xl gap-8 ">
          <div
            className=" text-white w-28  cursor-pointer p-4 rounded-lg"
            onClick={() => setProgramming((value) => "Css ")}
          >
            <span className=" text-white  ">
              <img src="assests/css-icon.png" alt="React" />
            </span>
          </div>
          <div
            className=" text-white w-28  cursor-pointer p-4 rounded-lg"
            onClick={() => setProgramming((value) => "Css ")}
          >
            <span className=" text-white  ">
              <img src="assests/css-icon.png" alt="React" />
            </span>
          </div>

          <div
            className="text-white   w-28 cursor-pointer p-4 rounded-lg"
            onClick={() => setProgramming((value) => "HTML ")}
          >
            <span className=" text-white  ">
              <img src="assests/html-icon.png" alt="React" />
            </span>
          </div>
          <div
            className="text-white   w-28 cursor-pointer p-4 rounded-lg"
            onClick={() => setProgramming((value) => "React Javascript")}
          >
            <span className=" text-white  ">
              <img src="assests/react-js-icon.png" alt="React" />
            </span>
          </div>

          <div
            className="text-white   w-28 cursor-pointer p-4 rounded-lg"
            onClick={() => setProgramming((value) => "TypeScript")}
          >
            <span className=" text-white  ">
              <img src="assests/typescript.png" alt="React" />
            </span>
          </div>
          <div
            className="text-white   w-28 cursor-pointer p-4 rounded-lg"
            onClick={() => setProgramming((value) => "JavaScript")}
          >
            <span className=" text-white  ">
              <img src="assests/javascript.png" alt="React" />
            </span>
          </div>
          <div
            className="text-white   w-28 cursor-pointer p-4 rounded-lg"
            onClick={() => setProgramming((value) => "Redux")}
          >
            <span className=" text-white  ">
              <img src="assests/redux-icon.png" alt="React" />
            </span>
          </div>
          <div
            className="text-white   w-28 cursor-pointer p-4 rounded-lg"
            onClick={() => setProgramming((value) => "Mockbee Backend")}
          >
            <span className=" text-white  ">
              <img
                src="https://cdn.sanity.io/images/hl8ayhlw/production/f8ad0d2d7996928ec0893703b4b20b7de0d73c9c-500x500.png"
                alt="React"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="text-white text-2xl flex justify-center">
        <span>{programming}</span>
      </div>
    </div>
  );
};

export { Skill };
