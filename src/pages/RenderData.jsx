import axios from 'axios'
import React, { useEffect, useState } from "react";
import RenderDataMovies from '../assets/components/RenderDataMovies';

const RenderData = () => {
  const [DataMovie, setDataMovie] = useState([]);

  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_SERVER}3/movie/now_playing?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
       `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  };

  const getDataMovie = async () => {
    axios.request(options)
      .then(function (response) {
        setDataMovie(response.data.results)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getDataMovie()
  })
  

  return (
    <>
    <div className='bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 flex justify-center py-4'>
        <h1 className='font-montserrat tracking-widest font-black text-[2rem] '>MovieList</h1>
    </div>
    <div className='w-full h-[screen] bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 mx-0 grid grid-cols-5 gap-4 py-4'>
        {DataMovie.map((value, index)=> {
            return <RenderDataMovies key={index} DataMovie={value}/>
        })}
    </div>
    </>
  )
};

export default RenderData;
