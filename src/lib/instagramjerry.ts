import { instagram } from "@jerrycoder/instagram-api";

type JerryMedia = {
    type?: string;
    url?: string;
    thumbnail?: string;
};

export async function getInstagramReel(url: string) {
    // #region agent log
    let urlHost = "bad";
    try {
        urlHost = new URL(url).hostname;
    } catch {
        urlHost = "bad";
    }
    fetch("http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Debug-Session-Id": "42103d",
        },
        body: JSON.stringify({
            sessionId: "42103d",
            runId: "post-fix",
            hypothesisId: "B",
            location: "src/lib/instagramjerry.ts:entry",
            message: "getInstagramReel start",
            data: { urlHost, urlLen: url.length },
            timestamp: Date.now(),
        }),
    }).catch(() => {});
    // #endregion

    let result: JerryMedia | JerryMedia[];
    try {
        result = await instagram(url);
    } catch (err) {
        // #region agent log
        fetch("http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Debug-Session-Id": "42103d",
            },
            body: JSON.stringify({
                sessionId: "42103d",
                runId: "post-fix",
                hypothesisId: "C",
                location: "src/lib/instagramjerry.ts:instagram-throw",
                message: "instagram() threw",
                data: {
                    errorName: err instanceof Error ? err.name : "unknown",
                    errorMessage: err instanceof Error ? err.message : String(err),
                },
                timestamp: Date.now(),
            }),
        }).catch(() => {});
        // #endregion
        throw err;
    }

    const rawItems = Array.isArray(result) ? result : [result];
    const item = rawItems
        .filter((entry) => Boolean(entry?.url))
        .map((entry) => ({
            type: (entry.type ?? "video") as "video",
            url: entry.url as string,
            thumbnail: entry.thumbnail,
        }));

    // #region agent log
    fetch("http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Debug-Session-Id": "42103d",
        },
        body: JSON.stringify({
            sessionId: "42103d",
            runId: "post-fix",
            hypothesisId: "B",
            location: "src/lib/instagramjerry.ts:after-instagram",
            message: "instagram() returned",
            data: {
                resultType: typeof result,
                isArray: Array.isArray(result),
                keys:
                    result && typeof result === "object" && !Array.isArray(result)
                        ? Object.keys(result)
                        : [],
                hasStatus: Boolean(
                    result &&
                        typeof result === "object" &&
                        "status" in result
                ),
                hasResultArray: Array.isArray(
                    result &&
                        typeof result === "object" &&
                        "result" in result
                        ? (result as { result?: unknown }).result
                        : undefined
                ),
                itemCount: item.length,
                hasUrl: item.length > 0,
            },
            timestamp: Date.now(),
        }),
    }).catch(() => {});
    // #endregion

    if (!item.length) {
        throw new Error("No media found");
    }

    console.log("Instagram result:", result);

    return {
        platform: "instagram" as const,
        sourceUrl: url,
        item,
    };
}
