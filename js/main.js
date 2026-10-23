/**
 * VARUN VISHWA // INTERACTIVE MOTION & EDITORIAL ENGINE
 * Features:
 * - High-DPI Cursor-Responsive Orange Laser Trails (Canvas 60fps)
 * - 3D Avatar Interactive Cursor Parallax & Rim Lighting
 * - Dynamic Project Grid & Case Study Drawer
 * - Structured Work Process & Experience Timeline
 * - Scroll Spy & Responsive Mobile Navigation
 * - Seamless Chroma-blended Signature Media
 */

import { portfolioData as importedData } from './portfolio-data.js';

let THREE = window.THREE || null;
let GLTFLoader = window.GLTFLoader || null;

// Dynamically load Three.js in background so page content never blocks or fails
if (!THREE) {
  import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js')
    .then(mod => {
      THREE = mod;
      window.THREE = mod;
      return import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js');
    })
    .then(loaderMod => {
      GLTFLoader = loaderMod.GLTFLoader;
      initThreeHeroAvatar();
    })
    .catch(err => {
      console.info('[Varun 3D] Running high-fidelity CSS 3D avatar fallback.');
    });
}

const portfolioData = importedData || window.portfolioData;

function initApp() {
  initIntroVideo();
  initLaserTrailsCanvas();
  initThreeHeroAvatar();
  initNavigation();
  renderHeroMetadata();
  renderAboutSection();
  renderProjects();
  initProjectsDeck();
  renderDigimatrixSection();
  renderWorkProcess();
  renderExperienceTimeline();
  renderSkillsSection();
  renderContactSection();
  initCaseStudyModal();
  updateDynamicYear();
  initScrollReveal();
  initMagneticElements();
  init3DCardParallax();
  initHeroParallax();

  // Guarantee site-revealed is active if intro is not playing
  const introOverlay = document.getElementById('intro-video-overlay');
  if (!introOverlay || introOverlay.style.display === 'none' || introOverlay.classList.contains('is-hidden') || !document.body.classList.contains('intro-active')) {
    document.body.classList.add('site-revealed');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


/* ==========================================================================
   00. CINEMATIC 3D INTRO VIDEO ENGINE ("WELCOME TO VARUN VISHWA PORTFOLIO")
   - Features 3D character video: assets/3D charater Varun.mp4
   - Smart audio handling (autoplay unmuted with fallback to muted + one-tap unmute)
   - Synchronized atmospheric ambient blur clone
   - Progress bar scrubbing & real-time timecode
   - Skip Intro, Esc key, Enter Portfolio button
   - Replay Intro triggers in Header, Mobile Drawer & Footer
   - Graceful fallback safeguard
   ========================================================================== */
function initIntroVideo() {
  const overlay = document.getElementById('intro-video-overlay');
  const mainVideo = document.getElementById('intro-main-video');
  const ambientVideo = document.getElementById('intro-ambient-video');
  const audioToggleBtn = document.getElementById('intro-audio-toggle');
  const audioIcon = document.getElementById('intro-audio-icon');
  const audioText = document.getElementById('intro-audio-text');
  const unmutePrompt = document.getElementById('intro-unmute-prompt');
  const skipBtn = document.getElementById('intro-skip-btn');
  const enterBtn = document.getElementById('intro-enter-btn');
  const progressFill = document.getElementById('intro-progress-fill');
  const progressSpark = document.getElementById('intro-progress-spark');
  const progressWrap = document.getElementById('intro-progress-wrap');
  const timeDisplay = document.getElementById('intro-time-display');
  const videoClickArea = document.getElementById('intro-video-click-area');
  const navReplayBtn = document.getElementById('nav-replay-intro-btn');
  const mobileReplayBtn = document.getElementById('mobile-replay-intro-btn');
  const footerReplayBtn = document.getElementById('footer-replay-intro-btn');

  if (!overlay || !mainVideo) return;

  // If already dismissed or viewed in this session, do not lock body or block page load
  if (overlay.style.display === 'none' || overlay.classList.contains('is-hidden') || sessionStorage.getItem('varun_intro_viewed') === 'true') {
    document.body.classList.remove('intro-active');
    document.body.classList.add('site-revealed');
    if (overlay.style.display !== 'none') overlay.style.display = 'none';
    return;
  }

  // Lock scroll while intro is active on genuine initial visit
  document.body.classList.add('intro-active');

  let isIntroClosed = false;
  let safetyTimer = null;

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) seconds = 0;
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateAudioUI(isMuted) {
    if (audioIcon) audioIcon.textContent = isMuted ? '🔇' : '🔊';
    if (audioText) audioText.textContent = isMuted ? 'SOUND OFF' : 'SOUND ON';
    if (unmutePrompt) {
      if (isMuted) {
        unmutePrompt.classList.add('is-visible');
      } else {
        unmutePrompt.classList.remove('is-visible');
      }
    }
  }

  function toggleAudio() {
    mainVideo.muted = !mainVideo.muted;
    updateAudioUI(mainVideo.muted);
    if (mainVideo.paused) {
      mainVideo.play().catch(() => {});
    }
  }

  function updateProgress() {
    const cur = mainVideo.currentTime || 0;
    const dur = mainVideo.duration && !isNaN(mainVideo.duration) ? mainVideo.duration : 8;
    const pct = Math.min(100, Math.max(0, (cur / dur) * 100));

    if (progressFill) progressFill.style.width = pct + '%';
    if (progressSpark) progressSpark.style.left = pct + '%';
    if (timeDisplay) timeDisplay.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
  }

  function closeIntro() {
    if (isIntroClosed) return;
    isIntroClosed = true;
    if (safetyTimer) clearTimeout(safetyTimer);

    overlay.classList.add('is-hidden');
    document.body.classList.remove('intro-active');
    document.body.classList.add('site-revealed');

    // Trigger signature crimson beam sweep
    const beam = document.getElementById('crimson-energy-beam');
    if (beam) {
      beam.classList.remove('is-active');
      void beam.offsetWidth;
      beam.classList.add('is-active');
    }

    // Trigger canvas and layout recalibration
    window.dispatchEvent(new Event('resize'));

    // After fade transition, pause video and set display none to completely free DOM
    setTimeout(() => {
      if (isIntroClosed) {
        overlay.style.display = 'none';
        mainVideo.pause();
        if (ambientVideo) ambientVideo.pause();
      }
    }, 850);
  }

  function openAndPlayIntro() {
    isIntroClosed = false;
    overlay.style.display = 'flex';
    // Force layout reflow before removing class
    void overlay.offsetWidth;
    overlay.classList.remove('is-hidden');
    document.body.classList.add('intro-active');

    mainVideo.currentTime = 0;
    if (ambientVideo) ambientVideo.currentTime = 0;

    const playPromise = mainVideo.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (ambientVideo) ambientVideo.play().catch(() => {});
          updateAudioUI(mainVideo.muted);
        })
        .catch(() => {
          mainVideo.muted = true;
          mainVideo.play().then(() => {
            if (ambientVideo) ambientVideo.play().catch(() => {});
            updateAudioUI(true);
          }).catch(() => {});
        });
    }

    updateProgress();
  }

  // Initial Autoplay Attempt
  function startInitialAutoplay() {
    mainVideo.muted = false; // Try unmuted first for rich audio
    const promise = mainVideo.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          updateAudioUI(false);
          if (ambientVideo) ambientVideo.play().catch(() => {});
        })
        .catch(() => {
          // Autoplay with sound restricted by browser policy -> fall back to muted
          mainVideo.muted = true;
          mainVideo.play()
            .then(() => {
              updateAudioUI(true);
              if (ambientVideo) ambientVideo.play().catch(() => {});
            })
            .catch(() => {
              updateAudioUI(true);
            });
        });
    }

    // Safety timeout: auto-close after 14s if video cannot play
    safetyTimer = setTimeout(() => {
      if (!isIntroClosed) {
        closeIntro();
      }
    }, 14000);
  }

  // Video Events
  mainVideo.addEventListener('timeupdate', () => {
    updateProgress();
    if (ambientVideo && Math.abs(ambientVideo.currentTime - mainVideo.currentTime) > 0.3) {
      ambientVideo.currentTime = mainVideo.currentTime;
    }
  });

  mainVideo.addEventListener('ended', () => {
    // 400ms pause on last frame before revealing site
    setTimeout(closeIntro, 400);
  });

  mainVideo.addEventListener('play', () => {
    if (ambientVideo && ambientVideo.paused) {
      ambientVideo.play().catch(() => {});
    }
  });

  mainVideo.addEventListener('pause', () => {
    if (ambientVideo && !ambientVideo.paused) {
      ambientVideo.pause();
    }
  });

  // Controls Event Listeners
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAudio();
    });
  }

  if (videoClickArea) {
    videoClickArea.addEventListener('click', () => {
      if (mainVideo.muted) {
        mainVideo.muted = false;
        updateAudioUI(false);
      } else if (mainVideo.paused) {
        mainVideo.play().catch(() => {});
      } else {
        mainVideo.pause();
      }
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeIntro();
    });
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeIntro();
    });
  }

  // Seeking on progress bar
  if (progressWrap) {
    progressWrap.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = progressWrap.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const dur = mainVideo.duration || 8;
      mainVideo.currentTime = pct * dur;
      if (ambientVideo) ambientVideo.currentTime = mainVideo.currentTime;
      updateProgress();
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (isIntroClosed) return;

    if (e.key === 'Escape') {
      closeIntro();
    } else if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      if (mainVideo.paused) mainVideo.play().catch(() => {});
      else mainVideo.pause();
    } else if (e.key === 'm' || e.key === 'M') {
      toggleAudio();
    }
  });

  // Replay intro buttons
  [navReplayBtn, mobileReplayBtn, footerReplayBtn].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const mobileDrawer = document.getElementById('mobile-nav-drawer');
      if (mobileDrawer) {
        mobileDrawer.classList.remove('is-open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      }
      openAndPlayIntro();
    });
  });

  // Connect with global window functions
  window.dismissIntroVideo = closeIntro;
  window.replayIntroVideo = openAndPlayIntro;
  window.toggleIntroAudio = toggleAudio;

  // Kick off initial playback
  startInitialAutoplay();
}


