# Japan, Slowly

A personal, single-page family trip itinerary for a 12-day Japan trip covering Tokyo, Mount Fuji, Kyoto and Osaka, paced for travelling with a baby. It was built for private use by the author's family rather than as a general-purpose product.

## Features

Pages are switched by hash route (`router.js`): Home, Plan, Places, Guide, Cards and Money.

- Day-by-day itinerary with a day picker and a print button.
- A "today" section driven by the trip dates (`today.js`).
- Interactive maps (Leaflet with MapLibre GL) using pre-generated coordinates (`geo.js`), walking routes (`routes.js`) and place photos from Wikimedia Commons (`photos.js`).
- Pocket travel guide and pre-departure notes.
- Cards for stays and other details; edits are saved in `localStorage`.
- Expense tracker in yen with a configurable exchange rate and per-category budget, saved in `localStorage`.
- Installable and offline-capable as a PWA (web manifest and service worker `sw.js`).

## Tech stack

Plain HTML, CSS and JavaScript with no build step or package manager. Leaflet and MapLibre GL are loaded from unpkg, and fonts from Google Fonts.

## Running locally

Service workers need HTTP, so serve the folder with any static server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. No environment variables are used.

## Project structure

```
index.html          all pages and markup
script.js, guide.js itinerary and guide behaviour
router.js           hash-based page switching
today.js            "today" section
cards.js            editable cards
expenses.js         expense tracker
map.js, geo.js, routes.js, photos.js   maps and map data
sw.js, pwa.js, manifest.webmanifest, icons/   PWA support
*.css               styles
404.html            not-found page
```
