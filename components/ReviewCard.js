import React from "react";

const ReviewCard = ({ children, key }) => {
  return (
    <div
      key={key}
      className="flex flex-col w-[450px] py-5 rounded-xl shadow-lg bg-orange-500 text-white overflow-hidden"
    >
      {children}
    </div>
  );
};

export default ReviewCard;
