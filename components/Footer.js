'use client'
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer w-[510px] mt-32 py-4 bg-black text-white text-center md:w-[768px]">
      <div className="footer-div w-[400px] ml-14 pt-5 md:ml-36 md:w-[500px]">
        <h1 className="text-4xl md:text-5xl">
          <span>Tasty</span>-Cook.
        </h1>

        <p className="text-xl mt-5 md:text-2xl">
          From quick and easy meals to gourmet delights, we have something for
          every taste and occasion.
        </p>

        <p className="flex justify-between w-[290px] ml-16 mt-4 md:w-[390px] md:text-xl">
          <Link href={"/about-us"} className="underline decoration-orange-500 ">
            About Us
          </Link>
          <Link href={"/recipe"} className="underline decoration-orange-500 ">
            Recipes
          </Link>

          <Link
            href={"/register/newsletter"}
            className="underline decoration-orange-500 "
          >
            Newsletter
          </Link>
        </p>

        <p className="flex text-4xl text-white w-[370px] mt-8 ml-4 justify-between md:w-[470px] md:text-5xl">
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

        <p className="flex justify-between mt-5 md:text-2xl md:w-[600px] md:ml-[-45px]">
          Copyright@2024
          <Link href={'/review-messages'}>
            <span>Created by _Codelight</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
