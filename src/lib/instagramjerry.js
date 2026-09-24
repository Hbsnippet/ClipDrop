import { instagram } from "@jerrycoder/instagram-api";

export async function getInstagramReel(url) {
    const result = await instagram(url);

    console.log("Jerry result:", result);

    if (!result?.url) {
        throw new Error("No media found");
    }

    const item = {
        type: "video",
        url: result.url,
        thumbnail: result.thumbnail ?? null,
    };
    // #region agent log
    fetch('http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'42103d'},body:JSON.stringify({sessionId:'42103d',runId:'pre-fix',hypothesisId:'B',location:'src/lib/instagramjerry.js:return',message:'jerry item shape',data:{resultKeys:result&&typeof result==='object'?Object.keys(result):[],itemIsArray:Array.isArray(item),hasUrl:Boolean(item.url),hasThumbnail:Boolean(item.thumbnail)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    return {
        platform: "instagram",
        sourceUrl: url,
        item,
    };
}