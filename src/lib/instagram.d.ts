export declare function getInstagramReel(url: string): Promise<{
    platform: string;
    sourceUrl: string;
    item: {
        type: string;
        url: string;
        thumbnail: string | null;
    };
}>;