import React from "react";
import { ArticleCard } from "../Component/ArticleCard";
const Article = () => {
  return (
    <>
      <div>
        <div className="p-6">
          <div className="grid grid-cols-1 text-white mt-28">
            <div className="md:max-w-3xl flex flex-col gap-y-5">
              <h1 className="font-bold text-2xl sm:text-5xl">
                Writing on javascript concepts, react js , and human behavior.
              </h1>
              <p className="text-zinc-500">
                All of my long-form thoughts on programming, human behavior.
              </p>
            </div>
          </div>
          <ArticleCard />
        </div>
      </div>
    </>
  );
};
export { Article };
