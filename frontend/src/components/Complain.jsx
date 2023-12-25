import React from 'react'
import { Link } from 'react-router-dom';

const Complain = () => {
  return (
    <div className='bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300 text-2xl font-bold text-purple-800'>
      <Link to="/form">File Complain</Link>
    </div>
  )
}

export default Complain
