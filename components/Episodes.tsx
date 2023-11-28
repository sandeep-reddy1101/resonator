import EpisodeCard from "./Episode-card";
import EpisodePageLink from "./Episode-page-link";
import { EpisodeCardProps } from "@/types/top-podcasts";

const Episodes = () => {
  const episodes: EpisodeCardProps[] = [
    {
      image: "/images/episode-1.png",
      episodeNumber: 1,
      episodeCategory: "Technology",
      title: "SRKP selects: how the new ages work",
    },
    {
      image: "/images/episode-2.png",
      episodeNumber: 2,
      episodeCategory: "Technology",
      title: "SRKP selects: new mindset today",
    },
    {
      image: "/images/episode-3.png",
      episodeNumber: 3,
      episodeCategory: "Technology",
      title: "SRKP selects: the latest trends now",
    },
    {
      image: "/images/episode-4.png",
      episodeNumber: 4,
      episodeCategory: "Technology",
      title: "SRKP selects: organize your day",
    },
    {
      image: "/images/episode-5.png",
      episodeNumber: 5,
      episodeCategory: "Technology",
      title: "SRKP selects: how to plan your work",
    },
    {
      image: "/images/episode-6.png",
      episodeNumber: 6,
      episodeCategory: "Technology",
      title: "SRKP selects: trying the best phones",
    },
  ];
  return (
    <div className="bg-white py-16 px-4 mx-auto max-w-screen-lg w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full pb-6">
          <h1 className="text-black text-2xl">Essential episodes:</h1>
          <p>
            <EpisodePageLink link="/" linkName="View all episodes" />
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => {
            return <EpisodeCard key={episode.title} {...episode} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
