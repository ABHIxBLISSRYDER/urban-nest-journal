# Urban Nest Journal

A small static blog demo built with plain HTML, CSS and JavaScript. No framework, build step, backend or database is required.

## Run locally
Open `index.html` in a browser. For a local web server, use VS Code Live Server or run `python -m http.server 8000` from this folder.

## Deploy with GitHub Pages
1. Create a new public GitHub repository, for example `urban-nest-journal`.
2. Upload the contents of this folder (the `index.html`, `assets/` and `posts/` paths must stay in this structure).
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the site. Your source page URLs will look like `https://YOUR-USERNAME.github.io/urban-nest-journal/posts/whitefield-guide.html`.

## Backlink test target
The target URL used in the test articles is **https://propertybasket.co/**.

| Source article | Link type |
|---|---|
| `posts/whitefield-guide.html` | Standard link (no rel attribute) |
| `posts/homebuyer-checklist.html` | `rel="nofollow"` |
| `posts/city-investment.html` | `rel="sponsored"` |

To test `rel="ugc"`, add `rel="ugc"` to the anchor in one article, commit and wait for GitHub Pages to redeploy. To test disappearance, remove the anchor from an article, redeploy, then verify the same source URL again.

## Important
- Use the full deployed article URL as the backlink's **source URL** in PropertyLink AI.
- Use `https://propertybasket.co/` as the backlink's **target URL**.
- Do not use a `file://` path or `localhost` as the source URL for a deployed backend check.
- This is a demo publication. The newsletter form is client-side only and does not collect or send email addresses.
