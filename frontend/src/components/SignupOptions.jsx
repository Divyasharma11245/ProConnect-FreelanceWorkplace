import React from 'react'

const SignupOptions = ({img, btnName}) => {
  return (
    <button className="flex flex-row p-2 border border-gray-500 rounded-md w-full mx-3 justify-center text-center align-items-center">
        <img
        src={img}
        alt={btnName}
        className="w-7  object-contain"
      />
      <span className="mx-3 font-bold text-gray-500">{btnName}</span>
    </button>
  )
}

export default SignupOptions