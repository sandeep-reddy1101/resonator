import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import AvatarCircle from "./Avatar-circle";
import Image from "next/image";
import EpisodePageLink from "./Episode-page-link";

const DesignInspiration = () => {
  return (
    <div className="max-w-screen-lg bg-white py-24 md:mt-24 px-8 sm:px-0 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-112 sm:gap-x-36">
        <div className="flex flex-col items-start gap-y-4 md:w-1/2 px-12 md:px-0 order-last md:order-none">
          <div className="text-2xl text-black">
            Best places to find design inspiration
          </div>
          <div className="flex justify-start items-center gap-x-4">
            <AvatarCircle />
            <div>
              <p className="text-base text-black">Episode 1</p>
              <p className="text-xs text-gray-300">Category.0:13</p>
            </div>
          </div>
          <p className="text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.{" "}
          </p>
          <p className="text-sm font-normal">
            Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <EpisodePageLink link={"/"} />
        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <Image
            className="h-auto"
            src={"/images/design-inspiration.png"}
            alt="design inspiration image"
            height={524}
            width={524}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignInspiration;
