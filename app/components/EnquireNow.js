"use client";
import React, { useState } from "react";
import CommonForm from "./CommonForm";


const EnquireNow = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className="ml-5 sm:ml-0 mt-3 sm:mt-5 ease-out duration-500 border-2 border-[#ff5f15] hover:border-[#314852] hover:bg-[#314852] hover:text-white col-span-2 mx-auto text-lg mb-3  font-semibold px-6 py-2 rounded-sm "
      >
        <span className=" ">Enquire Now</span>
      </button>

      <div className="">
        {open && <CommonForm setOpen={setOpen} service={title} />}
      </div>
    </>
  );
};

export default EnquireNow;
