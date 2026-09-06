# frigginglorious.github.io

A personal static site hosting a collection of web experiments, interactive music experiences, audio visualizations, and creative coding projects.

## Description

This GitHub Pages site serves as a playground for various web-based experiments and creative projects. It features interactive music video games, audio visualizations using Tone.js, bookmarklet tools, presentation slides, and downloadable music content.

## Features

- **Interactive Music Video Game** - "I Swim" by Setlers: A physics-based game using Matter.js and Tone.js where players dodge objects while music plays
- **Audio Visualizations** - FFT-based visual effects synchronized to music playback
- **Bookmarklet Tools** - JavaScript bookmarklets including "The Chrumpinator" and "Drumpfinator" for text manipulation on web pages
- **Presentation Slides** - Markdown-based slides using reveal.js
- **Music Downloads** - Original music tracks including the Setlers "Katana EP"
- **Sandstorm Grains** - Demonstrations of Sandstorm.io functionality
- **Dr. Fresh Projects** - Sound foundation experiments

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Audio**: [Tone.js](https://tonejs.github.io/) - Web Audio framework for audio synthesis and visualization
- **Physics**: [Matter.js](https://brm.io/matter-js/) - 2D physics engine for browser-based games
- **Interactivity**: jQuery, Draggabilly
- **Build Tools**: Ruby Gemfile (for Jekyll/static site generation)
- **Hosting**: GitHub Pages

## Project Structure

```
frigginglorious.github.io/
├── index.html              # Main landing page with project links
├── experiments.html        # Experiments page with marquee tags and Twitter embeds
├── chrump.html             # "Chrumpinator" bookmarklet tool
├── drumpf.html             # "Drumpfinator" bookmarklet tool
├── sandstorm_grains.html   # Sandstorm project demonstrations
├── jukeDec.html            # Jukebox interface
├── slides.mdown            # Presentation slides in Markdown
├── Gemfile                 # Ruby dependencies
│
├── iSwimMusicVideoGame/    # Interactive music video game
│   ├── index.html
│   ├── script.js           # Game logic with Matter.js physics
│   ├── style.css
│   ├── js/                 # Tone.js, Matter.js, and utility scripts
│   ├── lib/                # Third-party libraries
│   └── img/                # Game sprites and assets
│
├── Setlers/                # Music player/visualizer for Setlers band
│   ├── index.html
│   ├── script.js
│   └── *.mp3               # Katana EP tracks
│
├── tone/                   # Tone.js audio experiments
│   ├── script.js
│   └── lib/
│
├── DrFresh/                # Dr. Fresh music project
├── DrFresh-soundFoundation/
├── danSongMix/             # Music compilation download
├── musicMonth/             # Music month project
├── moxie/                  # Moxie project
├── cvcc/                   # CVCC-related content
├── cvcc2023openingSlides/  # 2023 opening presentation
├── buttToucher/            # Experimental project
├── temp/                   # Temporary files
└── img/                    # Shared images and assets
```

## Installation

This is a static site that can be run locally or deployed to any static hosting service.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/frigginglorious/frigginglorious.github.io.git
   cd frigginglorious.github.io
   ```

2. Serve the files using any local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx serve

   # Using Ruby (with Jekyll)
   bundle install
   bundle exec jekyll serve
   ```

3. Open your browser and navigate to `http://localhost:8000`

## Usage

### Main Site
Visit the main index to navigate to different experiments and projects.

### I Swim Music Video Game
1. Navigate to `/iSwimMusicVideoGame/`
2. Wait for the audio to load
3. Click/tap left or right of your character to move
4. Collect good items (logos) and avoid bad items (bombs)
5. Your score updates in real-time as the song plays

### Bookmarklets
1. Visit `/chrump.html` or `/drumpf.html`
2. Drag the bookmarklet link to your browser's bookmark bar
3. Click the bookmark on any webpage to activate the effect

## Live Demo

Visit the live site: [https://frigginglorious.github.io](https://frigginglorious.github.io)

## License

This project is open source. Individual components may have their own licenses (Tone.js, Matter.js, etc.).

## Author

Created by [@frigginglorious](https://github.com/frigginglorious)
