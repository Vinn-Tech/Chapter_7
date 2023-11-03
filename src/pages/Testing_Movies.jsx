import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDataMovieQuery } from "../services/get-data-movies";
import { useDataMovieQuerySearch } from "../services/search-data-movies";

const Testing_Movies = () => {
  const navigate = useNavigate()

  const [MovieList, setMovieList] = useState([]);
  const [PageNow, setPageNow] = useState(1);
  const [Search, setSearch] = useState("");

  const { data: fetchUser, refetch: refetchUser } = useDataMovieQuery({
    language: "en-US",
    page: PageNow,
  });

  const { data: fetchSearch } = useDataMovieQuerySearch({
    query: Search,
  });

  const handleMinus = () => {
    if (PageNow > 1) {
      setPageNow(PageNow - 1);
    }
  }

  useEffect(() => {
    if (fetchSearch && fetchUser) {
      if (Search.length > 3) {
        setPageNow(1)
        setMovieList(fetchSearch.results);
      } else {
        setMovieList(fetchUser.results);
      }
    }
  }, [Search, fetchSearch, fetchUser]);

  useEffect(() => {
    if (fetchUser) {
      setMovieList(fetchUser.results);
    }
  }, [fetchUser]);

  return (
    <>
      <div className="flex bg-slate-600 flex-col justify-center items-center gap-2 min-h-[100vh]">
        <div className="movie-search">
          <input
            className="input-search border-2 border-red-600 mt-2 rounded-md px-2 py-2 outline-red-600"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Masukkan nama film"
          />
        </div>
        <h1 className="font-poppins font-extrabold text-[2rem]">Page : {PageNow}</h1>
        <div className="btn-wrapper flex gap-4">
          <button
            className="bg-blue-600 px-4 py-2 font-extrabold rounded-md font-poppins tracking-wider"
            onClick={() => {
              setPageNow(PageNow + 1);
            }}
          >
            Plus
          </button>
          <button
            className="bg-red-600 px-4 py-2 font-extrabold rounded-md font-poppins tracking-wider"
            onClick={handleMinus}
          >
            Minus
          </button>
          <button
            className="bg-yellow-600 px-4 py-2 font-extrabold rounded-md font-poppins tracking-wider"
            onClick={() => {
              setPageNow(1);
            }}
          >
            Reset
          </button>
          <button
            className="bg-green-600 px-4 py-2 font-extrabold rounded-md font-poppins tracking-wider"
            onClick={() => {
              refetchUser();
            }}
          >
            Refresh
          </button>
        </div>
        <div className="w-[50vw] flex flex-wrap gap-4 px-4 py-2">
          {MovieList.map((movie, index) => (
            <div className="" key={index}>
            <Link to={`/${movie.id}`}>
              <div className="movie-title h-[4rem] flex justify-center items-center font-bold font-poppins max-w-[10rem] text-center text-[15px]">
                <h1>{movie.title}</h1>
              </div>
              <img className="w-[10rem]" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster_image" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testing_Movies;
