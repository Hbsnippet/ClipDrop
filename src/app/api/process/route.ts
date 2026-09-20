import { getInstagramReel } from "@/lib/instagram";
import { getXPost } from "@/lib/x";

export async function POST(request: Request) {
    const { url } = await request.json();
    console.log(url);

    try {
        const allowed = [
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

        let platform: "Instagram" | "X" | undefined;

        if (host === "instagram.com" || host.endsWith(".instagram.com")) {
            platform = "Instagram";
        } else if (
            host === "x.com" ||
            host === "twitter.com" ||
            host.endsWith(".x.com") ||
            host.endsWith(".twitter.com")
        ) {
            platform = "X";
        }




        const isSupported = allowed.some(
            (site) => host === site || host.endsWith("." + site)
        );

        if (!isSupported) {
            return Response.json(
                { message: "Unsupported platform" },
                { status: 400 }
            );
        }

        const sourceUrl = parsedUrl.toString();
        const media =
            platform === "Instagram"
                ? await getInstagramReel(sourceUrl)
                : await getXPost(sourceUrl);

        return Response.json({
            platform,
            sourceUrl,
            media,
        });



    } catch (error) {
        return Response.json(
            { message: "Invalid URL" },
            { status: 400 }
        );
    }

    
}