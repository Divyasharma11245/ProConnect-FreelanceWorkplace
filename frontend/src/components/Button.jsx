import React from 'react'

const Button = ({btnName, className}) => {
  return (
    <button className={`p-2 text-white bg-blue-600  border border-blue-600 rounded-xl font-semibold transition-all duration-200 hover:text-blue-600  hover:bg-white  ${className}`}>{btnName}</button>
  )
}

export default Button