import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="sm:max-w-lg grid grid-cols-1 gap-8 hover:bg-zinc-800 rounded-xl sm:px-8 sm:py-8 w-full py-5 px-5">
        <section className="text-white flex flex-col gap-4">
          <span className="text-sm text-zinc-400">| September 5, 2022</span>
          <span className="text-bold text-lg text-left">
            Crafting a design system for a multiplanetary future
          </span>
          <p className="text-zinc-500 text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            dicta eos magnam, nisi et quam alias provident fugit omnis in sit
            accusantium unde vero cum accusamus facilis quasi ad illo maiores
            enim tempora veniam iusto animi. Maxime nulla quia porro mollitia
            nemo officia ad quam totam enim, odio voluptatibus architecto!
          </p>
          <Link className="text-pink-500">Read More !</Link>
        </section>
        <section className="text-white flex flex-col gap-4">
          <span className="text-sm text-zinc-400">| September 5, 2022</span>
          <span className="text-bold text-lg text-left">
            Crafting a design system for a multiplanetary future
          </span>
          <p className="text-zinc-500 text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            dicta eos magnam, nisi et quam alias provident fugit omnis in sit
            accusantium unde vero cum accusamus facilis quasi ad illo maiores
            enim tempora veniam iusto animi. Maxime nulla quia porro mollitia
            nemo officia ad quam totam enim, odio voluptatibus architecto!
          </p>
          <Link className="text-pink-500">Read More !</Link>
        </section>
      </div>
    </>
  );
};
export { Card };
