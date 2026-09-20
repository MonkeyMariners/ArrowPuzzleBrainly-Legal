// Generates the public site for Arrow Puzzle Brainly.
// Every page shares one shell so the legal pages stay consistent.
// Run with: node build.js
const fs = require('fs');
const path = require('path');

const OUT = __dirname;
const UPDATED = '20 September 2026';
const EMAIL = 'zamefy@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/monkeymariners/';
const ADDRESS =
  'Vill- Sukar Beg Chak, P.O + P.S- Khusrupur, Patna, Bihar 803202, India';
const APP = 'Arrow Puzzle Brainly';
// The name the app is published and contracted under.
const PUBLISHER = 'Monkey Mariners';
const PACKAGE = 'com.onxmariners.arrowpuzzlebrainly';

const NAV = [
  ['index.html', 'Home'],
  ['about-founder.html', 'Founder'],
  ['privacy-policy.html', 'Privacy'],
  ['cookies-policy.html', 'Cookies'],
  ['terms-and-conditions.html', 'Terms'],
  ['terms-of-use.html', 'Use'],
  ['refund-policy.html', 'Refunds'],
  ['earn-money.html', 'Rewards'],
  ['support.html', 'Support'],
];

const CSS = `
:root{
  --bg:#071a2b; --bg2:#0b3b5a; --bg3:#07263c;
  --panel:rgba(12,42,65,.82); --line:rgba(255,255,255,.10);
  --text:#eafbff; --muted:#93bad0; --accent:#22e1ff; --accent2:#3dd6c4;
  --pink:#ff5fa2; --radius:22px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0; color:var(--text); background:linear-gradient(160deg,var(--bg),var(--bg2) 55%,var(--bg3));
  background-attachment:fixed;
  font:16px/1.7 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;
  -webkit-font-smoothing:antialiased;
}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}
.wrap{max-width:860px;margin:0 auto;padding:0 20px}
header.site{position:sticky;top:0;z-index:20;backdrop-filter:blur(14px);
  background:rgba(7,26,43,.78);border-bottom:1px solid var(--line)}
.bar{display:flex;align-items:center;gap:14px;padding:12px 0;flex-wrap:wrap}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:-.2px;color:var(--text)}
.brand img{width:34px;height:34px;border-radius:9px}
nav.links{display:flex;gap:6px;flex-wrap:wrap;margin-left:auto}
nav.links a{padding:7px 12px;border-radius:999px;font-size:14px;color:var(--muted);white-space:nowrap}
nav.links a:hover{background:rgba(255,255,255,.07);color:var(--text);text-decoration:none}
nav.links a.on{background:var(--accent);color:#04202e;font-weight:700}
main{padding:36px 0 70px}
h1{font-size:clamp(28px,5vw,40px);line-height:1.15;margin:0 0 6px;letter-spacing:-.6px}
h2{font-size:19px;margin:34px 0 10px;color:var(--accent);letter-spacing:.3px}
h3{font-size:16px;margin:22px 0 6px}
p,li{color:#d7edf7}
.updated{color:var(--muted);font-size:13px;margin:0 0 26px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:26px 26px 30px;margin:0 0 18px}
.hero{display:flex;gap:26px;align-items:center;flex-wrap:wrap}
.hero img.icon{width:112px;height:112px;border-radius:26px;box-shadow:0 14px 40px rgba(0,0,0,.45)}
.tagline{color:var(--accent);letter-spacing:3px;font-size:13px;text-transform:uppercase;font-weight:700}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;margin-top:8px}
.tile{display:block;background:rgba(255,255,255,.05);border:1px solid var(--line);
  border-radius:16px;padding:16px 18px;color:var(--text)}
.tile:hover{background:rgba(255,255,255,.09);text-decoration:none}
.tile b{display:block;margin-bottom:3px}
.tile span{color:var(--muted);font-size:13.5px}
.shots{display:flex;gap:14px;overflow-x:auto;padding:6px 2px 14px;scroll-snap-type:x mandatory}
.shots img{height:420px;border-radius:18px;border:1px solid var(--line);scroll-snap-align:start;flex:0 0 auto}
.founder{display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap}
.founder img{width:190px;border-radius:20px;border:1px solid var(--line)}
.chips{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 14px}
.chip{background:rgba(255,255,255,.07);border:1px solid var(--line);border-radius:999px;
  padding:5px 13px;font-size:13px;color:var(--text)}
.btn{display:inline-flex;align-items:center;gap:9px;background:var(--accent);color:#04202e;
  font-weight:800;padding:12px 20px;border-radius:14px;margin-top:6px}
.btn:hover{text-decoration:none;filter:brightness(1.07)}
.btn.ghost{background:rgba(255,255,255,.08);color:var(--text)}
table{width:100%;border-collapse:collapse;margin:12px 0;font-size:14.5px}
th,td{text-align:left;padding:10px 12px;border-bottom:1px solid var(--line);vertical-align:top}
th{color:var(--accent);font-weight:700}
.note{background:rgba(34,225,255,.08);border-left:3px solid var(--accent);
  border-radius:0 12px 12px 0;padding:14px 16px;margin:16px 0}
.warn{background:rgba(255,95,162,.10);border-left:3px solid var(--pink)}
footer.site{border-top:1px solid var(--line);padding:26px 0 50px;color:var(--muted);font-size:13.5px}
footer.site .fl{display:flex;gap:10px 18px;flex-wrap:wrap;margin-bottom:14px}
address{font-style:normal;color:var(--muted)}
@media(max-width:560px){
  .card{padding:20px 18px 24px}
  .shots img{height:330px}
  .founder img{width:100%;max-width:280px}
}
`;

