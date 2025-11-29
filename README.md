# Frontend - Interactive Portfolio

Next.js frontend application for the interactive portfolio website.

## Features

- Modern React components with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Dark/Light mode support
- Responsive design
- AI Chatbot integration

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js app directory (pages and layouts)
- `components/` - React components
  - `sections/` - Page sections (Hero, About, Projects, etc.)
  - `Chatbot.tsx` - AI chatbot component
  - `ThemeProvider.tsx` - Theme context provider
  - `ThemeToggle.tsx` - Dark/Light mode toggle

