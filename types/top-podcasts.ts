import { IconType } from "react-icons";

export interface TopPodcastsType {
  image: string;
  episodeNumber: number;
  episodeCategory: string;
  title: string;
  pageLink: string;
}

export interface EpisodeCardProps {
  image: string;
  episodeNumber: number;
  episodeCategory: string;
  title: string;
}

export interface SocialLink {
  icon: IconType;
  link: string;
}

export interface Host {
  image: string;
  name: string;
  profession: string;
  socialMedia: SocialLink[];
}
