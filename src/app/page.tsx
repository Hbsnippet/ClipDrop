"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Hero } from "@/components/hero";
import { InfoSection } from "@/components/info-section";
import { Navbar } from "@/components/navbar";
import { ResultCard, type Result } from "@/components/result-card";
import { SiteFooter } from "@/components/site-footer";

const isValidHttpUrl = (value: string) => {
    try {
        const parsedUrl = new URL(value);

        return (
            parsedUrl.protocol === "http:" ||
            parsedUrl.protocol === "https:"
        );
    } catch {
        return false;
    }
};

export default function Home() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<Result | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        setUrl("");
    }, []);

    const handleDownloadAnother = () => {
        setUrl("");
        setResult(null);
        setError("");
        setLoading(false);
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setResult(null);

        const trimmedUrl = url.trim();

        if (!trimmedUrl) {
            setError("Please enter a URL");
            return;
        }

        if (!isValidHttpUrl(trimmedUrl)) {
            setError("Please enter a valid URL");
            return;
        }

        const parsedUrl = new URL(trimmedUrl);
        const host = parsedUrl.hostname.replace(/^www\./, "");

        const allowed = [
            "instagram.com",
        ];

        const isSupported = allowed.some(
            (site) =>
                host === site ||
                host.endsWith("." + site)
        );

        if (!isSupported) {
            setError("Only Instagram is supported");
            return;
        }

        setLoading(true);

        try {
            const start = performance.now();

            const response = await axios.post("/api/process", {
                url: trimmedUrl,
            });

            console.log(
                "TOTAL API:",
                Math.round(performance.now() - start),
                "ms"
            );

            console.log("API RESPONSE:", response.data);

            const payload = response.data;
            const item = payload?.item;
            const picked = Array.isArray(item) ? item[0] : item;
            // #region agent log
            fetch('http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'42103d'},body:JSON.stringify({sessionId:'42103d',runId:'pre-fix',hypothesisId:'A',location:'src/app/page.tsx:setResult',message:'preview payload shape',data:{topKeys:payload&&typeof payload==='object'?Object.keys(payload):[],itemType:item===null?'null':Array.isArray(item)?'array':typeof item,item0Type:Array.isArray(item)?typeof item[0]:'n/a',pickedType:picked===null?'null':typeof picked,pickedKeys:picked&&typeof picked==='object'?Object.keys(picked):[],hasUrl:Boolean(picked&&typeof picked==='object'&&'url' in picked&&picked.url),hasThumbnail:Boolean(picked&&typeof picked==='object'&&'thumbnail' in picked&&picked.thumbnail),index0Defined:Array.isArray(item)?item[0]!==undefined:false},timestamp:Date.now()})}).catch(()=>{});
            // #endregion
            // Jerry → route.ts → media → item → [0]
            setResult(response.data.item);
            setError("");
        } catch (err) {
            console.error("PROCESS ERROR:", err);

            setError("Something went wrong");
            setResult(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-full bg-[#f6f1ea] text-[#1c1917]">
            <Navbar />

            <section id="top" className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 pb-16 pt-14 text-center sm:px-8 sm:pt-20">
                <Hero
                    url={url}
                    loading={loading}
                    error={error}
                    onUrlChange={setUrl}
                    onSubmit={handleSubmit}
                />
                {result && (
                    <ResultCard
                        result={result}
                        onDownloadAnother={handleDownloadAnother}
                    />
                )}
            </section>

            <InfoSection />
            <SiteFooter />
        </main>
    );
}