/* ==========================================================================
   01. CURSOR-RESPONSIVE ORANGE LASER TRAILS (CANVAS ENGINE)
   ========================================================================== */
function initLaserTrailsCanvas() {
  const canvas = document.getElementById('laser-trails-canvas');
  if (!canvas) return;

  // Check prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  // Detect touch devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice && window.innerWidth < 768) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  // Pointer tracking state
  const points = [];
  const MAX_POINTS = 32;
  const sparks = [];
  let lastPos = { x: -100, y: -100, time: Date.now() };
  let isMoving = false;
  let lastMoveTime = Date.now();

  window.addEventListener('pointermove', (e) => {
    const now = Date.now();
    const dt = Math.max(1, now - lastPos.time);
    const dx = e.clientX - lastPos.x;
    const dy = e.clientY - lastPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const speed = Math.min(dist / dt, 4);

    lastPos = { x: e.clientX, y: e.clientY, time: now };
    lastMoveTime = now;
    isMoving = true;

    points.push({
      x: e.clientX,
      y: e.clientY,
      age: 0,
      speed: speed,
      life: 1.0
    });

    if (points.length > MAX_POINTS) {
      points.shift();
    }

    // Emit subtle spark particles on fast or sudden movement
    if (speed > 1.2 && Math.random() > 0.4) {
      sparks.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * (speed * 1.8),
        vy: (Math.random() - 0.5) * (speed * 1.8),
        life: 1.0,
        decay: 0.04 + Math.random() * 0.03,
        size: 1 + Math.random() * 2
      });
    }
  }, { passive: true });

  // Animation Loop
  function render() {
    ctx.clearRect(0, 0, width, height);

    const now = Date.now();
    if (now - lastMoveTime > 250) {
      isMoving = false;
    }

    // Update points
    for (let i = points.length - 1; i >= 0; i--) {
      points[i].age += 1;
      points[i].life -= 0.04;
      if (points[i].life <= 0) {
        points.splice(i, 1);
      }
    }

    // Render Laser Trails when at least 2 points exist
    if (points.length > 2) {
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalCompositeOperation = 'screen';

      // Pass 1: Broad, Atmospheric Low-Opacity Amber Glow
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.shadowColor = '#FF5A1F';
      ctx.shadowBlur = 18;
      ctx.strokeStyle = 'rgba(255, 90, 31, 0.18)';
      ctx.lineWidth = 14;
      ctx.stroke();

      // Pass 2: Medium Orange-Red Laser Beam
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.shadowColor = '#E50920';
      ctx.shadowBlur = 10;
      ctx.strokeStyle = 'rgba(255, 90, 31, 0.65)';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Pass 3: Thin, Bright Amber/White Core
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#FF9A3C';
      ctx.strokeStyle = 'rgba(255, 245, 230, 0.95)';
      ctx.lineWidth = 1.8;
      ctx.stroke();

      ctx.restore();
    }

    // Render Sparks
    if (sparks.length > 0) {
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(255, 154, 60, ${s.life * 0.8})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ==========================================================================
   02. 3D AVATAR INTERACTIVE CHARACTER ENGINE & THREE.JS SCENE
   - Real-time Three.js Canvas with GLTF Model Loader & AnimationMixer
   - Dynamic Orange Rim Light (#FF5A1F) & Crimson Atmospheric Depth (#E50920)
   - Swirling 3D Orbiting Orange Light Trails & Amber Particles
   - Smooth Head & Eye Cursor Tracking
   - Click to Greet / Interactive Speech Bubble
   - Explore Work Button Hover Pointing Reaction
   - High-Resolution 3D Stylized Avatar Fallback (assets/Varun's-avatar.png)
   ========================================================================== */
function initThreeHeroAvatar() {
  const canvas = document.getElementById('hero-three-canvas');
  const wrapper = document.getElementById('avatar-3d-wrapper');
  const fallbackContainer = document.getElementById('avatar-fallback-container');
  const speechBubble = document.getElementById('avatar-speech-bubble');
  const statusLabel = document.getElementById('avatar-status-label');
  const exploreBtn = document.getElementById('hero-explore-btn');
  const connectBtn = document.getElementById('hero-connect-btn');
  const giantTypography = document.getElementById('hero-giant-typography');

  if (!wrapper || !canvas) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // WebGL Availability Check
  const hasWebGL = (() => {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  })();

  // Greetings pool for click interaction
  const greetings = [
    { text: "Hey there! 👋", sub: "Welcome to my portfolio universe." },
    { text: "Building with AI & Code ⚡", sub: "Exploring intelligent experiences." },
    { text: "Ready to Collaborate! 🚀", sub: "Let's create something extraordinary." },
    { text: "Varun Vishwa here 💻", sub: "Computer Science & Creative Tech." }
  ];
  let greetingIndex = 0;
  let bubbleTimeout = null;

  function triggerGreeting() {
    if (!speechBubble) return;
    const g = greetings[greetingIndex % greetings.length];
    greetingIndex++;
    
    const greetingEl = speechBubble.querySelector('.bubble-greeting');
    const subEl = speechBubble.querySelector('.bubble-sub');
    if (greetingEl) greetingEl.textContent = g.text;
    if (subEl) subEl.textContent = g.sub;

    speechBubble.classList.add('active');
    
    // Mobile tactile haptics if supported
    if (navigator.vibrate) {
      try { navigator.vibrate(25); } catch(e) {}
    }

    // Quick avatar bounce reaction
    if (fallbackContainer) {
      fallbackContainer.style.transform = 'translateY(-14px) scale(1.04)';
      setTimeout(() => {
        fallbackContainer.style.transform = '';
      }, 400);
    }

    if (bubbleTimeout) clearTimeout(bubbleTimeout);
    bubbleTimeout = setTimeout(() => {
      speechBubble.classList.remove('active');
    }, 3600);
  }

  // Bind click on wrapper
  wrapper.addEventListener('click', () => {
    triggerGreeting();
  });

  // Hover reaction on Explore My Work button
  if (exploreBtn) {
    exploreBtn.addEventListener('mouseenter', () => {
      document.body.classList.add('explore-hovered');
      if (statusLabel) statusLabel.textContent = "VARUN'S-AVATAR // POINTING TO PROJECTS →";
    });
    exploreBtn.addEventListener('mouseleave', () => {
      document.body.classList.remove('explore-hovered');
      if (statusLabel) statusLabel.textContent = "VARUN'S-AVATAR // CLICK TO GREET";
    });
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const projSec = document.getElementById('projects');
      if (projSec) {
        window.scrollTo({
          top: projSec.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  }

  if (connectBtn) {
    connectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        window.scrollTo({
          top: contactSec.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  }

  // Pointer Parallax for Wrapper & Giant Typography
  let targetTiltX = 0;
  let targetTiltY = 0;
  let currentTiltX = 0;
  let currentTiltY = 0;

  if (!isTouch) {
    window.addEventListener('mousemove', (e) => {
      const xNorm = (e.clientX / window.innerWidth) - 0.5;
      const yNorm = (e.clientY / window.innerHeight) - 0.5;

      targetTiltX = -yNorm * 14;
      targetTiltY = xNorm * 14;

      if (giantTypography) {
        const shiftX = -xNorm * 22;
        const shiftY = -yNorm * 15;
        giantTypography.style.transform = `translate(calc(-50% + ${shiftX.toFixed(1)}px), calc(-50% + ${shiftY.toFixed(1)}px))`;
      }
    }, { passive: true });
  }

  // If no WebGL or Three.js not loaded, gracefully exit with 2D/3D CSS tilt and fallback image active
  if (!hasWebGL || !THREE) {
    function animateFallback() {
      currentTiltX += (targetTiltX - currentTiltX) * 0.08;
      currentTiltY += (targetTiltY - currentTiltY) * 0.08;
      wrapper.style.transform = `perspective(1200px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;
      requestAnimationFrame(animateFallback);
    }
    animateFallback();
    return;
  }

  // --- THREE.JS SCENE SETUP ---
  const scene = new THREE.Scene();
  const width = wrapper.clientWidth || 600;
  const height = wrapper.clientHeight || 650;

  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(0, 0.2, 3.8);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  // Resize Handler
  function onWindowResize() {
    const w = wrapper.clientWidth || 600;
    const h = wrapper.clientHeight || 650;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onWindowResize, { passive: true });

  // --- LIGHTING DESIGN (Master Prompt Spec) ---
  // 1. Soft Warm Ambient Base
  const ambientLight = new THREE.AmbientLight(0x221010, 1.4);
  scene.add(ambientLight);

  // 2. Crisp Key Light (Upper Right)
  const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.4);
  keyLight.position.set(2.4, 3.5, 2.5);
  scene.add(keyLight);

  // 3. Glowing Soft Orange Rim Light around character (#FF5A1F)
  const orangeRimLight = new THREE.PointLight(0xFF5A1F, 5.0, 10);
  orangeRimLight.position.set(-2.8, 1.6, -1.8);
  scene.add(orangeRimLight);

  const orangeRimFill = new THREE.PointLight(0xFF9A3C, 3.0, 8);
  orangeRimFill.position.set(2.6, 2.2, -1.5);
  scene.add(orangeRimFill);

  // 4. Subtle Crimson Atmospheric Lighting (#E50920)
  const crimsonAtmosphere = new THREE.PointLight(0xE50920, 3.5, 9);
  crimsonAtmosphere.position.set(0, -1.8, -1.2);
  scene.add(crimsonAtmosphere);

  // --- ANIMATED 3D ORANGE LIGHT TRAILS & PARTICLES (Master Prompt Spec) ---
  // Glowing particles orbiting behind and around the character
  const particleCount = 90;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const particleSpeeds = new Float32Array(particleCount);
  const particleAngles = new Float32Array(particleCount);
  const particleRadii = new Float32Array(particleCount);
  const particleYOffsets = new Float32Array(particleCount);

  const colOrange = new THREE.Color(0xFF5A1F);
  const colAmber = new THREE.Color(0xFF9A3C);
  const colCrimson = new THREE.Color(0xE50920);

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.8 + Math.random() * 1.3;
    const y = -1.4 + Math.random() * 2.8;

    particlePositions[i * 3] = Math.cos(angle) * radius;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = Math.sin(angle) * radius * 0.6 - 0.4;

    particleAngles[i] = angle;
    particleRadii[i] = radius;
    particleYOffsets[i] = y;
    particleSpeeds[i] = 0.4 + Math.random() * 0.8;

    // Gradient blend of Orange / Amber / Crimson
    const rPick = Math.random();
    const c = rPick > 0.6 ? colOrange : (rPick > 0.25 ? colAmber : colCrimson);
    particleColors[i * 3] = c.r;
    particleColors[i * 3 + 1] = c.g;
    particleColors[i * 3 + 2] = c.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  // Particle Material with Soft Glow Sprite
  const spriteCanvas = document.createElement('canvas');
  spriteCanvas.width = 32;
  spriteCanvas.height = 32;
  const sCtx = spriteCanvas.getContext('2d');
  const gradient = sCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.3, 'rgba(255, 154, 60, 0.8)');
  gradient.addColorStop(0.7, 'rgba(255, 90, 31, 0.3)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  sCtx.fillStyle = gradient;
  sCtx.fillRect(0, 0, 32, 32);

  const particleTexture = new THREE.CanvasTexture(spriteCanvas);
  const particleMat = new THREE.PointsMaterial({
    size: 0.14,
    map: particleTexture,
    transparent: true,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // --- 3D MODEL LOADING & ANIMATIONS ---
  let mixer = null;
  let characterMesh = null;
  let headBone = null;
  let idleAction = null;
  let waveAction = null;
  let pointAction = null;
  let modelLoaded = false;
  const clock = new THREE.Clock();

  const loader = (typeof GLTFLoader === 'function') ? new GLTFLoader() : null;
  const modelPaths = [];

  function tryLoadModel(index = 0) {
    if (!loader || index >= modelPaths.length) {
      if (statusLabel) statusLabel.textContent = "VARUN'S-AVATAR // CLICK TO GREET";
      return;
    }

    const path = modelPaths[index];
    loader.load(
      path,
      (gltf) => {
        characterMesh = gltf.scene;
        
        // Auto-fit & Center
        const box = new THREE.Box3().setFromObject(characterMesh);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.4 / (maxDim || 1);
        characterMesh.scale.setScalar(scale);
        characterMesh.position.x = -center.x * scale;
        characterMesh.position.y = (-center.y * scale) - 0.2;
        characterMesh.position.z = -center.z * scale;

        // Enhance Mesh Materials
        characterMesh.traverse((node) => {
          if (node.isMesh && node.material) {
            node.castShadow = true;
            node.receiveShadow = true;
            if (node.material.isMeshStandardMaterial) {
              node.material.roughness = Math.max(0.35, node.material.roughness);
              node.material.metalness = Math.min(0.2, node.material.metalness);
            }
          }
          if (node.isBone && /head/i.test(node.name)) {
            headBone = node;
          }
        });

        // Setup Animation Mixer
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(characterMesh);
          
          gltf.animations.forEach((clip) => {
            const name = clip.name.toLowerCase();
            if (/idle|stand|breath|loop/i.test(name) && !idleAction) {
              idleAction = mixer.clipAction(clip);
            } else if (/wave|greet|hello/i.test(name) && !waveAction) {
              waveAction = mixer.clipAction(clip);
            } else if (/point|gesture/i.test(name) && !pointAction) {
              pointAction = mixer.clipAction(clip);
            }
          });

          // Fallback if no specific named clip
          if (!idleAction) {
            idleAction = mixer.clipAction(gltf.animations[0]);
          }

          if (idleAction) {
            idleAction.play();
          }
        }

        scene.add(characterMesh);
        modelLoaded = true;

        // Hide 2.5D fallback image smoothly
        if (fallbackContainer) {
          fallbackContainer.style.opacity = '0';
          setTimeout(() => {
            fallbackContainer.style.display = 'none';
          }, 300);
        }

        if (statusLabel) {
          statusLabel.textContent = "VARUN'S-AVATAR // 3D MODEL ACTIVE";
        }
      },
      undefined,
      (err) => {
        tryLoadModel(index + 1);
      }
    );
  }

  // Attempt to load model
  tryLoadModel(0);

  // --- RENDER LOOP ---
  function renderScene() {
    requestAnimationFrame(renderScene);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // 1. Update Mixer Animations
    if (mixer) {
      mixer.update(delta);
    }

    // 2. Parallax Interpolation (Lerp)
    currentTiltX += (targetTiltX - currentTiltX) * 0.08;
    currentTiltY += (targetTiltY - currentTiltY) * 0.08;

    // Apply tilt to 2.5D container (fallback) or 3D mesh
    if (!modelLoaded && wrapper) {
      wrapper.style.transform = `perspective(1200px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;
    } else if (characterMesh) {
      // 3D Model subtle rotation following pointer
      characterMesh.rotation.y = (currentTiltY * 0.02) + (Math.sin(elapsedTime * 0.8) * 0.04);
      characterMesh.rotation.x = -currentTiltX * 0.015;

      // Bone tracking if head bone identified
      if (headBone) {
        headBone.rotation.y = currentTiltY * 0.025;
        headBone.rotation.x = -currentTiltX * 0.02;
      }
    }

    // 3. Subtle Orange Rim Light Orbit
    const rimAngle = elapsedTime * 0.6;
    orangeRimLight.position.x = Math.sin(rimAngle) * 2.8 - 0.5;
    orangeRimLight.position.z = Math.cos(rimAngle) * 1.5 - 1.2;

    // 4. Animate 3D Particles around character
    const positions = particleGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      particleAngles[i] += particleSpeeds[i] * delta * 0.6;
      const angle = particleAngles[i];
      const radius = particleRadii[i];
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = particleYOffsets[i] + Math.sin(angle * 2 + elapsedTime) * 0.12;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.65 - 0.4;
    }
    particleGeo.attributes.position.needsUpdate = true;

    // 5. Render Scene
    renderer.render(scene, camera);
  }

  requestAnimationFrame(renderScene);
}

/* ==========================================================================
   03. NAVIGATION & SCROLL SPY
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileClose = document.getElementById('mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item, .mobile-connect-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile Drawer Open / Close
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open', 'is-open');
      document.body.style.overflow = '';
    }
  }

  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  
  // Close drawer if clicking outside on backdrop
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }

  // Universal silky smooth scrolling with header offset for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.length <= 1) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        closeDrawer();

        // Trigger signature crimson beam sweep
        const beam = document.getElementById('crimson-energy-beam');
        if (beam) {
          beam.classList.remove('is-active');
          void beam.offsetWidth;
          beam.classList.add('is-active');
        }

        const headerOffset = 74;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Silky 60fps Scroll Header Glass & Scroll Spy using requestAnimationFrame
  let isScrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!isScrollTicking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (header) {
          if (scrollY > 40) {
            header.style.background = 'rgba(8, 8, 8, 0.94)';
            header.style.borderBottomColor = 'rgba(229, 9, 32, 0.22)';
          } else {
            header.style.background = 'rgba(8, 8, 8, 0.75)';
            header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
          }
        }

        let currentSectionId = '';
        sections.forEach(sec => {
          const top = sec.offsetTop - 120;
          const height = sec.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentSectionId = sec.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });

        isScrollTicking = false;
      });
      isScrollTicking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   04. HERO SECTION METADATA RENDER
   ========================================================================== */
function renderHeroMetadata() {
  const telemetryContainer = document.getElementById('hero-telemetry-container');
  if (!telemetryContainer || telemetryContainer.children.length > 0) return;

  const items = portfolioData.heroTelemetry;
  telemetryContainer.innerHTML = items.map(item => `
    <div class="telemetry-item">
      <span class="telemetry-label">${item.label}</span>
      <span class="telemetry-value">${item.value}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   05. ABOUT SECTION RENDER
   ========================================================================== */
function renderAboutSection() {
  const paragraphsEl = document.getElementById('about-paragraphs-list');
  const factGridEl = document.getElementById('about-facts-grid');

  if (paragraphsEl && paragraphsEl.children.length === 0) {
    paragraphsEl.innerHTML = portfolioData.about.paragraphs.map(p => `
      <p>${p}</p>
    `).join('');
  }

  if (factGridEl && factGridEl.children.length === 0) {
    factGridEl.innerHTML = portfolioData.about.facts.map(f => `
      <div class="about-fact-item">
        <span class="about-fact-label">${f.label}</span>
        <span class="about-fact-val">${f.value}</span>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   06. SELECTED PROJECTS SECTION RENDER
   ========================================================================== */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (grid.children.length === 0) {
    const projects = portfolioData.projects;
    grid.innerHTML = projects.map(p => {
      const statusClass = p.isConcept ? 'concept-tag' : '';
      return `
        <article class="project-card" data-project-id="${p.id}">
          <div class="project-card-header">
            <span class="project-id-num">${p.number} // ${p.badge}</span>
            <span class="project-category-badge">${p.category}</span>
          </div>

          <div class="project-image-box" data-action="open-modal" data-project-id="${p.id}">
            <img src="${p.image}" alt="${p.title}" class="project-preview-img" loading="lazy">
            <div class="project-image-overlay"></div>
            <span class="project-status-tag ${statusClass}">${p.status}</span>
          </div>

          <div class="project-card-body">
            <h3 class="project-title">${p.title}</h3>
            <p class="project-short-desc">${p.shortDesc}</p>
            <div class="project-tech-tags">
              ${p.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
              ${p.technologies.length > 4 ? `<span class="tech-tag">+${p.technologies.length - 4}</span>` : ''}
            </div>
          </div>

          <div class="project-card-actions">
            <button class="btn-case-study" data-action="open-modal" data-project-id="${p.id}">
              <span>VIEW CASE STUDY</span>
              <span>→</span>
            </button>
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-repo-link" aria-label="View source code on GitHub">
              [GITHUB REPO]
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Attach full-card & button modal trigger clicks for instant mobile/desktop interactivity
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.project-repo-link')) return;
      const pId = card.getAttribute('data-project-id');
      if (pId) openCaseStudy(pId);
    });
  });
}

/* ==========================================================================
   06B. 3D STACKED DECK SLIDER & TRANSITION ENGINE (ANIMMASTER REFERENCE)
   ========================================================================== */
function initProjectsDeck() {
  const stage = document.getElementById('projects-deck-stage');
  const indicatorsContainer = document.getElementById('deck-indicators');
  const prevBtn = document.getElementById('deck-prev-btn');
  const nextBtn = document.getElementById('deck-next-btn');
  const toggleDeck = document.getElementById('toggle-deck-view');
  const toggleGrid = document.getElementById('toggle-grid-view');
  const deckWrapper = document.getElementById('projects-deck-wrapper');
  const gridContainer = document.getElementById('projects-grid');

  if (!stage) return;

  const projects = portfolioData.projects;
  let currentIndex = 0;
  const total = projects.length;

  // View mode switcher: 3D Deck vs Grid View
  if (toggleDeck && toggleGrid && deckWrapper && gridContainer) {
    toggleDeck.addEventListener('click', () => {
      toggleDeck.classList.add('active');
      toggleGrid.classList.remove('active');
      deckWrapper.style.display = 'flex';
      gridContainer.style.display = 'none';
    });

    toggleGrid.addEventListener('click', () => {
      toggleGrid.classList.add('active');
      toggleDeck.classList.remove('active');
      deckWrapper.style.display = 'none';
      gridContainer.style.display = 'grid';
    });
  }

  // Populate Deck Cards if empty
  if (stage.children.length === 0) {
    stage.innerHTML = projects.map((p, index) => `
      <div class="deck-card" data-index="${index}" data-project-id="${p.id}">
        <div class="deck-card-media">
          <img src="${p.image}" alt="${p.title}" class="deck-card-img" loading="lazy">
          <div class="deck-card-gradient"></div>
        </div>

        <div class="deck-card-header">
          <span class="deck-card-badge">${p.number} // ${p.badge}</span>
          <button class="deck-case-study-pill open-case-study" data-project-id="${p.id}">
            CASE STUDY ↗
          </button>
        </div>

        <div class="deck-card-footer">
          <h3 class="deck-card-title">${p.title}</h3>
          <div class="deck-card-subtitle">${p.category} // 2026</div>
        </div>
      </div>
    `).join('');
  }

  // Populate Indicators if empty
  if (indicatorsContainer && indicatorsContainer.children.length === 0) {
    indicatorsContainer.innerHTML = projects.map((_, index) => `
      <div class="deck-indicator-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');
  }

  const cards = stage.querySelectorAll('.deck-card');
  const dots = indicatorsContainer ? indicatorsContainer.querySelectorAll('.deck-indicator-dot') : [];

  function updateDeck() {
    cards.forEach((card, i) => {
      // Calculate depth difference from current front card
      const diff = (i - currentIndex + total) % total;

      card.classList.remove('is-active');

      if (diff === 0) {
        // Active Front Card
        card.classList.add('is-active');
        card.style.transform = 'translateY(0px) scale(1) translateZ(0px)';
        card.style.zIndex = '10';
        card.style.opacity = '1';
        card.style.filter = 'brightness(1)';
        card.style.pointerEvents = 'auto';
      } else if (diff === 1) {
        // 1st Card Behind
        card.style.transform = 'translateY(-34px) scale(0.93) translateZ(-40px)';
        card.style.zIndex = '9';
        card.style.opacity = '0.88';
        card.style.filter = 'brightness(0.72)';
        card.style.pointerEvents = 'auto';
      } else if (diff === 2) {
        // 2nd Card Behind
        card.style.transform = 'translateY(-68px) scale(0.86) translateZ(-80px)';
        card.style.zIndex = '8';
        card.style.opacity = '0.72';
        card.style.filter = 'brightness(0.52)';
        card.style.pointerEvents = 'auto';
      } else if (diff === 3) {
        // 3rd Card Behind
        card.style.transform = 'translateY(-102px) scale(0.79) translateZ(-120px)';
        card.style.zIndex = '7';
        card.style.opacity = '0.52';
        card.style.filter = 'brightness(0.38)';
        card.style.pointerEvents = 'auto';
      } else {
        // Remaining Deep Stacked Cards
        const offset = Math.min(diff, 5);
        card.style.transform = `translateY(-${102 + (offset - 3) * 28}px) scale(${0.79 - (offset - 3) * 0.06}) translateZ(-160px)`;
        card.style.zIndex = `${7 - offset}`;
        card.style.opacity = '0.22';
        card.style.filter = 'brightness(0.25)';
        card.style.pointerEvents = 'none';
      }
    });

    // Update Dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  // Navigation handlers
  function goNext() {
    currentIndex = (currentIndex + 1) % total;
    updateDeck();
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + total) % total;
    updateDeck();
  }

  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (prevBtn) prevBtn.addEventListener('click', goPrev);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'), 10);
      updateDeck();
    });
  });

  // Clicking on background cards brings them to the front
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.open-case-study')) {
        const pId = card.getAttribute('data-project-id');
        if (pId) openCaseStudy(pId);
        return;
      }

      const cardIndex = parseInt(card.getAttribute('data-index'), 10);
      if (cardIndex !== currentIndex) {
        currentIndex = cardIndex;
        updateDeck();
      }
    });
  });

  // Drag / Swipe Gestures on the Deck Stage
  let startX = 0;
  let isDragging = false;

  stage.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    isDragging = true;
  });

  stage.addEventListener('pointerup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diffX = e.clientX - startX;
    if (diffX < -45) {
      goNext();
    } else if (diffX > 45) {
      goPrev();
    }
  });

  // Keyboard navigation when hovered or active
  window.addEventListener('keydown', (e) => {
    const rect = stage.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }
  });

  // Initial Deck Render
  updateDeck();
}

