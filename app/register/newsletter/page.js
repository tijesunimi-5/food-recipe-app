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
    <div className="pt-20 mt-12 w-[510px] bg-[#FFFCF5] py-10 md:w-[768px] lg:w-[1006px] xl:w-[1525px]">
      <div className="ml-10 md:ml-40 lg:ml-64 xl:ml-[550px]">
        <Card>
          <div className="ml-5">
            <p className="text-xl">
              Subcribe to out newsletter to stay updated with our latest info
              and update. <br />
            </p>

            <div className="">
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

      <div className="mt-10 ml-10 md:ml-40 lg:ml-64 xl:ml-[550px] xl:w-[600px]">
        <Card>
          <div className="relative w-[400px] h-[200px] rounded-full ml-10 flex ">
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
              If you need a good looking, well designed website, reach out to me{" "}
              <a href="https://www.instagram.com/codelight_01?igsh=NjU4MDFpZDhrb2d0&utm_source=qr" className="underline">
                Here!
              </a>{" "}
              <br />
              We can handle just any site you want to create.
            </span>
          </p>

          <p className="flex text-4xl text-orange-500 w-[370px] mt-8 ml-10 justify-between">
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
        </Card>
      </div>

      <div className="ml-9 mt-10 md:ml-40 lg:ml-64 xl:ml-[550px]" id="support">
        <Card>
          <h1 className="text-center text-2xl">
            Bank accounts to send support funds
          </h1>
          <div className="ml-9 mt-4">
            <p className="text-2xl ">
              <span>Account number: </span>9152282614
              <br />
              <span>Account name:</span> Tijesunimi Idowu
              <br />
              <span>Bank account: </span>OPay.
            </p>

            <p className="text-2xl mt-3 border-t-2 w-[350px] pt-2 border-gray-500">
              <span>Account number: </span>2235502579
              <br />
              <span>Account name:</span> <br /> Tijesunimi Samuel Idowu
              <br />
              <span>Bank account: </span> <br /> United Bank of Africa.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
