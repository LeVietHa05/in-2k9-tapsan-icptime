import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { determinationSans, coderCrux, teacherFont } from "@/lib/font";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Icption",
  description: "The Icption - Tap San",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${pressStart2P.variable} ${determinationSans.variable} ${coderCrux.variable} ${teacherFont.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
