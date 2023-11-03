import React from 'react'

const RenderDataMovies = (props) => {
  return (
    <>
    <div className='flex flex-col items-center text-center font-poppins tracking-wide'>
      <img alt='poster' className='rounded-[0.5rem] w-[12rem] h-[10rem] hover:cursor-pointer' src={`https://image.tmdb.org/t/p/original/${props.DataMovie.poster_path}`}></img>
      <span className='mt-1 px-2 py-1 max-w-[12.5rem] overflow-hidden font-bold text-[1rem]'>{props.DataMovie.title}</span>
    </div>
    </>
  )
}

export default RenderDataMovies
