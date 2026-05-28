import Link from "next/link";
export default function Footer({ isChoosingChar = false }: { isChoosingChar?: boolean }) {
    return (
        <div className="flex flex-col items-center gap-4 border-t-2 text-[#ffd800]" style={{ marginTop: `24px` }}>
            {!isChoosingChar && <Link
                href="/characters"
                style={{
                    fontFamily: "var(--font-determination-sans), 'Press Start 2P', monospace",
                    fontSize: 36,
                    color: '#ffd800',
                    textShadow: '2px 2px 0px #092c66',
                    textTransform: 'uppercase',
                    transition: 'all 0.1s',
                }}
                onMouseOver={e => { e.currentTarget.style.color = '#fff'; }}
                onMouseOut={e => { e.currentTarget.style.color = '#ffd800'; }}
            >
                Choose your Characters &gt;
            </Link>}
            <Link
                href="/"
                style={{
                    fontFamily: "var(--font-determination-sans), 'Press Start 2P', monospace",
                    fontSize: 32,
                    color: '#ffd800',
                    textShadow: '2px 2px 0px #092c66',
                    textTransform: 'uppercase',
                    transition: 'all 0.1s',
                }}
                onMouseOver={e => { e.currentTarget.style.color = '#fff'; }}
                onMouseOut={e => { e.currentTarget.style.color = '#ffd800'; }}
            >
                &lt; Back To Home
            </Link>
        </div>
    )
}