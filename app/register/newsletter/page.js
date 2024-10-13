"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const page = () => {
  return (
    <div className="pt-20 mt-12 w-[510px] bg-[#FFFCF5] py-10">
      <div className="ml-10">
        <Card>
          <div className="ml-5">
            <p className="text-xl">
              Subcribe to out newsletter to stay updated with our latest info
              and update. <br />
            </p>

            <div>
              <div className="pl-10">
                <div className="mt-10">
                  <label
                    htmlFor="email"
                    className="absolute px-2 text-2xl font-semibold"
                  >
                    Email:{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-2 w-[350px] rounded-lg border-orange-500 pl-20  text-2xl"
                  />{" "}
                  <br />
                  <div className="mt-2">
                    {" "}
                    <label
                      htmlFor="name"
                      className="absolute px-2 text-2xl font-semibold"
                    >
                      Name:{" "}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border-2 w-[350px] rounded-lg border-orange-500 pl-20  text-2xl"
                    />
                  </div>
                  <textarea
                    rows={3}
                    className="border-2 border-orange-500 text-2xl pl-2 mt-5 rounded-lg w-[350px]"
                  />
                  <div className="w-[150px] mt-5 ml-24 h-[40px]">
                    <Button>Subcribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-10 ml-10 ">
        <Card>
          <div className="relative w-[400px] h-[200px] rounded-full ml-10 flex">
            <img
              src="/codelight.jpg"
              className="rounded-full w-[200px] h-[200px]"
            />
            <span className="bottom-5 absolute text-3xl font-bold right-[50px]">
              _Codelight
            </span>
          </div>
          <p className="text-xl ml-2">
            <span>
              You if you need a good looking, well designed website, reach out
              to me{" "}
              <a href="/" className="underline">
                Here!
              </a>{" "}
              <br />
              We can handle just any site you want to create.
            </span>
          </p>

          <p className="flex text-4xl text-orange-500 w-[370px] mt-8 ml-10 justify-between">
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
        </Card>
      </div>
    </div>
  );
};

export default page;
