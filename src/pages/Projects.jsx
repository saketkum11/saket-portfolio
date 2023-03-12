import { ProjectCard } from "../server";

const Projects = () => {
  return (
    <>
      <div className="mt-24 p-4 sm:grid sm:grid-cols-1">
        <div className="flex flex-col gap-5 max-w-2xl">
          <span className="text-white text-5xl font-bold">
            Things I’ve made trying to put my dent in the universe.
          </span>
          <span className=" text-zinc-500">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </span>
        </div>
        <div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
};
export { Projects };
