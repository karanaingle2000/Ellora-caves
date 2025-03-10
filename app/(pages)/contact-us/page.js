import CommonBanner from "@/app/components/CommonBanner";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const metadata = {
  title: "Contact Us - Ellora Caves",
  description: "Get in touch with us for inquiries about the Ellora Caves, tours, and more.",
};

const Page = () => {
  return (
    <div>
      <CommonBanner title="Contact Us" imgSrc="/images/contactBanner.png" />
      <div className="relative sm:w-11/12 2xl:w-10/12 mx-auto my-10">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold text-[#314852] mb-4">Get in Touch</h2>
            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="text-[#ff5f15] mr-2" size={20} />
              <span>Al Muteena, Building Shikha Mahra Al Ghurair, Office 201-06, Dubai.</span>
            </div>
            <div className="flex items-center mb-3">
              <FaPhoneAlt className="text-[#ff5f15] mr-2" size={20} />
              <Link href="tel:+971521124424" className="text-[#314852] hover:text-[#ff5f15]">
                +971 52 1124 424
              </Link>
            </div>
            <div className="flex items-center mb-3">
              <FaEnvelope className="text-[#ff5f15] mr-2" size={20} />
              <Link href="mailto:info@elloracaves.com" className="text-[#314852] hover:text-[#ff5f15]">
                info@elloracaves.com
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:w-2/3">
            <h2 className="text-2xl font-bold text-[#314852] mb-4">Contact Form</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;