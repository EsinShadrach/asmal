import { Sparkles } from "lucide-react";
import {
  PinkText,
  TypographyH1,
  TypographyH2,
} from "~/utils/typography/typography";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <section className="container p-3 pt-10 mx-auto">
      <div className="space-y-5">
        <div className="mx-auto w-fit typewriter">
          <TypographyH1 className="text-center">Welcome to asmal</TypographyH1>
        </div>
        <div className="max-w-2xl mx-auto">
          <TypographyH2 className="relative text-center">
            <div className="text-emerald-400">
              <Sparkles className="absolute -top-4 -left-4 animate-sparkle-2" />
              <Sparkles className="absolute -bottom-3 right-10 animate-sparkle-1" />
              <Sparkles className="absolute -top-4 left-3/4 animate-sparkle-3" />
              <Sparkles className="absolute -bottom-4 right-2/3 animate-sparkle-4" />
            </div>
            Where <PinkText>Pixels</PinkText> Party, <PinkText>Code</PinkText>{" "}
            Takes Center Stage, and <PinkText>Creativity</PinkText> Steals the
            Spotlight!
          </TypographyH2>
          <blockquote className="pl-6 mx-auto mt-3 italic text-center border-l-2 border-pink-500 w-fit">
            Where learning meets fun... Hopefully.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
