import { FaCheckCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { CgPerformance } from "react-icons/cg";
import { GrUpdate } from "react-icons/gr";
import CommonBanner from "@/app/components/CommonBanner";

export const metadata = {
  title: "About Ellora Caves",
  description:
    "Explore the magnificent Ellora Caves, a UNESCO World Heritage Site, showcasing ancient rock-cut architecture and rich cultural heritage.",
};

const aboutData = [
  {
    logo: (
      <GiProgression className="text-[#ff5f15] group-hover:text-white text-3xl" />
    ),
    title: "Historical Significance",
    p1: "Home to over 100 rock-cut caves",
    p2: "Dating back to the 6th century",
    p3: "A blend of Buddhist, Hindu, and Jain architecture",
    p4: "A UNESCO World Heritage Site",
  },
  {
    logo: (
      <TbTargetArrow className="text-[#ff5f15] group-hover:text-white text-3xl" />
    ),
    title: "Cultural Heritage",
    p1: "Reflects the religious harmony of ancient India",
    p2: "Artistic expressions through intricate carvings",
    p3: "Preservation of ancient scripts and texts",
    p4: "A pilgrimage site for many",
  },
  {
    logo: (
      <FaHandshakeAngle className="text-[#ff5f15] group-hover:text-white text-3xl" />
    ),
    title: "Visitor Experience",
    p1: "Guided tours available for deeper insights",
    p2: "Photography opportunities in stunning settings",
    p3: "Cultural events and festivals throughout the year",
    p4: "Visitor-friendly amenities and services",
  },
  {
    logo: (
      <FaPeopleGroup className="text-[#ff5f15] group-hover:text-white text-3xl" />
    ),
    title: "Community Engagement",
    p1: "Involvement of local communities in preservation",
    p2: "Educational programs for schools and tourists",
    p3: "Promoting sustainable tourism practices",
    p4: "Collaborations with cultural organizations",
  },
  {
    logo: (
      <CgPerformance className="text-[#ff5f15] group-hover:text-white text-3xl" />
    ),
    title: "Architectural Marvel",
    p1: "Exquisite rock-cut sculptures and carvings",
    p2: "Innovative engineering techniques of ancient times",
    p3: "Caves carved into volcanic rock",
    p4: "A testament to human creativity and skill",
  },
  {
    logo: (
      <GrUpdate className="text-[#ff5f15] group-hover:text-white text-3xl" />
    ),
    title: "Preservation Efforts",
    p1: "Ongoing restoration projects",
    p2: "Awareness campaigns for visitors",
    p3: "Collaboration with heritage organizations",
    p4: "Commitment to maintaining the site's integrity",
  },
];

const Page = () => {
  return (
    <div className="bg-[#a47a3c]">
      <CommonBanner
        title="Discover the Wonders of Ellora Caves"
       />
      <div className="my-10 sm:w-11/12 2xl:w-10/12 w-full mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-5 mb-10">
          <img
            src="./images/ourstory.jpg" // Update the image path as needed
            alt="Ellora Caves"
            className="mx-5 sm:mx-auto"
          />
          <div>
            <h1 className="text-center     px-5 sm:px-0 lg:text-3xl 2xl:text-4xl text-[#dad7e8] text-2xl tracking-wider font-semibold ">
              Our Story
            </h1>
            <p className=" font-semibold text-[18px] pt-5 px-5 sm:px-0">
              The Ellora Caves, located in Maharashtra, India, are a remarkable
              example of ancient rock-cut architecture. Carved between the 5th
              and 10th centuries, these caves showcase the artistic and
              architectural brilliance of the time. With over 100 caves, each
              adorned with intricate sculptures and carvings, Ellora stands as a
              testament to the rich cultural heritage of India. The site is not
              only a marvel of engineering but also a symbol of religious
              harmony, featuring Buddhist, Hindu, and Jain caves that coexist
              in perfect harmony.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-5 mb-10">
          <div>
            <h1 className="text-center px-5 sm:px-0 lg:text-3xl 2xl:text-4xl text-[#edf4f7] text-2xl tracking-wider font-semibold ">
              Our Significance
            </h1>
            <p className="text-[18px] font-semibold pt-5 px-5 sm:px-0">
              The Ellora Caves are not just a tourist destination; they are a
              vital part of India's history and culture. Recognized as a UNESCO
              World Heritage Site, these caves attract visitors from around the
              globe, eager to witness the stunning artistry and architectural
              ingenuity. The caves serve as a reminder of India's rich
              spiritual and artistic traditions, making them a must-visit for
              anyone interested in history and culture.
            </p>
          </div>
          <img
            src="./images/oursignificance.webp" // Update the image path as needed
            alt="Ellora Caves Interior"
            className="mx-5 sm:mx-0 "
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-5 mb-10">
          <img
            src="./images/committee.jpg" // Update the image path as needed
            alt="Ellora Caves Art"
            className="order-last mx-5 sm:mx-0 sm:order-first "
          />
          <div>
            <h1 className="text-center px-5 sm:px-0 lg:text-3xl 2xl:text-4xl text-[#e5ebee] text-2xl tracking-wider font-semibold ">
              Our Commitment to Preservation
            </h1>
            <p className="text-[18px] font-semibold pt-5 px-5 sm:px-0">
              At Ellora, we are dedicated to preserving the integrity and
              beauty of these ancient caves. Ongoing restoration efforts aim to
              maintain the structural stability and artistic details of the
              caves. We engage with local communities and heritage organizations
              to promote sustainable tourism practices that protect this
              invaluable site for future generations.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#cb9650] py-10">
        <div className="sm:w-11/12 2xl:w-10/12 w-full mx-auto">
          <div className="flex flex-col items-center">
            <h1
              className="text-left lg:text-3xl 2xl:text-4xl text-[#314852] text-2xl tracking-wider font-semibold border-l-8 border-solid border-[#ff5f15] pl-2
          "
            >
              The Ellora Caves Experience
            </h1>
            <p className="text-base py-8 sm:py-10 px-5 sm:px-0">
              Visiting the Ellora Caves is not just about seeing ancient
              architecture; it's about experiencing the rich tapestry of
              history, culture, and spirituality that these caves embody.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 ">
              {aboutData.map((item, i) => (
                <div
                  key={i}
                  className="group border-2 mb-10 border-[#314852]/20 ease-out duration-500 hover:border-[#314852] rounded-md relative bg-white"
                >
                  <div className="absolute shadow-md -top-7 left-4 rounded-full p-3 bg-white border-2 border-[#0a0a0a] ease-out duration-500 group-hover:bg-[#314852]">
                    {item.logo}
                  </div>
                  <div className="px-5 pt-10">
                    <h3 className="text-[#314852] text-left text-2xl pb-2 font-semibold">
                      {item.title}
                    </h3>
                    <ul className="sm:px-0 grid grid-cols-1 gap-y-2 my-1 pb-2">
                      <li className="flex items-start text-[#314852]">
                        <span className="mt-1 text-sm mr-2">
                          <FaCheckCircle />
                        </span>{" "}
                        {item.p1}
                      </li>
                      <li className="flex items-start text-[#314852]">
                        <span className="mt-1 text-sm mr-2">
                          <FaCheckCircle />
                        </span>{" "}
                        {item.p2}
                      </li>
                      <li className="flex items-start text-[#314852]">
                        <span className="mt-1 text-sm mr-2">
                          <FaCheckCircle />
                        </span>{" "}
                        {item.p3}
                      </li>
                      <li className="flex items-start text-[#314852]">
 <span className="mt-1 text-sm mr-2">
                          <FaCheckCircle />
                        </span>{" "}
                        {item.p4}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;