function shell(file, title, body, description) {
  const nav = NAV.map(
    ([href, label]) =>
      `<a href="${href}"${href === file ? ' class="on"' : ''}>${label}</a>`
  ).join('');
  const foot = NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join('');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} — ${APP}</title>
<meta name="description" content="${description}">
<link rel="icon" href="assets/icon.png">
<meta property="og:title" content="${title} — ${APP}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="assets/feature.png">
<style>${CSS}</style>
</head>
<body>
<header class="site"><div class="wrap bar">
  <a class="brand" href="index.html"><img src="assets/icon.png" alt=""> ${APP}</a>
  <nav class="links">${nav}</nav>
</div></header>
<main class="wrap">
${body}
</main>
<footer class="site"><div class="wrap">
  <div class="fl">${foot}</div>
  <p><strong>${APP}</strong> — Think. Tap. Escape.<br>
  Published by ${PUBLISHER}. Package <code>${PACKAGE}</code>.</p>
  <address>${ADDRESS}<br>Email: <a href="mailto:${EMAIL}">${EMAIL}</a></address>
  <p style="margin-top:14px">© 2026 ${PUBLISHER}. All rights reserved.</p>
</div></footer>
</body>
</html>
`;
}

const contact = `<h2>Contact us</h2>
<p>Questions about this document? Write to
<a href="mailto:${EMAIL}">${EMAIL}</a> and we will reply within 7 working days.</p>
<address><strong>${PUBLISHER}</strong><br>${ADDRESS}<br>
Email: <a href="mailto:${EMAIL}">${EMAIL}</a><br>
LinkedIn: <a href="${LINKEDIN}" rel="noopener">monkeymariners</a></address>`;

const pages = {};

/* ───────────────────────── Home ───────────────────────── */
pages['index.html'] = {
  title: 'Arrow Puzzle Brainly',
  description:
    'Official site for Arrow Puzzle Brainly — a free offline arrow puzzle game. Policies, support and contact.',
  body: `
<div class="card hero">
  <img class="icon" src="assets/icon.png" alt="${APP} icon">
  <div>
    <div class="tagline">Think. Tap. Escape.</div>
    <h1>${APP}</h1>
    <p style="margin:6px 0 0">Every arrow has a way out. Find the right order.<br>
    1,100 levels · 4 colour themes · plays fully offline · free to play.</p>
  </div>
</div>

<div class="card">
  <h2>How the game works</h2>
  <p>Each arrow leaves the board in the direction it points — but only when every
  cell between it and the edge is empty. Tap a free arrow and it flies away,
  opening the path for the next one. Tap a blocked arrow and it costs one of your
  three hearts. Clear the whole board to finish the level.</p>
  <p>Arrows run across several cells and bend into L and U shapes; one leaves
  when the lane in front of its head is clear, sliding out head first with its
  body following. Every level is generated so that a complete solution always
  exists, and removing an arrow can only ever free other arrows — so you can
  never reach a dead end.</p>
</div>

<div class="card">
  <h2>Screens</h2>
  <div class="shots">
    <img src="assets/screenshots/01-home-neon-ocean.jpg" alt="Home screen, Neon Ocean theme">
    <img src="assets/screenshots/02-home-candy-pop.jpg" alt="Home screen, Candy Pop theme">
    <img src="assets/screenshots/03-home-mint-fresh.jpg" alt="Home screen, Mint Fresh theme">
    <img src="assets/screenshots/05-levels.jpg" alt="Level map">
    <img src="assets/screenshots/06-themes.jpg" alt="Theme picker">
    <img src="assets/screenshots/07-gameplay.jpg" alt="Gameplay">
    <img src="assets/screenshots/08-board.jpg" alt="Puzzle board">
  </div>
</div>

