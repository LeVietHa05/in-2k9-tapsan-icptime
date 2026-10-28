export default function LeadinText({ content }: { content: string[] }) {
  return (
    <ul
      className="list-disc pl-4 space-y-4"
      style={{
        fontFamily: "var(--font-teacher), monospace",
        color: "#1a2a4a",
        lineHeight: 1.8,
      }}
    >
      {content.map((each, i) => (
        <li key={i} className="text-2xl">
          {each}
        </li>
      ))}
    </ul>
  );
}
