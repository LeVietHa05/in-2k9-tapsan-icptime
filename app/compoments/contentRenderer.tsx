type DataItem = {
  type: "text_only" | "bullets" | "table";
  option?: string,
  content?: string[];
  tableData?: { headers: string[]; rows: string[][] };
  footerText?: string;
};

type CharacterPage = {
  pageId: number;
  title: string;
  data: DataItem[];
  bgImg: string
};

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
                      <th key={i} className="border border-[#092c66] p-2 text-2xl font-bold  ">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.tableData.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className="border border-[#092c66] p-2 text-2xl  ">
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

        return null;
      })}
    </div>
  );
}
