export function Navbar() {
    return (
        <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <a href="#top" className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e07a4c] text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                            d="M15.5 6.5a6 6 0 1 0 0 11"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                        />
                        <path
                            d="M15.5 6.5H18"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
                <span className="min-w-0">
                    <span className="block text-base font-semibold tracking-tight text-[#1c1917]">ClipDrop</span>
                    <span className="block text-xs text-[#7a736c]">Public media downloader</span>
                </span>
            </a>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#5f5852]">
                <a href="#how" className="transition-colors hover:text-[#1c1917]">How it works</a>
                <a href="#why" className="transition-colors hover:text-[#1c1917]">Why ClipDrop</a>
                <a
                    href="https://github.com/Hbsnippet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex rounded-sm text-[#5f5852] transition-colors hover:text-[#1c1917] focus-visible:ring-2 focus-visible:ring-[#e07a4c] focus-visible:ring-offset-2"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                    </svg>
                </a>
            </nav>
        </header>
    );
}