<div class="card">
  <h2>Legal &amp; policies</h2>
  <div class="grid">
    <a class="tile" href="privacy-policy.html"><b>Privacy Policy</b><span>What we store, and what we never collect</span></a>
    <a class="tile" href="cookies-policy.html"><b>Cookies Policy</b><span>Cookies on this site and IDs in the app</span></a>
    <a class="tile" href="terms-and-conditions.html"><b>Terms &amp; Conditions</b><span>The agreement between you and us</span></a>
    <a class="tile" href="terms-of-use.html"><b>Terms of Use</b><span>Rules for using the game and this site</span></a>
    <a class="tile" href="refund-policy.html"><b>Refund Policy</b><span>How refunds work for any purchase</span></a>
    <a class="tile" href="earn-money.html"><b>Rewards &amp; Earnings</b><span>What rewarded ads do and do not give you</span></a>
    <a class="tile" href="about-founder.html"><b>About the Founder</b><span>Who builds this</span></a>
    <a class="tile" href="support.html"><b>Support</b><span>Report a bug, ask a question</span></a>
  </div>
</div>

<div class="card">
  <h2>Contact</h2>
  <address><strong>${PUBLISHER}</strong><br>${ADDRESS}<br>
  Email: <a href="mailto:${EMAIL}">${EMAIL}</a><br>
  LinkedIn: <a href="${LINKEDIN}" rel="noopener">monkeymariners</a></address>
</div>`,
};

/* ───────────────────────── Founder ───────────────────────── */
pages['about-founder.html'] = {
  title: 'About the Founder',
  description:
    'Praduman Kumar — mariner, entrepreneur and technology creator, the founder behind Arrow Puzzle Brainly.',
  body: `
<h1>About the Founder</h1>
<p class="updated">The person behind ${APP}</p>

<div class="card founder">
  <img src="assets/founder.jpg" alt="Praduman Kumar">
  <div style="flex:1;min-width:250px">
    <h2 style="margin-top:0">Praduman Kumar</h2>
    <div class="chips"><span class="chip">Mariner</span><span class="chip">Entrepreneur</span><span class="chip">Technology creator</span></div>
    <a class="btn" href="${LINKEDIN}" rel="noopener">Connect on LinkedIn</a>
  </div>
</div>

<div class="card">
  <h2>About me</h2>
  <p>I'm Praduman Kumar, a mariner, entrepreneur and technology-driven creator
  from India.</p>
  <p>I graduated from Indian Maritime University, Chennai campus, with a B.Tech
  in Marine Engineering — where my fascination with how systems work, and how
  discipline keeps them running, first took hold.</p>
  <p>My journey began in the maritime industry, where I worked onboard ships and
  experienced the realities of life at sea — from engineering and machinery to
  operations, discipline, teamwork, and life across different oceans and
  countries. That experience shaped the way I think: observe a problem,
  understand it from the ground level, and build a practical solution.</p>
  <p>Today, I'm expanding beyond the maritime world into technology, digital
  products, business and entrepreneurship. I'm interested in building useful
  products that solve real problems rather than simply following trends.</p>
  <p>I work across several areas, including mobile applications, websites, SaaS
  products, AI-powered tools, digital businesses, maritime education and content
  creation. Some of my projects are inspired directly by problems I have
  experienced myself, while others come from opportunities I see around me.</p>
  <p>I'm also continuously learning — technology, business, finance, engineering,
  communication, and new ways of creating and scaling products.</p>
  <p>I believe you don't need to know everything before starting. You need the
  curiosity to learn, the courage to start, and the discipline to keep
  improving.</p>
  <p>My long-term goal is to build products, businesses and communities that
  create real value — not only for myself, but for the people who use them.</p>
  <div class="note"><strong>Learn. Build. Test. Improve. Repeat.</strong><br>
  One person. One purpose. Different roles.</div>
</div>

<div class="card">
  <h2>Why ${APP}</h2>
  <p>${APP} started from a simple observation: most tap-puzzle games are let
  down by the small things — a board that shifts under your finger, an ad after
  every move, a level that turns out to be impossible. This game is an attempt to
  get those details right. The board never moves. Ads are deliberately rare. Every
  one of the 655 levels is verified solvable before it ships.</p>
  ${contact}
</div>`,
};

/* ───────────────────────── Privacy ───────────────────────── */
pages['privacy-policy.html'] = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Arrow Puzzle Brainly — what stays on your device, what we never collect, and how advertising IDs are used.',
  body: `
<h1>Privacy Policy</h1>
<p class="updated">Last updated: ${UPDATED}</p>

<div class="card">
<p>This Privacy Policy explains how ${APP} (the "App", package
<code>${PACKAGE}</code>) handles information. The App is published by
${PUBLISHER} ("we", "us"), ${ADDRESS}. By installing or using the App you agree
to this policy.</p>

<div class="note">In short: the game needs no account, works offline, and keeps
your progress on your own phone. The only data that leaves your device is what
the Google AdMob advertising SDK collects to show ads.</div>

