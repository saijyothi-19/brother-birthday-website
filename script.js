/**
 * BIRTHDAY CELEBRATION — PREMIUM INTERACTIVE ENGINE
 * Handcrafted Vanilla JavaScript for Annayya's special digital experience.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================================================
  // 1. DATA: ALL 13 AUTHENTIC PHOTOS & METADATA
  // ========================================================================
  const PHOTO_COLLECTION = [
    {
      id: 1,
      src: 'assets/images/photo-01-traditional-kurta.jpg',
      tag: 'Golden Heritage',
      caption: 'Traditional white kurta portrait beside the ornate golden pillar',
      quoteTitle: 'Rooted in Dignity',
      quote: 'Rooted in grace, rising with purpose. Your warmth and respect for tradition make everyone around you proud. Keep walking with this dignity and honor.'
    },
    {
      id: 2,
      src: 'assets/images/photo-02-heritage-bike-standing.jpg',
      tag: 'Steadfast Path',
      caption: 'Standing determined beside motorcycle with heritage stone facade',
      quoteTitle: 'Belief in Yourself',
      quote: 'Behind every smile is a journey. Keep your eyes on the road ahead, hold your spirit high, and never stop believing in where your journey will lead.'
    },
    {
      id: 3,
      src: 'assets/images/photo-03-heritage-bike-sitting.jpg',
      tag: 'The Open Road',
      caption: 'Sitting calmly on the bike, stone heritage architecture in the background',
      quoteTitle: 'Master of Destiny',
      quote: 'The open road belongs to those who dare to steer their own fate. Trust your instincts, cherish every mile, and let your courage guide every destination.'
    },
    {
      id: 4,
      src: 'assets/images/photo-04-nature-mountain.jpg',
      tag: 'Highest Peaks',
      caption: 'Scenic mountain road landscape, wearing beanie and sunglasses',
      quoteTitle: 'Fearless Ambition',
      quote: 'Standing tall among the highest peaks. Remember that no mountain is too steep when your ambition is clear and your heart is steady.'
    },
    {
      id: 5,
      src: 'assets/images/photo-05-cafe-jordan.jpg',
      tag: 'True Champion',
      caption: 'Sitting in modern cafe patio surrounded by plants, navy Jordan 23 sweatshirt',
      quoteTitle: 'Effortless Greatness',
      quote: 'Effortless style, grounded soul. True champions don\'t just chase great numbers—they bring positivity, loyalty, and passion to everything they touch.'
    },
    {
      id: 6,
      src: 'assets/images/photo-06-hallway-yellow.jpg',
      tag: 'Quiet Confidence',
      caption: 'Hallway portrait with bright yellow ceiling accent, black shirt & beige trousers',
      quoteTitle: 'Unstoppable Presence',
      quote: 'Confidence is quiet; self-belief is loud. Walk through every door with your head held high—the world is ready for your brilliance.'
    },
    {
      id: 7,
      src: 'assets/images/photo-07-plaid-selfie.jpg',
      tag: 'Authentic Spirit',
      caption: 'Fitting room mirror selfie in blue-and-white plaid button-down shirt',
      quoteTitle: 'Always True to You',
      quote: 'Be proud of who you are and where you\'ve come from. Every single day, you are shaping the leader, Annayya, and person you were destined to be.'
    },
    {
      id: 8,
      src: 'assets/images/photo-08-event-floral.jpg',
      tag: 'Vibrant Joy',
      caption: 'Celebration setup with floral decor, black-and-white shirt & tinted sunglasses',
      quoteTitle: 'Light in Any Room',
      quote: 'Bringer of energy and genuine joy. Your presence lights up rooms and turns simple gatherings into unforgettable memories. Never lose that spark.'
    },
    {
      id: 9,
      src: 'assets/images/photo-09-ocean-beach.jpg',
      tag: 'Resilient Tide',
      caption: 'Standing at the ocean shoreline in light grey GAP hoodie and sunglasses',
      quoteTitle: 'Calm Amidst Waves',
      quote: 'Like the ocean tides, you face every wave with quiet resilience. May every challenge make you stronger, and may you always ride the storms with calm resolve.'
    },
    {
      id: 10,
      src: 'assets/images/photo-10-forest-bridge.jpg',
      tag: 'Nature\'s Peace',
      caption: 'Wooden footbridge in lush forest canopy, blue floral shirt & white linen pants',
      quoteTitle: 'Grounded Growth',
      quote: 'Finding peace amidst the wild rush of life. Bridge every gap with kindness, stay close to what grounds you, and keep growing tall like the trees.'
    },
    {
      id: 11,
      src: 'assets/images/photo-11-temple-night.jpg',
      tag: 'Sacred Strength',
      caption: 'Night illumination portrait before sacred temple gopuram shrine with tilak',
      quoteTitle: 'Divine Light',
      quote: 'Blessed with quiet faith, inner peace, and divine strength. May blessings always surround your path and light up your darkest nights.'
    },
    {
      id: 12,
      src: 'assets/images/photo-12-sunset-car.jpg',
      tag: 'Golden Ambition',
      caption: 'Golden hour sunset leaning on silver car outside O\'Rica cafe',
      quoteTitle: 'Drive to Greatness',
      quote: 'Chasing sunsets and turning ambition into reality. Your hard work today is paving highways of triumph for tomorrow. Keep driving towards greatness.'
    },
    {
      id: 13,
      src: 'assets/images/photo-13-retail-knit-sweater.jpg',
      tag: 'Endless Potential',
      caption: 'Modern retail portrait in brown cable-knit sweater and silver chain',
      quoteTitle: 'The Future Awaits',
      quote: 'Sharp mind, warm heart, and infinite potential. Your journey is still being written, and the finest, brightest chapters are all waiting ahead for you.'
    }
  ];

  // ========================================================================
  // 2. SECTION 1: CINEMATIC INTRO PROGRESSION
  // ========================================================================
  const introScreen = document.getElementById('intro-screen');
  const introLine1 = document.getElementById('intro-line-1');
  const introLine2 = document.getElementById('intro-line-2');
  const introCtaWrapper = document.getElementById('intro-cta-wrapper');
  const enterBtn = document.getElementById('enter-btn');
  const mainHeader = document.getElementById('main-header');

  // Progressive reveal sequence
  setTimeout(() => {
    introLine1.classList.add('visible');
  }, 500);

  setTimeout(() => {
    introLine2.classList.add('visible');
  }, 2200);

  setTimeout(() => {
    introCtaWrapper.classList.add('visible');
  }, 3800);

  enterBtn.addEventListener('click', () => {
    // Unlock body & start portal animation
    document.body.classList.remove('is-intro-locked');
    introScreen.classList.add('is-entered');
    mainHeader.classList.add('nav-visible');

    // Trigger audio after explicit user interaction
    audioManager.init();
    audioManager.play();

    // Trigger gentle initial fireworks
    celebrationManager.fireMiniBurst();

    // Remove intro element from tab order after transition completes
    setTimeout(() => {
      introScreen.style.display = 'none';
    }, 1300);
  });

  // ========================================================================
  // 3. HYBRID AUDIO SYSTEM (MP3 + PROCEDURAL WEB AUDIO SYNTHESIZER)
  // ========================================================================
  class AudioManager {
    constructor() {
      this.audioEl = document.getElementById('bg-audio');
      this.toggleBtn = document.getElementById('music-toggle-btn');
      this.labelEl = document.getElementById('music-btn-label');
      this.isPlaying = false;
      this.isSynthMode = false;
      this.synthContext = null;
      this.synthGain = null;
      this.synthTimer = null;

      this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    init() {
      // Test if local MP3 can play
      if (this.audioEl) {
        this.audioEl.volume = 0.55;
        const playPromise = this.audioEl.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.isPlaying = true;
              this.updateUI(true);
            })
            .catch(() => {
              // MP3 file not available or not loaded yet -> Fallback to Web Audio Ambient Chimes
              this.startProceduralSynth();
            });
        }
      } else {
        this.startProceduralSynth();
      }
    }

    play() {
      if (this.isSynthMode) {
        if (this.synthGain) {
          this.synthGain.gain.setTargetAtTime(0.08, this.synthContext.currentTime, 0.5);
        }
        this.isPlaying = true;
        this.updateUI(true);
      } else if (this.audioEl) {
        this.audioEl.play()
          .then(() => {
            this.isPlaying = true;
            this.updateUI(true);
          })
          .catch(() => {
            this.startProceduralSynth();
          });
      }
    }

    pause() {
      if (this.isSynthMode) {
        if (this.synthGain) {
          this.synthGain.gain.setTargetAtTime(0.0001, this.synthContext.currentTime, 0.3);
        }
        this.isPlaying = false;
        this.updateUI(false);
      } else if (this.audioEl) {
        this.audioEl.pause();
        this.isPlaying = false;
        this.updateUI(false);
      }
    }

    toggle() {
      if (this.isPlaying) {
        this.pause();
      } else {
        if (!this.synthContext && !this.audioEl.currentTime) {
          this.init();
        } else {
          this.play();
        }
      }
    }

    updateUI(playing) {
      if (playing) {
        this.toggleBtn.classList.add('is-playing');
        this.labelEl.textContent = 'Music: On';
      } else {
        this.toggleBtn.classList.remove('is-playing');
        this.labelEl.textContent = 'Music: Off';
      }
    }

    startProceduralSynth() {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;

        this.synthContext = new AudioCtx();
        this.synthGain = this.synthContext.createGain();
        this.synthGain.gain.setValueAtTime(0.08, this.synthContext.currentTime);
        this.synthGain.connect(this.synthContext.destination);
        this.isSynthMode = true;
        this.isPlaying = true;
        this.updateUI(true);

        // Peaceful Pentatonic ambient chord notes (C, E, G, A, B, D)
        const notes = [261.63, 329.63, 392.00, 440.00, 493.88, 523.25, 659.25, 783.99];

        const playTone = () => {
          if (!this.isPlaying || !this.synthContext) return;
          const osc = this.synthContext.createOscillator();
          const noteGain = this.synthContext.createGain();

          const freq = notes[Math.floor(Math.random() * notes.length)];
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.synthContext.currentTime);

          const now = this.synthContext.currentTime;
          noteGain.gain.setValueAtTime(0.0001, now);
          noteGain.gain.exponentialRampToValueAtTime(0.06, now + 0.8);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

          osc.connect(noteGain);
          noteGain.connect(this.synthGain);

          osc.start(now);
          osc.stop(now + 3.8);

          const nextInterval = 1200 + Math.random() * 2000;
          this.synthTimer = setTimeout(playTone, nextInterval);
        };

        playTone();
      } catch (err) {
        console.warn('Audio synthesis not permitted or supported yet', err);
      }
    }
  }

  const audioManager = new AudioManager();

  // ========================================================================
  // 4. SECTION 4 & 5: INTERACTIVE 3D PHOTO WALL & CARD FLIP
  // ========================================================================
  class Carousel3D {
    constructor() {
      this.track = document.getElementById('carousel-track');
      this.cards = Array.from(document.querySelectorAll('.carousel-card-item'));
      this.prevBtn = document.getElementById('carousel-prev-btn');
      this.nextBtn = document.getElementById('carousel-next-btn');
      this.dotsContainer = document.getElementById('carousel-dots');
      this.counterNum = document.getElementById('current-card-num');

      this.currentIndex = 0;
      this.total = this.cards.length;
      this.isAutoPlay = true;
      this.autoPlayTimer = null;
      this.touchStartX = 0;
      this.touchStartY = 0;

      this.init();
    }

    init() {
      // Build dots
      this.dotsContainer.innerHTML = '';
      this.cards.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to photo ${idx + 1}`);
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          this.goTo(idx);
        });
        this.dotsContainer.appendChild(dot);
      });

      // Controls
      this.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prev();
      });

      this.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.next();
      });

      // Card Click Handler (Select center or Flip if already active)
      this.cards.forEach((card, idx) => {
        card.addEventListener('click', () => {
          if (this.currentIndex === idx) {
            // Flip active card
            card.classList.toggle('is-flipped');
          } else {
            // Unflip previously flipped cards and navigate to clicked card
            this.unflipAll();
            this.goTo(idx);
          }
        });

        // Keyboard Enter/Space to flip active card
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (this.currentIndex === idx) {
              card.classList.toggle('is-flipped');
            } else {
              this.unflipAll();
              this.goTo(idx);
            }
          }
        });
      });

      // Touch / Swipe Gestures for Mobile
      this.track.addEventListener('touchstart', (e) => {
        this.pauseAutoPlay();
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
      }, { passive: true });

      this.track.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - this.touchStartX;
        const deltaY = e.changedTouches[0].clientY - this.touchStartY;

        // Ensure horizontal swipe dominates
        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            this.prev();
          } else {
            this.next();
          }
        }
        this.startAutoPlay();
      }, { passive: true });

      // Pause on hover
      this.track.addEventListener('mouseenter', () => this.pauseAutoPlay());
      this.track.addEventListener('mouseleave', () => this.startAutoPlay());

      // Keyboard arrow keys when in view
      window.addEventListener('keydown', (e) => {
        const rect = this.track.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          if (e.key === 'ArrowLeft') {
            this.prev();
          } else if (e.key === 'ArrowRight') {
            this.next();
          }
        }
      });

      window.addEventListener('resize', () => this.updateLayout());

      this.updateLayout();
      this.startAutoPlay();
    }

    unflipAll() {
      this.cards.forEach(card => card.classList.remove('is-flipped'));
    }

    goTo(index) {
      this.unflipAll();
      this.currentIndex = (index + this.total) % this.total;
      this.updateLayout();
    }

    prev() {
      this.goTo(this.currentIndex - 1);
    }

    next() {
      this.goTo(this.currentIndex + 1);
    }

    startAutoPlay() {
      this.pauseAutoPlay();
      this.autoPlayTimer = setInterval(() => {
        // Only auto-advance if current card is NOT flipped
        const currentCard = this.cards[this.currentIndex];
        if (!currentCard || !currentCard.classList.contains('is-flipped')) {
          this.next();
        }
      }, 5500);
    }

    pauseAutoPlay() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
      }
    }

    updateLayout() {
      const isMobile = window.innerWidth < 768;
      const isSmallMobile = window.innerWidth < 480;

      this.cards.forEach((card, idx) => {
        // Calculate shortest circular distance
        let delta = (idx - this.currentIndex + this.total) % this.total;
        if (delta > this.total / 2) delta -= this.total;

        card.classList.toggle('active-center', delta === 0);

        if (delta === 0) {
          // Center Active Card
          card.style.transform = `translateX(0px) translateZ(${isMobile ? 30 : 90}px) rotateY(0deg) scale(${isMobile ? 1.02 : 1.08})`;
          card.style.zIndex = '30';
          card.style.opacity = '1';
          card.style.pointerEvents = 'auto';
          card.style.filter = 'none';
        } else if (delta === -1) {
          // Immediate Left Card
          const shift = isSmallMobile ? -145 : (isMobile ? -185 : -330);
          card.style.transform = `translateX(${shift}px) translateZ(${isMobile ? -20 : -10}px) rotateY(24deg) scale(${isMobile ? 0.86 : 0.9})`;
          card.style.zIndex = '20';
          card.style.opacity = isMobile ? '0.7' : '0.85';
          card.style.pointerEvents = 'auto';
          card.style.filter = 'brightness(0.7)';
        } else if (delta === 1) {
          // Immediate Right Card
          const shift = isSmallMobile ? 145 : (isMobile ? 185 : 330);
          card.style.transform = `translateX(${shift}px) translateZ(${isMobile ? -20 : -10}px) rotateY(-24deg) scale(${isMobile ? 0.86 : 0.9})`;
          card.style.zIndex = '20';
          card.style.opacity = isMobile ? '0.7' : '0.85';
          card.style.pointerEvents = 'auto';
          card.style.filter = 'brightness(0.7)';
        } else if (delta === -2 && !isMobile) {
          // Outer Left Card (Desktop only)
          card.style.transform = `translateX(-570px) translateZ(-80px) rotateY(38deg) scale(0.74)`;
          card.style.zIndex = '10';
          card.style.opacity = '0.5';
          card.style.pointerEvents = 'auto';
          card.style.filter = 'brightness(0.45)';
        } else if (delta === 2 && !isMobile) {
          // Outer Right Card (Desktop only)
          card.style.transform = `translateX(570px) translateZ(-80px) rotateY(-38deg) scale(0.74)`;
          card.style.zIndex = '10';
          card.style.opacity = '0.5';
          card.style.pointerEvents = 'auto';
          card.style.filter = 'brightness(0.45)';
        } else {
          // Hidden / offstage cards
          const direction = delta > 0 ? 1 : -1;
          const farShift = direction * (isMobile ? 320 : 750);
          card.style.transform = `translateX(${farShift}px) translateZ(-150px) scale(0.5)`;
          card.style.zIndex = '0';
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
        }
      });

      // Update Dots & Counter
      const dots = Array.from(this.dotsContainer.children);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === this.currentIndex);
      });

      if (this.counterNum) {
        this.counterNum.textContent = (this.currentIndex + 1).toString();
      }
    }
  }

  const carousel = new Carousel3D();

  // ========================================================================
  // 5. SECTION 7: MEMORY WALL LIGHTBOX
  // ========================================================================
  class LightboxManager {
    constructor() {
      this.modal = document.getElementById('lightbox-modal');
      this.backdrop = document.getElementById('lightbox-backdrop');
      this.activeImg = document.getElementById('lightbox-active-img');
      this.captionText = document.getElementById('lightbox-caption-text');
      this.counterText = document.getElementById('lightbox-counter-text');
      this.closeBtn = document.getElementById('lightbox-close-btn');
      this.prevBtn = document.getElementById('lightbox-prev-btn');
      this.nextBtn = document.getElementById('lightbox-next-btn');

      this.currentIndex = 0;
      this.total = PHOTO_COLLECTION.length;
      this.touchStartX = 0;

      this.init();
    }

    init() {
      // Memory grid click listeners
      const memoryCards = document.querySelectorAll('.memory-card');
      memoryCards.forEach(card => {
        card.addEventListener('click', () => {
          const index = parseInt(card.getAttribute('data-index'), 10);
          this.open(index);
        });
      });

      // Close actions
      this.closeBtn.addEventListener('click', () => this.close());
      this.backdrop.addEventListener('click', () => this.close());

      // Navigation
      this.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prev();
      });

      this.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.next();
      });

      // Keyboard support
      window.addEventListener('keydown', (e) => {
        if (!this.modal.hasAttribute('hidden')) {
          if (e.key === 'Escape') this.close();
          if (e.key === 'ArrowLeft') this.prev();
          if (e.key === 'ArrowRight') this.next();
        }
      });

      // Mobile Touch Swipe for Lightbox
      this.modal.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
      }, { passive: true });

      this.modal.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - this.touchStartX;
        if (deltaX > 50) this.prev();
        if (deltaX < -50) this.next();
      }, { passive: true });
    }

    open(index) {
      this.currentIndex = index;
      this.render();
      this.modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    close() {
      this.modal.setAttribute('hidden', 'true');
      document.body.style.overflow = '';
    }

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.total) % this.total;
      this.render();
    }

    next() {
      this.currentIndex = (this.currentIndex + 1) % this.total;
      this.render();
    }

    render() {
      const data = PHOTO_COLLECTION[this.currentIndex];
      if (!data) return;

      this.activeImg.src = data.src;
      this.activeImg.alt = data.caption;
      this.captionText.textContent = `${data.tag} — ${data.quoteTitle}`;
      this.counterText.textContent = `${this.currentIndex + 1} / ${this.total}`;
    }
  }

  const lightbox = new LightboxManager();

  // ========================================================================
  // 6. SCROLL REVEAL OBSERVER & FLOATING NAV SPY
  // ========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Nav link highlight observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 160;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // ========================================================================
  // 7. AMBIENT BACKGROUND CANVAS (STARS, PARTICLES & SUBTLE HEARTS)
  // ========================================================================
  class AmbientCanvas {
    constructor() {
      this.canvas = document.getElementById('ambient-canvas');
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.hearts = [];
      this.width = 0;
      this.height = 0;

      this.resize();
      window.addEventListener('resize', () => this.resize());

      this.initParticles();
      this.animate();
    }

    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    }

    initParticles() {
      const count = Math.min(80, Math.floor((this.width * this.height) / 16000));
      this.particles = [];
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 1.5 + 0.5,
          color: Math.random() > 0.4 ? '#f6d365' : '#8b5cf6',
          speedY: -(Math.random() * 0.35 + 0.1),
          speedX: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.7 + 0.2,
          pulse: Math.random() * 0.03 + 0.01
        });
      }
    }

    spawnHeart() {
      if (Math.random() < 0.015 && this.hearts.length < 12) {
        this.hearts.push({
          x: Math.random() * this.width,
          y: this.height + 20,
          size: Math.random() * 10 + 8,
          speedY: -(Math.random() * 0.6 + 0.4),
          speedX: (Math.random() - 0.5) * 0.4,
          opacity: 0.65,
          color: Math.random() > 0.5 ? 'rgba(244, 63, 94, 0.45)' : 'rgba(246, 211, 101, 0.45)'
        });
      }
    }

    drawHeart(x, y, size, color) {
      const ctx = this.ctx;
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(
        -size / 2, -topCurveHeight,
        -size, size / 3,
        0, size
      );
      // top right curve
      ctx.bezierCurveTo(
        size, size / 3,
        size / 2, -topCurveHeight,
        0, topCurveHeight
      );
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    }

    animate() {
      if (document.hidden) {
        requestAnimationFrame(() => this.animate());
        return;
      }

      this.ctx.clearRect(0, 0, this.width, this.height);

      // Render floating particles
      this.particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * 0.002) * 0.003;

        if (p.y < -10) p.y = this.height + 10;
        if (p.x < -10) p.x = this.width + 10;
        if (p.x > this.width + 10) p.x = -10;

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0.1, Math.min(0.8, p.opacity));
        this.ctx.fill();
      });

      // Render gentle hearts
      this.spawnHeart();
      for (let i = this.hearts.length - 1; i >= 0; i--) {
        const h = this.hearts[i];
        h.y += h.speedY;
        h.x += h.speedX;
        h.opacity -= 0.0015;

        if (h.opacity <= 0 || h.y < -30) {
          this.hearts.splice(i, 1);
        } else {
          this.ctx.globalAlpha = h.opacity;
          this.drawHeart(h.x, h.y, h.size, h.color);
        }
      }

      this.ctx.globalAlpha = 1.0;
      requestAnimationFrame(() => this.animate());
    }
  }

  const ambientCanvas = new AmbientCanvas();

  // ========================================================================
  // 8. SECTION 9: CELEBRATION FIREWORKS & CONFETTI ENGINE
  // ========================================================================
  class CelebrationManager {
    constructor() {
      this.canvas = document.getElementById('celebration-canvas');
      this.ctx = this.canvas.getContext('2d');
      this.fireworks = [];
      this.confetti = [];
      this.width = 0;
      this.height = 0;
      this.isTriggeredOnce = false;

      this.resize();
      window.addEventListener('resize', () => this.resize());

      // Trigger button
      const reCelebrateBtn = document.getElementById('re-celebrate-btn');
      if (reCelebrateBtn) {
        reCelebrateBtn.addEventListener('click', () => {
          this.fireGrandFinale();
        });
      }

      // Auto-trigger fireworks when reaching the final section
      const finalSection = document.getElementById('final-wishes');
      if (finalSection) {
        const finaleObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !this.isTriggeredOnce) {
              this.isTriggeredOnce = true;
              this.fireGrandFinale();
            }
          });
        }, { threshold: 0.35 });
        finaleObserver.observe(finalSection);
      }

      this.animate();
    }

    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    }

    fireMiniBurst() {
      const colors = ['#f6d365', '#a855f7', '#6366f1', '#ffffff', '#fda085'];
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          this.createFirework(
            this.width * (0.3 + Math.random() * 0.4),
            this.height * (0.3 + Math.random() * 0.3),
            colors[Math.floor(Math.random() * colors.length)]
          );
        }, i * 350);
      }
    }

    fireGrandFinale() {
      const colors = ['#f6d365', '#ffdf80', '#c084fc', '#818cf8', '#f43f5e', '#ffffff'];

      // Burst fireworks across the screen
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          this.createFirework(
            this.width * (0.15 + Math.random() * 0.7),
            this.height * (0.18 + Math.random() * 0.45),
            colors[Math.floor(Math.random() * colors.length)]
          );
        }, i * 260);
      }

      // Shower of celebration confetti
      for (let c = 0; c < 120; c++) {
        this.confetti.push({
          x: Math.random() * this.width,
          y: -20 - Math.random() * 100,
          w: Math.random() * 10 + 6,
          h: Math.random() * 6 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedY: Math.random() * 3 + 2,
          speedX: (Math.random() - 0.5) * 3,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8,
          opacity: 1
        });
      }
    }

    createFirework(targetX, targetY, color) {
      const particleCount = 45;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 / particleCount) * i + (Math.random() * 0.3);
        const speed = Math.random() * 5 + 2.5;
        this.fireworks.push({
          x: targetX,
          y: targetY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.5 + 1.2,
          color: color,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.012,
          gravity: 0.06
        });
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Animate fireworks
      for (let i = this.fireworks.length - 1; i >= 0; i--) {
        const p = this.fireworks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.fireworks.splice(i, 1);
        } else {
          this.ctx.save();
          this.ctx.globalAlpha = p.alpha;
          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          this.ctx.fillStyle = p.color;
          this.ctx.shadowBlur = 10;
          this.ctx.shadowColor = p.color;
          this.ctx.fill();
          this.ctx.restore();
        }
      }

      // Animate confetti
      for (let i = this.confetti.length - 1; i >= 0; i--) {
        const c = this.confetti[i];
        c.y += c.speedY;
        c.x += c.speedX;
        c.rotation += c.rotationSpeed;

        if (c.y > this.height + 40) {
          this.confetti.splice(i, 1);
        } else {
          this.ctx.save();
          this.ctx.translate(c.x, c.y);
          this.ctx.rotate((c.rotation * Math.PI) / 180);
          this.ctx.fillStyle = c.color;
          this.ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
          this.ctx.restore();
        }
      }

      requestAnimationFrame(() => this.animate());
    }
  }

  const celebrationManager = new CelebrationManager();

  // ========================================================================
  // 9. MAGIC SPARKLE CURSOR (ULTRA-ROBUST & VISIBLE ENGINE)
  // ========================================================================
  class MagicSparkleCursor {
    constructor() {
      // 1. Mobile & Touch Check (Detect pure touch devices)
      const isPureTouch = window.matchMedia('(pointer: coarse) and not (hover: hover)').matches;
      if (isPureTouch) {
        return; // Suppress on pure mobile phones & touch tablets
      }

      // 2. Ensure Canvas Exists in DOM
      let canvas = document.getElementById('cursor-canvas');
      if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'cursor-canvas';
        document.body.appendChild(canvas);
      }
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      if (!this.ctx) return;

      // Ensure explicit styles
      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0px';
      this.canvas.style.left = '0px';
      this.canvas.style.width = '100vw';
      this.canvas.style.height = '100vh';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '999999';
      this.canvas.style.display = 'block';
      this.canvas.style.opacity = '1';
      this.canvas.style.visibility = 'visible';

      // 3. Coordinate Tracking
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      this.mouseX = -200;
      this.mouseY = -200;
      this.cursorX = -200;
      this.cursorY = -200;
      this.lastSpawnX = -200;
      this.lastSpawnY = -200;
      this.isInside = false;

      // 4. Accessibility
      this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        this.prefersReducedMotion = e.matches;
      });

      // 5. Hover State
      this.hoverState = 'default'; // 'default' | 'interactive' | 'photo'
      this.currentHaloR = 18;
      this.targetHaloR = 18;

      // 6. Particles Pool
      this.sparkles = [];
      this.maxSparkles = 75;

      // Rich celebratory color palette
      this.palette = [
        '#ffffff', // Radiant white
        '#ffd700', // Pure gold
        '#ffdf80', // Luminous champagne
        '#f6d365', // Warm amber gold
        '#c084fc', // Soft royal lavender
        '#818cf8', // Electric violet
        '#fda085'  // Rosy sunrise
      ];

      this.resize();
      window.addEventListener('resize', () => this.resize(), { passive: true });

      this.initEvents();
      this.animate();
    }

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      this.canvas.width = this.width * this.dpr;
      this.canvas.height = this.height * this.dpr;
      this.canvas.style.width = this.width + 'px';
      this.canvas.style.height = this.height + 'px';
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }

    initEvents() {
      // Movement tracking (handles mouse and pointer devices)
      const onMove = (x, y, pointerType) => {
        if (pointerType === 'touch') return;

        this.isInside = true;
        this.mouseX = x;
        this.mouseY = y;

        // Snap immediately on first movement into viewport
        if (this.cursorX < 0) {
          this.cursorX = x;
          this.cursorY = y;
          this.lastSpawnX = x;
          this.lastSpawnY = y;
        }

        // Distance-based sparkle spawning along trail
        if (!this.prefersReducedMotion) {
          const dist = Math.hypot(x - this.lastSpawnX, y - this.lastSpawnY);
          const threshold = this.hoverState === 'photo' ? 8 : 11;

          if (dist > threshold) {
            this.spawnTrailSparkles(x, y);
            this.lastSpawnX = x;
            this.lastSpawnY = y;
          }
        }
      };

      window.addEventListener('mousemove', (e) => {
        onMove(e.clientX, e.clientY, 'mouse');
        this.checkHover(e.target);
      }, { passive: true });

      window.addEventListener('pointermove', (e) => {
        onMove(e.clientX, e.clientY, e.pointerType);
        this.checkHover(e.target);
      }, { passive: true });

      // Window enter/leave
      document.addEventListener('mouseenter', () => { this.isInside = true; });
      document.addEventListener('mouseleave', () => { this.isInside = false; });
      document.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') this.isInside = true; });
      document.addEventListener('pointerleave', () => { this.isInside = false; });

      // Click Magical Burst
      const onClick = (x, y, pointerType) => {
        if (pointerType === 'touch') return;
        if (this.prefersReducedMotion) return;
        this.spawnClickBurst(x, y);
      };

      window.addEventListener('click', (e) => {
        if (e.clientX && e.clientY) onClick(e.clientX, e.clientY, 'mouse');
      }, { passive: true });

      window.addEventListener('pointerdown', (e) => {
        if (e.clientX && e.clientY) onClick(e.clientX, e.clientY, e.pointerType);
      }, { passive: true });
    }

    checkHover(target) {
      if (!target || !(target instanceof Element)) return;

      const isPhoto = target.closest('.carousel-card-item, .memory-card, .hero-photo-frame, .final-portrait-holder, .milestone-card');
      const isInteractive = target.closest('button, a, .carousel-arrow-btn, .carousel-dot, .lightbox-btn, [role="button"], .enter-celebration-btn, .music-toggle-btn');

      const prev = this.hoverState;

      if (isPhoto) {
        this.hoverState = 'photo';
        this.targetHaloR = 36;
      } else if (isInteractive) {
        this.hoverState = 'interactive';
        this.targetHaloR = 28;
      } else {
        this.hoverState = 'default';
        this.targetHaloR = 18;
      }

      if (prev !== this.hoverState && this.hoverState !== 'default' && !this.prefersReducedMotion) {
        const count = this.hoverState === 'photo' ? 3 : 2;
        for (let i = 0; i < count; i++) {
          this.createParticle(this.mouseX, this.mouseY, 'star4', true);
        }
      }
    }

    spawnTrailSparkles(x, y) {
      // Spawn 1 to 2 particles along the path
      const count = (this.hoverState === 'photo' || Math.random() < 0.4) ? 2 : 1;
      for (let i = 0; i < count; i++) {
        // Random particle type: star4 (55%), dot (25%), diamond (20%)
        const rand = Math.random();
        let type = 'star4';
        if (rand < 0.25) type = 'dot';
        else if (rand < 0.45) type = 'diamond';

        this.createParticle(x, y, type, false);
      }
    }

    spawnClickBurst(x, y) {
      const count = 14; // 14 radiant particles
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.35;
        const speed = Math.random() * 2.8 + 1.8;

        const rand = Math.random();
        let type = 'star4';
        if (rand < 0.3) type = 'dot';
        else if (rand < 0.55) type = 'diamond';

        this.createBurstParticle(x, y, type, angle, speed);
      }
    }

    createParticle(originX, originY, type, isHover) {
      if (this.sparkles.length >= this.maxSparkles) {
        this.sparkles.shift();
      }

      const color = this.palette[Math.floor(Math.random() * this.palette.length)];
      const lifetime = Math.random() * 450 + 500; // 500–950ms

      // Size calculation
      let outerR = Math.random() * 5 + 7; // 7px–12px
      if (type === 'dot') outerR = Math.random() * 2 + 2.5; // 2.5px–4.5px
      if (type === 'diamond') outerR = Math.random() * 4 + 6; // 6px–10px
      if (Math.random() < 0.08) outerR *= 1.4; // occasional larger sparkle!

      this.sparkles.push({
        x: originX + (Math.random() - 0.5) * (isHover ? 20 : 10),
        y: originY + (Math.random() - 0.5) * (isHover ? 20 : 10),
        vx: (Math.random() - 0.5) * (isHover ? 1.0 : 0.4),
        vy: (Math.random() - 0.5) * (isHover ? 1.0 : 0.4) - 0.28, // gentle upward drift
        type: type,
        outerR: outerR,
        innerR: outerR * 0.24,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.09,
        color: color,
        birth: performance.now(),
        lifetime: lifetime,
        maxAlpha: Math.random() * 0.15 + 0.85
      });
    }

    createBurstParticle(originX, originY, type, angle, speed) {
      if (this.sparkles.length >= this.maxSparkles + 15) return;

      const color = this.palette[Math.floor(Math.random() * this.palette.length)];
      let outerR = Math.random() * 5 + 8; // 8px–13px
      if (type === 'dot') outerR = Math.random() * 2.5 + 3;

      this.sparkles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        type: type,
        outerR: outerR,
        innerR: outerR * 0.24,
        angle: angle,
        angleSpeed: (Math.random() - 0.5) * 0.14,
        color: color,
        birth: performance.now(),
        lifetime: Math.random() * 250 + 600, // 600–850ms
        maxAlpha: 1.0
      });
    }

    drawStar4(ctx, x, y, outerR, innerR, angle, color, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      // 4-point star path
      ctx.beginPath();
      const points = 4;
      const step = Math.PI / points;
      for (let i = 0; i < 2 * points; i++) {
        const r = (i % 2 === 0) ? outerR : innerR;
        const a = i * step - Math.PI / 2;
        if (i === 0) ctx.moveTo(r * Math.cos(a), r * Math.sin(a));
        else ctx.lineTo(r * Math.cos(a), r * Math.sin(a));
      }
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fill();

      // Bright white central spark
      ctx.beginPath();
      ctx.arc(0, 0, Math.max(1, outerR * 0.18), 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha * 1.15));
      ctx.fill();

      ctx.restore();
    }

    drawDiamond(ctx, x, y, size, angle, color, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.4, 0);
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.35, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.35, 0);
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fill();

      ctx.restore();
    }

    drawDot(ctx, x, y, radius, color, alpha) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fill();

      // White inner core
      ctx.beginPath();
      ctx.arc(x, y, Math.max(0.8, radius * 0.45), 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fill();

      ctx.restore();
    }

    drawCentralFollower(ctx) {
      if (!this.isInside || this.cursorX < 0) return;

      // Smooth lerp halo radius
      this.currentHaloR += (this.targetHaloR - this.currentHaloR) * 0.2;
      const r = this.currentHaloR;

      ctx.save();

      // Soft luminous radial aura
      const glow = ctx.createRadialGradient(this.cursorX, this.cursorY, 0, this.cursorX, this.cursorY, r);
      if (this.hoverState === 'photo') {
        glow.addColorStop(0, 'rgba(255, 223, 128, 0.75)');
        glow.addColorStop(0.4, 'rgba(246, 211, 101, 0.45)');
        glow.addColorStop(0.75, 'rgba(168, 85, 247, 0.25)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (this.hoverState === 'interactive') {
        glow.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        glow.addColorStop(0.4, 'rgba(192, 132, 252, 0.55)');
        glow.addColorStop(0.75, 'rgba(246, 211, 101, 0.3)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        glow.addColorStop(0, 'rgba(255, 223, 128, 0.65)');
        glow.addColorStop(0.4, 'rgba(246, 211, 101, 0.38)');
        glow.addColorStop(0.75, 'rgba(139, 92, 246, 0.2)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      ctx.beginPath();
      ctx.arc(this.cursorX, this.cursorY, r, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.globalAlpha = 1;
      ctx.fill();

      // Orbiting / pulsating diamond shimmer star (visible even when still!)
      const time = performance.now();
      const shimmerAngle = (time * 0.0022) % (Math.PI * 2);
      const pulseR = Math.sin(time * 0.005) * 1.5 + 6.0; // 4.5px–7.5px
      this.drawStar4(ctx, this.cursorX, this.cursorY, pulseR, pulseR * 0.25, shimmerAngle, '#ffffff', 0.95);

      // Central Pearl Dot
      ctx.beginPath();
      ctx.arc(this.cursorX, this.cursorY, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#ffd700';
      ctx.globalAlpha = 1;
      ctx.fill();

      ctx.restore();
    }

    animate() {
      if (document.hidden) {
        requestAnimationFrame(() => this.animate());
        return;
      }

      this.ctx.clearRect(0, 0, this.width, this.height);

      // Smooth cursor follow with lerp
      if (this.isInside && this.mouseX >= 0) {
        this.cursorX += (this.mouseX - this.cursorX) * 0.25;
        this.cursorY += (this.mouseY - this.cursorY) * 0.25;
      }

      const now = performance.now();

      // Render sparkles
      for (let i = this.sparkles.length - 1; i >= 0; i--) {
        const s = this.sparkles[i];
        const elapsed = now - s.birth;

        if (elapsed >= s.lifetime) {
          this.sparkles.splice(i, 1);
          continue;
        }

        const progress = elapsed / s.lifetime; // 0 to 1
        s.x += s.vx;
        s.y += s.vy;
        s.angle += s.angleSpeed;

        const currentScale = Math.max(0.2, 1 - progress * 0.65);
        const currentAlpha = s.maxAlpha * (1 - progress);

        if (s.type === 'dot') {
          this.drawDot(this.ctx, s.x, s.y, s.outerR * currentScale, s.color, currentAlpha);
        } else if (s.type === 'diamond') {
          this.drawDiamond(this.ctx, s.x, s.y, s.outerR * currentScale, s.angle, s.color, currentAlpha);
        } else {
          this.drawStar4(
            this.ctx,
            s.x,
            s.y,
            s.outerR * currentScale,
            s.innerR * currentScale,
            s.angle,
            s.color,
            currentAlpha
          );
        }
      }

      // Draw permanent glowing central follower
      this.drawCentralFollower(this.ctx);

      requestAnimationFrame(() => this.animate());
    }
  }

  const magicSparkleCursor = new MagicSparkleCursor();

});
