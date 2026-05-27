import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { determinationSans, coderCrux } from "@/lib/font";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tập San 2009",
  description: "TVB Fan Site - 2K9 Tập San",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${pressStart2P.variable} ${determinationSans.variable} ${coderCrux.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
