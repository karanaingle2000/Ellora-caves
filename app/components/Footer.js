import { IoLocationSharp } from "react-icons/io5";
import { FaLocationArrow, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const NavData = [
  {
    id: 1,
    title: "Home",
    linkSrc: "/",
  },
  {
    id: 2,
    title: "Vision and Mission",
    linkSrc: "/vision-and-mission",
  },
  {
    id: 3,
    title: "About Us",
    linkSrc: "/about-us",
  },
  {
    id: 4,
    title: "Our Services",
    linkSrc: "/our-services",
  },
  {
    id: 5,
    title: "Our Team",
    linkSrc: "/our-team",
  },
  {
    id: 6,
    title: "Contact Us",
    linkSrc: "/contact-us",
  },
];

const TermsData = [
  {
    id: 1,
    title: "Policies and Terms",
    linkSrc: "/policies-and-terms",
  },
];

function Footer() {
  return (
    <div className="bg-[#3d4c5d] flex flex-col items-left pb-5 sm:pb-3 pt-5 sm:pt-10">
      <Link href="/">
        {/* <img
          src="./images/logo.jpg"
          alt="Ellora Caves Logo"
          className="mx-auto w-52 sm:w-72 h-32 sm:h-44"
        /> */}
      </Link>
      {/* Address and Contact Information */}
      <div className="py-5 pl-2 sm:pl-0 sm:py-10 flex flex-col sm:flex-row justify-center items-start">
        <div className="text-white mx-2">
          <div className="flex text-base sm:text-lg justify-center items-start">
            <span className="pr-2 pt-1">
              <IoLocationSharp size={20} />
            </span>
            <div>
            Aurangabad, Maharashtra.,{" "}
              <span className="inline sm:block"> .........</span>
            </div>
          </div>
        </div>

        <div className="text-white mx-2">
          <div className="flex text-base sm:text-lg justify-center items-start">
            <span className="pr-2 pt-1">
              <FaPhone size={20} />
            </span>
            <Link href="tel:+919022895592">
              <p className="text-white text-lg hover:text-[#ff5f15]">+91 9022895592</p>
            </Link>
          </div>
        </div>

        <div className="text-white mx-2">
          <div className="flex text-base sm:text-lg justify-center items-start">
            <span className="pr-2 pt-1">
              <FaLocationArrow size={20} />
            </span>
            <Link href="mailto:info@elloracaves.com">
              <p className="text-white text-lg hover:text-[#ff5f15]">karan@ellora.com</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-3 mx-auto">
        <div className="flex gap-x-3 text-[#314852]">
          <Link href="https://www.facebook.com/elloracaves" target="_blank">
            <div className="bg-white p-2 rounded-full text-[#314852] hover:text-[#ff5f15]">
              <FaFacebook size={25} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/company/elloracaves" target="_blank">
            <div className="bg-white p-2 rounded-full text-[#314852] hover:text-[#ff5f15]">
              <FaLinkedin size={25} />
            </div>
          </Link>
          <Link href="https://www.instagram.com/elloracaves" target="_blank">
            <div className="bg-white p-2 rounded-full text-[#314852] hover:text-[#ff5f15]">
              <FaInstagram size={25} />
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="mt-5">
        <ul className="pl-2 flex flex-col sm:flex-row justify-center items-start sm:items-center mx-auto gap-y-3 sm:gap-y-0 gap-x-5 text-white">
          {NavData.map((item) => (
            <li key={item.id} className="px-3 sm:px-0 cursor-pointer hover:text-[#ff5f15]">
              <Link href={item.linkSrc}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-5 mb-3">
        <ul className="pl-2 flex flex-col sm:flex-row justify-center items -start sm:items-center mx-auto gap-y-3 sm:gap-y-0 gap-x-5 text-white">
          {TermsData.map((item) => (
            <li key={item.id} className="px-3 sm:px-0 cursor-pointer hover:text-[#ff5f15]">
              <Link href={item.linkSrc}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Design and Development Credit */}
      <div className="sm:w-11/12 2xl:w-10/12 w-full mx-auto">
        <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between pl-2 sm:pl-0 mx-auto">
          <span className="text-[10px] text-[#7B8A91] px-3 sm:px-0">
            Copyright © 2024 Ellora Caves, All rights reserved.
          </span>
          <span className="lg:mt-0 px-3 sm:px-0" title="Website Designing Company">
            <Link href="https://www.google.com" target="_blank" className="text-[10px] text-[#7B8A91]">
              Designed and Developed By{" "}
              <span className="text-[#BBC3C7] hover:text-[#E4E7E8]">
                IT Corner
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;