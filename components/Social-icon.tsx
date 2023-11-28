import Link from "next/link";
import { SocialLink } from "@/types/top-podcasts";

const SocialIcon: React.FC<SocialLink> = ({ icon: Icon, link }) => {
  return (
    <Link
      href={link}
      className="w-8 h-8 bg-gray-300 rounded-full text-white flex items-center justify-center"
    >
      <Icon size={18} />
    </Link>
  );
};

export default SocialIcon;
