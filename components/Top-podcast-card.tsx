import Image from "next/image";
import EpisodePageLink from "./Episode-page-link";
import { TopPodcastsType } from "@/types/top-podcasts";

const TopPodcastCard: React.FC<TopPodcastsType> = ({
  image,
  episodeNumber,
  episodeCategory,
  title,
  pageLink,
}) => {
  return (
    <div className="min-w-[640px] bg-white h-80 flex justify-center items-center rounded-md">
      <Image
        className="rounded-md w-1/2 h-full"
        src={image}
        alt={title}
        width={320}
        height={320}
      />
      <div className="flex flex-col w-1/2 h-full items-start justify-center px-6 gap-y-4">
        <p className="text-gray-300 text-base">
          Episode {episodeNumber} . {episodeCategory}
        </p>
        <h1 className="text-xl text-black">{title}</h1>
        <EpisodePageLink link={pageLink} />
      </div>
    </div>
  );
};

export default TopPodcastCard;
