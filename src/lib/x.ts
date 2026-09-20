export async function getXPost(url: string) {
    console.log("getXPost stub", url);

    return {
        platform: "X" as const,
        sourceUrl: url,
        items: [],
    };
}
