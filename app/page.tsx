import { TypographyH1 } from "~/utils/typography/typography";

export default function Home() {
  return (
    <section className="container p-3 pt-10 mx-auto">
      <TypographyH1 className="max-w-md mx-auto text-center">
        there shall be no <span className="text-pink-500">cookies</span> for you
        hahahaha
      </TypographyH1>
    </section>
  );
}
