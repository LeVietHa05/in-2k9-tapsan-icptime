'use client';

import Link from "next/link";
import Header from "@/app/compoments/header";
import Image from "next/image"; 

export default function Character1() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[1440px] h-screen mx-auto overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/bg-sky2.png)" }}
        />

        <div
          className="absolute bottom-0 left-0 w-full bg-cover bg-center bg-no-repeat"
          style={{
            height: 160,
            backgroundImage: "url(/bg-ground.PNG)",
          }}
        />

        <div className="absolute top-0 left-12" style={{ zIndex: 10 }}>
          <Header text="Choose your character" isSmall={true} />
        </div>
        <div>
          <Image
            src="/char-1.svg"
            alt="Character"
            width={500}
            height={500}
            style={{
              position: 'absolute',
              bottom: 160,
              left: '30%',
              transform: 'translateX(-50%)',
              zIndex: 5,
            }}
          />
        </div>
        <div
          className="absolute flex flex-col items-start"
          style={{
            right: 160,
            bottom: 220,
            zIndex: 10,
          }}
        >
          <Link href={'/characters/1/detail'}>
            <Image
              width={195}
              height={51}
              src="/button-start.svg"
              alt="START"
              className="cursor-pointer transition-transform duration-150 hover:scale-110 mb-4"
            />
          </Link>
          <div
            className=" space-y-2 *:leading-8 bg-black/15 backdrop-blur-sm p-4 rounded-lg *:before:content-['+'] *:before:px-4"
            style={{
              fontFamily: "var(--font-coder-crux), 'Press Start 2P', monospace",
              fontSize: 40,
              textShadow: '3px 3px 0px #092c66',
              textAlign: 'left',
              color: "#F6EBD8"
            }}
          >
            <div style={{ marginBottom: 8 }}>
              Name:  Nguyen Ha Anh
            </div>
            <div style={{ marginBottom: 4, }}>
              Age: 15
            </div>
            <div style={{}}>
              Occupation: Student & Actress
            </div>
            <div style={{}}>
              MBTI: ENFP
            </div>
            <div style={{}}>
              Favourite things about her job: <br />
              To be able to meet so many <br />
              cool people and appear on screen
            </div>
          </div>
        </div>

        <div
          className="absolute text-white text-center select-none"
          style={{
            bottom: 100,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 24,
            textShadow: '4px 4px 0px #092c66',
            zIndex: 10,
          }}
        >
          Choose Character
        </div>
      </div>
    </main>
  );
}
