import React from "react";

const About = () => {
  return (
    <>
      <div className="p-9 mt-32">
        <div className="grid grid-cols-1 lg:grid-rows-[auto-1fr] lg:grid-cols-2 gap-9">
          <div className=" max-w-sm">
            <img src="./assests/female.jpg" className="rounded-lg" alt="" />
          </div>
          <div className="text-zinc-500 lg:order-first flex flex-col gap-6 lg:row-span-2">
            <span className="text-5xl font-extrabold text-white">
              I’m Spencer Sharp. I live in New York City, where I design the
              future.
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab error
              animi velit aut iste officiis veritatis necessitatibus ratione
              dolorum dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              eaque facilis sit in consequuntur iste, doloremque esse earum
              cumque qui distinctio dolorem ducimus error sint ab porro
              similique nobis dolor?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              vitae, ullam hic voluptatem, sunt inventore ut labore doloribus,
              ad recusandae nobis! Accusantium commodi inventore debitis dicta,
              voluptatibus quis necessitatibus doloremque.
            </p>
          </div>
          <div className="lg:pl-32">
            <ul className="text-white">
              <li className="flex gap-x-4">
                <span>
                  <i class="fa-brands fa-linkedin"></i>
                </span>
                <span>Linkedin</span>
              </li>
              <li className="flex gap-x-4">
                <span>
                  <i class="fa-brands fa-twitter"></i>
                </span>
                <span>Twitter</span>
              </li>
              <li className="flex gap-x-4">
                <span>
                  <i class="fa-brands fa-instagram"></i>
                </span>
                <span>Instagram</span>
              </li>
              <li className="flex gap-x-4">
                <span>
                  <i class="fa-brands fa-github"></i>
                </span>
                <span>Github</span>
              </li>
              <li className="mt-8">
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
