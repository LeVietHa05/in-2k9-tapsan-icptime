/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "@/app/compoments/header";
import { data } from "@/data/charData";
import ContentRenderer from "@/app/compoments/contentRenderer";

const tabs = [
    { key: "leadin", label: "Lead in" },
    { key: "personal", label: "Personal Factors" },
    { key: "family", label: "Family Factors" },
    { key: "external", label: "External Factors" },
];

const leadinContent = [
    "For centuries, teenagers have played a substantial role in the workforce. In earlier times, they were often regarded as \u201Cminiature adults,\u201D working full-time in agriculture or factories to help support their families. However, the widespread of child labour laws alongside post\u2013World War II industrialisation marked a turning point, significantly reducing youth employment as focus was shifted on education and school activities instead, with part-time work largely limited to earning pocket money.",

    "In recent years, however, teen employment has experienced a notable resurgence. According to recent reports, increased hiring demand across various sectors, coupled with rising wages, has driven what many describe as a \u201Ccomeback\u201D in teen participation. At the same time, data suggests that despite higher employment rates among Gen Z as of 2026, young people often prioritized work-life balance over traditional hustle, largely shaped by either academic pressure, parental support or high digital fluency. With this in mind, our team spoke with Nguyen Ha Anh, an acclaimed Vietnamese child actress who began her career as early as five years old, to gain insight into her perspective on entering the workforce at such an early age.",

    "From our team interview with Ha Anh, it seems that in today\u2019s era of rapid economic change, adolescents are increasingly required to equip themselves with essential knowledge, skills and experiences to make informed financial decisions, thus finding suitable career paths. From managing personal expenses and pursuing passions to building a personal \u201Cbrand\u201D while still in school, even the smallest choices reflect the influence of various underlying factors. This raises an even more pressing question: What are the key determinants that shape the economic behavior of young people, specifically teenagers today? Having conducted research, our team has concluded that the main forces are: personal factors, family factors and external factors."
];

const pagesData = data as unknown as Record<string, {
    pageId: number;
    title: string;
    data: {
        type: string;
        content?: string[];
        tableData?: {
            headers: string[];
            rows: string[][]
        }
    }[],
    bgImg: string;
}[]>;

export default function CharacterDetail() {
    const [activeTab, setActiveTab] = useState("leadin");
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const tabPages = activeTab !== "leadin" ? (pagesData as any)[activeTab] : undefined;
    const totalPages = tabPages ? tabPages.length : 0;
    const currentPage = tabPages ? tabPages[currentPageIndex] : undefined;

    const hasPrev = currentPageIndex > 0;
    const hasNext = tabPages && currentPageIndex < tabPages.length - 1;

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
                            onClick={() => { setActiveTab(tab.key); setCurrentPageIndex(0) }}
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
                        boxShadow: 'inset -4px -4px 0 0 rgba(0,0,0,0.2), inset 4px 4px 0 0 rgba(255,255,255,0.1)',
                        zIndex: 15,
                    }}
                >
                    {/* leadin tab */}
                    {activeTab === "leadin" ? (
                        <>
                            <div
                                className="border-y-9 border-[#004FAC]"
                                style={{
                                    fontFamily: "var(--font-determination-sans), 'Press Start 2P', monospace",
                                    fontSize: 96,
                                    color: 'white',
                                    textShadow: '0px 0px 12px #092c66',
                                    WebkitTextStroke: `3px #092c66`,
                                    lineHeight: 0.8,
                                    alignContent: `center`,
                                    paddingBottom: 24,
                                    paddingLeft: 24
                                }}
                            >
                                Lead in
                            </div>
                            <div
                                className="flex flex-col gap-6"
                                style={{
                                    padding: '24px 32px 32px',
                                    overflowY: 'auto',
                                    maxHeight: 'calc(100vh - 430px)',
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#092c66 #e0e8f0',
                                }}
                            >
                                <ul className="list-disc pl-4 space-y-4"
                                    style={{
                                        fontFamily: 'var(--font-teacher), monospace',
                                        fontSize: 14,
                                        color: '#1a2a4a',
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {leadinContent.map((each, i) => (
                                        <li key={i} className="text-2xl">
                                            {each}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ) : currentPage ? (

                        <>
                            <div
                                className="border-y-9 border-[#004FAC]"
                                style={{
                                    height: 140,
                                    fontFamily: "var(--font-determination-sans), 'Press Start 2P', monospace",
                                    fontSize: tabs.find(t => t.key === activeTab)?.label == currentPage.title ? 96 : 48,
                                    color: 'white',
                                    WebkitTextStroke: tabs.find(t => t.key === activeTab)?.label == currentPage.title ? `3px #092c66` : `2px #092c66`,
                                    lineHeight: tabs.find(t => t.key === activeTab)?.label == currentPage.title ? 0.8 : 1.0,
                                    alignContent: `center`,
                                    paddingBottom: 24,
                                    paddingLeft: 24
                                }}
                            >
                                {currentPage.title}
                            </div>
                            <div
                                className="flex flex-col gap-6"
                                style={{
                                    padding: '24px 32px 32px',
                                    overflowY: 'auto',
                                    height: 'calc(100vh - 500px)',
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#092c66 #e0e8f0',
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-teacher), monospace',
                                            // fontSize: 14,
                                            color: '#1a2a4a',
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        <ContentRenderer page={currentPage as any} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}

                    {/* next & prev button */}
                    {activeTab !== "leadin" && totalPages > 1 && (
                        <div
                            className="flex items-center justify-center gap-4 py-3"
                            style={{
                                borderTop: '1px solid rgba(0,79,172,0.3)',
                            }}
                        >
                            <button
                                onClick={() => setCurrentPageIndex(i => i - 1)}
                                disabled={!hasPrev}
                                style={{
                                    fontFamily: "'Press Start 2P', monospace",
                                    fontSize: 12,
                                    color: hasPrev ? '#004FAC' : '#999',
                                    background: 'none',
                                    border: 'none',
                                    cursor: hasPrev ? 'pointer' : 'default',
                                    padding: '4px 12px',
                                }}
                            >
                                &lt; Prev
                            </button>
                            <span
                                style={{
                                    fontFamily: "'Press Start 2P', monospace",
                                    fontSize: 11,
                                    color: '#004FAC',
                                }}
                            >
                                {currentPageIndex + 1} / {totalPages}
                            </span>
                            <button
                                onClick={() => setCurrentPageIndex(i => i + 1)}
                                disabled={!hasNext}
                                style={{
                                    fontFamily: "'Press Start 2P', monospace",
                                    fontSize: 12,
                                    color: hasNext ? '#004FAC' : '#999',
                                    background: 'none',
                                    border: 'none',
                                    cursor: hasNext ? 'pointer' : 'default',
                                    padding: '4px 12px',
                                }}
                            >
                                Next &gt;
                            </button>
                        </div>
                    )}
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
        </main >
    );
}
