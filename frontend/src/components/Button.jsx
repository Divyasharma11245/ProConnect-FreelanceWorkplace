import React from 'react'

const Button = ({btnName, className}) => {
  return (
    <button className={`bg-blue-700 text-white font-bold p-2 rounded-md border${className}`}>{btnName}</button>
  )
}

export default Button