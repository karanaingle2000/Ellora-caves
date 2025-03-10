"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const linksData = [
  {
    title: "Home",
    linkSrc: "/",
  },
  {
    title: "Vision and Mission",
    linkSrc: "/vision-and-mission",
  },
  {
    title: "About Us",
    linkSrc: "/about-us",
  },

  {
    title: "Our Services",
    linkSrc: "/our-services",
  },

  {
    title: "Our Team",
    linkSrc: "/our-team",
  },

  {
    title: "Contact Us",
    linkSrc: "/contact-us",
  },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="  z-50  ">
      <div className="bg-[#314852] w-full mx-auto px-3 py-1">
        <div className="flex justify-between items-center text-white">
          {" "}
          <Link href="/">
            {/* <img
              src="/images/MobileLogo.png"
              alt="Logo Image"
              className="w-40  h-24 "
            />*/}
          </Link> 
          <div
            className="text-3xl text-white  cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenuSharp />}
          </div>
        </div>{" "}
      </div>
      <div
        className={`pb-5 absolute  z-50 bg-[#314852]/80  w-full
            px-3 transition-all   duration-500 ease-in ${
              open ? `left-0 opacity-100` : `left-[-500px]`
            } `}
      >
        <ul className="md:flex justify-between divide-y-2  font-semibold text-sm">
          {linksData.map((item, i) => (
            <li
              key={i}
              className="text-gray-50 cursor-pointer py-3 px-5 "
              onClick={() => setOpen(!open)}
            >
              <Link href={item.linkSrc}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