/* ==========================================================================
   07. DIGIMATRIX COMPANY IDENTITY SECTION
   ========================================================================== */
function renderDigimatrixSection() {
  const pillarsGrid = document.getElementById('digimatrix-pillars');
  if (!pillarsGrid || pillarsGrid.children.length > 0) return;

  const d = portfolioData.digimatrix;
  pillarsGrid.innerHTML = d.pillars.map(p => `
    <div class="pillar-card">
      <div class="pillar-num">${p.number} // PILLAR</div>
      <h4 class="pillar-title">${p.title}</h4>
      <p class="pillar-desc">${p.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   08. WORK PROCESS (5 STAGES)
   ========================================================================== */
function renderWorkProcess() {
  const container = document.getElementById('process-timeline-container');
  if (!container || container.children.length > 0) return;

  const stages = portfolioData.workProcess.stages;
  container.innerHTML = stages.map(s => `
    <div class="process-step-row">
      <div class="process-node">${s.number}</div>
      <div class="process-content-card">
        <h4 class="process-step-title">${s.name}</h4>
        <div class="process-step-subtitle">${s.subtitle}</div>
        <p class="process-step-desc">${s.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   09. EXPERIENCE & LEADERSHIP TIMELINE
   ========================================================================== */
function renderExperienceTimeline() {
  const container = document.getElementById('experience-timeline-list');
  if (!container) return;

  const entries = portfolioData.experience.timeline;
  container.innerHTML = entries.map((e, idx) => `
    <div class="timeline-entry-card reveal-on-scroll stagger-${(idx % 4) + 1}">
      <div class="timeline-entry-top">
        <span class="timeline-period-badge">${e.period}</span>
        <span class="timeline-type-badge">${e.type}</span>
      </div>
      <h3 class="timeline-role-title">${e.role}</h3>
      <div class="timeline-org-name">${e.organization}</div>
      <p class="timeline-desc-text">${e.description}</p>
      <div class="timeline-skills-list">
        ${e.skills.map(s => `<span class="timeline-skill-pill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   10. SKILLS & TECHNOLOGY SECTION
   ========================================================================== */
function renderSkillsSection() {
  const grid = document.getElementById('skills-categories-grid');
  if (!grid || grid.children.length > 0) return;

  const categories = portfolioData.skills.categories;
  grid.innerHTML = categories.map(cat => `
    <div class="skills-cat-panel">
      <div class="skills-cat-header">
        <h3 class="skills-cat-name">${cat.name}</h3>
        <span class="skills-cat-icon-tag">// STACK</span>
      </div>
      <p class="skills-cat-desc">${cat.description}</p>
      <div class="skills-badge-wrap">
        ${cat.items.map(item => `<span class="skill-outline-badge">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   11. CONTACT SECTION RENDER
   ========================================================================== */
function renderContactSection() {
  const actionsGrid = document.getElementById('contact-actions-grid');
  if (!actionsGrid || actionsGrid.children.length > 0) return;

  const links = portfolioData.contact.links;
  actionsGrid.innerHTML = links.map(l => `
    <a href="${l.href}" ${l.download ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="contact-action-row">
      <div class="action-row-left">
        <span class="action-row-lbl">${l.label}</span>
        <span class="action-row-val">${l.val}</span>
      </div>
      <span class="action-row-arrow">→</span>
    </a>
  `).join('');
}

/* ==========================================================================
   12. CASE STUDY MODAL DRAWER
   ========================================================================== */
function initCaseStudyModal() {
  const overlay = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) {
      closeModal();
    }
  });

  function closeModal() {
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
}

function openCaseStudy(projectId) {
  const overlay = document.getElementById('case-study-modal');
  const content = document.getElementById('modal-body-content');
  if (!overlay || !content) return;

  const p = portfolioData.projects.find(item => item.id === projectId);
  if (!p) return;

  content.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-crimson); letter-spacing: 0.12em; text-transform: uppercase;">
      ${p.number} // ${p.badge}
    </div>
    <h2 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: var(--text-primary); text-transform: uppercase; line-height: 1.1; margin-top: 0.4rem;">
      ${p.title}
    </h2>
    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-orange); text-transform: uppercase; margin-top: 0.25rem;">
      STATUS: ${p.status}
    </div>

    <div style="position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; margin-top: 1.25rem; border: 1px solid var(--border-subtle);">
      <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="margin-top: 1.5rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-crimson); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.4rem;">
        01 // THE PROBLEM
      </h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65;">
        ${p.problem}
      </p>
    </div>

    <div style="margin-top: 1.25rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-crimson); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.4rem;">
        02 // THE ARCHITECTURAL SOLUTION
      </h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65;">
        ${p.solution}
      </p>
    </div>

    <div style="margin-top: 1.25rem; background: rgba(14, 12, 12, 0.7); border: 1px solid var(--border-subtle); padding: 1.25rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-orange); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem;">
        DATA FLOW PIPELINE
      </h4>
      <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-primary); line-height: 1.6; word-break: break-word;">
        ${p.architecture}
      </div>
    </div>

    <div style="margin-top: 1.25rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-crimson); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.6rem;">
        KEY ENGINEERING HIGHLIGHTS
      </h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
        ${p.highlights.map(h => `
          <li style="font-size: 0.88rem; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 0.6rem;">
            <span style="color: var(--accent-crimson); font-family: var(--font-mono); font-size: 0.8rem;">▪</span>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-top: 1.5rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-crimson); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.6rem;">
        TECHNOLOGY STACK
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${p.technologies.map(t => `
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-primary); background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-subtle); padding: 0.25rem 0.6rem;">
            ${t}
          </span>
        `).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: var(--accent-crimson); color: #fff; padding: 0.75rem 1.4rem; font-family: var(--font-mono); font-size: 0.78rem; text-transform: uppercase; font-weight: 600;">
        <span>VIEW REPOSITORY</span>
        <span>→</span>
      </a>
      <a href="${p.demo}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: transparent; border: 1px solid var(--border-subtle); color: var(--text-primary); padding: 0.75rem 1.4rem; font-family: var(--font-mono); font-size: 0.78rem; text-transform: uppercase;">
        <span>PROJECT DEMO</span>
      </a>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   13. FOOTER CURRENT YEAR DYNAMIC UPDATE
   ========================================================================== */
function updateDynamicYear() {
  const yearEl = document.getElementById('current-year-span');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   14. CINEMATIC SCROLL REVEAL & STAGGER ENGINE
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const processLine = document.querySelector('.process-vertical-line');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    if (processLine) processLine.classList.add('is-drawn');
    return;
  }

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    if (processLine) processLine.classList.add('is-drawn');
    return;
  }

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Dedicated observer for the methodology process vertical line drawing
  const processSection = document.getElementById('process');
  if (processSection && processLine) {
    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          processLine.classList.add('is-drawn');
          processObserver.unobserve(processSection);
        }
      });
    }, { threshold: 0.2 });
    processObserver.observe(processSection);
  }
}

/* ==========================================================================
   15. MAGNETIC BUTTONS & INTERACTIVE ELEMENTS
   ========================================================================== */
function initMagneticElements() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const magneticTargets = document.querySelectorAll('[data-magnetic="true"]');

  magneticTargets.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      const moveX = Math.max(-10, Math.min(10, relX * 0.22));
      const moveY = Math.max(-10, Math.min(10, relY * 0.22));
      el.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 0)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}

/* ==========================================================================
   16. 3D CARD PERSPECTIVE TILT & DYNAMIC GLARE
   ========================================================================== */
function init3DCardParallax() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = document.querySelectorAll('.project-card, .pillar-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * -5;
      const rotY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px)`;

      const glare = card.querySelector('.card-glare-effect');
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(229, 9, 32, 0.2) 0%, transparent 65%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      const glare = card.querySelector('.card-glare-effect');
      if (glare) {
        glare.style.background = 'radial-gradient(circle at 50% 50%, rgba(229, 9, 32, 0.16) 0%, transparent 60%)';
      }
    });
  });
}

/* ==========================================================================
   17. BACKGROUND TYPOGRAPHY PARALLAX & HERO DEPTH
   ========================================================================== */
function initHeroParallax() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const heroTypography = document.querySelector('.hero-giant-typography-wrap');
  if (!heroTypography) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let isTicking = false;

  window.addEventListener('mousemove', (e) => {
    const normX = (e.clientX / window.innerWidth) - 0.5;
    const normY = (e.clientY / window.innerHeight) - 0.5;
    targetX = normX * -18;
    targetY = normY * -14;

    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateParallax);
    }
  }, { passive: true });

  function updateParallax() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    heroTypography.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

    if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
      requestAnimationFrame(updateParallax);
    } else {
      isTicking = false;
    }
  }
}

