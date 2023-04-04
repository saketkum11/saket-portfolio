import { Link } from "react-router-dom";

const ArticleCard = () => {
  return (
    <>
      <div className="lg:w-full lg:border-l-2 lg:border-solid  lg:border-zinc-600 mt-28">
        <div className="sm:flex sm:flex-col sm:w-full md:max-w-3xl lg:pl-20">
          <article className="sm:flex-1 text-white flex flex-col gap-4 hover:bg-zinc-800 rounded-xl py-5 px-5">
            <span className="text-sm text-zinc-400">| July 22, 2022</span>
            <span className="text-bold text-lg text-left">
              Importance of Keys
            </span>
            <p className="text-zinc-500 text-md">
              Keys help React identify which items have changed, are added, or
              are removed. Keys should be given to the elements inside the array
              to give the elements a stable identity. The best way to pick a key
              is to use a string that uniquely identifies a list item among its
              siblings. Most often you would use IDs from your data as keys.
            </p>
            <Link
              className="text-yellow-500"
              to="https://saket.hashnode.dev/importance-of-keys"
            >
              Read More !
            </Link>
          </article>
          <article className="sm:flex-1 text-white flex flex-col gap-4 hover:bg-zinc-800 rounded-xl py-5 px-5">
            <span className="text-sm text-zinc-400">| July 22, 2022</span>
            <span className="text-bold text-lg text-left">
              Understand Deep and Shallow copy
            </span>
            <p className="text-zinc-500 text-md">
              A shallow copy of an object is a copy whose properties share the
              same reference as those of the source object from which the copy
              was made. So, when you do any modification in reference or source
              object that causes the change in the source object. And
              unintentionally your source object will be changed.
            </p>
            <Link
              to="https://saket.hashnode.dev/understand-deep-and-shallow-copy"
              className="text-yellow-500"
            >
              Read More !
            </Link>
          </article>
          <article className="text-white flex flex-col gap-4 hover:bg-zinc-800 rounded-xl py-5 px-5">
            <span className="text-sm text-zinc-400">| September 5, 2022</span>
            <span className="text-bold text-lg text-left">Semantic HTMl</span>
            <p className="text-zinc-500 text-md">
              you have a situation where you want to open a bookstore to sell
              books. So, you need a store and books on bookshelf where you can
              show a different categories of books for your consumer. Now you
              thought to keep books for that you have to have books selves. So,
              you have different shelves for different book categories. It is
              also easy for consumers to pick books and sales could start
              happening.
            </p>
            <Link
              to="https://saket.hashnode.dev/semantic-html"
              className="text-yellow-500"
            >
              Read More !
            </Link>
          </article>
        </div>
      </div>
    </>
  );
};
export { ArticleCard };
