import React from 'react';
import CommonBanner from "@/app/components/CommonBanner";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <CommonBanner title="Tours and Activities" imgSrc="/images/toursBanner.jpg" /> {/* Replace with actual image path */}
      
      <div className="w-full lg:w-11/12 2xl:w-10/12 mx-auto my-10 px-5">
        <h1 className="text-2xl lg:text-3xl font-semibold text-[#314852] mb-5">
          Explore the Wonders of Ellora Caves
        </h1>
        <p className="text-lg text-gray-700 mb-5">
          Discover the rich history and stunning architecture of the Ellora Caves through our guided tours and activities. Whether you're a history buff, an architecture enthusiast, or simply looking for a unique experience, we have something for everyone.
        </p>
        
        <h2 className="text-xl lg:text-2xl font-semibold text-[#314852] mb-3">
          Available Tours
        </h2>
        <ul className="list-disc list-inside mb-5">
          <li className="text-lg text-gray-700">Guided Tours of the Caves</li>
          <li className="text-lg text-gray-700">Photography Tours</li>
          <li className="text-lg text-gray-700">Cultural Heritage Walks</li>
          <li className="text-lg text-gray-700">Sunset Tours</li>
        </ul>

        <h2 className="text-xl lg:text-2xl font-semibold text-[#314852] mb-3">
          Activities
        </h2>
        <ul className="list-disc list-inside mb-5">
          <li className="text-lg text-gray-700">Workshops on Rock-Cut Architecture</li>
          <li className="text-lg text-gray-700">Traditional Dance Performances</li>
          <li className="text-lg text-gray-700">Art and Craft Sessions</li>
          <li className="text-lg text-gray-700">Nature Walks in the Surrounding Area</li>
        </ul>

        <h2 className="text-xl lg:text-2xl font-semibold text-[#314852] mb-3">
          Book Your Tour
        </h2>
        <p className="text-lg text-gray-700 mb-5">
          Ready to explore the Ellora Caves? Click the button below to book your tour or activity today!
        </p>
        <Link href="/booking" className="bg-[#ff5f15] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#e65c00] transition duration-300">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default page;