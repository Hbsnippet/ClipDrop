export function InfoSection() {
    return (
        <section className="mx-auto w-full max-w-3xl px-5 pb-20 sm:px-8">
            <div className="rounded-3xl border border-[#e7e0d8] bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
                <h2 id="how" className="text-xl font-semibold tracking-tight">How ClipDrop works</h2>
                <ol className="mt-4 space-y-2 text-sm leading-relaxed text-[#5f5852] sm:text-base">
                    <li>1. Copy a public Instagram or X link</li>
                    <li>2. Paste it into ClipDrop</li>
                    <li>3. Click Download</li>
                    <li>4. Preview or download the media</li>
                </ol>

                <h2 id="why" className="mt-10 text-xl font-semibold tracking-tight">Why use ClipDrop?</h2>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#5f5852] sm:text-base">
                    <li>No account required</li>
                    <li>Simple interface</li>
                    <li>Works with public links</li>
                    <li>No unnecessary steps</li>
                </ul>
            </div>
        </section>
    );
}
