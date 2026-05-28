export default function Header({ text, isSmall = false }: { text: string, isSmall?: boolean }) {
    const size = isSmall ? 96 : 168;

    return (
        <h1
            className="text-white capitalize text-center select-none"
            style={{
                fontFamily: "var(--font-determination-sans), 'Press Start 2P', monospace",
                fontSize: size,
                textShadow: '0px 0px 12px #092c66',
                WebkitTextStroke: `3px #092c66`,
                lineHeight: 1.2,
                marginBottom: 48,
            }}
        >
            {text}
        </h1>
    )
}