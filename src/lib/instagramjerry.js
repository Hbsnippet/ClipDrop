import { instagram } from "@jerrycoder/instagram-api";

export async function getInstagramReel(url) {
    const result = await instagram(url);

    console.log("Jerry result:", result);

    if (!result?.url) {
        throw new Error("No media found");
    }

    return {
        platform: "instagram",
        sourceUrl: url,
        item: {
            type: "video",
            url: result.url,
            thumbnail: result.thumbnail ?? null,
        },
    };
}