<h2>1. Information you give us</h2>
<p><strong>None.</strong> The App does not ask for your name, email address,
phone number, date of birth, photographs, contacts, files, microphone, camera or
location. There is no sign-up, no login and no user account.</p>

<h2>2. Information stored on your device</h2>
<p>The App saves the following locally, using Android's standard app storage. It
never leaves your phone and is deleted when you uninstall the App:</p>
<table>
<tr><th>What</th><th>Why</th></tr>
<tr><td>Level progress and highest level unlocked</td><td>So you can continue where you stopped</td></tr>
<tr><td>Stars earned per level</td><td>To show your rating on the level map</td></tr>
<tr><td>Hint balance</td><td>To track how many hints you have left</td></tr>
<tr><td>Settings (theme, sound, haptics, animation)</td><td>To remember how you like to play</td></tr>
<tr><td>First-open time and launch count</td><td>To show the beginner tip only to new players</td></tr>
</table>
<p>You can erase all of it at any time from <em>Settings → Reset progress</em>,
or by uninstalling the App.</p>

<h2>3. Analytics</h2>
<p>We record anonymous gameplay events — for example that a level was started or
completed, that a hint was used, or that a theme was selected — so we can balance
difficulty and improve the design. These events contain no name, email, phone
number, device identifier or any other information that identifies you, and they
are not linked to your identity or combined with data from other sources.</p>

<h2>4. Advertising</h2>
<p>The App shows a small number of ads, including optional rewarded videos that
you choose to watch in exchange for in-game hints or an extra heart. Ads are
delivered by <strong>Google AdMob</strong>.</p>
<p>To select and measure ads, AdMob may access your device's <strong>advertising
ID</strong> and technical information such as device type, operating system
version, coarse location derived from your IP address, and whether an ad was
shown or clicked. We never receive your advertising ID ourselves, and we cannot
use it to identify you.</p>
<p>You control that identifier. On Android, open
<em>Settings → Privacy → Ads</em> to reset it or to opt out of personalised
advertising entirely. The game remains fully playable either way.</p>
<p>Google's use of this data is governed by the
<a href="https://policies.google.com/privacy" rel="noopener">Google Privacy
Policy</a> and
<a href="https://policies.google.com/technologies/partner-sites" rel="noopener">How
Google uses information from sites or apps that use our services</a>.</p>

<h2>5. Children</h2>
<p>The App is suitable for all ages. It contains no chat, no accounts, no
user-generated content and no links out of the game other than the ad network and
these policy pages. We do not knowingly collect personal information from
children. If you believe a child has provided us with personal data, contact
<a href="mailto:${EMAIL}">${EMAIL}</a> and we will delete it promptly.</p>

<h2>6. Permissions the App requests</h2>
<table>
<tr><th>Permission</th><th>Used for</th></tr>
<tr><td><code>INTERNET</code></td><td>Loading ads only. Gameplay never needs a connection.</td></tr>
<tr><td><code>AD_ID</code></td><td>Allows AdMob to read the advertising ID described above.</td></tr>
<tr><td><code>ACCESS_NETWORK_STATE</code></td><td>Added by the ads SDK to detect whether you are online.</td></tr>
</table>

<h2>7. Data sharing and selling</h2>
<p>We do not sell, rent or trade your data. We do not share data with third
parties other than the advertising provider described in section 4.</p>

<h2>8. Security</h2>
<p>Because the App keeps your data on your own device and transmits nothing to us,
there is no account of yours for us to lose. Ad requests are transmitted over
encrypted connections by the Google SDK.</p>

<h2>9. Your rights</h2>
<p>You can delete all data the App holds about you at any moment by resetting
progress or uninstalling. If you are in a region with data-protection rights such
as the GDPR or the Indian DPDP Act and you wish to make a request, write to
<a href="mailto:${EMAIL}">${EMAIL}</a>. Since we hold no personal data
identifying you, in most cases the answer will simply be that there is nothing
stored on our side.</p>

<h2>10. Changes</h2>
<p>If this policy changes, the new version will appear on this page with an
updated date. Material changes will also be noted in the app listing.</p>

${contact}
</div>`,
};

/* ───────────────────────── Cookies ───────────────────────── */
pages['cookies-policy.html'] = {
  title: 'Cookies Policy',
  description:
    'Cookies Policy for Arrow Puzzle Brainly — this website sets no cookies; the app uses no cookies but the ad SDK may use device identifiers.',
  body: `
<h1>Cookies Policy</h1>
<p class="updated">Last updated: ${UPDATED}</p>

