import React, { useState } from 'react'
import { useDataMovieQuery } from '../services/get-data-movies'

const NewRenderMovies = () => {
    const [PageNow, setPageNow] = useState(1)

    const {data: fetchUser, refetch: refetchUser} = useDataMovieQuery({
      language: "en-US",
        page: PageNow
    });

    console.log(fetchUser)
  return (
    <div className='relative flex flex-col justify-center items-center gap-2'>
      <h1 className='font-poppins font-extrabold text-[2rem]'>{PageNow}</h1>
      <button className='bg-blue-600 px-4 py-2 font-extrabold rounded-md font-poppins tracking-wider' onClick={()=>{
        setPageNow(PageNow + 1)
      }}>Plus</button>
      <button className='bg-red-600 px-4 py-2 font-extrabold rounded-md font-poppins tracking-wider' onClick={()=>{
        setPageNow(PageNow - 1)
      }}>Minus</button>
      <button className='bg-yellow-600 px-4 py-2 font-extrabold rounded-md font-poppins tracking-wider' onClick={()=>{
        setPageNow(1)
      }}>Reset</button>
      <button className='bg-green-600 px-4 py-2 font-extrabold rounded-md font-poppins tracking-wider'  onClick={()=>{
        refetchUser()
      }}>
        Refresh
      </button>  
    </div>
  )
}

export default NewRenderMovies
