import { HeroSection } from "./HeroSection";
import { Samples } from "./Samples";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="container p-3 mx-auto space-y-10">
      <HeroSection />
      <Samples />
    </div>
  );
}
