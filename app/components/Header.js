"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
 import Link from "next/link";

const NavData = [
  {
    title: "Home",
    LinkHref: "/",
  },
  {
    title: "About Ellora Caves",
    LinkHref: "/about-us",
  },
  {
    title: "Visiting Information",
    LinkHref: "/our-services",
  },
  {
    title: "Tours & Activities",
    LinkHref: "/vision-and-mission",
  },
  {
    title: "Gallery",
    LinkHref: "/gallery",
  },
  {
    title: "Contact Us",
    LinkHref: "/contact-us",
  },
];

const socialLink = [
  {
    linkSrc: "https://www.facebook.com/elloracaves",
    logo: <FaFacebookF className="text-xl hover:text-[#ff5f15]" />,
  },
  {
    linkSrc: "https://www.instagram.com/elloracaves",
    logo: <FaInstagram className="text-xl hover:text-[#ff5f15]" />,
  },
  {
    linkSrc: "https://www.linkedin.com/company/elloracaves",
    logo: <FaLinkedinIn className="text-xl hover:text-[#ff5f15]" />,
  },
];

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="bg-[#314852] text-white fixed top-0 left-0 w-full z-50">
        <div className="sm:w-11/12 2xl:w-10/12 mx-auto w-full sm:px-5 px-0 flex justify-between py-2 items-center">
          <div className="flex gap-x-5 text-sm items-center">
            <Link href="tel:+919022895592" className="flex gap-x-2 items-center">
              <FaPhoneAlt />
              <span>+91 9022895592</span>
            </Link>
            <Link href="mailto:karanaingle2000@gmail.com" className="flex gap-x-2 items-center">
              <MdEmail />
              <span>karanaingle2000@gmail.com</span>
            </Link>
          </div>
          <div className="flex gap-x-5 text-sm items-center">
            {socialLink.map((item, i) => (
              <Link key={i} href={item.linkSrc} target="_blank">
                <div>{item.logo}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className="fixed top-8 left-0 w-full z-50 bg-white shadow"> {/* Make navbar fixed */}
        <div className="sm:w-11/12 2xl:w-10/12 mx-auto w-full sm:px-5 px-0">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="cursor-pointer flex items-center">
              {/* Logo or Image */}
              <img
                src="./images/logo1.jpg" // Add your logo image path here
                alt="Ellora Caves Logo"
                className="w-32 h-auto mr-40 rounded-4xl " // Adjust size as needed
              />
              <div className="flex items-center">
                 <h1 className="text-2xl font-bold text-[#314852]">Ellora Caves</h1> {/* Headline */}
              </div>
            </Link>
            <div className="flex items-center gap-x-5">
              {NavData.map((item, i) => (
                <Link key={i} href={item.LinkHref} className="relative">
                  <div className="link-underline text-base 2xl:text-lg py-[4px] rounded-sm font-semibold cursor-pointer transition ease-linear delay-300 hover:text-[#ff5f15]">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;