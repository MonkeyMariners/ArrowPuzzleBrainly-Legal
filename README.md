# Arrow Puzzle Brainly — legal & public pages

The public pages for the Android game **Arrow Puzzle Brainly**: policies,
support and the founder page. Plain static HTML, no build step at serve time,
no cookies, no trackers, no third-party scripts.

**Live site:** https://monkeymariners.github.io/ArrowPuzzleBrainly-Legal/

## Pages

| Page | URL path | Used for |
| --- | --- | --- |
| Home | `index.html` | Landing page, screenshots, links to everything |
| About the Founder | `about-founder.html` | Praduman Kumar, bio, LinkedIn |
| Privacy Policy | `privacy-policy.html` | **Play Console → Privacy policy URL** |
| Cookies Policy | `cookies-policy.html` | Linked from the app and this site |
| Terms and Conditions | `terms-and-conditions.html` | Full legal agreement |
| Terms of Use | `terms-of-use.html` | Day-to-day rules, fair play |
| Refund Policy | `refund-policy.html` | Google Play refund process |
| Rewards & Earnings | `earn-money.html` | What rewarded ads give you |
| Support | `support.html` | **Play Console → Support URL** |

The app links to these pages from **Settings → Legal & policies** and
**Settings → About**. The single source of those URLs is
`lib/services/app_links.dart` in the app repository — if this repo is renamed
or moved, change `AppLinks.site` there and rebuild.

## Enabling GitHub Pages

1. Push this repository to GitHub as a **public** repo.
2. Repository → **Settings** → **Pages**.
3. Source: **Deploy from a branch**, branch **main**, folder **/ (root)**.
4. Save. The site is live in a minute or two at the URL above.

`.nojekyll` is present so GitHub serves the files as-is.

## Editing

Do not hand-edit the `.html` files — they are generated. Change the content in
`build.js` (all page text lives there, along with the shared shell and CSS)
and regenerate:

```bash
node build.js
```

No dependencies: it uses only Node's standard library.

Update the `UPDATED` constant at the top of `build.js` whenever a policy
changes, so every page shows the correct date.

## Contact

Monkey Mariners — Vill- Sukar Beg Chak, P.O + P.S- Khusrupur, Patna, Bihar
803202, India · zamefy@gmail.com ·
[LinkedIn](https://www.linkedin.com/in/monkeymariners/)

© 2026 Monkey Mariners. The page content is not licensed for reuse.
