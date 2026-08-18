# Perks: publik one-pager

Statisk marknadssajt för **Perks**, en white-label-marknadsplats för slutna målgrupper.
Lansering 1 oktober 2026. All copy är på svenska och kommer verbatim från kundens underlag.

**Live-preview:** https://shinyhappydaniel.github.io/Perks/

## Innehåll

```
index.html          Hela sidan (semantisk HTML5, lang="sv")
css/tokens.css      Designtokens: färger, typsnitt, radier, responsiva mått
css/style.css       All layout och komponentstil, mobile-first
js/main.js          Nedräkning, mobilmeny, formulärvalidering (vanilla, inga beroenden)
assets/
  img/              Responsiva bildset, WebP + JPEG-fallback, 3 storlekar per bild
  favicon.svg       Favicon (från Perks brand guidelines)
  apple-touch-icon.png
  og-image.jpg      1200×630 för delning i sociala medier
  perks-logo*.svg   Logotyp-SVG:er (används inte i sidan, se nedan)
HANDOFF.md          Instruktioner till utvecklare inför produktionssättning
```

## Köra lokalt

Ingen byggprocess. Öppna `index.html` direkt, eller:

```
python3 -m http.server 8000
```

## Teknik

- Ren HTML/CSS/JS, inga ramverk, inga byggsteg, inga npm-beroenden.
- Typsnitt: Bricolage Grotesque, Geist, Geist Mono via Google Fonts (`display=swap`).
- Logotypen renderas som live-text enligt brand guidelines (Bricolage 600, ss01, coral-punkt),
  vilket ger skarp återgivning i alla storlekar. SVG-varianterna ligger med i `assets/`
  om ni hellre vill använda dem.
- En brytpunkt: **768px** (mobil ≤768, desktop >768). Alla värden som skiljer sig
  mellan lägena bor som CSS-variabler i `css/tokens.css`.
- Bilder: `<picture>` med WebP + JPEG, `srcset`/`sizes`, `loading="lazy"` under folden,
  `fetchpriority="high"` på hero. Explicit `width`/`height` mot layoutskift.
- Tillgänglighet: skip-link, `aria-expanded` på menyknapp, `aria-live` på formulärstatus,
  synliga fokusringar, `prefers-reduced-motion` respekteras.
- `<meta name="robots" content="noindex">` ligger i `<head>` medan sajten bara är preview.
  **Ta bort vid skarp lansering.**

## Design

Designkälla: `design_handoff_perks_onepager/` (Claude Design, augusti 2026).
Brand: `perks-brand-guidelines/`.

Sektionsrytm uppifrån: ink-bar → bone → ink (stats) → vit → ink (nedräkning) → bone →
sand → bone → coral-strip → ink (kontakt) → ink (footer).

## Öppna punkter (beslut för kund/utvecklare)

Se `HANDOFF.md`.
