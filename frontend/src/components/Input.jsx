import React from 'react'

const Input = ({label, placeholder, type, id, required=true}) => {
  return (
    <div className="w-full max-w-md mx-auto mt-1.5">
    <label htmlFor={id} className="block mb-2 text-sm sm:text-base font-semibold">{label}</label>
    <input  placeholder={placeholder} type={type} id={id} required={required}className='border border-gray-300 rounded-md m-1 px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
    </div>
  )
}
export default Input;