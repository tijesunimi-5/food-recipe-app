import React from 'react'

const Card = ({children, key, styles}) => {
  return (
    <div
      key={key}
      className={`flex flex-col w-[310px] rounded-xl shadow-lg bg-white overflow-hidden ${styles}`}
    >
      {children}
    </div>
  );
}

export default Card
