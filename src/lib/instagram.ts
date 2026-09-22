// import { igdl } from "btch-downloader";

// export async function getInstagramReel(url: string) {

//     console.time("IGDL");
//     const result = await igdl(url);

//     if(!result.status || !result.result?.length){
//         throw new Error("No media found")
//     }

//     const item = result.result.map((item) => ({
//         type: "video" as const,
//         url: item.url,
//         thumbnail: item.thumbnail
//     }))

//     console.log("Instagram result:", result);

//     return ({
//         platform: "instagram",
//         sourceUrl: url,
//         item

//     })
// }