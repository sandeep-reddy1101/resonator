import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="max-w-screen-xl py-16 px-4 xl:px-0 mx-auto">
        <div className="flex justify-start items-start w-full">
          <div className="flex flex-col items-start justify-center gap-y-2 w-1/4">
            <Link href={"/"}>
              <Image
                className="text-white"
                src={"/images/logo-white.png"}
                alt="logo"
                width={100}
                height={48}
              />
            </Link>
            <p className="text-xs">The great connection.</p>
          </div>
          <div className="flex flex-col gap-y-6 items-start w-3/4">
            <h1 className="text-lg">
              We collaborate with ambitious brands and people; let’s build
              something great together.
            </h1>
            <div className="flex justify-between items-center text-gray-400 w-full">
              <div className="flex flex-col items-start gap-y-2">
                <p>Start a conversation</p>
                <p className="mt-2">podcast@example.com</p>
                <p className="mb-10">+2 969 866 7033</p>
                <p className="text-sm">Terms & Conditions</p>
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <p>Find us here:</p>
                <p className="mt-2">Brooklyn, NY 11201</p>
                <p className="mb-10">United States</p>
                <p className="text-sm">Privacy Policy</p>
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <p>Follow us on:</p>
                <p className="mt-2 mb-10 flex items-center justify-center gap-x-3">
                  <Link href={"/"}>
                    <FaFacebook size={24} />
                  </Link>
                  <Link href={"/"}>
                    <FaXTwitter size={24} />
                  </Link>
                  <Link href={"/"}>
                    <FaInstagram size={24} />
                  </Link>
                  <Link href={"/"}>
                    <FaYoutube size={24} />
                  </Link>
                </p>
                <p className="text-sm">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
