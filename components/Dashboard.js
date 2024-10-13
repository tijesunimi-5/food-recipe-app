import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="absolute w-[450px] h-[100vh] border-y-gray-200 mt-20">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link href={'/recipe'}>Recipe</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
