import React from 'react';
import CommonBanner from "@/app/components/CommonBanner";

const images = [
  "/images/cave1.avif", // Replace with actual image paths
  "/images/cave2.jpg",
  "/images/cave3.jpg",
  "/images/cave4.webp",
  "/images/cave5.jpg",
  "/images/cave6.jpg",
  "/images/cave7.webp",
  "/images/cave8.jpg",
  "/images/cave9.jpg",
];

const page = () => {
  return (
    <div>
      <CommonBanner title="Gallery" imgSrc="/images/galleryBanner.jpg" /> {/* Replace with actual banner image path */}
      
      <div className="w-full lg:w-11/12 2xl:w-10/12 mx-auto my-10 px-5">
        <h1 className="text-2xl lg:text-3xl font-semibold text-[#314852] mb-5">
          Explore the Beauty of Ellora Caves
        </h1>
        <p className="text-lg text-gray-700 mb-5">
          Discover the stunning rock-cut architecture and intricate carvings of the Ellora Caves through our gallery. Each image captures the essence of this UNESCO World Heritage Site.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img
                src={image}
                alt={`Ellora Cave ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="p-4 bg-white">
                <h2 className="text-lg font-semibold text-[#314852]">Ellora Cave {index + 1}</h2>
                <p className="text-gray-600">A glimpse into the magnificent architecture and artistry of the Ellora Caves.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;