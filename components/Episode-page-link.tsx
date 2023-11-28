import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

interface EpisodePageLinkProps {
  link?: string;
  linkName?: string;
}

const EpisodePageLink: React.FC<EpisodePageLinkProps> = ({
  link = "/",
  linkName = "Episode page",
}) => {
  return (
    <Link href={link} className="text-xs">
      <span className="flex justify-center items-center gap-x-1">
        <span>{linkName}</span>{" "}
        <IoIosArrowRoundForward className="pt-1" size={24} />
      </span>
    </Link>
  );
};

export default EpisodePageLink;
