"use client";

import { useState } from "react";

export type Result = {
    type: string;
    url: string;
    thumbnail: string | null;
};

export function ResultCard({
    result,
    onDownloadAnother,
}: {
    result: Result;
    onDownloadAnother: () => void;
}) {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="mx-auto mt-8 w-full max-w-[550px] rounded-2xl border border-[#e4ddd4] bg-white p-5 text-left shadow-sm">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
                <div className="relative w-40 shrink-0 overflow-hidden rounded-xl bg-[#f3eee8]">
                    {playing ? (
                        <video
                            src={result.url}
                            controls
                            autoPlay
                            className="aspect-[9/16] w-40 bg-black object-cover"
                            onError={() => {
                                // #region agent log
                                fetch('http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'42103d'},body:JSON.stringify({sessionId:'42103d',runId:'pre-fix',hypothesisId:'C',location:'src/app/page.tsx:video-error',message:'video failed to load',data:{hasSrc:Boolean(result.url)},timestamp:Date.now()})}).catch(()=>{});
                                // #endregion
                            }}
                        />
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlaying(true)}
                            className="relative block w-40"
                            aria-label="Play preview"
                        >
                            {result.thumbnail ? (
                                <img
                                    src={result.thumbnail}
                                    alt="Video thumbnail"
                                    className="aspect-[9/16] w-40 object-cover"
                                    onError={() => {
                                        // #region agent log
                                        fetch('http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'42103d'},body:JSON.stringify({sessionId:'42103d',runId:'pre-fix',hypothesisId:'C',location:'src/app/page.tsx:img-error',message:'thumbnail failed to load',data:{hasSrc:Boolean(result.thumbnail)},timestamp:Date.now()})}).catch(()=>{});
                                        // #endregion
                                    }}
                                />
                            ) : (
                                <span className="block aspect-[9/16] w-40 bg-[#efe8e0]" />
                            )}
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1c1917] shadow-sm">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    )}
                </div>

                <div className="flex w-full flex-col gap-3">
                    <a
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e07a4c] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#cf6840] active:bg-[#c45e38]"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M12 4v12" />
                            <path d="m7 11 5 5 5-5" />
                            <path d="M5 20h14" />
                        </svg>
                        Download video
                    </a>
                    <button
                        type="button"
                        onClick={onDownloadAnother}
                        className="w-full rounded-xl border border-[#e4ddd4] bg-white px-4 py-3 text-sm font-semibold text-[#1c1917] transition-colors hover:bg-[#faf7f4]"
                    >
                        Download another
                    </button>
                </div>
            </div>
        </div>
    );
}
