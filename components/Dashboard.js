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
    <div className=" w-[510px] fixed flex-col h-[55vh] bg-gray-200 mt-[-50px] pt-10  hidden dashboard z-40">
      <ul className="text-2xl w-[500px] mt-5">
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

      <div className="flex mt-20 ml-24">
        <div className="w-[130px] mr-10 h-[40px]">
          <Link href={"/register/login"}>
            <Button>Login</Button>
          </Link>
        </div>
        <div className="w-[130px]">
          <Link href={"/sign-up"}>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
