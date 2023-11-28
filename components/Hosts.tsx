import EpisodePageLink from "./Episode-page-link";
import { Host } from "@/types/top-podcasts";
import HostCard from "./Host-card";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hosts = () => {
  const hosts: Host[] = [
    {
      image: "/images/host-1.png",
      name: "Bella Jimenez",
      profession: "Creative Strategist",
      socialMedia: [
        { icon: FaFacebookSquare, link: "/" },
        { icon: FaLinkedin, link: "/" },
        { icon: FaXTwitter, link: "/" },
      ],
    },
    {
      image: "/images/host-2.png",
      name: "Edwin Watson",
      profession: "Creative Strategist",
      socialMedia: [
        { icon: FaFacebookSquare, link: "/" },
        { icon: FaLinkedin, link: "/" },
        { icon: FaXTwitter, link: "/" },
      ],
    },
    {
      image: "/images/host-3.png",
      name: "Caitlin Henderson",
      profession: "Creative Strategist",
      socialMedia: [
        { icon: FaFacebookSquare, link: "/" },
        { icon: FaLinkedin, link: "/" },
        { icon: FaXTwitter, link: "/" },
      ],
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="py-16 px-4 xl:px-0 max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl text-black">Meet your hosts:</h1>
            <EpisodePageLink link="/" linkName="View all of them" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hosts.map((host) => {
              return <HostCard key={host.name} {...host} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosts;
