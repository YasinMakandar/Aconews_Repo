const NewsCard = ({ article }) => {
  return (
    <div className="px-10" >
      <div className=" relative max-w-[900px] w-full text-white font-normal mx-auto flex items-center justify-between px-4 py-2 m-6 shadow-lg hover:shadow-2xl">
        <div className="grid-flow-col-1 md:grid grid-cols-2 gap-y-10 gap-x-6 items-start max-md:py-10 ">
          <img
            src={
              article.image
            }
            className="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-full sm:mb-0 xl:mb-6 xl:w-full"
          />
          <div className="sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-indigo-500">
                {article.author}
              </span>
              {article.title}
              <br />
              <br />
              <a className="flex items-center hover:underline" href={article.source.url}> <span className="text-slate-600 text-sm ">By:</span> <p className="text-sm text-gray-500 ml-1 hover:underline ">{article.source.name}</p></a>
              <br />
            </h3>
            <div className="text-slate-600">
              <p className="mb-3">{article.description}</p>
              

            </div>
            <div className="flex mt-10 justify-between items-center">
              <p className="text-sm text-gray-500">Published at: {new Date(article.publishedAt).toLocaleString()}</p>

              <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-9 text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-300 text-black hover:bg-black hover:text-white focus:ring-slate-500">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
