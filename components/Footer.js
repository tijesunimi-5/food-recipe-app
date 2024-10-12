'use client'
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-[510px] mt-32 py-4 bg-black text-white text-center">
      <div className="w-[400px] ml-14 pt-5">
        <h1 className="text-4xl">
          <span>Tasty</span>-Cook.
        </h1>

        <p className="text-xl mt-5">
          From quick and easy meals to gourmet delights, we have something for
          every taste and occasion.
        </p>

        <p className="flex justify-between w-[250px] ml-20 mt-4">
          <Link href={"/about-us"} className="underline decoration-orange-500 ">
            About Us
          </Link>
          <Link href={"/recipe"} className="underline decoration-orange-500 ">
            Recipes
          </Link>
          <Link href={"/blog"} className="underline decoration-orange-500 ">
            Blogs
          </Link>
        </p>

        <p className="flex text-4xl text-white w-[370px] mt-8 ml-4 justify-between">
          <a href={"/"}>
            <FaFacebookSquare />
          </a>
          <a href={"/"}>
            <FaInstagramSquare />
          </a>
          <a href={"/"}>
            <FaTwitterSquare />
          </a>
          <a href={"/"}>
            <FaLinkedin />
          </a>
          <a href={"/"}>
            <FaWhatsappSquare />
          </a>
        </p>

        <p className="flex justify-between mt-5">
          Copyright@2024
          <span>Created by _Codelight</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
