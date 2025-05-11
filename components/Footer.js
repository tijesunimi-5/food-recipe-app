"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="footer flex flex-col px-2 overflow-x-hidden mt-12 py-4 border-t-2 border-[#f97316] md:w-screen lg:w-screen xl:w-screen xl:items-center">
      <div className="xl:w-[1000px] xl:flex xl:flex-col xl:items-center">
        <h1 className="text-col text-[1.6em] font-bold text-center pb-3 xl:text-[1.8em]">
          TastyCook
        </h1>

        <p className="text-[16.5px] xl:text-[22px] xl:w-[800px] xl:text-center">
          From quick and easy meals to gourmet delights, we have something for
          every taste and occasion.
        </p>

        <nav className="flex justify-between text-col mt-3 font-bold px-4 xl:w-[500px]">
          <Link href={"/about-us"} className="underline cursor-pointer">
            About
          </Link>
          <Link href={"/recipe"} className="underline cursor-pointer">
            Latest Recipe
          </Link>
          <Link
            href={"/register/newsletter"}
            className="underline cursor-pointer"
          >
            Newsletter
          </Link>
        </nav>

        <div className="social-icons flex justify-between w-[200px] text-[18px] text-col mt-5 ml-20 xl:w-[400px] xl:ml-0">
          <FaLinkedin
            className="text-4xl shadow-lg p-1"
            onClick={() =>
              router.push(
                "https://www.linkedin.com/in/idowu-tijesunimi-189492294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              )
            }
          />
          <FaTwitterSquare
            className="text-4xl shadow-md p-1"
            onClick={() =>
              router.push(
                "https://x.com/codelight001/status/1830646298103681191?s=46"
              )
            }
          />
          <FaGithub
            className="text-4xl shadow-md p-1"
            onClick={() => router.push("https://github.com/tijesunimi-5")}
          />
        </div>
        <p className="flex justify-between mt-5 md:text-2xl md:w-[600px] md:ml-[-45px] lg:w-[850px]">
          Copyright@2024
          <Link href={"/review-messages"}>
            <span>Created by _Codelight</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
