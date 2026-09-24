const links = [
    {
        label: "GitHub",
        href: "https://github.com/Hbsnippet",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
        ),
    },
    {
        label: "X",
        href: "https://x.com/lukecodez",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14.7 10.3 22.1 2h-1.8l-6.4 7.2L8.8 2H2.2l7.8 11L2.2 22h1.8l6.8-7.7L15.2 22h6.6l-7.1-11.7Zm-2.4 2.7-.8-1.1L4.6 3.3h2.7l5 7 .8 1.1 6.6 9.3h-2.7l-5.3-7.7Z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hamdan-bashar-7730a632/",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.7 3.3A2.2 2.2 0 1 0 4.7 7.7 2.2 2.2 0 0 0 4.7 3.3ZM3 9h3.4v12H3V9Zm6.2 0H12.5v1.6h.1c.4-.8 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V21H16.4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9.2V9Z" />
            </svg>
        ),
    },
];

export function SiteFooter() {
    return (
        <footer className="border-t border-[#e7e0d8]">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[#7a736c] sm:px-8">
                <p className="font-semibold text-[#1c1917]">ClipDrop</p>
                <p>A simple way to save public Instagram reels.</p>
                <p>Supported platform: Instagram</p>
                <div className="mt-3">
                    <p>Built by Hamdan</p>
                    <ul className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="inline-flex rounded-sm text-[#5f5852] transition-colors hover:text-[#1c1917] focus-visible:ring-2 focus-visible:ring-[#e07a4c] focus-visible:ring-offset-2"
                                >
                                    {link.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="mt-2">© {new Date().getFullYear()} ClipDrop</p>
            </div>
        </footer>
    );
}
