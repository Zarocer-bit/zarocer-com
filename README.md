# Zarocer

Independent personal website for **Zarocer — Felipe Antonio Toledo Alcalde**. This checkout is separate from the browser game portals. Synced `sources/` were not modified.

## Stack and routes

TypeScript static page generator, semantic HTML, custom CSS, small progressive JavaScript; no frontend framework, hydration, database, analytics, or login. English is `/`; Spanish is `/es/`. Routes: home, games, about, portfolio, press, contact, privacy draft, terms draft; 10 game detail pages and 10 prepared game press pages per language. Empty game press pages and legal drafts are `noindex` and absent from the sitemap.

## Local use

Node 24+ and pnpm. `pnpm install`, `pnpm typecheck`, `pnpm lint`, `pnpm build`, `pnpm qa`, `pnpm dev`. Local preview: http://127.0.0.1:43170. Vercel: use Other framework, build `node --experimental-strip-types scripts/build.ts`, output `dist`, Node 24; remote installation is skipped because the generator uses only Node built-ins. `vercel.json` includes headers and route handling. Built output is disposable. Committed assets make regular builds independent of AI tools.

## Content evidence

The owner supplied identity, areas of work, portal URLs and ten original project names. No synced references, game assets, release evidence, genres, platforms, or public contact were available. `src/projects.ts` therefore uses null status and empty platforms/media/links. Do not convert null into “In Development” or “Released” without evidence. Typographic project cards are labeled title studies. The generated abstract brand artwork is not gameplay. Technical experience is not claimed on the portfolio. No private email or unconfirmed social profile is shown.

When verified facts arrive, update the project data and page generator. Enable `VideoGame` structured data only when public playable evidence and game facts are available. No Article schema is needed until real dated updates exist.

## Pending publication

GitHub browser session is available as Zarocer-bit; Vercel browser session is available. Vercel CLI has no credentials. Automatic approval review blocked transmitting the full name in the GitHub repository form. Publication requires the user's approval of that specific disclosure; do not work around the rejection. No remote repo, Vercel project, or DNS change was performed in this preparation turn. Create `zarocer-com` separately, commit/push, import it into Vercel, verify preview, then connect zarocer.com. Verify HTTPS and production after DNS resolves. Never change the other portals.

## Contact activation

1. Choose public general/press/support addresses and create the mailboxes with the email provider. `contact@zarocer.com`, `press@zarocer.com`, `support@zarocer.com` are only proposed names, not active addresses.
2. Verify receive/reply delivery and provider SPF/DKIM/DMARC settings for zarocer.com only.
3. Set verified public addresses in `src/projects.ts`; update the contact and press templates to show them.
4. If enabling a form, choose its provider/endpoint, domain verification, recipient, server-side credentials in Vercel, anti-spam measures, success/failure states, retention and legal basis. Implement and test real delivery before displaying it as active.
5. Approve final privacy and terms notices. Replace clearly marked drafts only after decisions about hosting logs, jurisdiction, retention, usage permissions and privacy contact.

## SEO and motion

Unique titles/descriptions, canonicals, EN/ES/x-default alternates, Open Graph/X cards including individual title studies, Person/WebSite/WebPage/ProfilePage/BreadcrumbList where appropriate, XML sitemap and robots. All public canonical URLs use https://zarocer.com. When a preview exists, test metadata and sharing assets on the actual domain before production.

Motion: short card lift, progressive reveal, very subtle pointer movement on the hero. Native cursor. No audio. Reduced motion overrides all transitions and transforms. Site content is rendered before JavaScript.

## Assets

Space Grotesk is self-hosted with its OFL license in `public/assets/FONT-LICENSE.txt`. Original abstract artwork was generated with the built-in imagegen tool, then compressed to WebP. Wordmark/mark and sharing cards are deterministic brand typography, not a claimed registered trademark. Press ZIP includes bilingual bios and creator branding, not invented game screenshots.

The exact image brief: wide dark charcoal composition with left-side negative space and a fractured graphite loop on the right, thin amber-white seam light, hard rim light, fine grain, no text/logos/gameplay/characters/purple/particles. Source generator: `scripts/assets.mjs`; regeneration needs `ZAROCER_NODE_PACKAGES` and `ZAROCER_HERO_SOURCE`, while normal builds do not.
