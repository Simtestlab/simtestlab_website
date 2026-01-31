
# SimTestLab Website

A marketing website built with Vite, React, TypeScript and Tailwind CSS.

## Overview

This repository contains the front-end for the SimTestLab website. It includes reusable UI components, page layouts, and a small Netlify serverless function used for sending email.

Key features
- Built with Vite + React + TypeScript
- Styled with Tailwind CSS
- Component-driven UI located in `src/components`
- Netlify function(s) under `netlify/functions` (example: `send-email.js`)

## Quickstart

Prerequisites
- Node.js (LTS)
- yarn (or use npm with equivalent commands)

Install dependencies

```bash
yarn install
```

Run development server

```bash
yarn dev
```

Build for production

```bash
yarn build
```

Preview production build

```bash
yarn preview
```

## Deployment

This project includes a `netlify.toml` and a serverless function folder; it's configured for deployment on Netlify. Push to your repository and connect it in Netlify, or use the Netlify CLI to deploy.

## Project Structure (important folders)

- `src/` — main app source
	- `components/` — UI components and shared primitives
	- `pages/` — top-level pages (Index, NotFound)
	- `lib/` and `hooks/` — utilities and custom hooks
- `netlify/functions/` — serverless functions used in production
- `public/` — static assets

## Notes & Next steps
- Check `netlify/functions/send-email.js` if you plan to use the contact/email feature.
- Update the License and Contributors sections as needed.

## Contact
If you need help or want to contribute, open an issue or create a pull request.