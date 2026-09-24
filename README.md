# ClipDrop

A simple media downloader for Instagram and X, built with Next.js.

🌐 **Live Demo:** https://clip-drop-alpha.vercel.app

## About

ClipDrop is a full-stack project I built while learning and practicing modern web development.

It takes a supported media URL, processes it through a server-side API, retrieves the available media, and provides a simple interface to preview and download it.

## Features

- Instagram Reel downloading
- X post media downloading
- URL validation
- Supported platform detection
- Media preview
- Download functionality
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
URL validation
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
````

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Hbsnippet/ClipDrop.git
cd ClipDrop
```

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

Create a production build:

```bash
bun run build
```

Run the production build locally:

```bash
bun run start
```

## What I Learned

* Next.js App Router
* React state and effects
* Client and server components
* Next.js Route Handlers
* HTTP requests with Axios
* Form handling and URL validation
* Async operations and loading states
* Error handling
* Working with external media services
* Deploying a Next.js application

## Disclaimer

ClipDrop is a learning project.

Only download or process content that you have permission to access and download. Respect the terms and policies of the platforms and content owners.

## Author

Built by **Hamdan**

* GitHub: [https://github.com/Hbsnippet](https://github.com/Hbsnippet)
* X: [https://x.com/lukecodez](https://x.com/lukecodez)
* LinkedIn: [https://www.linkedin.com/in/hamdan-bashar-7730a632/](https://www.linkedin.com/in/hamdan-bashar-7730a632/)
