import { LiaPodcastSolid, LiaSoundcloud } from "react-icons/lia";

import Button from "./Button";
import HeroPlayer from "./Hero-player";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src="/images/hero-background.png"
          className="absolute inset-0 bg-cover bg-center z-0 object-cover h-full w-full"
        />
        <div className="absolute left-64 top-40 z-10">
          <div className="flex flex-col items-start justify-center gap-y-4 max-w-lg">
            <div className="text-7xl text-black tracking-normal">
              New episode available now
            </div>
            <div className="text-base text-black">
              Availabel on Apple Soundcast and Spotify.
            </div>
            <div className="flex justify-center items-center gap-x-6 mt-6">
              <Button>
                <div className="flex justify-center items-center gap-x-3">
                  <LiaPodcastSolid size={36} />
                  <span className="flex flex-col justify-center items-start">
                    <p className="text-xs">Listen on</p>
                    <p className="text-base capitalize">Apple Podcasts</p>
                  </span>
                </div>
              </Button>
              <Button>
                <div className="flex justify-center items-center gap-x-3">
                  <LiaSoundcloud size={36} />
                  <span className="flex flex-col justify-center items-start">
                    <p className="text-xs">Listen on</p>
                    <p className="text-base capitalize">Soundcloud</p>
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <HeroPlayer />
      </section>
    </>
  );
};

export default Hero;
