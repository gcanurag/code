import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

// import {Link}
const Navbar = () => {
  return (
    <nav className='relative flex pl-10 pr-10 justify-between items-center bg-blue-900 h-14 '>
     
        <div className=' relative flex w-72 size '>
          <CiSearch className='absolute text-3xl cursor-pointer pl-1' />
        <input type="text" placeholder='Search' className='  bg-neutral-100 rounded w-72 h-8 pl-8' />
      </div>
      
      <div className='flex items-center justify-between space-x-20'>
      <Link className="underline text-black" to={'/register'}>Create Account</Link>
      <Link className="underline text-black" to={'/login'}>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar