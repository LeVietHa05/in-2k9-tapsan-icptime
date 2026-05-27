'use client';

import Footer from "../compoments/footer";
import Header from "../compoments/header";

const contributors = [
  {
    name: "Dang Tram Anh",
    image: "/dangtrananh.png",
    quote: "\u201Ci love Hue beef noodles with no congealed blood\u201D",
  },
  {
    name: "Luong Minh Anh",
    image: "/luongminhanh.png",
    quote: "\u201Cchopped chang\u201D",
  },
  {
    name: "Le Ngoc Quang",
    image: "/lengocanh.png",
    quote: "\u201Cspider is spike\u201D",
  },
  {
    name: "Ngo Bao Chau",
    image: "/ngobaochau.png",
    quote: "\u201Cfine fine fine\u201D",
  },
];

export default function CreditPage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[1440px] h-screen mx-auto overflow-auto">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/home-bg.png)" }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4" style={{ zIndex: 10 }}>
          <Header text="Credit" ></Header>

          <div className="flex flex-row gap-4 justify-center flex-wrap max-w-[1200px]">
            {contributors.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center gap-2"
                style={{
                  background: '#003691',
                  border: '2px solid #0055cc',
                  padding: '14px 0 0',
                  width: 276,
                  boxShadow: 'inset -2px -2px 0 0 rgba(0,0,0,0.3), inset 2px 2px 0 0 rgba(255,255,255,0.1)',
                }}
              >
                <div
                  className="text-center text-white capitalize mb-3"
                  style={{
                    fontFamily: "var(--font-determination-sans), 'Press Start 2P', monospace",
                    fontSize: 32,
                    textShadow: '2px 2px 0px #092c66',
                    lineHeight: 1.4,
                    wordBreak: 'break-word',
                  }}
                >
                  {c.name}
                </div>
                <div
                  className="bg-cover bg-center bg-no-repeat mb-3"
                  style={{
                    width: 250,
                    height: 232,
                    backgroundImage: `url(${c.image})`,
                    border: '2px solid #0055cc',
                    boxShadow: 'inset -2px -2px 0 0 rgba(0,0,0,0.3)',
                  }}
                />
                <div
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-coder-crux), 'Press Start 2P', monospace",
                    fontSize: 32,
                    color: '#ffd800',
                    textShadow: '2px 2px 0px #092c66',
                    lineHeight: 1.6,
                  }}
                >
                  {c.quote}
                </div>
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
