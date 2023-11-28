import Image from "next/image";
import { IoMdHeadset } from "react-icons/io";
import { EpisodeCardProps } from "@/types/top-podcasts";
import Link from "next/link";
import { IoShareSocialSharp } from "react-icons/io5";

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  image,
  episodeNumber,
  episodeCategory,
  title,
}) => {
  return (
    <div className="max-w-[24rem] rounded-md bg-white shadow-md">
      <div className="flex flex-col relative">
        <Image
          className="rounded-md"
          src={image}
          alt="title"
          width={386}
          height={386}
        />
        <div className="absolute top-2 right-2 bg-white rounded-md h-10 w-10 flex justify-center items-center">
          <IoMdHeadset size={24} className="flex justify-center items-center" />
        </div>
        <div className="flex flex-col items-start justif-start py-6 gap-y-3 px-8">
          <p className="text-gray-300 text-sm">
            Episode {episodeNumber} . {episodeCategory}
          </p>
          <h1 className="text-black text-xl">{title}</h1>
          <Link
            className="text-sm flex justify-center items-center gap-x-2"
            href={"/"}
          >
            <span>Share </span>
            <span className="bg-gray-300 rounded-full w-6 h-6 flex justify-center items-center">
              <IoShareSocialSharp className="text-white" size={18} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
