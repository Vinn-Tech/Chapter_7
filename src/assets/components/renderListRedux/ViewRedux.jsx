import React from 'react'
import { useSelector } from 'react-redux'

const ViewRedux = () => {
    const Data = useSelector((state) => state.dataMe)
    // console.log(Data, "Data")
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h1 className='font-montserrat text-bold'>Age : {Data.age}</h1>
    <h1 className='font-montserrat text-bold'>Name : {Data.name}</h1>
    </div>
  )
}

export default ViewRedux
