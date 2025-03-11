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
              <span>Chhatrapati Sambhajinagar, Maharashtra.</span>
            </div>
            <div className="flex items-center mb-3">
              <FaPhoneAlt className="text-[#ff5f15] mr-2" size={20} />
              <Link href="tel:+919022895592" className="text-[#314852] hover:text-[#ff5f15]">
                +91 9022895592
              </Link>
            </div>
            <div className="flex items-center mb-3">
              <FaEnvelope className="text-[#ff5f15] mr-2" size={20} />
              <Link href="mailto:karan@elloracaves.com" className="text-[#314852] hover:text-[#ff5f15]">
                karan@elloracaves.com
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:w-2/3">
            <h2 className="text-2xl font-bold text-[#314852] mb-4">Contact Form</h2>
            <ContactForm />
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#314852] mb-4">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d75.3032923153183!3d20.02267158602099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc1c1c1c1c1c1c%3A0x3bdc1c1c1c1c1c1c!2sEllora%20Caves!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;