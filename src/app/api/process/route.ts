export async function POST(request: Request) {
    const { url } = await request.json();
    console.log(url);

    try {
        const allowed = [
            "youtube.com",
            "tiktok.com",
            "instagram.com",
            "x.com",
            "twitter.com",
        ];

        const parsedUrl = new URL(url.trim());

        if (
            parsedUrl.protocol !== "http:" &&
            parsedUrl.protocol !== "https:"
        ) {
            return Response.json(
                { message: "Invalid URL" },
                { status: 400 }
            );
        }

        const host = parsedUrl.hostname.replace(/^www\./, "");
        console.log(host);

        const isSupported = allowed.some(
            (site) => host === site || host.endsWith("." + site)
        );

        if (!isSupported) {
            return Response.json(
                { message: "Unsupported platform" },
                { status: 400 }
            );
        }

        return Response.json({
            message: "API is working",
            url: parsedUrl.toString(),
        });

    } catch (error) {
        return Response.json(
            { message: "Invalid URL" },
            { status: 400 }
        );
    }
}