import React from 'react'
import { CiSearch } from "react-icons/ci";
// import {Link}
const Navbar = () => {
  return (
    <nav className='relative flex pl-10 pr-10 justify-between items-center bg-blue-900 h-14 '>
     
        <div className=' relative flex w-72 size '>
          <CiSearch className='absolute text-3xl cursor-pointer pl-1' />
        <input type="text" placeholder='Search' className='  bg-neutral-100 rounded w-72 h-8 pl-8' />
      </div>
      
      <div className='flex items-center justify-between space-x-20'>
        <a href="" className='text-lg font-bold text-white '>Login</a>
        <a href=""  className='text-lg font-bold  text-white  '>Signup</a>
      </div>
    </nav>
  )
}

export default Navbar