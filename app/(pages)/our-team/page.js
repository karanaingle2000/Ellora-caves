import CommonBanner from "@/app/components/CommonBanner";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";

export const metadata = {
  title: "Our Team - Ellora Caves",
  description: "Meet the dedicated team behind the Ellora Caves, committed to preserving and promoting this UNESCO World Heritage Site.",
};

const teamMembers = [
  {
    name: "Dr. Anjali Sharma",
    title: "Chief Archaeologist",
    image: "/images/team_member_1.jpg", // Replace with actual image path
    description: [
      "Dr. Anjali Sharma is a renowned archaeologist with over 15 years of experience in the study and preservation of ancient sites.",
      "Her expertise in rock-cut architecture has been instrumental in the conservation efforts at the Ellora Caves.",
      "She leads guided tours and workshops, sharing her knowledge with visitors from around the world.",
    ],
    linkedin: "https://www.linkedin.com/in/anjali-sharma",
  },
  {
    name: "Mr. Rajesh Kumar",
    title: "Cultural Heritage Manager",
    image: "/images/team_member_2.jpg", // Replace with actual image path
    description: [
      "Mr. Rajesh Kumar has dedicated his career to the preservation of cultural heritage in India.",
      "With a background in history and anthropology, he works closely with local communities to promote sustainable tourism.",
      "Rajesh organizes cultural events that celebrate the rich history of the Ellora Caves.",
    ],
    linkedin: "https://www.linkedin.com/in/rajesh-kumar",
  },
  {
    name: "Ms. Priya Desai",
    title: "Visitor Experience Coordinator",
    image: "/images/team_member_3.jpg", // Replace with actual image path
    description: [
      "Ms. Priya Desai is passionate about enhancing visitor experiences at the Ellora Caves.",
      "She oversees visitor services, ensuring that all guests have a memorable and informative experience.",
      "Priya also manages feedback and works on improving services based on visitor suggestions.",
    ],
    linkedin: "https://www.linkedin.com/in/priya-desai",
  },
  {
    name: "Mr. Vikram Singh",
    title: "Tour Guide Supervisor",
    image: "/images/team_member_4.jpg", // Replace with actual image path
    description: [
      "Mr. Vikram Singh is an experienced tour guide with a deep knowledge of the Ellora Caves.",
      "He trains and supervises a team of guides, ensuring they provide accurate and engaging information to visitors.",
      "Vikram is known for his storytelling skills, making history come alive for tourists.",
    ],
    linkedin: "https://www.linkedin.com/in/vikram-singh",
  },
  {
    name: "Ms. Neha Patel",
    title: "Marketing and Outreach Manager",
    image: "/images/team_member_5.jpg", // Replace with actual image path
    description: [
      "Ms. Neha Patel is responsible for promoting the Ellora Caves to a global audience.",
      "With a background in marketing and communications, she develops campaigns to attract visitors.",
      "Neha also collaborates with travel agencies and tour operators to create packages that highlight the caves.",
    ],
    linkedin: "https://www.linkedin.com/in/neha-patel",
  },
];

const Page = () => {
  return (
    <div>
      <CommonBanner title="Our Team" imgSrc="/images/elloraBanner.png" />
      <div className="w-full lg:w-11/12 2xl:w-10/12 mx-auto">
        <h1 className="text-base sm:text-xl px-5 sm:px-0">
          At Ellora Caves, our team is a passionate group of professionals dedicated to preserving the rich history and culture of this UNESCO World Heritage Site.
        </h1>
      </div>
      <div className="mt-20 sm:mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5">
              <img
                alt={member.name}
                src={member.image}
                className="mx-auto object-cover h-44 w-44 lg:h-48 lg:w-48 2xl:h-72 2xl:w-72 shadow-md rounded-full mb-4"
              />
              <h1 className="text-[#ff5f15] font-semibold text-xl lg:text-2xl">
                {member.name}
              </h1>
              <p className="text-[#314852] font-medium text-lg">{member.title}</p>
              <div className="text-black text-sm mt-2">
                {member.description.map((desc, i) => (
                  <p key={i} className="pt-1">{desc}</p>
                ))}
              </div>
              <Link href={member.linkedin} target="_blank">
                <div className="flex gap-x-2 my-5 items-center">
                  <SiLinkedin className="text-3xl text-blue-800" />
                  <p className="text-xs underline">{member.linkedin}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-11/12 2xl:w-10/12 mx-auto lg:px-0 py-5 sm:py-20">
        <h1 className="text-left lg:text-3xl 2xl:text-4xl text-[#314852] text-2xl tracking-wider font-semibold border-l-8 border-solid border-[#ff5f15] pl-2">
          Meet Our Team
        </h1>
        <div className="py-5 sm:py-10 px-5 sm:px-0">
          <p className="pb-2 sm:pb-5 text-base sm:text-xl">
            Our dedicated team consists of historians, archaeologists, and tour guides who work tirelessly to ensure that the Ellora Caves are preserved for future generations.
          </p>
          <p className="pb-2 sm:pb-5 text-base sm:text-xl">
            We are committed to providing visitors with an enriching experience that highlights the cultural and historical significance of this magnificent site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;