<div class="card">
<h2>1. This website</h2>
<p>This website is a set of static pages. <strong>It sets no cookies of its
own</strong>, runs no analytics or tracking scripts, shows no ads and embeds no
third-party widgets, fonts or trackers. You can read every page here without
being identified or followed.</p>
<p>The site is hosted on GitHub Pages. Like any web host, GitHub's servers
process the technical information your browser sends with each request (IP
address, browser type, requested page) in order to deliver the page and to
protect the service. That is described in the
<a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" rel="noopener">GitHub
Privacy Statement</a>.</p>

<h2>2. The mobile app</h2>
<p>Cookies are a web-browser technology, and the game is not a web page — so
<strong>the App uses no cookies</strong>. It does store small preference values
on your device (your progress and settings), which are described in the
<a href="privacy-policy.html">Privacy Policy</a> and never leave your phone.</p>

<h2>3. Similar technologies in ads</h2>
<p>The advertising SDK inside the App does use a similar technology: your
device's <strong>advertising ID</strong>, plus local storage belonging to the ad
network, to limit how often you see the same ad, to measure whether an ad was
shown, and to detect invalid traffic.</p>
<table>
<tr><th>Technology</th><th>Set by</th><th>Purpose</th><th>Your control</th></tr>
<tr><td>Advertising ID</td><td>Google AdMob</td><td>Ad selection, frequency capping, measurement</td><td>Android Settings → Privacy → Ads</td></tr>
<tr><td>Ad SDK local storage</td><td>Google AdMob</td><td>Caching ad content and settings</td><td>Cleared when you uninstall the App</td></tr>
</table>

<h2>4. Managing your choices</h2>
<ul>
<li><strong>Reset your advertising ID</strong> — Android <em>Settings → Privacy → Ads → Reset advertising ID</em>.</li>
<li><strong>Turn off personalised ads</strong> — the same screen. You will still see ads, but they will be less relevant.</li>
<li><strong>Remove everything</strong> — uninstalling the App clears all local storage belonging to it.</li>
</ul>

<h2>5. Changes</h2>
<p>If we ever add cookies or analytics to this website, this page will be updated
before the change goes live, and a consent banner will be added where the law
requires one.</p>

${contact}
</div>`,
};

/* ───────────────────────── Terms and Conditions ───────────────────────── */
pages['terms-and-conditions.html'] = {
  title: 'Terms and Conditions',
  description:
    'Terms and Conditions governing the use of the Arrow Puzzle Brainly mobile game.',
  body: `
<h1>Terms and Conditions</h1>
<p class="updated">Last updated: ${UPDATED}</p>

<div class="card">
<p>These Terms and Conditions ("Terms") form an agreement between you and
<strong>${PUBLISHER}</strong>, ${ADDRESS} ("we", "us"), covering your use of
the mobile game ${APP} (package <code>${PACKAGE}</code>) and this website
(together, the "Service"). Please read them before using the Service. By
installing, opening or using the App you accept these Terms. If you do not accept
them, do not use the App.</p>

<h2>1. Who may use the Service</h2>
<p>You may use the Service if you are able to form a binding contract in your
country. If you are a minor, you may use it with the consent of a parent or
guardian, who accepts these Terms on your behalf.</p>

<h2>2. Licence</h2>
<p>We grant you a personal, limited, non-exclusive, non-transferable, revocable
licence to install and use one copy of the App on devices you own or control, for
your own non-commercial entertainment. This licence exists only while you comply
with these Terms.</p>

<h2>3. What you may not do</h2>
<ul>
<li>Copy, sell, rent, sub-licence or redistribute the App or its levels, artwork, sounds or code.</li>
<li>Reverse engineer, decompile or disassemble the App, except to the extent that applicable law expressly permits it.</li>
<li>Modify the App, or use cheats, automation, emulation tools or modified clients to alter gameplay or ad delivery.</li>
<li>Generate artificial ad impressions or clicks, or interfere with the advertising in any way.</li>
<li>Remove or obscure any copyright, trademark or other proprietary notice.</li>
<li>Use the Service unlawfully, or in a way that damages or overloads it.</li>
</ul>

<h2>4. Ownership</h2>
<p>The App, its name, logo, level design system, artwork, sound effects, code and
this website remain our property and are protected by copyright and other laws.
These Terms give you a licence to play, not ownership of anything.</p>

<h2>5. Advertising</h2>
<p>The App is free and is funded by advertising. By using the App you accept that
ads will be displayed, including occasional full-screen ads between levels and
optional rewarded videos you choose to watch. Ads are supplied by third parties
and we do not control or endorse their content. See the
<a href="earn-money.html">Rewards &amp; Earnings Policy</a> for what rewarded ads
give you.</p>

<h2>6. Virtual items</h2>
<p>Hints, hearts, stars and progress are virtual items with no monetary value.
They cannot be exchanged for money, sold or transferred, and they may be changed,
reset or discontinued as the game is updated. They exist only inside your
installation of the App.</p>

