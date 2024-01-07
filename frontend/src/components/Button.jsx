import React from 'react'

const Button = ({ children, bg = "", textcolor = "text-white", className = "", ...props }) => {
    
  return (
      <button className={`px-2 py-1  ${bg} ${textcolor} ${className} `}{...props}>
          {children}
    </button>
  )
}

export default Button