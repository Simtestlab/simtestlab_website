# Deployment Guide — Netlify (CLI + local function testing)

This guide shows how to link your local project to a Netlify account, deploy the site using the Netlify CLI (including serverless functions), and how to test Netlify Functions locally and via curl (both local and production).

## Prerequisites
- Node.js and npm installed
- Netlify CLI installed: `npm install -g netlify-cli` (or `brew install netlify-cli` on macOS)
- Your project has a `netlify/functions` directory (this repo already does) and a `netlify.toml` that points to `netlify/functions` and `dist` for publishing.

## 1) Link your repo to a Netlify account (CLI)

1. Login to Netlify from the CLI (opens browser):

```bash
netlify login
```

2. If you already created a site in the Netlify app, link the local folder to that site:

```bash
# interactive (choose from your Netlify sites)
netlify link

# OR link by site id
netlify link --id <SITE_ID>
```

3. To create a new site from the CLI and link it to this folder:

```bash
netlify init
# or create non-interactively:
netlify sites:create --name my-site-name
```

After linking you'll see the site URL and project id in the CLI output.

## 2) Build & Deploy with Netlify CLI

Netlify bundles functions from `netlify/functions` during deploy. You do not need to build functions separately.

1. Build the site locally:

```bash
npm ci
npm run build
```

2. Deploy to Netlify (production):

```bash
netlify deploy --prod --dir=dist --functions=netlify/functions
```

This command uploads the built `dist` folder and the functions from `netlify/functions`. The CLI output will include the production URL when complete.

If you want to create & deploy in one command (first-time setup), you can use `--create-site` (interactive) as you did previously:

```bash
netlify deploy --create-site <SITE_NAME> --dir=dist --functions=netlify/functions --prod
```

## 3) Environment variables (important)

Functions run in Netlify's environment; they will not pick up your local `.env` unless you use `netlify dev`. For production you must set env vars in the Netlify UI or via CLI:

Via UI: Site → Site settings → Build & deploy → Environment → Environment variables → Add variables

Via CLI:

```bash
netlify env:set EMAIL_USER info.simtestlab@gmail.com
netlify env:set EMAIL_PASS <your_secret>
netlify env:set EMAIL_RECEIVER support@simtestlab.se
```

After adding or changing production env vars, trigger a deploy (Netlify UI → Deploys → Trigger deploy or run `netlify deploy --prod ...`) to ensure new variables are available to the function runtime.

Security note: For Gmail use an App Password (if your account has 2FA) or use a transactional email provider API key.

## 4) Local development: run Netlify dev (functions + Vite)

Use `netlify dev` from the project root. Netlify Dev will:
- Start your local dev server (Vite) and proxy it
- Serve functions from `netlify/functions`
- Inject environment variables from a local `.env` file (if present)

```bash
netlify dev
```

Watch the CLI output. Netlify Dev prints the local dev URL (example: `Local dev server ready: http://localhost:50969`). Open that URL in the browser — do NOT open the Vite-only URL (e.g. http://localhost:5173) when testing functions.

The output will also show `Loaded function send-email` when your function is recognized.

## 5) Test the Netlify function locally with curl

When `netlify dev` is running, use the Netlify dev origin printed in the terminal. Replace `LOCAL_NETLIFY_URL` with the URL you see in the terminal.

OPTIONS (preflight) check (useful for CORS debugging):

```bash
curl -i -X OPTIONS "${LOCAL_NETLIFY_URL}/.netlify/functions/send-email" \
	-H "Origin: http://localhost:5173" \
	-H "Access-Control-Request-Method: POST"
```

POST (invoke function):

```bash
curl -i -X POST "${LOCAL_NETLIFY_URL}/.netlify/functions/send-email" \
	-H "Content-Type: application/json" \
	-d '{"name":"Test","email":"test@example.com","message":"hello"}'
```

If the function returns 200 locally, it executed correctly; check console logs in the terminal for details and any nodemailer output. `netlify dev` also prints function logs.

## 6) Test the deployed function with curl (production)

After deploying, call the production function URL:

```bash
curl -i -X POST "https://<your-site>.netlify.app/.netlify/functions/send-email" \
	-H "Content-Type: application/json" \
	-d '{"name":"Test","email":"test@example.com","message":"hello"}'
```

If the function returns `500` with an email/smtp error, open your Netlify Function logs in the Netlify UI (Site → Functions → Logs) to see the stacktrace. Common causes for `EAUTH`/`Missing credentials for "PLAIN"`:
- Missing/incorrect env vars in the production site
- Gmail rejecting credentials (use an App Password or provider API key)

## 7) Helpful CLI commands

- `netlify dev` — run local dev server + functions
- `netlify functions:invoke send-email --payload '{"name":"X","email":"x@x","message":"hi"}'` — invoke function locally (no HTTP)
- `netlify functions:list` — list functions
- `netlify env:list` — list environment variables for linked site
- `netlify deploy --prod --dir=dist --functions=netlify/functions` — deploy to production

## 8) Troubleshooting checklist

- If local function requests 404: open the Netlify dev URL printed in the terminal (not the Vite URL).
- If you see CORS preflight failures: ensure your function returns appropriate CORS headers for OPTIONS and responses.
- If prod returns 500 (auth): verify env vars in Netlify UI and redeploy.
- If nodemailer auth fails with Gmail: use an App Password or switch to SendGrid/Postmark/Mailgun for production.

---

If you want, I can add a short section that shows how to swap the function to use SendGrid (API-based) instead of SMTP — that reduces Gmail-specific friction in production.

