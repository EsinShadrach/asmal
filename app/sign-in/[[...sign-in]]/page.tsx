import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import "~/public/auth.css";
import logo from "~/public/logo.png";

export default function SignInPage() {
  return (
    <section
      className={`min-h-screen flex justify-center items-center p-3 flex-col gap-3`}
    >
      <Image alt={"Asmal logo"} src={logo} height={64} width={64} />
      <div className="text-xl font-semibold sm:text-2xl">
        Login to your account
      </div>
      <SignIn afterSignInUrl={"/home"} />
    </section>
  );
}
