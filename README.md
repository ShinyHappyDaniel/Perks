# Perks: startsida

Statisk startsida för **Perks**, en white-label-marknadsplats för slutna målgrupper.
Lansering 1 oktober 2026. All copy är på svenska och kommer verbatim från kundens underlag.

**Live-preview:** https://shinyhappydaniel.github.io/Perks/

## Innehåll

```
index.html          Hela sidan (semantisk HTML5, lang="sv")
css/tokens.css      Designtokens: färger, typsnitt, radier, responsiva mått
css/style.css       All layout och komponentstil, mobile-first
js/main.js          Mobilmeny + formulärvalidering (vanilla, inga beroenden)
assets/
  img/              Responsiva bildset, WebP + JPEG-fallback, 3 storlekar per bild
  favicon.svg       Favicon (från Perks brand guidelines)
  apple-touch-icon.png
  og-image.jpg      1200×630 för delning i sociala medier
  perks-logo*.svg   Logotyp-SVG:er (används inte i sidan, med som brandresurs)
HANDOFF.md          Instruktioner till utvecklare inför publicering
```

## Sidans flöde

Sticky header (logga, ankarlänkar) → intro (rubrik, lead, foto) → statsband →
01 Om Perks → 02 Varför Perks → 03 För partners → 04 Plattformen → 05 Kontakt
(e-postformulär).

Headerns länkar går till ankarna `#om`, `#varfor`, `#partners`, `#plattform`.
Hero-knappen "Bli partner" går till `#kontakt`. På mobil ersätts menyn av en
hamburgerknapp som fäller ut samma länkar.

## Köra lokalt

Ingen byggprocess. Öppna `index.html` direkt, eller:

```
python3 -m http.server 8000
```

## Teknik

- Ren HTML/CSS/JS, inga ramverk, inga byggsteg, inga npm-beroenden.
- Typsnitt: Bricolage Grotesque, Geist, Geist Mono via Google Fonts (`display=swap`).
- Logotypen renderas som live-text enligt brand guidelines (Bricolage 600, ss01,
  coral-punkt). SVG-varianterna ligger i `assets/` om ni hellre vill använda dem.
- En brytpunkt: **768px** (mobil ≤768, desktop >768). Alla värden som skiljer sig
  mellan lägena bor som CSS-variabler i `css/tokens.css`.
- Bilder: `<picture>` med WebP + JPEG, `srcset`/`sizes`, `loading="lazy"` under folden,
  `fetchpriority="high"` på introfotot. Explicit `width`/`height` mot layoutskift.
- Tillgänglighet: skip-link, `aria-expanded`/`aria-controls` på menyknappen, Escape och
  klick utanför stänger menyn, `aria-live` på formulärstatus, synliga fokusringar,
  `prefers-reduced-motion` respekteras. `scroll-margin-top` så ankare inte hamnar
  under den sticky headern.
- `<meta name="robots" content="noindex">` ligger i `<head>` medan sidan bara är preview.
  **Ta bort vid skarp publicering.**
- CSS/JS-länkarna har versionsstämpel (`?v=…`). Bumpa vid varje ändring i `css/` eller `js/`
  så att GitHub Pages cache (10 min) inte serverar gamla filer mot ny HTML.

## Design

Designkälla: `design_handoff_perks_onepager/` (Claude Design, augusti 2026).
Brand: `perks-brand-guidelines/`. Jämfört med ursprungsdesignen är announcement-baren,
nedräkningen, footern och header-CTA:n borttagna på kundens begäran. 26-08-27 ströks
även redundant copy (sektionen Lansering, coral-stripen, hero-eyebrow, dubblerade
ingresser, två av fem partnerpunkter). Versionen innan strykningen finns som git-tagg
`full-copy-26-08-27`.
