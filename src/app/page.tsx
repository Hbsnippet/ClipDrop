"use client";

import { useState } from "react";
import axios from 'axios';


export default function Home() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result , setResult] = useState("");


    const allowed = [
        "instagram.com",
        "x.com",
        "twitter.com",
    ]


    const isValidHttpUrl = (string : string) => {
        try {

        const newUrl = new URL(string);
        return newUrl.protocol === 'https:' || newUrl.protocol === 'http:'
            
        } catch {
            return false;
        }

    }


    


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("testing");

        if (!url) {
            setResult("Please enter an URL to download");
            return;
        }

        if (!isValidHttpUrl(url.trim())) {
            console.log("Invalid URL")
            setResult("Please enter a valid URL");
            return;
        }

        console.log("URL is valid");

        const parsed = new URL(url.trim());
        const host = parsed.hostname.replace(/^www\./, "");
        console.log(host);

        const isSupported = allowed.some ((site) => host === site || host.endsWith("." + site))

        if(!isSupported){
            setResult("Only Instagram and X links are supported")
            return;
        }

        setLoading(true)
        setResult("")



        try {
            const response = await axios.post("/api/process", {
            url: url
            });

            console.log(response.data)
            setResult(response.data.platform);
        } catch (error) {
            setResult("Something went wrong")
        } finally {
            setLoading(false)
        }

        
    };


    return (
        <main>
            <div>
            <h1>Clipdrop</h1>
            <p>Clipdrop is a platform for downloading videos from Instagram and X.</p>
            </div>

            <form onSubmit={handleSubmit}>
            <input type="text" value={url} placeholder="Enter a video URL" onChange={(e) => setUrl(e.target.value)} className="border-2 border-gray-300 rounded-md p-2" />
            <button >{loading ? "processing.." : "Download"}</button>
            </form>

            <p>{result}</p>
           
        </main>
    )
}
