import { Host } from "@/types/top-podcasts";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "./Social-icon";

const HostCard: React.FC<Host> = ({ image, name, profession, socialMedia }) => {
  return (
    <div className="max-w-[24rem] rounded-md bg-white shadow-md">
      <div className="flex flex-col">
        <Image
          className="rounded-md"
          src={image}
          alt={name}
          width={386}
          height={386}
        />
        <div className="flex flex-col items-start justif-start py-6 gap-y-3 px-8">
          <h1 className="text-black text-xl">{name}</h1>
          <p className="text-gray-300 text-sm">{profession}</p>
          <div className="flex items-center justify-center gap-x-2">
            {socialMedia.map((item, idx) => {
              return <SocialIcon key={idx} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostCard;
