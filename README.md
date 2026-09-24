# ClipDrop

A simple media downloader for Instagram and X.

🌐 **Live:** https://clip-drop-alpha.vercel.app

## About

ClipDrop is a full-stack media downloader I built while learning and
practicing modern web development.

The project takes a supported media URL, processes it through a server-side
API, retrieves the available media, and presents it in a simple interface
where it can be previewed and downloaded.

## Features

- Instagram Reel downloading
- X post media downloading
- URL validation
- Supported-platform detection
- Media preview
- Downloadable results
- Loading and error states
- Responsive UI

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- Bun

## How It Works

```text
User enters URL
       ↓
Client-side validation
       ↓
Next.js API route
       ↓
Platform detection
       ↓
Media extraction
       ↓
Media result
       ↓
Preview + Download
