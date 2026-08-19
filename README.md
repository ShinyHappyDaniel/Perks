# Perks: informativ undersida

Statisk, informativ undersida för **Perks**, en white-label-marknadsplats för slutna
målgrupper. Lansering 1 oktober 2026. Sidan är byggd för att monteras in på den kommande
huvudsajten och har därför **ingen egen header, meny eller footer**. All copy är på
svenska och kommer verbatim från kundens underlag.

**Live-preview:** https://shinyhappydaniel.github.io/Perks/

## Innehåll

```
index.html          Hela sidan (semantisk HTML5, lang="sv")
css/tokens.css      Designtokens: färger, typsnitt, radier, responsiva mått
css/style.css       All layout och komponentstil, mobile-first
js/main.js          Formulärvalidering (vanilla, inga beroenden)
assets/
  img/              Responsiva bildset, WebP + JPEG-fallback, 3 storlekar per bild
  favicon.svg       Favicon (från Perks brand guidelines)
  apple-touch-icon.png
  og-image.jpg      1200×630 för delning i sociala medier
  perks-logo*.svg   Logotyp-SVG:er (används inte i sidan, med som brandresurs)
HANDOFF.md          Instruktioner till utvecklare inför integrering
```

## Sidans flöde

Intro (rubrik, lead, foto) → statsband → 01 Om Perks → 02 Lansering → 03 Varför Perks →
04 För partners → 05 Plattformen → coral-strip → 06 Kontakt (e-postformulär).

## Köra lokalt

Ingen byggprocess. Öppna `index.html` direkt, eller:

```
python3 -m http.server 8000
```

## Teknik

- Ren HTML/CSS/JS, inga ramverk, inga byggsteg, inga npm-beroenden.
- Typsnitt: Bricolage Grotesque, Geist, Geist Mono via Google Fonts (`display=swap`).
- En brytpunkt: **768px** (mobil ≤768, desktop >768). Alla värden som skiljer sig
  mellan lägena bor som CSS-variabler i `css/tokens.css`.
- Bilder: `<picture>` med WebP + JPEG, `srcset`/`sizes`, `loading="lazy"` under folden,
  `fetchpriority="high"` på introfotot. Explicit `width`/`height` mot layoutskift.
- Tillgänglighet: `aria-live` på formulärstatus, synliga fokusringar,
  `prefers-reduced-motion` respekteras.
- `<meta name="robots" content="noindex">` ligger i `<head>` medan sidan bara är preview.

## Design

Designkälla: `design_handoff_perks_onepager/` (Claude Design, augusti 2026).
Brand: `perks-brand-guidelines/`. Ursprungsdesignen var en fristående one-pager;
26-08-18 gjordes den om till undersida (announcement-bar, header, nedräkning och
footer togs bort på kundens begäran). Sektionen "02 · Lansering" ligger kvar med
statiskt datum.
