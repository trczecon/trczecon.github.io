# charleszhangecon.com

A plain HTML/CSS website. No build step, no framework, no subscription.
Open a file, change the text, save, push. That's the whole workflow.

```
index.html    all the page content (this is the file you edit)
styles.css    colours, fonts, spacing
main.js       show/hide for the abstract buttons
assets/       photo.jpg, cv.pdf, and any paper PDFs
CNAME         tells GitHub which domain to serve
```

---

## 1. Before you publish

Open `index.html` and search for `TODO`. Four things need your attention:

| What | Where |
| --- | --- |
| Email address | sidebar, "Contact information" |
| Google Scholar / LinkedIn / Twitter links | sidebar, "Media" |
| Your photo | save it as `assets/photo.jpg` |
| Your CV | save it as `assets/cv.pdf` |

A square photo around 800x800 pixels looks best. Until you add one,
the site shows a grey silhouette rather than a broken image.

---

## 2. Previewing on your own machine

```bash
cd ~/Desktop/Personal/0_website
python3 -m http.server 4173
```

Then open <http://localhost:4173> in a browser. Press `Ctrl+C` to stop.

You can also just double-click `index.html`, though the local server is a
closer match to how the live site behaves.

---

## 3. Adding a paper

In `index.html`, find the `Working papers` section. Copy one whole block
that starts with `<article class="paper">` and ends with `</article>`,
paste it below, then edit the text.

One rule: each abstract needs its own id. The first paper uses `abs-1`,
so the next should use `abs-2`, then `abs-3`, and so on. The id appears
twice in each block, and both copies must match.

To link a PDF you host yourself, drop the file into `assets/` and point
the Draft link at it, for example `href="assets/my-paper.pdf"`.

---

## 4. Putting it online (GitHub Pages, free)

**One-time setup**

1. Create a free account at <https://github.com>. Pick a username you're
   happy to have in a URL, for example `charleszhang`.
2. Create a new **public** repository named exactly
   `YOURUSERNAME.github.io`. Leave it empty. Do not add a README.
3. In this folder, run the commands GitHub shows you on the new repo page.
   They will look like this:

```bash
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git branch -M main
git push -u origin main
```

4. Your site is live at `https://YOURUSERNAME.github.io` within a minute or two.

**Every time you change something afterwards**

```bash
git add -A
git commit -m "Update research page"
git push
```

The live site updates about a minute later.

---

## 5. Connecting charleszhangecon.com

The domain stays at Squarespace. You only change where it points.

**In the Squarespace domain dashboard, open DNS Settings and add:**

Four A records for the bare domain. Host `@`, pointing to:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

One CNAME record. Host `www`, pointing to `YOURUSERNAME.github.io`
(with the trailing dot if Squarespace asks for one).

Remove any existing A or CNAME records that Squarespace added to point
the domain at its own site builder. Leave MX records alone if you use
the domain for email.

**Then in GitHub:** repository → Settings → Pages → Custom domain →
enter `charleszhangecon.com` → Save. Tick "Enforce HTTPS" once it
becomes available, which can take up to a few hours.

The `CNAME` file in this folder already contains the domain, so GitHub
should pick it up on the first push.

DNS changes usually take 15 minutes to an hour, occasionally longer.

---

## 6. Dark mode

The site follows the reader's system setting automatically. There is
nothing to configure. To see it, switch your Mac to dark appearance and
reload.

To force one mode for everyone, add `data-theme="light"` or
`data-theme="dark"` to the `<html>` tag in `index.html`.
