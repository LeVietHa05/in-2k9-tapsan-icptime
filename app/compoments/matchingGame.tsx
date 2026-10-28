"use client";

import { useEffect, useState } from "react";

type Pair = { term: string; definition: string };

export default function MatchingGame({ pairs }: { pairs: Pair[] }) {
  const [defs, setDefs] = useState<string[]>(pairs.map((p) => p.definition));
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set()); // lưu term đã nối đúng
  const [wrong, setWrong] = useState<string | null>(null); // definition vừa nối sai

  // Xáo trộn sau khi mount để tránh lỗi hydration
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDefs(
      [...pairs.map((p) => p.definition)].sort(() => Math.random() - 0.5),
    );
  }, [pairs]);

  const isDefMatched = (def: string) =>
    pairs.some((p) => p.definition === def && matched.has(p.term));

  const pickDef = (def: string) => {
    if (!selectedTerm || isDefMatched(def)) return;
    const correct =
      pairs.find((p) => p.term === selectedTerm)?.definition === def;
    if (correct) {
      setMatched((m) => new Set(m).add(selectedTerm));
      setSelectedTerm(null);
    } else {
      setWrong(def);
      setTimeout(() => setWrong(null), 500);
    }
  };

  const box =
    "border-4 border-[#004FAC] px-2 py-2 text-center font-bold text-[#004FAC] transition-colors text-sm h-[60px]";

  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr] gap-2">
        <div className="space-y-1 ">
          {pairs.map((p) => (
            <button
              key={p.term}
              disabled={matched.has(p.term)}
              onClick={() => setSelectedTerm(p.term)}
              className={`${box} w-full ${
                matched.has(p.term)
                  ? "bg-green-200 opacity-70"
                  : selectedTerm === p.term
                    ? "bg-[#ffd800]"
                    : "bg-white/60 hover:bg-white"
              }`}
            >
              {p.term}
            </button>
          ))}
        </div>
        <div className="space-y-1">
          {defs.map((d) => (
            <button
              key={d}
              onClick={() => pickDef(d)}
              className={`${box} w-full font-normal ${
                isDefMatched(d)
                  ? "bg-green-200 opacity-70"
                  : wrong === d
                    ? "bg-red-200"
                    : "bg-white/60 hover:bg-white"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
      {matched.size === pairs.length && (
        <p className="mt-6 text-center text-3xl font-bold text-[#004FAC]">
          You did it!
        </p>
      )}
    </div>
  );
}
