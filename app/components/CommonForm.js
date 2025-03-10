"use client";

import { useState } from "react";
// import { toast } from "react-toastify";
// import { send } from "emailjs-com";

function CommonForm({ setOpen, service }) {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    street_Address: "",
    street_Address_Line_2: "",
    city: "",
    region: "",
    zip_code: "",
    country: "",
    mobile: "",
    email: "",
    enquiry_details: "",
    service: service,
  });
  const [isLoader, setisLoader] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  let emailData = {};
  const handleSubmitData = (e) => {
    e.preventDefault();
    setisLoader(true);
    emailData = {
      company_name: formData.company_name,
      contact_person: formData.contact_person,
      street_Address: formData.street_Address,
      street_Address_Line_2: formData.street_Address_Line_2,
      city: formData.city,
      region: formData.region,
      zip_code: formData.zip_code,
      country: formData.country,
      mobile: formData.mobile,
      email: formData.email,
      enquiry_details: formData.enquiry_details,
      service: service,
    };
    console.log(emailData, "form data");

    // const template_id = process.env.NEXT_PUBLIC_TEMPLATE_SECOND_ID;
    // const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
    // const user_id = process.env.NEXT_PUBLIC_USER_ID;

    /* --- METHOD TO SEND THE MAIL --- */
    // send(service_id, template_id, emailData, user_id)
    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //     formData.company_name = "";
    //     formData.contact_person = "";
    //     formData.street_Address = "";
    //     formData.street_Address_Line_2 = "";
    //     formData.city = "";
    //     formData.region = "";
    //     formData.zip_code = "";
    //     formData.country = "";
    //     formData.mobile = "";
    //     formData.email = "";
    //     formData.enquiry_details = "";
    //     setisLoader(false);
    //     toast.success("Your Detail is Submitted Successfully");
    //     setOpen(false);
    //   })
    //   .catch((err) => {
    //     console.log("FAILED...", err);
    //     setisLoader(false);
    //     toast.success("Failure in Data Submission");
    //   });
  };

  return (
    <div>
      <div>
        <div className="fixed top-0 left-0 right-0 w-full mx-auto  bg-black/30  flex justify-center items-start z-50">
          <div className="relative w-full sm:w-8/12 px-2 sm:px-0 pb-3 border-b-2 border-[#314852] shadow-lg  mx-auto flex flex-col   shadow-[#314852]/30 justify-center  sm:h-screen overflow-y-auto  bg-[#eee] opacity-100 ">
            <h2 className="text-center pt-3 sm:pt-7 2xl:pt-5 px-2 sm:px-10 text-[#314852] text-xl sm:text-2xl 2xl:text-4xl font-bold ">
              Business Enquiry Form
            </h2>
            <p className="text-left py-2 px-2 sm:px-10  text-black">
              We will passed your details to our local office and one of our
              local adviser will contact you within 24 working hours.
            </p>
            <button
              className="absolute top-2 sm:top-5 right-4 sm:right-7 "
              onClick={() => setOpen(false)}
            >
              <span className="text-3xl sm:text-3xl 2xl:text-4xl text-[#ff5f15] font-semibold">
                {" "}
                &times;{" "}
              </span>
            </button>

            <form
              onSubmit={handleSubmitData}
              className="w-full flex flex-col mx-auto px-2 sm:px-10 h-[500px] overflow-x-hidden overflow-y-auto"
              autoComplete="false"
            >
              <div className="w-full  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 justify-between pt-2 sm:pt-5 overflow-y-auto">
                  {/* Company Name */}
                  <div className="relative col-span-2 sm:col-span-1 z-0 mb-5">
                    <input
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      type="text"
                      id="company_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="company_name"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company Name<sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* Conatct Person */}
                  <div className="relative col-span-2 sm:col-span-1 z-0 mb-5">
                    <input
                      name="contact_person"
                      value={formData.contact_person}
                      onChange={handleChange}
                      type="text"
                      id="contact_person"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="contact_person"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Contact Person<sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* street_Address*/}
                  <div className="relative col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      name="street_Address"
                      type="text"
                      value={formData.street_Address}
                      onChange={handleChange}
                      id="street_Address"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="street_Address"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Street Address
                      <sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* street_Address Line 2*/}
                  <div className="relative col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      name="street_Address_Line_2"
                      type="text"
                      value={formData.street_Address_Line_2}
                      onChange={handleChange}
                      id="street_Address_Line_2"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="street_Address_Line_2"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Street Address Line 2<sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* city */}
                  <div className="relative col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      id="city"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="city"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      City
                      <sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* region */}
                  <div className="relative col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      name="region"
                      type="text"
                      value={formData.region}
                      onChange={handleChange}
                      id="region"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="region"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Region
                      <sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* zip_code */}
                  <div className="relative col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      name="zip_code"
                      type="text"
                      value={formData.zip_code}
                      onChange={handleChange}
                      id="zip_code"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="zip_code"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Postal /Zip Code
                      <sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* country */}
                  <div className="relative col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      id="country"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="country"
                      className="absolute text-sm text-[#020E1E] duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Country
                      <sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* mobile */}
                  <div className="relative col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      name="mobile"
                      type="text"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="mobile"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone Number
                      <sup className="text-red-600">*</sup>
                    </label>
                  </div>
                  {/* Email */}
                  <div className="relative col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id="email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email Address<sup className="text-red-600">*</sup>
                    </label>
                  </div>

                  {/* course */}
                  {/* <div className="relative hidden col-span-2 sm:col-span-1  z-0 mb-5">
                    <input
                      name="course"
                      type="text"
                      id="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                    />
                    <label
                      htmlFor="course"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Course Interested
                   
                    </label>
                  </div> */}

                  {/* enquiry details */}
                  <div className="relative col-span-2 sm:col-span-2  z-0 mb-5">
                    <textarea
                      name="enquiry_details"
                      type="text"
                      id="enquiry_details"
                      value={formData.enquiry_details}
                      onChange={handleChange}
                      className="block py-1 sm:py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#314852] peer"
                      placeholder=""
                      autoComplete="off"
                    />
                    <label
                      htmlFor="enquiry_details"
                      className="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Enquiry Details
                      {/* <sup className="text-red-600">*</sup> */}
                    </label>
                  </div>

                  {/*  hidden input for Type Bussiness Service  */}
                  <div className="hidden relative z-0 col-span-2">
                    <input
                      type="text"
                      id="service"
                      name="service"
                      className="block py-1 sm:py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#171C2C] peer"
                      placeholder=""
                      readOnly={true}
                      required
                      value={service}
                    />
                    <label
                      for="service"
                      class="absolute text-sm text-[#020E1E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#020E1E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Service<sup class="text-red-600">*</sup>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mx-auto my-1 sm:my-5">
                <button
                  type="submit"
                  className="bg-[#314852] text-base  text-white font-semibold px-6 py-2 rounded-sm"
                >
                  {isLoader ? <div className="loader"></div> : "Send Enquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonForm;
