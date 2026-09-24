import { getInstagramReel } from "@/lib/instagramjerry";

export async function POST(request: Request) {
    const { url } = await request.json();
    console.log(url);

    try {
        const allowed = [
            "instagram.com",
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

        const platform =
            host === "instagram.com" || host.endsWith(".instagram.com")
                ? "Instagram"
                : undefined;




        const isSupported = allowed.some(
            (site) => host === site || host.endsWith("." + site)
        );

        if (!isSupported) {
            return Response.json(
                { message: "Unsupported platform" },
                { status: 400 }
            );
        }

        const sourceUrl = `${parsedUrl.origin}${parsedUrl.pathname}`;
        const media = await getInstagramReel(sourceUrl);

        fetch('http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'42103d'},body:JSON.stringify({sessionId:'42103d',runId:'pre-fix',hypothesisId:'E',location:'src/app/api/process/route.ts:success',message:'process returning media',data:{platform,mediaKeys:media&&typeof media==='object'?Object.keys(media):[],hasItem:Boolean((media as {item?:unknown}).item),itemIsArray:Array.isArray((media as {item?:unknown}).item)},timestamp:Date.now()})}).catch(()=>{});
        // #endregion
        return Response.json(media);



    } catch (error) {
        // #region agent log
        fetch('http://127.0.0.1:7859/ingest/ee67c554-8dac-4fe9-8c33-cd51ba86f2d9',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'42103d'},body:JSON.stringify({sessionId:'42103d',runId:'pre-fix',hypothesisId:'A',location:'src/app/api/process/route.ts:catch',message:'process caught error',data:{errorName:error instanceof Error?error.name:'unknown',errorMessage:error instanceof Error?error.message:String(error),errorStack:error instanceof Error?error.stack?.slice(0,500):undefined},timestamp:Date.now()})}).catch(()=>{});
        // #endregion
        return Response.json(
            { message: "Invalid URL" },
            { status: 400 }
        );
    }

    
}