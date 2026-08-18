# Perks: överlämning till utvecklare

Detta är en färdig, statisk sajt. Den kan läggas upp på vilken statisk host som helst
(Netlify, Vercel, Cloudflare Pages, S3, vanlig webbserver) utan byggsteg. Kopiera
mappens innehåll till webbroten. Klart.

## Checklista före skarp lansering

1. **Ta bort noindex.** I `index.html`, `<head>`:
   ```html
   <meta name="robots" content="noindex">
   ```
   Radera raden. Annars indexeras inte sajten.

2. **Uppdatera OG-bildens URL.** I `<head>` pekar `og:image` på GitHub Pages-adressen.
   Byt till er domän:
   ```html
   <meta property="og:image" content="https://DIN-DOMÄN/assets/og-image.jpg">
   ```
   Lägg gärna till `<link rel="canonical" href="https://DIN-DOMÄN/">`.

3. **Koppla kontaktformuläret.** `js/main.js`, sektionen "Kontaktformulär".
   Just nu valideras e-posten lokalt och en bekräftelse visas, men inget skickas.
   Ersätt `TODO (produktion)`-raden med anrop till ert API, CRM eller en formulärtjänst
   (Formspree, Netlify Forms, HubSpot etc). Fält: `email`. Success- och error-copy
   finns redan i JS och kan justeras:
   - Fel: "Fyll i en giltig e-postadress."
   - Success: "Tack! Vi hör av oss inom kort."

4. **Byt placeholderfoton.** Bilderna i `assets/img/` är licensierad stockfoto som
   kunden köpt, tänkta som stand-ins. Vid byte: exportera i tre bredder per bild
   (hero: 768/1280/1920, tiles: 700/1200/1600) i WebP + JPEG och behåll filnamnen,
   så behöver ingen kod röras. Tiles beskärs till 8:5, hero till 3:2.

5. **Juridik / cookies.** Footern saknar länkar till integritetspolicy och villkor.
   Inget cookie-samtycke behövs i nuläget: sajten sätter inga cookies och laddar
   ingen tracking. Lägger ni till analytics måste samtycke lösas.

6. **Nedräkningens måltid.** `js/main.js`, rad `LAUNCH`:
   `2026-10-01T08:00:00+02:00`. Ändra där om lanseringstiden flyttas.

## Om ni portar till ramverk

Handoff-specen rekommenderar Astro eller Next.js static export om sajten ska in i en
befintlig kodbas. Då gäller:

- Behåll `css/tokens.css` som den är. Alla designvärden bor där.
- Brytpunkten är **768px**, ingen annan.
- Ändra inte copy. Den är slutgiltig från kunden.
- Inga hover-zoomar på bilder, inga entrance-animationer, ingen parallax. Enda rörelsen
  är 0.15s färgövergångar och nedräkningens sekundtick.
- Coral (`#f26a4f`) ska hållas under ~8% av ytan. Enda större coral-ytan är den tunna
  fact-stripen ovanför kontaktsektionen.

## Fonter

Google Fonts, laddas i `<head>`:
```
Bricolage Grotesque  500 / 600 / 800   (rubriker, alltid font-feature-settings: "ss01")
Geist                400 / 500          (brödtext, knappar)
Geist Mono           400 / 600          (etiketter, nedräkning)
```
Vill ni self-hosta: ladda ner samma vikter, lägg i `assets/fonts/` och byt
Google Fonts-länken mot `@font-face`-regler. Inget annat behöver ändras.

## Test

Verifierat i Chrome på 375, 768, 1280 och 1440 px: ingen horisontell scroll,
alla bilder laddar rätt srcset-kandidat, inga konsolfel, mobilmeny och formulär fungerar.

## Kontakt

Daniel Olsén, Shiny Happy People
daniel@shinyhappypeople.se · +46 709 56 95 94
