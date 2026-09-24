export function SiteFooter() {
    return (
        <footer className="border-t border-[#e7e0d8]">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[#7a736c] sm:px-8">
                <p className="font-semibold text-[#1c1917]">ClipDrop</p>
                <p>A simple way to save public Instagram reels.</p>
                <p>Supported platform: Instagram</p>
                <p>© {new Date().getFullYear()} ClipDrop</p>
            </div>
        </footer>
    );
}
