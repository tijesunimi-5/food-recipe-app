'use client'
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer w-[510px] mt-32 py-4 bg-black text-white text-center md:w-[768px] lg:w-[1006px] xl:w-[1515px]">
      <div className="footer-div w-[400px] ml-14 pt-5 md:ml-36 md:w-[500px] lg:w-[706px] xl:ml-[400px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">
          <span>Tasty</span>-Cook.
        </h1>

        <p className="text-xl mt-5 md:text-2xl lg:text-3xl">
          From quick and easy meals to gourmet delights, we have something for
          every taste and occasion.
        </p>

        <p className="flex justify-between w-[290px] ml-16 mt-4 md:w-[390px] md:text-xl lg:text-2xl lg:w-[590px]">
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

        <p className="flex text-4xl text-white w-[370px] mt-8 ml-4 justify-between md:w-[470px] md:text-5xl lg:w-[700px] lg:text-6xl">
          <a href={"https://www.facebook.com/lightdesignii?mibextid=LQQJ4d"}>
            <FaFacebookSquare />
          </a>
          <a href={"https://www.instagram.com/codelight_01?igsh=NjU4MDFpZDhrb2d0&utm_source=qr"}>
            <FaInstagramSquare />
          </a>
          <a href={"https://x.com/codelight001/status/1830646298103681191?s=46"}>
            <FaTwitterSquare />
          </a>
          <a href={"https://www.linkedin.com/in/idowu-tijesunimi-189492294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}>
            <FaLinkedin />
          </a>
          <a href={"https://wa.me/7018268171"}>
            <FaWhatsappSquare />
          </a>
        </p>

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
