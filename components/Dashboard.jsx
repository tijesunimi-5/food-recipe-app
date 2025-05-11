"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Dashboard = ({ isVisible, setIsVisible }) => {
  const router = useRouter();
  // const [visible, setVisible] = useState(true);

  const closeDashboard = () => {
    const dashboard = document.querySelector(".dashboard");
    const openMenu = document.querySelector(".openMenu");
    const closeMenu = document.querySelector(".closeMenu");

    dashboard.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  };

  useEffect(() => {
    if (window.innerWidth <= 766) {
      gsap.to(".dashboard", {
        marginLeft: isVisible ? 0 : "-480px",
      });
    } else if (window.innerWidth >= 768) {
      console.log("tablet screen");
      gsap.to(".dashboard", {
        marginLeft: isVisible ? 0 : "-780px",
      });
    }
  }, [isVisible]);

  const toggleSub = () => {
    router.push("/register/newsletter");
    setIsVisible(!isVisible);
  };
  const toggleDashboard = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section
      className={`${
        isVisible ? "block" : "ml-[-480px] md:ml-[-800px]"
      } dashboard`}
    >
      <div
        className={`bg-[#f97416] flex flex-col justify-between w-screen h-[94vh] overflow-hidden md:w-[768px] z-30 lg:hidden fixed`}
      >
        <nav className="flex flex-col justify-between mt-5 px-3">
          <Link
            href={"/"}
            className="font-bold text-2xl border-b-2"
            onClick={toggleDashboard}
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className="font-bold text-2xl border-b-2 pt-5"
            onClick={toggleDashboard}
          >
            About
          </Link>
          <Link
            href={"/recipe"}
            className="font-bold text-2xl border-b-2 pt-5"
            onClick={toggleDashboard}
          >
            Lastest Recipe
          </Link>
        </nav>

        <div className="flex flex-col justify-center items-center">
          <Button onClick={toggleSub} styles={"bg-white text-[#f97316]  mb-5"}>
            Subcribe to our newsletter
          </Button>

          <div className="social-icon flex justify-between mb-10 w-[150px]">
            <FaLinkedin className="text-4xl shadow-md p-1" />
            <FaTwitter className="text-4xl shadow-md p-1" />
            <FaGithub className="text-4xl shadow-md p-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
