import TopPodcastCard from "./Top-podcast-card";
import { TopPodcastsType } from "@/types/top-podcasts";

const TopPodcasts = () => {
  const topPodcasts: TopPodcastsType[] = [
    {
      image: "/images/top-podcast-1.png",
      episodeNumber: 1,
      episodeCategory: "Technology",
      title: "SRKP selects: keep your watch",
      pageLink: "/",
    },
    {
      image: "/images/top-podcast-2.png",
      episodeNumber: 2,
      episodeCategory: "Technology",
      title: "SRKP selects: open your mind easy",
      pageLink: "/",
    },
    {
      image: "/images/top-podcast-3.png",
      episodeNumber: 3,
      episodeCategory: "Technology",
      title: "SRKP selects: to hide behind sage",
      pageLink: "/",
    },
  ];
  return (
    <div className="py-24 bg-gray-100 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-2xl text-black">Top podcasts:</h1>
        <p className="text-base text-black">
          Discover the selection of the most popular podcasts.
        </p>
        <div className="flex justify-center items-center flex-nowrap overflow-x-auto gap-x-4 pt-8">
          {topPodcasts.map((podcast) => {
            return <TopPodcastCard key={podcast.title} {...podcast} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPodcasts;
