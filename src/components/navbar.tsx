export function Navbar() {
    return (
        <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <a href="#top" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e07a4c] text-sm font-semibold text-white">
                    C
                </span>
                <span>
                    <span className="block text-base font-semibold tracking-tight">ClipDrop</span>
                    <span className="block text-xs text-[#7a736c]">Public media downloader</span>
                </span>
            </a>
            <nav className="flex gap-5 text-sm text-[#5f5852]">
                <a href="#how" className="transition-colors hover:text-[#1c1917]">How it works</a>
                <a href="#why" className="transition-colors hover:text-[#1c1917]">Why ClipDrop</a>
            </nav>
        </header>
    );
}