<h2>7. Your device and your data</h2>
<p>Progress is stored on your device only. We do not run a cloud save. If you
uninstall the App, change device, or clear its data, your progress is gone and we
cannot restore it. Handling of information is described in the
<a href="privacy-policy.html">Privacy Policy</a>.</p>

<h2>8. Availability and updates</h2>
<p>We may update, change, suspend or discontinue any part of the Service at any
time, including levels, features and this website. We may release updates that
you need to install to keep using the App.</p>

<h2>9. Disclaimer of warranties</h2>
<p>The Service is provided "as is" and "as available", without warranties of any
kind, whether express or implied, including fitness for a particular purpose and
non-infringement. We do not warrant that the App will be uninterrupted,
error-free or compatible with every device.</p>

<h2>10. Limitation of liability</h2>
<p>To the maximum extent permitted by law, we will not be liable for indirect,
incidental, special or consequential losses, loss of data, loss of progress or
loss of profit arising from your use of the Service. Where liability cannot be
excluded, it is limited to the amount you paid us for the App in the twelve
months before the claim — which, for a free app, is zero. Nothing in these Terms
excludes liability that cannot lawfully be excluded, including for death or
personal injury caused by negligence, or for fraud.</p>

<h2>11. Termination</h2>
<p>You may end this agreement at any time by uninstalling the App. We may suspend
or end your licence if you breach these Terms. Sections 4, 9, 10 and 12 survive
termination.</p>

<h2>12. Governing law</h2>
<p>These Terms are governed by the laws of India. The courts at Patna, Bihar,
India have exclusive jurisdiction over any dispute, without prejudice to any
mandatory consumer-protection rights you have in your country of residence.</p>

<h2>13. Relationship with Google Play</h2>
<p>The App is distributed through Google Play. Your use of Google Play is also
subject to Google's own terms. Google is not a party to these Terms and is not
responsible for the App, its content or any support for it.</p>

<h2>14. Changes to these Terms</h2>
<p>We may revise these Terms. The current version always appears on this page with
its date. Continuing to use the App after a change means you accept the revised
Terms.</p>

${contact}
</div>`,
};

/* ───────────────────────── Terms of Use ───────────────────────── */
pages['terms-of-use.html'] = {
  title: 'Terms of Use',
  description:
    'Practical rules for playing Arrow Puzzle Brainly and using this website — acceptable use, fair play and content.',
  body: `
<h1>Terms of Use</h1>
<p class="updated">Last updated: ${UPDATED}</p>

<div class="card">
<p>This page sets out the practical, day-to-day rules for using ${APP} and this
website. It sits alongside the
<a href="terms-and-conditions.html">Terms and Conditions</a>, which is the full
legal agreement. Where the two differ, the Terms and Conditions prevail.</p>

<h2>1. Acceptable use</h2>
<p>Use the game as it is meant to be used: to play puzzles. Do not use it to
break the law, to harm anyone, or to interfere with the service other people
receive.</p>

<h2>2. Fair play</h2>
<ul>
<li>Do not use modified versions of the App, cheat tools, memory editors, macros or bots.</li>
<li>Do not attempt to unlock levels, hints or hearts other than by playing or by watching a rewarded video you genuinely chose to watch.</li>
<li>Do not automate, fake or repeatedly trigger ad views. Doing so breaches the advertising provider's policies and may get the App removed — which ends the game for everyone.</li>
</ul>

<h2>3. Your device and connection</h2>
<p>You are responsible for your own device, its settings, and any mobile data
charges incurred while ads are loaded. The puzzles themselves need no connection;
you can play the entire game in aeroplane mode.</p>

<h2>4. Health and comfort</h2>
<p>Take a break every so often. If you experience eye strain, headaches or
discomfort while playing, stop and rest. If you are sensitive to motion or
flashing effects, turn off <em>Animation &amp; effects</em> in the game's
Settings.</p>

<h2>5. This website</h2>
<p>You may read, print and share links to these pages freely. Do not copy the
pages wholesale onto another site, present them as your own, or use them to
imply that we endorse another product.</p>

<h2>6. Accuracy</h2>
<p>We try to keep everything here correct and current, but we do not guarantee
that every page is free of errors or fully up to date at all times. Screenshots
are illustrative and the game's appearance may change between versions.</p>

<h2>7. Third-party links</h2>
<p>Some pages link to third-party sites such as Google, GitHub and LinkedIn. We
do not control those sites and are not responsible for their content or their
privacy practices.</p>

<h2>8. Reporting a problem</h2>
<p>If something in the game is broken, unfair or looks like a bug, tell us on the
<a href="support.html">support page</a>. Reports genuinely do change the game —
difficulty and touch handling are tuned from what players report.</p>

<h2>9. Suspension</h2>
<p>We may withdraw your licence to use the App if you break these rules,
particularly the fair-play rules in section 2.</p>

