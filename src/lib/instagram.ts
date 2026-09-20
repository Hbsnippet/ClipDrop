export async function getInstagramReel(url: string) {
    console.log("getInstagramReel stub", url);

    return {
        platform: "Instagram" as const,
        sourceUrl: url,
        items: [],
    };
}
