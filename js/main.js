/**
 * VARUN VISHWA — STREAMLINED CYBER RONIN ENGINE
 * Smooth Spotlight, Tabbed Archive, Interactive Case Study Drawer & Audio HUD
 */

import { portfolioData } from './portfolio-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initPortraitSpotlight();
  renderAllSections();
  initArchiveTabs();
  initNavigationSpy();
  initCaseStudyModal();
  initAudioHUD();
  initInteractiveHelpers();
});

/* ==========================================================================
   01. PORTRAIT SPOTLIGHT ENGINE (LIGHTWEIGHT & SMOOTH)
   ========================================================================== */

function initPortraitSpotlight() {
  const frame = document.getElementById('hero-spotlight-frame');
  const ring = document.getElementById('spotlight-cursor-ring');

  if (!frame) return;

  function updateSpotlight(e) {
    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    frame.style.setProperty('--spotlight-x', `${x}px`);
    frame.style.setProperty('--spotlight-y', `${y}px`);

    if (ring) {
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }
  }

  frame.addEventListener('mousemove', updateSpotlight);
  frame.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      const rect = frame.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      frame.style.setProperty('--spotlight-x', `${x}px`);
      frame.style.setProperty('--spotlight-y', `${y}px`);
      if (ring) {
        ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    }
  }, { passive: true });

  // Center spotlight initially
  frame.style.setProperty('--spotlight-x', `50%`);
  frame.style.setProperty('--spotlight-y', `45%`);
}

/* ==========================================================================
   02. DATA RENDERING
   ========================================================================== */

function renderAllSections() {
  renderProjectsData();
  renderSkillsAndFrontiers();
  renderJourneyData();
  renderEducationData();
  renderAchievementsData();
  renderBeyondData();
  renderContactData();
}

function renderProjectsData(filter = 'ALL') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const list = portfolioData.projects.filter(p => {
    if (filter === 'ALL') return true;
    if (filter === 'AI' && p.category.includes('AI')) return true;
    if (filter === 'PRODUCT' && (p.category.includes('PRODUCT') || p.category.includes('SAAS'))) return true;
    if (filter === 'AR/3D' && p.category.includes('AR')) return true;
    return true;
  });

  grid.innerHTML = list.map(p => `
    <div class="project-case-card" data-project-id="${p.id}">
      <div class="project-thumb-box">
        <canvas class="project-canvas-preview" id="thumb-${p.id}" width="380" height="165"></canvas>
        <span class="project-badge-pill">${p.badge}</span>
        <span class="project-num-tag">${p.number}</span>
      </div>
      <div class="project-body">
        <div class="project-category">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-tech-chips">
          ${p.technologies.slice(0, 3).map(t => `<span class="tech-chip">${t}</span>`).join('')}
          ${p.technologies.length > 3 ? `<span class="tech-chip">+${p.technologies.length - 3}</span>` : ''}
        </div>
        <div class="project-card-footer">
          <span class="expand-case-btn">EXPLORE CASE STUDY <span>→</span></span>
          <span class="cyber-tag">DEEP DIVE</span>
        </div>
      </div>
    </div>
  `).join('');

  list.forEach(p => {
    const cvs = document.getElementById(`thumb-${p.id}`);
    if (cvs) drawProjectThumbnail(cvs, p);
  });

  grid.querySelectorAll('.project-case-card').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project-id');
      openCaseStudyModal(pId);
    });
  });
}

