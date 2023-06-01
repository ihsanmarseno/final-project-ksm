type Props = {
  shortenedUrl: string;
  searchString: string;
};

function Card({ shortenedUrl, searchString }: Props) {
  console.log(shortenedUrl);
  return (
    <div className="bg-white w-5/6 flex justify-center flex-col items-center mx-auto mt-10 rounded-xl space-y-4 p-6 md:w-3/4 md:flex-row md:items-center md:space-y-0 md:space-x-10 shadow-sm">
      <div className="flex flex-col space-y-2 w-full font-bold text-xl md:flex-row md:items-center md:space-y-0 md:justify-between md:space-x-0 md:flex-wrap">
        <h1 className="truncate">{searchString}</h1>
        <a
          href={`https://${shortenedUrl}`}
          className="text-teal-400"
          target="_blank"
        >
          https://{shortenedUrl}
        </a>
      </div>
      <button className="bg-teal-400 text-white font-bold p-3 rounded-md hover:bg-teal-200 disabled:bg-teal-800 w-full md:w-auto md:px-10">
        Copy
      </button>
    </div>
  );
}

export default Card;
