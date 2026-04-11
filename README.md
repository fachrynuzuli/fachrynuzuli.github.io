# fachrynuzuli.github.io

Personal storefront by **Fachry Nuzuli** — hosted on GitHub Pages.

## 🏪 What's Inside

| Page | URL | Description |
|------|-----|-------------|
| **Freebuilder Studio** | `/` (home) | AI builder services, MVP sprints, prompt packs |
| **Aryendbumi & Co.** | `/aryendbumi-co.html` | Strategic communications & LinkedIn ghostwriting |

## 🛠 Tech Stack

- **Vanilla HTML / CSS / JS** — no framework, no build step
- **GitHub Actions** → GitHub Pages (auto-deploy on push to `main`)
- **`site-config.js`** — centralized link management (see below)

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/fachrynuzuli/fachrynuzuli.github.io.git
cd fachrynuzuli.github.io

# Start a local server
python3 -m http.server 8000

# Open http://localhost:8000
```

## 🔗 Updating Links

All external URLs (CTAs, social links, checkout) are managed in **one file**:

```
site-config.js
```

Edit the values there — both pages pick them up automatically. No need to search through HTML.

## 📦 Deploying

Push to `main` → GitHub Actions deploys automatically to `fachrynuzuli.github.io`.

```bash
git add .
git commit -m "update"
git push origin main
```

## 📁 Project Structure

```
├── index.html              # Freebuilder Studio (home page)
├── aryendbumi-co.html      # Aryendbumi & Co.
├── site-config.js          # Centralized links & settings
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deploy workflow
└── tasks/
    └── prd-*.md            # Product requirement docs
```

## 📝 License

© 2025 Fachry Nuzuli. All rights reserved.
