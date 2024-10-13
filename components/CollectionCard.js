import React from 'react'

const CollectionCard = (props) => {
  return (
    <div className="flex flex-col py-5 rounded-xl shadow-lg bg-orange-500 overflow-hidden text-white">
      {props.children}
    </div>
  );
}

export default CollectionCard
