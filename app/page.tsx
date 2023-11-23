import { HeroSection } from "./HeroSection";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="container mx-auto p-3">
      <HeroSection />
    </div>
  );
}
