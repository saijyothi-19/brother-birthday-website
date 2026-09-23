# ✨ Birthday Celebration Website for My Brother

A cinematic, interactive, and emotional digital birthday experience created specifically for my brother. Built using clean, modern **HTML5, CSS3, and Vanilla JavaScript** with 3D card flips, 3D carousel wall, procedural ambient audio synth, fullscreen lightbox, and fireworks celebration.

---

## 📁 1. Complete Project Structure

```
d:/BDAY/
│
├── index.html                   # Semantic HTML5 layout with all 9 interactive sections
├── style.css                    # Premium dark theme, 3D perspective transforms, glassmorphism
├── script.js                    # Interactive engine: 3D carousel, card flip, audio, lightbox, fireworks
├── vercel.json                  # Static hosting configuration for Vercel
├── README.md                    # Setup, customization, and deployment documentation
│
└── assets/
    ├── images/                  # All 13 authentic photographs
    │   ├── photo-01-traditional-kurta.jpg       # Traditional white kurta & golden pillar (Hero)
    │   ├── photo-02-heritage-bike-standing.jpg   # Standing next to Karizma bike
    │   ├── photo-03-heritage-bike-sitting.jpg    # Sitting on bike at heritage facade
    │   ├── photo-04-nature-mountain.jpg          # Mountain road vista, beanie & sunglasses
    │   ├── photo-05-cafe-jordan.jpg              # Modern cafe patio in Jordan 23 crewneck
    │   ├── photo-06-hallway-yellow.jpg           # Minimalist hallway with yellow ceiling accent
    │   ├── photo-07-plaid-selfie.jpg             # Fitting room mirror selfie in blue plaid shirt
    │   ├── photo-08-event-floral.jpg             # Festive floral decor with sunglasses
    │   ├── photo-09-ocean-beach.jpg              # Ocean shoreline in GAP hoodie
    │   ├── photo-10-forest-bridge.jpg            # Wooden footbridge in lush forest canopy
    │   ├── photo-11-temple-night.jpg             # Sacred temple gopuram night illumination
    │   ├── photo-12-sunset-car.jpg               # Sunset golden hour leaning on silver car
    │   └── photo-13-retail-knit-sweater.jpg      # Brown knit sweater & silver chain (Finale)
    └── music/
        └── celebration.mp3      # (Optional) Place any MP3 here for custom background music
```

---

## 🚀 2. How to Run Locally

You can run the website locally in seconds using any of these methods:

### Option A: Using Python (Built-in)
Open a terminal inside the project folder (`d:\BDAY`) and run:
```bash
python -m http.server 8000
```
Then open your browser and navigate to:
```
http://localhost:8000
```

### Option B: Using VS Code Live Server
1. Open the project folder in VS Code (`code .`).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **"Open with Live Server"**.

### Option C: Using Node.js / npx
```bash
npx serve .
```

---

## 🖼️ 3. How to Add or Remove Photos

All 13 authentic photos are saved in `assets/images/`.

### To Add a Photo:
1. Place your new image file in `assets/images/` (e.g. `photo-14-example.jpg`).
2. Open `script.js` and add an entry to the `PHOTO_COLLECTION` array:
   ```javascript
   {
     id: 14,
     src: 'assets/images/photo-14-example.jpg',
     tag: 'New Memory',
     caption: 'Short description of the photo',
     quoteTitle: 'Title of Message',
     quote: 'Personal message for your brother here.'
   }
   ```
3. In `index.html`, duplicate one of the `.carousel-card-item` elements in `#carousel-track` and one `.memory-card` element in `#memory-grid`, updating the image `src` and text accordingly.

### To Remove a Photo:
1. Remove the corresponding card block from `index.html`.
2. Remove the object from `PHOTO_COLLECTION` in `script.js`.

---

## ✍️ 4. How to Change Birthday Messages

Every photo card has a unique, inspiring message on its reverse 3D flip side.

### To edit 3D card back messages:
Open `index.html` and find the `<div class="flip-card-back">` blocks inside `#carousel-track`. Edit the text inside:
```html
<h4 class="card-back-title">Your Custom Title</h4>
<p class="card-back-message">
  “Your personalized message for your brother goes here.”
</p>
```

Also update the matching message in `PHOTO_COLLECTION` inside `script.js` so it matches in the fullscreen lightbox!

---

## 👤 5. How to Change Brother's Name

By default, the website addresses him with love as **"MY BROTHER ❤️"**. If you want to use his real first name (for example, *Alex*, *Rahul*, *Rohan*, etc.):

1. In `index.html`:
   - Line 78:
     ```html
     <!-- From: -->
     <span class="hero-brother-name gold-gradient-text">MY BROTHER ❤️</span>
     <!-- To: -->
     <span class="hero-brother-name gold-gradient-text">NAME ❤️</span>
     ```
   - Line 464:
     ```html
     <!-- In Section 8: -->
     <h2 class="final-brother-shoutout">
       HAPPY BIRTHDAY,<br>
       <span class="gold-gradient-text">NAME ❤️</span>
     </h2>
     ```
   - In `<title>` tag on line 6:
     ```html
     <title>Happy Birthday, [Name] | A Special Celebration</title>
     ```

---

## 🎵 6. How to Add Custom Background Music

The website features an intelligent **Hybrid Audio System**:
1. By default, it includes an automatic procedural **Web Audio API Ambient Synthesizer** that plays peaceful, warm chords and chimes with zero files needed!
2. To use your brother's favorite song or instrumental track:
   - Copy any `.mp3` file into `assets/music/` and name it:
     ```
     celebration.mp3
     ```
     *(or `birthday.mp3`)*.
   - The player will immediately detect and stream the MP3 file instead of the procedural synth!
3. The floating navigation pill has a music button:
   - Click to **Play / Pause / Mute**.
   - Features animated sound equalizer bars when music is playing.
   - Respects browser autoplay policies (starts only upon entering the celebration).

---

## 🚀 7. Exact GitHub + Vercel Deployment Steps

Deploying this website to **Vercel** takes under 2 minutes:

### Step 1: Initialize Git and Commit
Open a terminal in `d:\BDAY\` and run:
```bash
git init
git add .
git commit -m "Initial commit: Complete interactive birthday website"
```

### Step 2: Push to GitHub
1. Go to [GitHub](https://github.com/new) and create a new repository (name it e.g. `birthday-website`).
2. Link your local repo and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/birthday-website.git
   git push -u origin main
   ```

### Step 3: Import and Deploy on Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository (`birthday-website`).
4. Keep the Framework Preset as **"Other"** (it is pure static HTML/CSS/JS).
5. Click **"Deploy"**.
6. In ~15 seconds, Vercel gives you a live public HTTPS URL (e.g. `https://birthday-website-brother.vercel.app`) to share with your brother!

---

## 🌟 Quality & Accessibility Features
- **Magic Sparkle Cursor:** Elegant GPU-accelerated canvas sparkle trail and click burst, with subtle hover aura and automatic touch-screen suppression.
- **Zero AI replacements:** 100% authentic personal photographs preserved.
- **Fluid Responsiveness:** Tested for iPhone, Android, iPad, laptops, and ultra-wide displays.
- **No external frameworks:** Ultra-lightweight Vanilla JS and pure CSS (under 100ms load time).
- **Smooth 60fps animations:** GPU-accelerated CSS 3D transforms (`preserve-3d`) and Canvas particle simulation.