${contact}
</div>`,
};

/* ───────────────────────── Refunds ───────────────────────── */
pages['refund-policy.html'] = {
  title: 'Refund Policy',
  description:
    'Refund Policy for Arrow Puzzle Brainly — the game is free, and how refunds work for any future purchase through Google Play.',
  body: `
<h1>Refund Policy</h1>
<p class="updated">Last updated: ${UPDATED}</p>

<div class="card">
<div class="note"><strong>${APP} is free to download and free to play.</strong>
As of ${UPDATED} the App contains <strong>no in-app purchases and no
subscriptions</strong>, so there is nothing to refund. This policy explains what
will happen if paid items are added in a future version.</p></div>

<h2>1. Free today</h2>
<p>Every one of the 655 levels, all four themes, and every feature in the game is
available at no cost. The App is funded by advertising, described in the
<a href="earn-money.html">Rewards &amp; Earnings Policy</a>. We will never charge
you without you explicitly choosing to buy something.</p>

<h2>2. If we add purchases later</h2>
<p>A future version may offer optional paid items, most likely a one-time
"Remove Ads" purchase. If that happens:</p>
<ul>
<li>All purchases are processed by <strong>Google Play</strong>. We never see or store your card, UPI or bank details.</li>
<li>Prices shown in the App include applicable taxes where Google Play displays them that way.</li>
<li>Purchases unlock immediately and are tied to the Google account that bought them.</li>
</ul>

<h2>3. How to request a refund</h2>
<p>Because Google Play is the seller of record, refunds go through Google:</p>
<ol>
<li><strong>Within 48 hours of purchase</strong> — request it directly at
<a href="https://play.google.com/store/account/orderhistory" rel="noopener">play.google.com/store/account/orderhistory</a>,
or in the Play Store app under <em>Payments &amp; subscriptions → Budget &amp; history</em>.
Google usually processes these automatically.</li>
<li><strong>After 48 hours</strong> — write to <a href="mailto:${EMAIL}">${EMAIL}</a>
with your order number (it starts with <code>GPA.</code>), the date, and what went
wrong. We will review it and, where the request is reasonable, ask Google to
refund it.</li>
</ol>
<p>Refunds are returned to your original payment method. Google's timings apply —
usually a few business days, sometimes up to two weeks for bank transfers.</p>

<h2>4. When we will refund</h2>
<table>
<tr><th>Situation</th><th>Outcome</th></tr>
<tr><td>You were charged twice for the same item</td><td>Refunded</td></tr>
<tr><td>You paid but the item never unlocked, and a reinstall did not fix it</td><td>Refunded</td></tr>
<tr><td>A bug in our App made a paid feature unusable and we cannot fix it promptly</td><td>Refunded</td></tr>
<tr><td>An unauthorised purchase was made on your account (report promptly)</td><td>Referred to Google, supported by us</td></tr>
<tr><td>You changed your mind within 48 hours</td><td>Handled by Google's standard process</td></tr>
</table>

<h2>5. When we normally cannot refund</h2>
<ul>
<li>Virtual items such as hints or hearts that have already been used up.</li>
<li>Requests made long after the purchase where the item worked as described.</li>
<li>Progress lost because the App was uninstalled or its data cleared — progress is stored only on your device and cannot be recovered.</li>
<li>Dissatisfaction with difficulty, ad frequency or the look of the game, where the item purchased worked as described. Tell us anyway — that feedback shapes updates.</li>
</ul>

<h2>6. Your statutory rights</h2>
<p>Nothing here limits the consumer rights you have under the law of your country,
including any statutory right to cancel a digital purchase.</p>

${contact}
</div>`,
};

/* ───────────────────────── Earn money / rewards ───────────────────────── */
pages['earn-money.html'] = {
  title: 'Rewards and Earnings Policy',
  description:
    'What rewarded ads in Arrow Puzzle Brainly give you — in-game hints and hearts only. The game pays no cash and requires no payment.',
  body: `
<h1>Rewards &amp; Earnings Policy</h1>
<p class="updated">Last updated: ${UPDATED}</p>

<div class="card">
<div class="note warn"><strong>Please read this first.</strong> ${APP} is a
puzzle game, not an earning app. Watching ads or completing levels earns you
<strong>in-game hints and hearts only</strong>. The game does
<strong>not</strong> pay cash, wallet balance, gift cards, crypto or any real
money, and it never asks you to pay or deposit anything.</div>

<h2>1. What you can earn inside the game</h2>
<table>
<tr><th>Reward</th><th>How you get it</th><th>What it does</th></tr>
<tr><td>5 hints</td><td>Given once, when you first install</td><td>Highlights an arrow that can escape right now</td></tr>
<tr><td>1 hint</td><td>Every 5 levels you clear</td><td>Same as above</td></tr>
<tr><td>3 hints</td><td>Optional: watch one rewarded video</td><td>Same as above</td></tr>
<tr><td>1 heart</td><td>Optional: watch one rewarded video after running out</td><td>Lets you continue the current level</td></tr>
<tr><td>Stars</td><td>Finish a level with hearts remaining</td><td>A score on the level map — nothing more</td></tr>
</table>

