'use client';

import Footer from "../compoments/footer";
import Header from "../compoments/header";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[1440px] h-screen mx-auto overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/home-bg.png)" }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4" style={{ zIndex: 10 }}>
          <Header text="About us" />

          <div
            className=" w-full px-8 py-6 mb-12 text-center"
            style={{
              padding: `24px 32px`,
              background: '#003691',
              fontFamily: "var(--font-coder-crux), monospace",
              fontSize: 40,
              color: '#fff',
              lineHeight: 1.2,
              textShadow: '2px 2px 0px #092c66',
              border: '2px solid #0055cc',
              boxShadow: 'inset -2px -2px 0 0 rgba(0,0,0,0.3), inset 2px 2px 0 0 rgba(255,255,255,0.1)',
            }}
          >
            We are a group of four friends who turn our love for social issues, economic and chaotic, broad daylight discussions into a magazine. <br />
            Follow our quest to discover new perspectives, fun ideas and definitely not boring socioeconomic issues
          </div>

          <hr />

          <Footer />
        </div>
      </div>
    </main>
  );
}
