import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";

export default function Scale() {
  return (
    <Hero
      imgData={scaleImg}
      title="Scale your app to infinity"
      alt="steel factory"
    />
  );
}
