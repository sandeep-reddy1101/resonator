import Image from "next/image";

const Video = () => {
  return (
    <div className="w-full max-h[44rem] flex justify-center items-center">
      <Image
        src={"/images/video-image.png"}
        alt="vide-image"
        width={1920}
        height={720}
      />
    </div>
  );
};

export default Video;
