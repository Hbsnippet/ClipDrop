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
            <p className="rounded-full border border-[#e4ddd4] bg-white px-3 py-1 text-xs font-medium text-[#6d6560]">
                Instagram Reel Downloader
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-[#1c1917] sm:text-5xl sm:leading-tight">
                Download Instagram Reels
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6d6560] sm:text-lg">
                Paste a public media link and download it in seconds. Simple, fast, and no login required.
            </p>

            <form
                onSubmit={onSubmit}
                autoComplete="off"
                className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:rounded-full sm:border sm:border-[#e4ddd4] sm:bg-white sm:p-1.5 sm:shadow-sm"
            >
                <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#e4ddd4] bg-white px-4 py-3 focus-within:border-[#e07a4c] sm:border-0 sm:py-2 sm:focus-within:border-transparent">
                    <span className="text-[#a39b94]" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.4 4.5" />
                            <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L12.6 19.5" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        value={url}
                        autoComplete="off"
                        placeholder="Paste your Instagram reel link..."
                        onChange={(e) => onUrlChange(e.target.value)}
                        className="w-full bg-transparent text-left text-sm text-[#1c1917] outline-none placeholder:text-[#a39b94] focus:outline-none"
                    />
                </label>
                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-[#e07a4c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#cf6840] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e07a4c] disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {loading ? "Processing..." : "Download"}
                </button>
            </form>

            {error && (
                <p className="mt-5 w-full rounded-2xl border border-[#f0d0c4] bg-[#fff6f2] px-4 py-3 text-sm text-[#9a4b32]">
                    {error}
                </p>
            )}
        </>
    );
}
