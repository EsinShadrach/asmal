import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asmal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "text-slate-900 bg-pink-50 lowercase")}
      >
        <ClerkProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="relative z-10 app">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
