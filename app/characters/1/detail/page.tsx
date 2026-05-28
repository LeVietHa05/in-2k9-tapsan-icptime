'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "@/app/compoments/header";

const tabs = [
    { key: "leadin", label: "Lead in" },
    { key: "personal", label: "Personal Factors" },
    { key: "family", label: "Family Factors" },
    { key: "external", label: "External Factors" },
];

const leadinContent = [
    {
        title: "The Beginning",
        body: "Nguyen Ha Anh grew up in a small town where everyone knew everyone. From a young age, she was fascinated by the stories people told — not just the words, but the emotions behind them. She started her journey in acting at the age of 10, participating in school plays and local theater productions.",
    },
    {
        title: "Discovery",
        body: "Her breakthrough came when she was discovered by a talent scout during a school performance. This led to her first television role, which opened up a world of opportunities. She quickly became known for her natural acting ability and her warm, engaging presence on screen.",
    },
    {
        title: "Growth",
        body: "Over the years, Ha Anh has continued to develop her craft, taking on increasingly challenging roles. She believes that every character she plays teaches her something new about herself and about the world around her. Her dedication to her art has made her one of the most promising young actresses of her generation.",
    },
];

export default function CharacterDetail() {
    const [activeTab, setActiveTab] = useState("leadin");

    const content = activeTab === "leadin" ? leadinContent : [];

    return (
        <main className="w-full min-h-screen flex items-center justify-center">
            <div className="relative w-full max-w-[1440px] h-screen mx-auto overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/bg-sky2.png)" }}
                />
                <div
                    className="absolute bottom-0 left-0 w-full bg-cover bg-center bg-no-repeat"
                    style={{ height: 160, backgroundImage: "url(/bg-ground.PNG)" }}
                />

                <div
                    className="absolute top-0 left-0 right-0 flex justify-center gap-8 py-6"
                    style={{ zIndex: 20 }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            style={{
                                fontFamily: "var(--font-determination-sans), 'Press Start 2P', monospace",
                                fontSize: activeTab === tab.key ? 44 : 40,
                                color: activeTab === tab.key ? '#ffd800' : '#ffffff',
                                textShadow: '3px 3px 0px #092c66',
                                background: 'none',
                                border: 'none',
                                borderBottom: activeTab === tab.key ? '2px solid #ffd800' : '2px solid transparent',
                                padding: '8px 16px 4px',
                                cursor: 'pointer',
                                transition: 'all 0.1s',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div
                    className="absolute flex flex-col"
                    style={{
                        top: 150,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 960,
                        maxHeight: 'calc(100vh - 280px)',
                        background: '#F5F5F5CC',
                        // border: '4px solid #092c66',
                        boxShadow: 'inset -4px -4px 0 0 rgba(0,0,0,0.2), inset 4px 4px 0 0 rgba(255,255,255,0.1)',
                        zIndex: 15,
                    }}
                >
                    <div
                        className="border-y-9 border-[#004FAC]"
                        style={{ 
                            fontFamily: "var(--font-determination-sans), 'Press Start 2P', monospace",
                            fontSize: 96,
                            color: 'white',
                            textShadow: '0px 0px 12px #092c66',
                            WebkitTextStroke: `3px #092c66`,
                            // padding: '24px 32px 16px',
                            lineHeight: 0.8, 
                            alignContent:`center`,
                            paddingBottom:24,
                            paddingLeft:24
                        }}
                    >
                        {tabs.find(t => t.key === activeTab)?.label}
                    </div>

                    <div
                        className="flex flex-col gap-6"
                        style={{
                            padding: '24px 32px 32px',
                            overflowY: 'auto',
                            maxHeight: 'calc(100vh - 400px)',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#092c66 #e0e8f0',
                        }}
                    >
                        {content.map((item, i) => (
                            <div key={i}>
                                <h2
                                    className=""
                                    style={{
                                        fontFamily: "'Press Start 2P', monospace",
                                        fontSize: 16,
                                        color: '#092c66',
                                        textShadow: '1px 1px 0px rgba(9,44,102,0.15)',
                                        marginBottom: 8,
                                    }}
                                >
                                    {item.title}
                                </h2>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-coder-crux), monospace',
                                        fontSize: 14,
                                        color: '#1a2a4a',
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {item.body}
                                </p>
                            </div>
                        ))}

                        {activeTab !== "leadin" && (
                            <div
                                style={{
                                    fontFamily: "'Press Start 2P', monospace",
                                    fontSize: 14,
                                    color: '#092c66',
                                    textAlign: 'center',
                                    padding: 40,
                                }}
                            >
                                Content coming soon...
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className="absolute text-center"
                    style={{
                        bottom: 100,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 20,
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            fontFamily: "'Press Start 2P', monospace",
                            fontSize: 18,
                            color: '#ffffff',
                            textShadow: '4px 4px 0px #092c66',
                            textDecoration: 'none',
                        }}
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
