import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { Results } from "@/components/sections/Results";
import { AIFeatures } from "@/components/sections/AIFeatures";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { Founder } from "@/components/sections/Founder";
import { Registration } from "@/components/sections/Registration";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <Results />
      <AIFeatures />
      <BusinessModel />
      <Founder />
      <Registration />
    </>
  );
}
