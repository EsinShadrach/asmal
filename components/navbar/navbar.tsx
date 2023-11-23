import Image from "next/image";
import logo from "~/public/logo.png";
import { TypographyH3 } from "~/utils/typography/typography";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header>
      <nav className="container flex items-center justify-between p-3 mx-auto">
        <div className="flex items-center gap-2">
          <Image alt="Logo" src={logo} height={32} />
          <TypographyH3 className="text-pink-600 first-letter:uppercase">
            Asmal
          </TypographyH3>
        </div>
        <div></div>
        <div>
          <Button>Login</Button>
        </div>
      </nav>
    </header>
  );
}
