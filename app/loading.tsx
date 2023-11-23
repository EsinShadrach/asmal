import { Loader2, LucideLoader2 } from "lucide-react";
import { Nunito } from "next/font/google";
import Image from "next/image";
import { cn } from "~/lib/utils";
import logo from "~/public/logo.png";
import { TypographyH1 } from "~/utils/typography/typography";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function LoadingPage() {
  return (
    <section
      className={cn(
        "container fixed inset-0 flex flex-col items-center justify-center mx-auto bg-pink-200 gap-3",
        nunito.className
      )}
    >
      <div className="p-2 bg-pink-100 rounded-md w-fit animate-bounce">
        <Image alt="Logo" src={logo} height={82} />
      </div>
      <div className="flex items-center gap-2">
        <TypographyH1 className="first-letter:uppercase">Loading</TypographyH1>
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    </section>
  );
}
