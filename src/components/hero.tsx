type HeroProps = {
    url: string;
    loading: boolean;
    error: string;
    onUrlChange: (value: string) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function Hero({ url, loading, error, onUrlChange, onSubmit }: HeroProps) {
    return (
        <>
            <p className="rounded-full border border-[#e7e0d6] bg-white/70 px-3 py-1 text-[13px] font-medium text-[#6f6862]">
                Instagram Reels Downloader
            </p>
            <h1 className="mt-6 max-w-xl text-[2.6rem] font-semibold leading-[1.15] tracking-tight text-[#e07a4c] sm:text-6xl">
                Download Instagram Reels in HD
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6f6862] sm:text-base">
                Paste a reel link and save the video to your phone or computer. No login, no app, no watermark.
            </p>

            <form
                onSubmit={onSubmit}
                autoComplete="off"
                className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
            >
                <label className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-[#e6dfd6] bg-white px-4 py-3 shadow-sm focus-within:border-[#e07a4c]">
                    <span className="text-[#b0a8a1]" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        value={url}
                        autoComplete="off"
                        placeholder="Paste Instagram reel link..."
                        onChange={(e) => onUrlChange(e.target.value)}
                        className="w-full bg-transparent text-left text-[15px] text-[#1c1917] outline-none placeholder:text-[#b0a8a1]"
                    />
                </label>
                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e07a4c] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#cf6840] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e07a4c] disabled:cursor-not-allowed disabled:opacity-70"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5" />
                    </svg>
                    {loading ? "Processing..." : "Download"}
                </button>
            </form>

            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-[#8a837c]">
                <li className="inline-flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="8" r="3" />
                        <path d="M5 19c1.5-3 3.8-4.5 7-4.5S17.5 16 19 19" />
                    </svg>
                    No login required
                </li>
                <li className="inline-flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="6" width="18" height="12" rx="2" />
                        <path d="M8 12h.01M12 10v4M16 12h.01" />
                    </svg>
                    HD quality, no watermark
                </li>
                <li className="inline-flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="8" />
                        <path d="m9 12 2 2 4-4" />
                    </svg>
                    Any public reel
                </li>
                <li className="inline-flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z" />
                    </svg>
                    Free to use
                </li>
            </ul>

            {error && (
                <p className="mt-5 w-full rounded-2xl border border-[#f0d0c4] bg-[#fff6f2] px-4 py-3 text-sm text-[#9a4b32]">
                    {error}
                </p>
            )}
        </>
    );
}
