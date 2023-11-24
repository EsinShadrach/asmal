import { FileIcon } from "lucide-react";
import { GlowingCard } from "~/utils/cards/tilting-card";
import { TypographyH2 } from "~/utils/typography/typography";
import { HeroSection } from "./HeroSection";
import Samples from "./Samples";
import htmlLogo from "~/public/html.png";
import cssLogo from "~/public/css.png";
import jsLogo from "~/public/js.png";

const featuredCourses = [
  {
    id: 1,
    title: "HTML Basics: Building Web Foundations",
    description:
      "Learn the fundamentals of HTML to create structured and semantic web pages.",
    imageUrl: htmlLogo,
    categories: ["HTML", "basics"],
  },
  {
    id: 2,
    title: "CSS Styling Mastery",
    description:
      "Master CSS techniques to design stunning and responsive web layouts.",
    imageUrl: cssLogo,
    categories: ["CSS", "basics"],
  },
  {
    id: 3,
    title: "JavaScript for Beginners",
    description:
      "Start your journey into JavaScript and build interactive web applications.",
    imageUrl: jsLogo,
    categories: ["JavaScript"],
  },
];

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="container p-3 mx-auto space-y-10">
      <HeroSection />
      <Samples />
      <section className="space-y-3">
        <TypographyH2 className="w-fit">Featured Courses..?</TypographyH2>
        <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2">
          {featuredCourses.map((courses, index) => (
            <GlowingCard {...courses} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
