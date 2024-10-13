import React from 'react'

const Card = ({children, key}) => {
  return (
    <div key={key} className='flex flex-col w-[450px] py-5 rounded-xl shadow-lg bg-white overflow-hidden'>
      {children}
    </div>
  )
}

export default Card
