import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col w-[450px] py-5 rounded-xl shadow-lg bg-white overflow-hidden'>
      {props.children}
    </div>
  )
}

export default Card
