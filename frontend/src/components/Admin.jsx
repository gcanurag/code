import React from 'react'
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className=' bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300'>
      <Link to="/adminpage"  className='text-2xl font-bold text-purple-800'>Go to Admin Page</Link>
    </div>
  )
}

export default Admin
