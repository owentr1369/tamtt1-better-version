import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      title="Professional Cloud Hosting"
      alt="car factory"
    />
  );
}
