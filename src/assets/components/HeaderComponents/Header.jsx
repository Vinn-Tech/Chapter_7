import React from 'react'
import Brand from './Brand'
import Button from './Button'
import Search from './Search'

const Header = () => {
  return (
    <div className="App flex justify-between bg-slate-800 h-screen">
      <Brand/>
      <div className="relative w-[100%] h-[4rem] flex justify-center">
        <Search />
      </div>
      <div className='btn-section flex'>
        <Button variant='secondary'>Login</Button>
        <Button variant='primary'>Register</Button>
      </div>
    </div>
  )
}

export default Header
