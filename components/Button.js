"use client"
import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className='font-medium bg-orange-500 text-white px-3 rounded-md w-full h-full'>
      {children}
    </button>
  )
}

export default Button
