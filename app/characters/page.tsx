'use client';

import Link from "next/link";
import Header from "../compoments/header";
import Image from "next/image";
import Footer from "../compoments/footer";

export default function CharactersPage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[1440px] h-screen mx-auto overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/home-bg.png)" }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-between px-4" style={{ zIndex: 10, padding: `0 16px` }}>
          <h1
            className="text-white uppercase text-left select-none"
            style={{
              fontFamily: 'inherit',
              fontSize: 96,
              textShadow: '6px 6px 0px #092c66',
              WebkitTextStroke: `3px #092c66`,
              lineHeight: 1.2,
              marginBottom: 48,
            }}
          >
            Choose your Characters
          </h1>

          <div className="flex flex-row gap-12 justify-center items-end max-w-[1200px]">
            {[1, 2, 3].map((id) => (
              <Link
                key={id}
                href={`/characters/${id}`}
                className="transition-transform duration-150 hover:scale-110 block"
              >
                <Image
                  src="/char-1.svg"
                  alt={`Character ${id}`}
                  width={308}
                  height={325}
                  className="hover:border-4 border-white text-white"
                  style={{
                    width: 308,
                    height: 325,
                    objectFit: 'cover',
                    // border: '2px solid #0055cc',
                    // boxShadow: 'inset -2px -2px 0 0 rgba(0,0,0,0.3)',
                    // background: 'rgba(0, 54, 145, 0.5)',
                  }}
                />
              </Link>
            ))}
          </div>

          <Footer isChoosingChar={true} />
        </div>
      </div>
    </main>
  );
}
