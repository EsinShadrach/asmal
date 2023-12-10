"use client";
import Image from "next/image";
import logo from "~/public/logo.png";
import { usePathname } from "next/navigation";

export default function SignUpTitle() {
  const pathName = usePathname();
  const isVerifyPath = pathName.includes("verify-email-address");
  return (
    <div
      className={`flex flex-col w-full max-w-xl px-3 gap-3 ${
        isVerifyPath ? "items-start" : "items-center"
      }`}
    >
      <Image alt={"Asmal logo"} src={logo} height={64} width={64} />
      <div className="text-xl font-semibold sm:text-2xl">
        {isVerifyPath ? "Verify your" : "Create an"} account
      </div>
    </div>
  );
}