<h2>2. These rewards have no monetary value</h2>
<p>Hints, hearts and stars are virtual items. They cannot be withdrawn,
transferred to another player, sold, exchanged for money or converted into
anything outside the game. They exist only in your installation and disappear if
you uninstall the App. See section 6 of the
<a href="terms-and-conditions.html">Terms and Conditions</a>.</p>

<h2>3. Rewarded ads are always your choice</h2>
<p>A rewarded video is only ever offered — never forced. You will see the offer in
exactly two places: when you tap the hint button with no hints left, and when you
run out of hearts mid-level. You can always decline and simply retry the level
instead. Declining costs you nothing and never blocks progress; every level in the
game can be completed without a single hint.</p>

<h2>4. How we earn</h2>
<p>We are paid by Google AdMob for ads displayed in the App. That is the only way
the game makes money today. We deliberately keep ads rare: at most one full-screen
ad after every fourth completed level, never more than one in any two-minute
period, and never during a puzzle. We would rather you keep playing than squeeze
out one extra impression.</p>

<h2>5. Fair use of rewards</h2>
<p>Do not attempt to farm rewards through automation, emulators, modified builds,
VPN-based ad manipulation or repeated fake views. This breaches the
<a href="terms-of-use.html">Terms of Use</a> and Google's advertising policies,
and it puts the whole app at risk of removal.</p>

<h2>6. Beware of scams</h2>
<p>We will never ask you to pay a fee, share an OTP, provide bank or UPI details,
or join an external group to "unlock earnings" from this game. Any website,
video, message or app claiming that ${APP} pays real money, or offering paid
hints, is not us. If you see one, please report it to
<a href="mailto:${EMAIL}">${EMAIL}</a>.</p>

<h2>7. Changes to rewards</h2>
<p>Reward amounts and how often they are given may change as we balance the game.
Any change applies from the version in which it ships; rewards already in your
balance are not taken away by an update.</p>

${contact}
</div>`,
};

/* ───────────────────────── Support ───────────────────────── */
pages['support.html'] = {
  title: 'Support',
  description:
    'Support for Arrow Puzzle Brainly — report a bug, ask a question or send feedback.',
  body: `
<h1>Support</h1>
<p class="updated">We read every message</p>

<div class="card">
<h2>Contact</h2>
<p>Email <a href="mailto:${EMAIL}">${EMAIL}</a>. We reply within 7 working days,
usually sooner.</p>
<a class="btn" href="mailto:${EMAIL}?subject=${encodeURIComponent(APP + ' — support')}">Email support</a>

<h2>Before you write</h2>
<p>These cover most questions:</p>

<h3>My progress disappeared</h3>
<p>Progress is stored on your device only — there is no cloud save. Uninstalling
the App, clearing its data, or moving to a new phone will reset it, and we cannot
restore it from our side.</p>

<h3>A level looks impossible</h3>
<p>It isn't. Every level is generated so that a full solution exists, and removing
an arrow can only free other arrows — you can never trap yourself. Look for an
arrow whose entire path to the edge of the board is empty, and use a hint if you
are stuck.</p>

<h3>The game is too hard, or too easy</h3>
<p>Tell us which level number and what felt wrong. Difficulty is tuned from exactly
this kind of report.</p>

<h3>Too many ads / an ad broke something</h3>
<p>Ads should appear at most once every four completed levels and never during a
puzzle. If you see more than that, send us your device model and Android version —
that is a bug, not the design.</p>

<h3>A tap did not register</h3>
<p>The board is fixed in place and every cell is a large tap target, so this should
not happen. If it does, tell us the device model and, if you can, the level number.</p>

<h3>Turning off sound, vibration or animation</h3>
<p>All three are switches in <em>Settings</em> inside the game.</p>

<h2>What to include in a bug report</h2>
<ul>
<li>Your phone model and Android version</li>
<li>The app version (shown at the bottom of the Settings screen)</li>
<li>The level number, if it is about a specific puzzle</li>
<li>What you expected to happen, and what happened instead</li>
<li>A screenshot or screen recording, if you have one</li>
</ul>

${contact}
</div>`,
};

/* ───────────────────────── write ───────────────────────── */
for (const [file, page] of Object.entries(pages)) {
  fs.writeFileSync(
    path.join(OUT, file),
    shell(file, page.title, page.body, page.description)
  );
  console.log('wrote', file);
}

// Tell GitHub Pages not to run Jekyll over the files.
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log('wrote .nojekyll');
