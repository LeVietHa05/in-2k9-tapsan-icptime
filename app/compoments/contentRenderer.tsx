type MindmapTextItem = {
  text: string;
  style: "label" | "bold" | "normal" | "bullet";
};

type MindmapNode = {
  label: string;
  color?: string;
  items?: MindmapTextItem[];
};

type DataItem = {
  type: "text_only" | "bullets" | "table" | "mindmap";
  option?: string;
  content?: string[];
  tableData?: { headers: string[]; rows: string[][] };
  footerText?: string;
  mindmapData?: {
    centerLabel: string;
    nodes: MindmapNode[];
  };
};

type CharacterPage = {
  pageId: number;
  title: string;
  data: DataItem[];
};

function MindmapRenderer({ data }: { data: NonNullable<DataItem["mindmapData"]> }) {
  const cornerNodes = [
    { label: data.nodes[0]?.label ?? '', items: data.nodes[0]?.items ?? [], pos: { top: '0', left: '0' }, align: 'left' as const },
    { label: data.nodes[1]?.label ?? '', items: data.nodes[1]?.items ?? [], pos: { top: '0', right: '0' }, align: 'left' as const },
    { label: data.nodes[2]?.label ?? '', items: data.nodes[2]?.items ?? [], pos: { bottom: '0', left: '0' }, align: 'left' as const },
    { label: data.nodes[3]?.label ?? '', items: data.nodes[3]?.items ?? [], pos: { bottom: '0', right: '0' }, align: 'left' as const },
  ];

  return (
    <div className="relative w-full select-none" style={{ minHeight: 660 }}>
      {/* SVG orthogonal connector lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
      >
        <defs>
          <marker id="md-dot" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="8" markerHeight="8">
            <circle cx="6" cy="6" r="5" fill="#0076dc" />
          </marker>
        </defs>
        <path d="M 400,300 V 20 H 350" stroke="#0076dc" strokeWidth="2" fill="none" markerEnd="url(#md-dot)" />
        <path d="M 600,300 V 20 H 650" stroke="#0076dc" strokeWidth="2" fill="none" markerEnd="url(#md-dot)" />
        <path d="M 400,300 V 440 H 220" stroke="#0076dc" strokeWidth="2" fill="none" markerEnd="url(#md-dot)" />
        <path d="M 550,300 V 390 H 650" stroke="#0076dc" strokeWidth="2" fill="none" markerEnd="url(#md-dot)" />
      </svg>

      {/* Center node */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 3,
          backgroundImage: 'url(/blue-pill-bg.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          width: 428,
          height: 152,
          fontFamily: "var(--font-teacher), monospace",
          fontSize: 24,
          fontWeight: 'bold',
          color: '#F6EBD8',
          // textShadow: '2px 2px 0px #003f7a',
          textAlign: 'center',
          whiteSpace: 'pre-wrap',
        }}
      >
        {data.centerLabel}
      </div>

      {/* 4 corner text blocks */}
      {cornerNodes.map((node, i) => (
        <div
          key={i}
          className="absolute"
          style={{ ...node.pos, zIndex: 2, maxWidth: 360, textAlign: node.align, color: '#003691', }}
        >
          <div
            style={{
              fontFamily: "var(--font-teacher), 'Press Start 2P', monospace",
              fontSize: 24,
              color: '#003691',
              fontWeight: 'bold',
              marginBottom: 6,
              textAlign: node.align,
            }}
          >
            {node.label}
          </div>
          {node.items.length > 0 && (
            <div style={{ fontFamily: 'var(--font-teacher), monospace', fontSize: 20, lineHeight: 1.2, textAlign: node.align }}>
              {node.items.map((item, j) => {
                const isBullet = item.style === "bullet" || item.style === "bold";
                return (
                  <div
                    key={j}
                    style={{
                      fontWeight: item.style === "label" || item.style === "bold" ? 'bold' : 'normal',
                      marginBottom: 2,
                      paddingLeft: node.align === 'left' && isBullet ? 14 : 0,
                      position: 'relative',
                    }}
                  >
                    {isBullet && node.align === 'left' && (
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                    )}
                    {item.text}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ContentRenderer({ page }: { page: CharacterPage }) {
  return (
    <div className="flex flex-col gap-6">
      {page.data.map((item, idx) => {
        if (item.type === "text_only") {
          return (
            <div key={idx}>
              {item.content?.map((p, i) => (
                <p key={i} className={`${item.option} mb-2 last:mb-0 text-2xl`}>{p}</p>
              ))}
            </div>
          );
        }

        if (item.type === "bullets") {
          return (
            <ul key={idx} className={`${item.option} list-disc pl-5 space-y-3 text-2xl`}>
              {item.content?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          );
        }

        if (item.type === "table" && item.tableData) {
          return (
            <div key={idx} className="overflow-x-auto">
              <table className="w-full border-collapse border-2 border-[#092c66]">
                <thead>
                  <tr className="bg-[#092c66]/10">
                    {item.tableData.headers.map((h, i) => (
                      <th key={i} className="border border-[#092c66] p-2 text-2xl font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.tableData.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className="border border-[#092c66] p-2 text-2xl">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {item.footerText && (
                <p className="mt-2 text-2xl italic text-[#1a2a4a]/70">{item.footerText}</p>
              )}
            </div>
          );
        }

        if (item.type === "mindmap" && item.mindmapData) {
          return <MindmapRenderer key={idx} data={item.mindmapData} />;
        }

        return null;
      })}
    </div>
  );
}
