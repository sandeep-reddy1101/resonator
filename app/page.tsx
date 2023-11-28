import DesignInspiration from "@/components/Design-Inspiration";
import Episodes from "@/components/Episodes";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hosts from "@/components/Hosts";
import TopPodcasts from "@/components/Top-podcasts";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <DesignInspiration />
      <TopPodcasts />
      <Episodes />
      <Video />
      <Hosts />
      <Footer />
    </div>
  );
}
