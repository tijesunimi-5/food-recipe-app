"use client"
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Dashboard = () => {
  const closeDashboard = () => {
    const dashboard = document.querySelector('.dashboard')
    const openMenu = document.querySelector(".openMenu");
    const closeMenu = document.querySelector(".closeMenu");

    dashboard.style.display= 'none'
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }

  return (
    <div className=" w-[510px] fixed flex-col h-[55vh] bg-gray-200 mt-[-50px] pt-10  hidden dashboard z-40 md:w-[768px]">
      <ul className="text-2xl w-[500px] mt-5 md:w-[720px]">
        <li className="home pl-5 font-semibold border-b-2 border-orange-500">
          <Link href={"/"} onClick={closeDashboard}>
            Home
          </Link>
        </li>
        <li className="about pl-5 font-semibold border-b-2 border-orange-500 mt-5">
          <Link href={"/about-us"} onClick={closeDashboard}>
            About Us
          </Link>
        </li>
        <li className="recipe pl-5 font-semibold border-b-2 border-orange-500 mt-5">
          <Link href={"/recipe"} onClick={closeDashboard}>
            Recipe
          </Link>
        </li>
      </ul>

      <div className="flex mt-20 ">
        <div className="w-[250px] h-[40px] ml-32 mt-10 md:ml-60">
          <Link href={"/register/newsletter"} onClick={closeDashboard}>
            <Button>Subcribe to our newsletter</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
