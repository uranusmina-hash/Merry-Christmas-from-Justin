# 🎄 Merry Christmas from Justin!

A small, festive one-page site for collecting Christmas gifts via GCash. Visitors scan the QR code, enjoy the falling snow, and play some Christmas music.

## Features

- 📱 Mobile-first, responsive glassmorphism card over a Christmas background
- ❄️ Animated snowfall (50 flakes, `requestAnimationFrame`)
- 🎵 Play/Pause Christmas music button (looping audio)
- 🔗 Open Graph and Twitter meta tags for nice link previews in Messenger and social apps
- ♿ Respects `prefers-reduced-motion` (snow is disabled for users who opt out)

## Project structure

```
.
├── index.html
├── style.css
├── script.js
├── images/
│   ├── christmas-bg.jpg
│   ├── gcash-qr.jpg
│   └── snowman.png
└── audio/
    └── christmas.mp3
```

## Run locally

No build step required. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deployment

Deploy the project folder to any static hosting service.

## Customizing

- **Name and text:** edit `index.html`
- **QR code:** replace `images/gcash-qr.jpg`
- **Colors:** change the CSS variables at the top of `style.css`
- **Snow amount:** change `snowCount` in `script.js`
- **Song:** replace `audio/christmas.mp3`

## Notes

- Browsers block autoplay, so music starts only after the visitor taps the button.
- Update the `og:image` and `og:url` meta tags in `index.html` to match your own hosting URL.

## Credits

Built with plain HTML, CSS, and JavaScript. Fonts: Mountains of Christmas and Nunito (Google Fonts).
