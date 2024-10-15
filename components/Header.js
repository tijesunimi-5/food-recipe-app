"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { FaBars, FaMinusCircle } from "react-icons/fa";

const Header = () => {
  const menu = () => {
    const openMenu = document.querySelector('.openMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const dashboard = document.querySelector(".dashboard");

    openMenu.style.display= 'none';
    closeMenu.style.display= 'block';
    dashboard.style.display= 'flex';
  }

  const closeDashboard = () => {
    const dashboard = document.querySelector(".dashboard");
    const openMenu = document.querySelector(".openMenu");
    const closeMenu = document.querySelector(".closeMenu");

    dashboard.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  };

  const closeDash = () => {
    const openMenu = document.querySelector(".openMenu");
    const closeMenu = document.querySelector(".closeMenu");
    const dashboard = document.querySelector(".dashboard");

    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    dashboard.style.display = "none";
  };
  const buttonHandler = () => {
    console.log("it's working");
  };

  return (
    <header className="flex justify-between px-2 fixed right-0 left-0 top-0 pt-2  z-50 bg-[#F2F2F2] w-[510px] md:w-[768px]">
      <h1 className="text-3xl flex ">
        <span className="flex">
          <FaBars className="text-2xl mt-1 mr-1 openMenu" onClick={menu} />
          <FaMinusCircle
            className="text-2xl mt-1 mr-1 closeMenu hidden"
            onClick={closeDash}
          />
        </span>
        <Link href={"/"} onClick={closeDashboard}>
          <span className="text-orange-400">Tasty-</span>Cook.
        </Link>
      </h1>

      <ul className="hidden">
        <li>Home </li>
        <li>About Us </li>
        <li>Recipes </li>
      </ul>

      <div>
        <Link href={"/recipe"}>
          <Button onClick={buttonHandler}>Lastest Recipe</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