function drawProjectThumbnail(canvas, project) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = '#0d0907';
  ctx.fillRect(0, 0, w, h);

  // Clean Cyber Grid
  ctx.strokeStyle = 'rgba(224, 112, 32, 0.12)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 25) {
    ctx.beginPath();
    ctx.moveTo(x, 0); ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 25) {
    ctx.beginPath();
    ctx.moveTo(0, y); ctx.lineTo(w, y);
    ctx.stroke();
  }

  if (project.id === 'studymate') {
    ctx.strokeStyle = 'rgba(251, 219, 175, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(w * 0.2, h * 0.2, w * 0.24, h * 0.6);
    ctx.fillStyle = 'rgba(224, 112, 32, 0.4)';
    ctx.fillRect(w * 0.24, h * 0.32, w * 0.16, 4);
    ctx.fillRect(w * 0.24, h * 0.44, w * 0.16, 4);
    ctx.fillRect(w * 0.24, h * 0.56, w * 0.16, 4);

    ctx.strokeStyle = '#FF8533';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(w * 0.44, h * 0.5);
    ctx.lineTo(w * 0.72, h * 0.35);
    ctx.lineTo(w * 0.82, h * 0.65);
    ctx.stroke();

    ctx.fillStyle = '#FBDBAF';
    ctx.beginPath();
    ctx.arc(w * 0.72, h * 0.35, 5, 0, Math.PI * 2);
    ctx.arc(w * 0.82, h * 0.65, 6, 0, Math.PI * 2);
    ctx.fill();
  } else if (project.id === 'vedcrop') {
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(w * 0.35, h * 0.2, w * 0.3, h * 0.6);
    ctx.strokeStyle = '#E07020';
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.12); ctx.lineTo(w * 0.5, h * 0.88);
    ctx.moveTo(w * 0.3, h * 0.5); ctx.lineTo(w * 0.7, h * 0.5);
    ctx.stroke();
  } else if (project.id === 'mithrai-digimatrix') {
    ctx.strokeStyle = '#FBDBAF';
    ctx.lineWidth = 1.5;
    const cx = w * 0.5, cy = h * 0.5, s = 30;
    ctx.strokeRect(cx - s, cy - s, s * 2, s * 2);
    ctx.strokeRect(cx - s + 12, cy - s - 12, s * 2, s * 2);
    ctx.beginPath();
    ctx.moveTo(cx - s, cy - s); ctx.lineTo(cx - s + 12, cy - s - 12);
    ctx.moveTo(cx + s, cy - s); ctx.lineTo(cx + s + 12, cy - s - 12);
    ctx.moveTo(cx - s, cy + s); ctx.lineTo(cx - s + 12, cy + s - 12);
    ctx.moveTo(cx + s, cy + s); ctx.lineTo(cx + s + 12, cy + s - 12);
    ctx.stroke();
  } else {
    ctx.strokeStyle = 'rgba(224, 112, 32, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 36, 0, Math.PI * 2);
    ctx.arc(w * 0.5, h * 0.5, 54, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#FBDBAF';
    ctx.font = '9px Orbitron, sans-serif';
    ctx.fillText('SYS::ACTIVE', w * 0.4, h * 0.53);
  }
}

