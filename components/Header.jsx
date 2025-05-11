"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { FaBars, FaMinusCircle, FaTimes } from "react-icons/fa";
import Dashboard from "./Dashboard";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
    setDashboardVisible(!dashboardVisible);
  };

  const buttonHandler = () => {
    console.log("it's working");
  };

  return (
    <header className="bg-[#f97316] text-white  fixed top-0 right-0 left-0 z-50">
      <div className="flex justify-between items-center py-1 px-2 border-b-2 border-white lg:px-20">
        <Link href={"/"} className="logo text-[28px] font-bold">
          TastyCook
        </Link>

        <nav className="hidden lg:flex justify-between w-[300px] mr-20">
          <Link href={"/about-us"} className="underline cursor-pointer">
            About
          </Link>
          <Link href={"/recipe"} className="underline cursor-pointer">
            Lastest recipe
          </Link>
          <Link
            href={"/register/newsletter"}
            className="underline cursor-pointer"
          >
            Newsletter
          </Link>
        </nav>

        {/* mobile-menu-toggle */}
        {visible ? (
          <FaTimes onClick={toggle} className="text-3xl lg:hidden" />
        ) : (
          <FaBars onClick={toggle} className="text-3xl lg:hidden" />
        )}
      </div>
      <Dashboard isVisible={visible} setIsVisible={setVisible} />
    </header>
  );
};

export default Header;
