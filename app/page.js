
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
 import CommonBanner from "./components/CommonBanner";

const whyData = [
  {
    logo: "./images/heritage.png",
    title: "Heritage",
    desc: "Ellora Caves are a UNESCO World Heritage Site, showcasing the rich cultural and architectural heritage of ancient India.",
  },
  {
    logo: "./images/artistry.avif",
    title: "Artistry",
    desc: "The intricate carvings and sculptures in the caves reflect the exceptional artistry and craftsmanship of ancient artisans.",
  },
  {
    logo: "./images/spirituality.png",
    title: "Spirituality",
    desc: "The caves are home to significant Buddhist, Hindu, and Jain monuments, representing the spiritual harmony of ancient India.",
  },
  {
    logo: "./images/tourism.jpg",
    title: "Tourism",
    desc: "Ellora attracts thousands of visitors each year, offering guided tours and educational experiences about its history and significance.",
  },
  {
    logo: "./images/community.png",
    title: "Community Engagement",
    desc: "Local communities are actively involved in preserving the site and promoting sustainable tourism practices.",
  },
  {
    logo: "./images/conservation.png",
    title: "Conservation",
    desc: "Efforts are ongoing to preserve the caves and their artworks for future generations to appreciate and enjoy.",
  },
 ];

export const metadata = {
  title: "Home - Ellora Caves",
  description: "Explore the magnificent Ellora Caves, a UNESCO World Heritage Site, showcasing ancient rock-cut architecture and rich cultural heritage.",
};

export default function Home() {
  return (
    <div className="relative w-full bg-amber-600">
      
      {/* Banner */}
      <CommonBanner/>
      

      {/* About Section */}
      <div className="sm:w-11/12 2xl:w-10/12 w-full mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5">
          <div className="col-span-1 order-last sm:order-first">
            <img src="/images/home1.jpg" alt="Ellora Caves" className="w-full h-auto" />
          </div>
          <div className="col-span-1 py-5 sm:py-10">
            <h1 className="lg:text-3xl 2xl:text-4xl text-2xl font-semibold border-l-8 border-solid border-[#ff5f15] pl-2">
              <span className="text-[#314852]">Ellora Caves: </span>
              <span className="text-[#0b0b0b]">A Marvel of Ancient Architecture</span>
            </h1>
            <p className="text-base px-5 sm:px-0 pt-5 2xl:text-xl text-justify">
              The Ellora Caves, located in Maharashtra, India, are a remarkable example of ancient rock-cut architecture. Carved between the 5th and 10th centuries, these caves showcase the artistic and architectural brilliance of the time. With over 100 caves, each adorned with intricate sculptures and carvings, Ellora stands as a testament to the rich cultural heritage of India.
            </p>
            <p className="px-5 sm:px-0 text-base sm:text-xl font-semibold my-5">
              <span> Ellora Caves are known for:</span>
            </p>
            <ul className="px-5 sm:px-0 grid grid-cols-1 gap-y-2 my-1">
              <li className="flex items-start font-semibold text-[#314852]">
                <span className="mt-1 text-base mr-2">
                  <FaCheckCircle />
                </span>
                Rock-cut architecture
              </li>
              <li className="flex items-start font-semibold text-[#314852]">
                <span className="mt-1 text-base mr-2">
                  <FaCheckCircle />
                </span>
                Intricate carvings and sculptures
              </li>
              <li className="flex items-start font-semibold text-[#314852]">
                <span className="mt-1 text-base mr-2">
                  <FaCheckCircle />
                </span>
                Historical significance
              </li>
              <li className="flex items-start font-semibold text-[#314852]">
                <span className="mt-1 text-base mr-2">
                  <FaCheckCircle />
                </span>
                Spiritual harmony among religions
              </li>
            </ul>
            <p className="text-base px-5 sm:px-0 pt-5 2xl:text-xl text-justify">
              The Ellora Caves are not just a visual delight; they are a profound representation of India's spiritual and artistic traditions, making them a must-visit for anyone interested in history and culture.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-white bg-[#314852]">
        <div className="w-full sm:w-10/12 mx-auto px-3 sm:px-0 text-center leading-10 py-5 sm:py-16 2xl:py-20 text-xl sm:text-3xl font-[500]">
          "Explore the timeless beauty of Ellora Caves, where history and artistry converge."
        </div>
      </div>

      {/* Why Section */}
      <div className="w-full lg:w-11/12 2xl:w-10/12 mx-auto lg:px-0 py-5 sm:py-20">
        <h1 className="text-left lg:text-3xl 2xl:text-4xl text-[#314852] text-2xl tracking-wider font-semibold border-l-8 border-solid border-[#ff5f15] pl-2">
          Why <span className="text-[#0c0400]">Visit Ellora Caves</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 my-5 sm:my-10">
          {whyData.map((item, i) => (
            <div
              className={`flex flex-col items-center p-5 ${
                i % 2 === 0 ? `bg-[#314852]` : `bg-white`
              } rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105`}
              key={i}
            >
              <img src={item.logo} className="w-20 h-20" alt="icon" />
              <h3 className={`font-semibold text-xl sm:text-2xl py-3 ${i % 2 === 0 ? `text-white` : `text-[#314852]`}`}>
                {item.title}
              </h3>
              <p className={`${i % 2 === 0 ? `text-white` : `text-[#314852]`}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}