function renderSkillsAndFrontiers() {
  const sk = portfolioData.skills;
  const now = portfolioData.currentlyExploring;

  const matrix = document.getElementById('skills-matrix');
  if (matrix) {
    matrix.innerHTML = sk.categories.map(c => `
      <div class="skill-category-card">
        <div class="category-header">
          <span class="category-icon">⚡</span>
          <h3 class="category-name">${c.name}</h3>
        </div>
        <p class="category-summary">${c.summary}</p>
        <div class="skill-items-wrap">
          ${c.items.map(item => `<span class="skill-chip">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  const frontiers = document.getElementById('now-grid');
  if (frontiers) {
    frontiers.innerHTML = now.topics.map(t => `
      <div class="now-topic-item">
        <span class="now-topic-name">${t.name}</span>
        <span class="status-pulse-badge">
          <span class="status-pulse-dot"></span>
          ${t.status}
        </span>
      </div>
    `).join('');
  }
}

function renderJourneyData() {
  const j = portfolioData.journey;
  const wrap = document.getElementById('journey-timeline-flow');
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="timeline-spine"></div>
    ${j.timeline.map(node => `
      <div class="timeline-node">
        <div class="timeline-dot"></div>
        <div class="timeline-content-card">
          <div class="node-meta-row">
            <span class="node-period">${node.period}</span>
            <span class="cyber-tag">${node.badge}</span>
          </div>
          <h3 class="node-role-title">${node.role}</h3>
          <p class="node-desc">${node.description}</p>
          <ul class="node-impact-list">
            ${node.impact.map(imp => `<li>${imp}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('')}
  `;
}

function renderEducationData() {
  const edu = portfolioData.education;
  const heroCard = document.getElementById('education-card');
  if (!heroCard) return;

  heroCard.innerHTML = `
    <div class="edu-core-header">
      <div class="section-tag">ACADEMIC CREDENTIAL</div>
      <h3 class="edu-degree-title">${edu.degree}</h3>
      <div class="edu-institution-name">${edu.institution}</div>
      <div class="edu-affiliation">${edu.university} • ${edu.regulation} • ${edu.status}</div>
    </div>
    <div class="edu-details-grid">
      ${edu.details.map(d => `
        <div class="edu-detail-box">
          <div class="edu-detail-label">${d.label}</div>
          <div class="edu-detail-val">
            ${d.value.startsWith('[') ? `<span class="placeholder-tag">${d.value}</span>` : d.value}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAchievementsData() {
  const ach = portfolioData.achievements;
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;

  grid.innerHTML = ach.categories.map(cat => `
    <div class="achievement-category-block">
      <div class="archive-category-title">
        <span>${cat.category}</span>
        <span class="cyber-tag">VERIFIED</span>
      </div>
      <div class="archive-items-list">
        ${cat.items.map(item => `
          <div class="archive-item-card">
            <div class="archive-item-header">
              <h4 class="archive-item-title">${item.title}</h4>
              <span class="archive-status-badge">${item.status}</span>
            </div>
            <p class="archive-item-desc">${item.description}</p>
            <div class="edu-detail-label">REF: <span class="placeholder-tag">${item.credentialId}</span></div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderBeyondData() {
  const b = portfolioData.beyondCode;
  const grid = document.getElementById('beyond-grid');
  if (!grid) return;

  grid.innerHTML = b.cards.map(c => `
    <div class="beyond-card">
      <div class="beyond-card-header">
        <span class="beyond-num">${c.number}</span>
        <span class="beyond-icon">✦</span>
      </div>
      <h3 class="beyond-title">${c.title}</h3>
      <div class="beyond-tagline">${c.tagline}</div>
      <p class="beyond-desc">${c.description}</p>
    </div>
  `).join('');
}

function renderContactData() {
  const c = portfolioData.contact;
  const linksContainer = document.getElementById('terminal-links-list');
  if (linksContainer) {
    linksContainer.innerHTML = c.links.map(l => `
      <a href="${l.url}" class="terminal-action-btn" target="_blank" rel="noopener noreferrer">
        <span>// ${l.name}</span>
        <span>➔</span>
      </a>
    `).join('');
  }
}

/* ==========================================================================
   03. ARCHIVE TABS INTERACTION
   ========================================================================== */

function initArchiveTabs() {
  const tabBtns = document.querySelectorAll('.archive-tab-btn');
  const panes = document.querySelectorAll('.archive-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = `pane-${btn.getAttribute('data-tab')}`;
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* ==========================================================================
   04. CASE STUDY MODAL DRAWER
   ========================================================================== */

function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', closeCaseStudyModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCaseStudyModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeCaseStudyModal();
    }
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjectsData(cat);
    });
  });
}

function openCaseStudyModal(projectId) {
  const modal = document.getElementById('case-study-modal');
  const content = document.getElementById('modal-dynamic-content');
  if (!modal || !content) return;

  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  content.innerHTML = `
    <div class="modal-header-meta">
      <span>${project.number}</span>
      <span>//</span>
      <span>${project.category}</span>
      <span class="project-badge-pill">${project.badge}</span>
    </div>
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-text" style="margin-bottom: 1.25rem; font-size: 1rem; color: var(--cream-bright);">
      ${project.shortDesc}
    </p>

    <div class="modal-case-section">
      <h4 class="modal-section-title">THE PROBLEM</h4>
      <p class="modal-text">${project.problem}</p>
    </div>

    <div class="modal-case-section">
      <h4 class="modal-section-title">ENGINEERED SOLUTION</h4>
      <p class="modal-text">${project.solution}</p>
    </div>

    <div class="modal-case-section">
      <h4 class="modal-section-title">SYSTEM ARCHITECTURE</h4>
      <div class="modal-architecture-box">${project.architecture}</div>
    </div>

    <div class="modal-case-section">
      <h4 class="modal-section-title">ROLE & CONTRIBUTIONS</h4>
      <p class="modal-text">${project.role}</p>
      <ul class="modal-highlights-list" style="margin-top: 0.5rem;">
        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-case-section">
      <h4 class="modal-section-title">TECH STACK</h4>
      <div class="project-tech-chips">
        ${project.technologies.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-footer-actions">
      <button class="cyber-btn-primary copy-placeholder-btn" data-copy="${project.github}">
        <span>GITHUB REPO</span>
        <span class="placeholder-tag">${project.github}</span>
      </button>
      <button class="cyber-btn-secondary copy-placeholder-btn" data-copy="${project.demo}">
        <span>LIVE DEMO</span>
        <span class="placeholder-tag">${project.demo}</span>
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  content.querySelectorAll('.copy-placeholder-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      copyToClipboard(val);
    });
  });
}

function closeCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   05. NAVIGATION & SECTION SPY
   ========================================================================== */

function initNavigationSpy() {
  const sections = [
    { id: 'hero', index: '01' },
    { id: 'about', index: '02' },
    { id: 'work', index: '03' },
    { id: 'skills', index: '04' },
    { id: 'archive', index: '05' },
    { id: 'beyond', index: '06' },
    { id: 'contact', index: '06' }
  ];

  const hudCounter = document.getElementById('hud-counter-text');
  const desktopLinks = document.querySelectorAll('.nav-item-link');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-drawer-close');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  if (mobileCloseBtn && mobileDrawer) {
    mobileCloseBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 180;

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          if (hudCounter) hudCounter.textContent = `${sec.index} / 06`;

          desktopLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${sec.id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   06. WEB AUDIO HUD SYNTHESIZER
   ========================================================================== */

let audioCtx = null;
let soundEnabled = false;

function initAudioHUD() {
  const audioToggle = document.getElementById('audio-toggle-btn');
  if (!audioToggle) return;

  audioToggle.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    soundEnabled = !soundEnabled;
    audioToggle.classList.toggle('active', soundEnabled);
    audioToggle.innerHTML = soundEnabled ? '🔊' : '🔈';

    if (soundEnabled) {
      playFuturisticBeep(880, 0.06, 'sine');
      showToast('AUDIO HUD: ACTIVATED');
    } else {
      showToast('AUDIO HUD: MUTED');
    }
  });

  document.querySelectorAll('button, a, .project-case-card, .stage-mini-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (soundEnabled && audioCtx) {
        playFuturisticBeep(440 + Math.random() * 200, 0.02, 'sine', 0.03);
      }
    });
  });
}

function playFuturisticBeep(freq, duration, type = 'sine', gainVal = 0.05) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.3, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    console.debug('Audio err', err);
  }
}

/* ==========================================================================
   07. INTERACTIVE TOAST & UTILITIES
   ========================================================================== */

function initInteractiveHelpers() {
  const toast = document.getElementById('hud-toast');
  const toastText = document.getElementById('toast-text');

  window.showToast = function(msg) {
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2400);
  };

  window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`COPIED: ${text}`);
    }).catch(() => {
      showToast(`SELECTED: ${text}`);
    });
  };
}
