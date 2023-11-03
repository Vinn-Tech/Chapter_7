import React from 'react';

const Search = () => {
  return (
    <div className='w-[40%] flex justify-between my-3'>
      <div className='relative w-[100%]'>
        <input
          className='search-input bg-transparent w-[100%] h-[2.5rem] pl-4 pr-12 border-[1px] border-red-600 rounded-[2rem] text-white focus:border-red-600 focus:outline-none'
          placeholder='What do you want to watch?'
        />
        <div className="search-icon absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}

export default Search;
