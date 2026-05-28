'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CharacterDetail() {
  const { id } = useParams();

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[1440px] h-screen mx-auto overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/home-bg.png)" }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4" style={{ zIndex: 10 }}>
          <h1
            className="text-white uppercase text-center select-none"
            style={{
              fontFamily: 'inherit',
              fontSize: 72,
              textShadow: '6px 6px 0px #092c66',
              lineHeight: 1.2,
              marginBottom: 48,
            }}
          >
            Character {id}
          </h1>

          <Link
            href="/characters"
            style={{
              fontFamily: 'inherit',
              fontSize: 14,
              color: '#ffd800',
              textShadow: '2px 2px 0px #092c66',
              textTransform: 'uppercase',
              transition: 'all 0.1s',
            }}
            onMouseOver={e => { e.currentTarget.style.color = '#fff'; }}
            onMouseOut={e => { e.currentTarget.style.color = '#ffd800'; }}
          >
            &lt; Back
          </Link>
        </div>
      </div>
    </main>
  );
}
