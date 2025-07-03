# We Do Not Come In Peace - Book Website

A stunning, immersive sci-fi book website for "We Do Not Come In Peace: The Oumuamua Protocol". Features a cosmic/alien theme with advanced visual effects including 3D particles, holographic UI elements, and dynamic animations.

## 🚀 Features

- **3D Space Particle System**: Interactive starfield with floating alien probe using Three.js
- **Alien Tech Aesthetics**: Custom CSS with glowing effects, holographic cards, and scanner animations
- **Three-Act Structure**: Immersive sections for each act of the book with unique visual themes
- **Character Gallery**: Interactive holographic cards showcasing the main protagonists
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Built with Astro for blazing-fast static site generation

## 🛸 Tech Stack

- **Astro** - Static site generator
- **React** - For interactive components
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Three.js & React Three Fiber** - 3D graphics
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling

## 📦 Installation

```bash
npm install
```

## 🧑‍💻 Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view in your browser.

## 🏗️ Building

```bash
npm run build
```

## 🌐 Deployment to Cloudflare Pages

### Option 1: Direct Upload
1. Run `npm run build`
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project
4. Upload the `dist` folder
5. Configure custom domain: wedonotcomeinpeace.com

### Option 2: Git Integration
1. Push this repository to GitHub
2. In Cloudflare Pages, connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: None required

### Custom Domain Setup
1. In Cloudflare Pages project settings
2. Go to "Custom domains"
3. Add `wedonotcomeinpeace.com`
4. Follow DNS configuration instructions

## 🎨 Design Elements

- **Color Palette**: Alien green, plasma cyan, warning red, stellar purple
- **Typography**: Orbitron (headers), Space Mono (code/tech), Inter (body)
- **Effects**: Glow effects, holographic overlays, glitch animations, scanner lines
- **3D Elements**: Rotating starfield, animated alien probe

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔧 Configuration

The site URL is configured in `astro.config.mjs`. Update the `site` field if deploying to a different domain.

## 📄 License

© 2024 We Do Not Come In Peace. All rights reserved.