import Link from "next/link";
import Header from "./compoments/header";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[1440px] h-screen mx-auto overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/home-bg.png)" }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 10 }}>
          <Header text="Start game" />

          <nav className="flex flex-col items-center gap-6">
            <Link
              href="/about"
              className="text-white no-underline transition-all duration-150 hover:scale-105 hover:text-[#ffd800]"
              style={{
                fontFamily: 'inherit',
                fontSize: 24,
                textShadow: '3px 3px 0px #092c66',
              }}
            >
              About us
            </Link>
            <Link
              href="/characters"
              className="text-white no-underline transition-all duration-150 hover:scale-105 hover:text-[#ffd800]"
              style={{
                fontFamily: 'inherit',
                fontSize: 24,
                textShadow: '3px 3px 0px #092c66',
              }}
            >
              Choose your Characters
            </Link>
            <Link
              href="/credit"
              className="text-white no-underline transition-all duration-150 hover:scale-105 hover:text-[#ffd800]"
              style={{
                fontFamily: 'inherit',
                fontSize: 24,
                textShadow: '3px 3px 0px #092c66',
              }}
            >
              Credit
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
