import { HeroSection } from "./HeroSection";
import { Samples } from "./Samples";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="container mx-auto p-3">
      <HeroSection />
      <Samples />
    </div>
  );
}
