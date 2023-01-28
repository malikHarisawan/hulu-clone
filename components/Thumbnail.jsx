import Image from "next/image"


function Thumbnail({result}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";  return (
    <div className="p-2 group cursor-pointer transition duration-200 transform ease-in sm:hover:scale-105 hover:z-50 shadow-slate-50">
       <Image
       className="rounded"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt="images"
      />
      
      <div className="p-2">
      <h2 className="text-2xl mt-1  text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
        <p className="truncate max-w-md">{result.overview}</p>
      </div>
    </div>
  )
}

export default Thumbnail