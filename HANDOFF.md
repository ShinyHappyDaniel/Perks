# Perks: överlämning till utvecklare

Detta är sajtens **startsida**, färdig att publiceras. Ren statisk sida utan byggsteg:
kopiera mappens innehåll till webbroten på er host (Netlify, Vercel, Cloudflare Pages,
S3, vanlig webbserver, vad som helst som serverar statiska filer). Klart.

## Checklista före skarp publicering

1. **Ta bort noindex.** I `index.html`, `<head>`:
   ```html
   <meta name="robots" content="noindex">
   ```
   Radera raden, annars indexeras inte sajten.

2. **Domänberoende taggar.** I `<head>`:
   - Byt `og:image` från GitHub Pages-adressen till er domän:
     `https://DIN-DOMÄN/assets/og-image.jpg`
   - Lägg till `<link rel="canonical" href="https://DIN-DOMÄN/">`
   Alla andra sökvägar i sidan är relativa och fungerar oavsett domän eller path.

3. **Koppla kontaktformuläret.** `js/main.js`, sektionen "Kontaktformulär".
   E-posten valideras lokalt och en bekräftelse visas, men inget skickas. Ersätt
   `TODO (produktion)`-raden med anrop till ert API, CRM eller en formulärtjänst
   (Formspree, Netlify Forms, HubSpot etc). Fält: `email`. Copy finns i JS:
   - Fel: "Fyll i en giltig e-postadress."
   - Success: "Tack! Vi hör av oss inom kort."

4. **Byt placeholderfoton.** Bilderna i `assets/img/` är licensierad stockfoto som
   kunden köpt, tänkta som stand-ins. Vid byte: exportera i tre bredder per bild
   (intro: 768/1280/1920, tiles: 700/1200/1600) i WebP + JPEG och behåll filnamnen,
   så behöver ingen kod röras. Tiles beskärs till 8:5, introfotot till 3:2.

5. **Footer, juridik, cookies.** Sidan har ingen footer och inga policylänkar.
   Sidan sätter inga cookies och laddar ingen tracking, så inget samtycke krävs i
   nuläget. Lägger ni till analytics måste samtycke lösas. Behöver ni en footer med
   integritetspolicy och villkor: originaldesignen har en (mörk, logga + länkrad +
   copyright), säg till så levererar vi den.

6. **Fler sidor senare.** Headerns länkar är ankare på startsidan. Bygger ni ut
   sajten med fler sidor: byt `href="#om"` etc. till riktiga URL:er eller `/#om`
   så att länkarna funkar från undersidor.

## Cache

CSS- och JS-länkarna i `index.html` har en versionsstämpel (`?v=260827a`). Bumpa den
varje gång ni ändrar i `css/` eller `js/`, annars kan besökare få ny HTML mot gammal
cachad CSS. Har er host fingerprinting eller egen cache-policy kan ni ta bort
stämplarna och köra på den.

## Designregler att respektera

- Ändra inte copy. Den är slutgiltig från kunden.
- Brytpunkten är **768px**, ingen annan. Alla designvärden bor i `css/tokens.css`.
- Inga hover-zoomar på bilder, inga entrance-animationer, ingen parallax. Enda rörelsen
  är 0.15s färgövergångar.
- Coral (`#f26a4f`) hålls under ~8% av ytan. Enda större coral-ytan är den tunna
  fact-stripen ovanför kontaktsektionen.
- Headern är sticky, 68px hög. Sektionerna har `scroll-margin-top: 68px` så rubriker
  inte hamnar under den vid ankarnavigering. Ändrar ni headerhöjden: ändra båda.

## Om ni portar till ramverk

Vill ni ha sidan i Astro, Next.js eller liknande: behåll `css/tokens.css` orörd,
dela upp `index.html` i komponenter per sektion och flytta över JS:en i `main.js`
(menyn och formuläret) till motsvarande komponent. Inga andra beroenden finns.

## Fonter

Google Fonts, laddas i `<head>`:
```
Bricolage Grotesque  500 / 600 / 800   (rubriker och logga, alltid font-feature-settings: "ss01")
Geist                400 / 500          (brödtext, knappar, meny)
Geist Mono           400 / 600          (etiketter)
```
Vill ni self-hosta: ladda ner samma vikter, lägg i `assets/fonts/` och byt
Google Fonts-länken mot `@font-face`-regler. Inget annat behöver ändras.

## Test

Verifierat i Chrome på 375, 768, 1280 och 1440 px: ingen horisontell scroll,
alla bilder laddar rätt srcset-kandidat, inga konsolfel, mobilmenyn öppnar/stänger
(knapp, länkval, Escape, klick utanför), ankarlänkar landar under headern,
formuläret fungerar.

## Kontakt

Daniel Olsén, Shiny Happy People
daniel@shinyhappypeople.se · +46 709 56 95 94
