"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import CommonBanner from "./CommonBanner";
import EnquireNow from "./EnquireNow";

const serviceNumber = [
  {
    id: "01",
    title: "GUIDED TOURS",
    linkSrc: "#guidedTours",
  },
  {
    id: "02",
    title: "TICKET BOOKING",
    linkSrc: "#ticketBooking",
  },
  {
    id: "03",
    title: "CAVES EXPLORATION",
    linkSrc: "#cavesExploration",
  },
  {
    id: "04",
    title: "CULTURAL EVENTS",
    linkSrc: "#culturalEvents",
  },
];

const serviceData = [
  {
    id: "01",
    imgSrc: "./images/guided_tour.png",
    title: "GUIDED TOURS",
    desc: [
      "Experience the rich history of the Ellora Caves with our expert guides.",
      "Learn about the architectural marvels and the stories behind each cave.",
      "Tours available in multiple languages for your convenience.",
    ],
    enquireNowURL: "/guided-tours-enquiry",
  },
  {
    id: "02",
    imgSrc: "./images/ticket_booking.png",
    title: "TICKET BOOKING",
    desc: [
      "Book your tickets online for a hassle-free entry to the Ellora Caves.",
      "Avoid long queues and secure your spot in advance.",
      "Group discounts available for large parties.",
    ],
    enquireNowURL: "/ticket-booking-enquiry",
  },
  {
    id: "03",
    imgSrc: "./images/caves_exploration.png",
    title: "CAVES EXPLORATION",
    desc: [
      "Explore the stunning rock-cut caves at your own pace.",
      "Maps and guides available for self-guided tours.",
      "Photography allowed to capture the beauty of the caves.",
    ],
    enquireNowURL: "/caves-exploration-enquiry",
  },
  {
    id: "04",
    imgSrc: "./images/cultural_events.png",
    title: "CULTURAL EVENTS",
    desc: [
      "Join us for cultural events and festivals held at the Ellora Caves.",
      "Experience traditional music, dance, and art.",
      "Special events during peak tourist seasons.",
    ],
    enquireNowURL: "/cultural-events-enquiry",
  },
];

const OurServicesCompo = () => {
  const handleClick = (targetId) => {
    const targetDiv = document.getElementById(targetId);
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <CommonBanner title="Our Services" imgSrc="/images/serviceBanner.png" />
      <div className="sm:w-11/12 2xl:w-10/12 w-full mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 items-center">
          <div className="col-span-1 text-2xl font-semibold">
            <h1 className="sm:px-0 px-5 text-xl sm:text-2xl">
              Your One-Stop Solution for Exploring the{" "}
              <span className="text-[#ff5f15]">Ellora Caves</span>
            </h1>
          </div>
          <div className="sm:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {serviceNumber.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleClick(item.id)}
                  className="group p-5 sm:p-10 hover:bg-[#eee] cursor-pointer ease-out duration-500"
                >
                  <div className="rounded-full p-2 sm:p-4 inline text-3xl bg-[#eee] group-hover:bg-[#314852] group-hover:text-white ease-out duration-500">
                    {item.id}
                  </div>
                  <div className="mt-10 text-lg sm:text-xl font-semibold">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-11/12 2xl:w-10/12 w-full mx-auto my-20">
        {serviceData.map((item, i) => (
          <div
            id={item.id}
            key={i}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 items-start mb-10"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className={`w-full h-auto ${
                i % 2 === 0 ? `order-first sm:order-last` : ``
              }`}
            />
            <div>
              <h1 className="mt-2 sm:mt-0 text-left text-2xl lg:text-3xl 2xl:text-4xl tracking-wider font-bold border-l-8 border-solid border-[#ff5f15] pl-2 text-[#314852]">
                {item.title}
              </h1>
              <div className="pt-5 px-5 sm:px-0 text-xl">
                <ul>
                  {item.desc.map((j, index) => (
                    <li className="pt-5 flex items-start" key={index}>
                      <span className="mt-2 text-base mr-2">
                        <FaCheckCircle />
                      </span>
                      <span>{j}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-x-5">
                <Link href={item.enquireNowURL}>
                  <button className="ml-5 sm:ml-0 mt-3 sm:mt-5 ease-out duration-500 border-2 border-[#ff5f15] hover:border-[#314852] hover:bg-[#314852] hover:text-white col-span-2 mx-auto text-lg mb-3 font-semibold px-6 py-2 rounded-sm">
                    Enquire Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesCompo;