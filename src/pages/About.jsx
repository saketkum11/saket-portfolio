import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="p-9 mt-32">
        <div className="grid grid-cols-1 lg:grid-rows-[auto-1fr] lg:grid-cols-2 gap-9">
          <div className=" max-w-sm lg:ml-auto">
            <img
              src="./assests/saket05.jpg"
              className="rounded-lg object-cover"
              alt=""
            />
          </div>
          <div className="text-zinc-500 lg:order-first flex flex-col gap-6 lg:row-span-2">
            <span className="md:text-5xl font-extrabold text-white">
              I’m Saket Kumar. Curiosity have let me in building new things.
            </span>
            <p>
              I've loved building new things. While graduating from college, I
              came across programming that created curiosity. It was fascinating
              this website works.Somehow asking a colleague to help me to build
              a portfolio.
            </p>
            <p>
              As graduating from a non-technical background, it was difficult
              for me to start learning a programming language. Meanwhile
              pandemic happened, During the pandemic, I tried to learn
              programming language. Learning new technology while building new
              projects that I have listed out in the projects section.
            </p>
            <p>
              I've been very curious to learn how big tech companies use
              programming languages to build there a product that helps millions
              of people .
            </p>
          </div>
          <div className="lg:pl-32">
            <ul className="text-white flex flex-col gap-4">
              <li className="focus:text-cyan-600 hover:text-cyan-600">
                <Link
                  className="flex gap-x-4"
                  to="https://www.linkedin.com/in/saketkumar21/"
                >
                  <span>
                    <i className="fa-brands fa-linkedin"></i>
                  </span>
                  <span>Linkedin</span>
                </Link>
              </li>
              <li className="focus:text-cyan-600 hover:text-cyan-600">
                <Link
                  className="flex gap-x-4"
                  to="https://twitter.com/saketkum11"
                >
                  <span>
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                  <span>Twitter</span>
                </Link>
              </li>
              <li className="focus:text-cyan-600 hover:text-cyan-600">
                <Link
                  className="flex gap-x-4"
                  to="https://www.instagram.com/k.saket601/"
                >
                  <span>
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                  <span>Instagram</span>
                </Link>
              </li>
              <li className="focus:text-cyan-600 hover:text-cyan-600">
                <Link
                  className="flex gap-x-4"
                  to="https://github.com/saketkum11"
                >
                  <span>
                    <i className="fa-brands fa-github"></i>
                  </span>
                  <span>Github</span>
                </Link>
              </li>
              <li className="focus:text-cyan-600 hover:text-cyan-600 mt-8 cursor-pointer">
                <span>kumarsaket601@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export { About };
