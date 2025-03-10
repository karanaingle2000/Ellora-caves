"use client";
import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { send } from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isLoader, setIsLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    setIsLoader(true);

    // Here you would typically send the data to your backend or email service
    console.log(formData, "Form Data");

    // Simulate a successful submission
    setTimeout(() => {
      setIsLoader(false);
      // Reset form
      setFormData({
        full_name: "",
        email: "",
        mobile: "",
        message: "",
      });
      // Optionally show a success message
      // toast.success("Your inquiry has been submitted successfully!");
    }, 2000);
  };

  return (
    <div className="col-span-3 rounded-md sm:mt-10 mt-10 shadow-md bg-[#eee]">
      <div className="rounded-t-md font-semibold bg-[#314852] text-white py-5 text-center text-xl">
        Feel free to share your inquiry with us
      </div>
      <div className="sm:m-3 m-1">
        <form id="myForm" onSubmit={handleSubmitData} className="px-3 sm:px-0">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto pt-5">
              {/* Full Name */}
              <div className="relative z-0 col-span-2 sm:col-span-1">
                <input
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  type="text"
                  id="full_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                  placeholder=""
                  autoComplete="off"
                  required
                />
                <label className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Full Name<sup className="text-red-600">*</sup>
                </label>
              </div>

              {/* Mobile */}
              <div className="relative z-0 col-span-2 sm:col-span-1">
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                  placeholder=""
                  autoComplete="off"
                  required
                />
                <label className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Mobile<sup className="text-red-600">*</sup>
                </label>
              </div>

              {/* Email */}
              <div className="relative z-0 col-span-2 sm:col-span-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                  placeholder=""
                  autoComplete="off"
                  required
                />
                <label className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email<sup className="text -red-600">*</sup>
                </label>
              </div>

              {/* Message */}
              <div className="col-span-2 mt-3">
                <label className="text-gray-900">
                  <textarea
                    className="flex-1 w-full px-4 py-2 text-sm text-gray-900 placeholder-[#314852] bg-white border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] border-2"
                    id="message"
                    placeholder="Your inquiry details"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                    rows="5"
                    required
                  ></textarea>
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#ff5f15] col-span-2 mx-auto text-lg mb-3 text-white font-semibold px-6 py-2 rounded-sm"
              >
                {isLoader ? <div className="loader"></div> : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;