# Budapest 2026 - Digitales Polaroid-Fotoalbum

Ein interaktives digitales Fotoalbum im Polaroid-Stil für eure Budapest-Reise vom 30.01. - 01.02.2026.

## 🚀 Installation & Start

```bash
# Dependencies installieren (falls noch nicht geschehen)
npm install

# Development Server starten
npm run dev
```

Die App läuft dann unter: [http://localhost:3000](http://localhost:3000)

## 📸 Features

- **Ladebildschirm**: "Packe Koffer..." Animation mit Fortschrittsbalken
- **Album-Cover**: Geschlossenes Album mit Titel, das sich per Klick öffnet
- **Polaroid-Fotos**: 11 Budapest-Fotos mit authentischem Polaroid-Look
  - Zufällige Rotation (-5° bis +5°)
  - Klebeband-Overlays an den Ecken
  - Hover-Effekt mit Lift-Animation
  - Handgeschriebene Bildunterschriften
- **Doppelseiten-Layout**: Desktop zeigt 2 Seiten gleichzeitig
- **Navigation**:
  - **Desktop**: Pfeiltasten oder Navigations-Buttons
  - **Mobile/Tablet**: Swipe-Gesten (Links/Rechts)
  - **Beide**: Klickbare Pfeile unten
- **Page-Turn Animation**: Realistische 3D-Umblätter-Animation
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile

## 🎨 Anpassungen

### Sprüche und Bildunterschriften ändern

Öffne die Datei `src/data/pages.js` und ersetze die Placeholder-Texte:

```javascript
{
  image: '/src/assets/1.png',
  caption: '[Spruch: Hier deinen eigenen Text einfügen]',  // ← Hier ändern
  // ...
}
```

Oder die Texte auf den Seiten:

```javascript
text: 'Dein persönlicher Spruch hier',  // ← Hier ändern
```

### Layout-Positionen anpassen

In `pages.js` kannst du die Position jedes Polaroids ändern:

```javascript
position: { top: '15%', left: '15%' }  // ← Anpassen nach Wunsch
```

### Größen und Stile

Verfügbare Polaroid-Größen:
- `size: 'small'` - Kleine Polaroids
- `size: 'medium'` - Mittlere Polaroids (Standard)
- `size: 'large'` - Große Polaroids

Klebeband-Varianten:
- `tapeVariant: 1` - Gerade
- `tapeVariant: 2` - Leicht nach links geneigt
- `tapeVariant: 3` - Leicht nach rechts geneigt

### Farben ändern

Hauptfarben befinden sich in:
- `src/index.css` - Globale Styles
- Handschrift-Farbe (Kugelschreiber): `#1a237e` (Dunkelblau)
- Papier-Farbe: `#f4e8d8` (Cremefarbenes Papier)
- Holz-Hintergrund: `#2c1810` (Dunkles Rustikal-Braun)

## 📁 Projekt-Struktur

```
Album/
├── src/
│   ├── assets/           # Deine 11 Budapest-Fotos
│   ├── components/       # React-Komponenten
│   │   ├── LoadingScreen.jsx/css
│   │   ├── AlbumCover.jsx/css
│   │   ├── AlbumPages.jsx/css
│   │   ├── Polaroid.jsx/css
│   │   └── PageNavigation.jsx/css
│   ├── data/
│   │   └── pages.js      # Seiten-Konfiguration (HIER ÄNDERN!)
│   ├── textures/         # SVG-Texturen (Holz, Papier, Klebeband)
│   ├── App.jsx           # Haupt-App-Komponente
│   └── main.jsx          # React-Entry-Point
├── package.json
└── index.html
```

## 🎯 Wichtige Dateien zum Anpassen

1. **`src/data/pages.js`** - Alle Inhalte, Sprüche, Positionen
2. **`src/components/*.css`** - Styling und Farben
3. **`src/assets/`** - Deine Fotos (bereits eingefügt)

## 🖼️ Neue Fotos hinzufügen

1. Foto in `src/assets/` ablegen
2. In `src/data/pages.js` hinzufügen:

```javascript
{
  polaroids: [
    {
      image: '/src/assets/dein-neues-foto.png',
      caption: 'Dein Spruch hier',
      rotation: 3,
      size: 'medium',
      tapeVariant: 1,
      position: { top: '20%', left: '15%' }
    }
  ]
}
```

## 🚢 Production Build

```bash
# Production Build erstellen
npm run build

# Preview des Builds
npm run preview
```

Der Build wird im `dist/` Ordner erstellt und kann auf jeden Webserver deployed werden.

## 💡 Tipps

- **Sprüche-Ideen**: Siehe die Original-Konzept-Notizen für Romantische, Humorvolle und Persönliche Sprüche
- **Performance**: Alle Fotos werden lazy-loaded für schnellere Ladezeiten
- **Mobile**: Swipe-Gesten funktionieren nur auf Touch-Devices oder mit Trackpad
- **Keyboard**: Pfeiltasten ← und → zum schnellen Durchblättern

## 🎨 Personalisierung für Marie

Die letzte Seite enthält bereits:
- Reisedatum: 30.01. - 01.02.2026
- Name: Für Marie (kann in `pages.js` angepasst werden)

## ❓ Fragen oder Probleme?

Falls etwas nicht funktioniert:
1. Server neu starten: `Ctrl+C` dann `npm run dev`
2. Dependencies neu installieren: `rm -rf node_modules && npm install`
3. Browser-Cache leeren (Strg+Shift+R)

Viel Spaß mit eurem digitalen Fotoalbum! 📸❤️
