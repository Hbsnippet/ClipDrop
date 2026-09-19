export default function Home() {
    return (
        <main>
            <div>
            <h1>Clipdrop</h1>
            <p>Clipdrop is a platform for downloading videos from instagram, tiktok, youtube, etc.</p>
            </div>

            <form action="">
            <input type="text" placeholder="Enter a video URL" className="border-2 border-gray-300 rounded-md p-2" />
            <button>Download</button>
            </form>
           
        </main>
    )
}