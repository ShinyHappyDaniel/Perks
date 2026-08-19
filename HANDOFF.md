# Perks: överlämning till utvecklare

Detta är en **informativ undersida** som ska in på Perks kommande huvudsajt. Den har
medvetet ingen egen header, meny eller footer: huvudsajten står för sidramen. Repot är
samtidigt en komplett statisk sida så att den kan förhandsgranskas fristående.

## Två sätt att använda den

**A. Montera in i huvudsajten (tänkt väg).**
Lyft allt innehåll inuti `<main>` i `index.html` och lägg det mellan er header och
footer. Ta med `css/tokens.css`, `css/style.css`, `js/main.js` och `assets/img/`.
Klassnamnen är generiska (`.btn`, `.section`, `.hero` m.fl.), så om er sajt har egen
CSS: scopa vår, t.ex. genom att wrappa innehållet i `<div class="perks-info">` och
prefixa selektorerna, eller kör CSS:en genom er modulhantering.

**B. Hosta som egen statisk sida** på en path under er domän (t.ex. `/partners`).
Kopiera hela mappen till webbroten. Inget byggsteg.

## Checklista före skarp lansering

1. **Formuläret.** `js/main.js`: e-posten valideras lokalt och en bekräftelse visas,
   men inget skickas. Ersätt `TODO (produktion)`-raden med anrop till ert API, CRM
   eller en formulärtjänst. Fält: `email`. Copy finns i JS:
   - Fel: "Fyll i en giltig e-postadress."
   - Success: "Tack! Vi hör av oss inom kort."

2. **Head-taggar.** Vid inbakning (väg A) styr huvudsajtens `<head>`; ignorera vår.
   Vid egen sida (väg B): ta bort `<meta name="robots" content="noindex">`, byt
   `og:image`-URL:en till er domän och lägg till canonical.

3. **Byt placeholderfoton.** Bilderna i `assets/img/` är licensierad stockfoto som
   kunden köpt, tänkta som stand-ins. Vid byte: exportera i tre bredder per bild
   (intro: 768/1280/1920, tiles: 700/1200/1600) i WebP + JPEG och behåll filnamnen,
   så behöver ingen kod röras. Tiles beskärs till 8:5, introfotot till 3:2.

4. **Ankare och länkar.** Sektionerna har id `om`, `varfor`, `partners`, `plattform`,
   `kontakt`. CTA-knapparna pekar internt på `#kontakt` och `#plattform`. Vill ni
   länka hit från huvudmenyn funkar djuplänkar till alla sex sektioner. Om er header
   är sticky: sätt `scroll-margin-top` på sektionerna motsvarande headerhöjden.

5. **Juridik / cookies.** Sidan sätter inga cookies och laddar ingen tracking.
   Samtycke och policylänkar hanteras av huvudsajten.

## Designregler att respektera

- Ändra inte copy. Den är slutgiltig från kunden.
- Brytpunkten är **768px**, ingen annan. Alla designvärden bor i `css/tokens.css`.
- Inga hover-zoomar på bilder, inga entrance-animationer, ingen parallax. Enda rörelsen
  är 0.15s färgövergångar.
- Coral (`#f26a4f`) hålls under ~8% av ytan. Enda större coral-ytan är den tunna
  fact-stripen ovanför kontaktsektionen.

## Fonter

Google Fonts, laddas i `<head>`:
```
Bricolage Grotesque  500 / 600 / 800   (rubriker, alltid font-feature-settings: "ss01")
Geist                400 / 500          (brödtext, knappar)
Geist Mono           400 / 600          (etiketter)
```
Vill ni self-hosta: ladda ner samma vikter, lägg i `assets/fonts/` och byt
Google Fonts-länken mot `@font-face`-regler. Inget annat behöver ändras.

## Test

Verifierat i Chrome på 375, 768, 1280 och 1440 px: ingen horisontell scroll,
alla bilder laddar rätt srcset-kandidat, inga konsolfel, formuläret fungerar.

## Kontakt

Daniel Olsén, Shiny Happy People
daniel@shinyhappypeople.se · +46 709 56 95 94
