"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { FaBars, FaMinusCircle } from "react-icons/fa";

const Header = () => {
  const menu = () => {
    const openMenu = document.querySelector('.openMenu');
  }
  const buttonHandler = () => {
    console.log("it's working");
  };

  return (
    <header className="flex justify-between px-2 fixed right-0 left-0 top-0 pt-2  z-50 bg-[#F2F2F2] w-[510px]">
      <h1 className="text-3xl flex ">
        <span className="flex">
          <FaBars className="text-2xl mt-1 mr-1 openMenu" />
          <FaMinusCircle className="text-2xl mt-1 mr-1 closeMenu hidden" />
        </span>
        <Link href={"/"}>
          <span className="text-orange-400">Tasty-</span>Cook.
        </Link>
      </h1>

      <ul className="hidden">
        <li>Home </li>
        <li>About Us </li>
        <li>Recipes </li>
      </ul>

      <div>
        <Link href={"/register/sign-up"}>
          <Button onClick={buttonHandler}>Lastest Recipe</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
