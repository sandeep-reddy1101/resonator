import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Player from "./Player";
import EpisodePageLink from "./Episode-page-link";

const HeroPlayer = () => {
  return (
    <div className="relative md:absolute md:mx-auto md:bottom-0 md:translate-y-1/2 bg-white w-full md:max-w-screen-lg rounded-lg">
      <div className="flex">
        <Image
          className="rounded-lg"
          src={"/images/hero-player.png"}
          alt="hero player"
          width={264}
          height={264}
        />
        <div className="flex flex-col item-center justify-center py-8 pl-6 pr-12 gap-y-3 grow">
          <div className="flex justify-between items-start">
            <p className="text-black text-3xl max-w-sm">
              Timmy Mike: the nature of design
            </p>
            {/* <Link href={"/"} className="text-xs">
              <span className="flex justify-center items-center gap-x-1">
                <span>Episode page</span>{" "}
                <IoIosArrowRoundForward className="pt-1" size={24} />
              </span>
            </Link> */}
            <EpisodePageLink />
          </div>
          <p className="text-gray-300 text-base font-normal">
            Episode 1 . Mircophone . 0:13
          </p>
          <Player />
        </div>
      </div>
    </div>
  );
};

export default HeroPlayer;
