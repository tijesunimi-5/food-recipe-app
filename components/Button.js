"use client"
import React from 'react'

const Button = ({onClick, children, styles}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f5f5f5] text-[#f97416] shadow-lg font-bold px-4 py-2 rounded-md  ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button
