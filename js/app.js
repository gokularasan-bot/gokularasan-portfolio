/**
 * GOKULARASAN — MASTER APPLICATION BOOTSTRAP & DYNAMIC PAGES RENDERER
 * Generates all 40 individual printed book pages, initializes 3D PageFlip Engine,
 * Case Study Lab Modals, Transparent Bottom Scrubber, and Global Action Listeners.
 * Humanizes all content by converting markdown asterisks to semantic HTML (zero raw stars).
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all 40 pages from BOOK_DATA into the 3D book container
  renderAllPages();

  // 2. Initialize StPageFlip 3D Book Engine & Transparent Scrubber
  const bookEngine = new PrintedBookEngine();

  // 3. Setup Modal Case Studies & Global Actions
  setupModals();
  setupGlobalActions(bookEngine);
  setupContactForm();

  // 4. Initialize Real-Time Working Vintage Desk Clock
  initDeskClock();
});

/**
 * Converts text and markdown into individual flying words that assemble onto the page.
 * Preserves bold/italic markup and semantic spacing while granting each word
 * an individual physical 3D entry vector and staggered arrival delay.
 */
function formatFlyWords(text, baseDelayMs = 150, direction = 'from-left') {
  if (text === null || text === undefined) return '';
  if (typeof text !== 'string') text = String(text);

  // 1. Convert markdown bold and italic to HTML
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\*([^\*]+?)\*/g, '<em>$1</em>');
  formatted = formatted.replace(/\*/g, '');

  // 2. Tokenize by tags vs text
  const tokens = formatted.split(/(<[^>]+>)/g);
  let wordIndex = 0;

  const result = tokens.map(token => {
    if (!token) return '';
    if (token.startsWith('<') && token.endsWith('>')) {
      return token; // Leave HTML tags intact
    }

    // Split text by whitespace into words while preserving spaces
    const parts = token.split(/(\s+)/);
    return parts.map(part => {
      if (!part || /^\s+$/.test(part)) {
        return part; // Pure whitespace
      }

      const idx = wordIndex++;
      const dirSign = direction === 'from-right' ? 1 : (direction === 'from-top' ? 0 : -1);
      const xOffset = dirSign === 0 ? ((idx % 5) - 2) * 8 : dirSign * (28 + (idx % 6) * 5);
      const yOffset = direction === 'from-top' ? -22 - (idx % 4) * 4 : ((idx % 3) - 1) * 6;
      const rot = ((idx % 5) - 2) * 1.8;
      const delay = baseDelayMs + Math.min(650, idx * 14);

      return `<span class="word-fly" style="--w-dx:${xOffset}px; --w-dy:${yOffset}px; --w-rot:${rot}deg; --w-delay:${delay}ms;">${part}</span>`;
    }).join('');
  }).join('');

  return result;
}

/**
 * Humanizes text by converting markdown asterisks to semantic HTML tags
 * and removing any remaining stray asterisk characters.
 */
function formatHumanText(text) {
  if (text === null || text === undefined) return '';
  if (typeof text !== 'string') return String(text);

  let formatted = text;
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\*([^\*]+?)\*/g, '<em>$1</em>');
  formatted = formatted.replace(/\*/g, '');
  return formatted;
}

/* ==========================================================================
   DYNAMIC 40-PAGE RENDERER (Authentic Printed Volume Layout — Full Page Fill)
   ========================================================================== */
function renderAllPages() {
  const container = document.getElementById('book-flip-container');
  if (!container || !BOOK_DATA || !BOOK_DATA.spreads) return;

  let pagesHTML = '';

  BOOK_DATA.spreads.forEach(sp => {
    const lp = sp.leftPage;
    const rp = sp.rightPage;

    // -------------------------------------------------------------
    // 1. LEFT PAGE HTML
    // -------------------------------------------------------------
    let leftBodyHTML = '';

    // SPREAD 01 - PAGE 1: DEDICATED FULL-PAGE PORTRAIT PHOTO (UNTAPED)
    if (sp.spreadNumber === 1 && lp.isFullPortraitPage) {
      leftBodyHTML = `
        <div class="page-chapter-header anim-assemble anim-from-top delay-1">
          <div class="page-category-tag">${formatFlyWords('FRONTISPIECE // AUTHOR PROFILE', 140, 'from-top')}</div>
          <h1 class="page-main-title">${formatFlyWords('Gokularasan', 200, 'from-top')}</h1>
          <div class="page-main-subtitle">${formatFlyWords('Electrical & Electronics Engineering · Kumaraguru College of Technology', 280, 'from-top')}</div>
        </div>

        <div class="book-photo-frame full-page-photo anim-assemble anim-photo-float delay-3">
          <img src="${lp.portraitPhoto}" alt="Gokularasan Portrait Photograph" loading="lazy">
          <div class="book-photo-caption">${formatFlyWords(lp.portraitCaption, 450, 'from-bottom')}</div>
        </div>
      `;
    } else {
      // STANDARD LEFT PAGE
      leftBodyHTML = `
        <div class="page-chapter-header anim-assemble anim-from-top delay-1">
          <div class="page-category-tag">${formatFlyWords(lp.headerTag, 140, 'from-top')}</div>
          <h1 class="page-main-title">${formatFlyWords(sp.chapterTitle, 200, 'from-top')}</h1>
          <div class="page-main-subtitle">${formatFlyWords(sp.chapterSubtitle, 280, 'from-top')}</div>
        </div>
      `;

      if (lp.lead) {
        leftBodyHTML += `<p class="page-lead-paragraph anim-assemble anim-from-left delay-2">${formatFlyWords(lp.lead, 240, 'from-left')}</p>`;
      }

      if (lp.bodyText) {
        leftBodyHTML += `
          <p class="page-body-paragraph anim-assemble anim-from-left delay-3">
            ${lp.dropCap ? `<span class="drop-cap word-fly" style="--w-dx:-36px; --w-dy:-8px; --w-rot:-3.2deg; --w-delay:260ms;">${lp.dropCap}</span>` : ''}
            ${formatFlyWords(lp.bodyText, 320, 'from-left')}
          </p>
        `;
      }

      if (lp.subParagraph) {
        leftBodyHTML += `<p class="page-body-paragraph anim-assemble anim-from-left delay-4">${formatFlyWords(lp.subParagraph, 420, 'from-left')}</p>`;
      }

      // Specs Data Table
      if (lp.specs && lp.specs.length > 0) {
        leftBodyHTML += `
          <table class="specs-table anim-assemble anim-from-bottom delay-5">
            <tbody>
              ${lp.specs.map(s => `
                <tr>
                  <td class="spec-label">${formatFlyWords(s.label, 480, 'from-left')}</td>
                  <td class="spec-value">${formatFlyWords(s.value, 510, 'from-bottom')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }

      // Score Table (Education 02)
      if (lp.scoreTable) {
        leftBodyHTML += `
          <table class="specs-table anim-assemble anim-from-bottom delay-5">
            <tbody>
              ${lp.scoreTable.map(sc => `
                <tr>
                  <td class="spec-label">${formatFlyWords(sc.exam, 480, 'from-left')}</td>
                  <td class="spec-value" style="color:var(--ink-primary); font-weight:800;">${formatFlyWords(sc.score, 510, 'from-bottom')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }

      // Skill Groups (Left Page Skills)
      if (lp.skillGroups) {
        leftBodyHTML += lp.skillGroups.map((sg, i) => `
          <div class="anim-assemble anim-from-left delay-${Math.min(7, 4 + i)}" style="margin: 4px 0;">
            <div style="font-family:var(--font-technical); font-size:0.92rem; font-weight:700; color:var(--ink-primary); margin-bottom:3px;">${formatFlyWords(sg.title, 420 + i * 40, 'from-left')}</div>
            <div class="skill-tag-cloud">
              ${sg.skills.map(sk => `<span class="skill-badge-chip">${formatFlyWords(sk, 460 + i * 30, 'from-bottom')}</span>`).join('')}
            </div>
          </div>
        `).join('');
      }

      // Applied Pillars (Focus Left Page)
      if (lp.pillars) {
        leftBodyHTML += lp.pillars.map((p, i) => `
          <div class="pillar-card anim-assemble anim-from-left delay-${Math.min(7, 4 + i)}">
            <div class="pillar-code">${formatFlyWords(p.code, 420 + i * 40, 'from-left')}</div>
            <div class="pillar-title">${formatFlyWords(p.title, 450 + i * 40, 'from-left')}</div>
            <div class="pillar-desc">${formatFlyWords(p.desc, 480 + i * 40, 'from-left')}</div>
          </div>
        `).join('');
      }

      // Bottom Callouts
      if (lp.quote) {
        leftBodyHTML += `<div class="page-pull-quote anim-assemble anim-from-left delay-5">"${formatFlyWords(lp.quote, 460, 'from-left')}"</div>`;
      }
      if (lp.solarHighlight) {
        leftBodyHTML += `<div class="page-pull-quote anim-assemble anim-from-left delay-5" style="border-left-color:var(--ink-primary); font-size:0.96rem;">${formatFlyWords(lp.solarHighlight, 460, 'from-left')}</div>`;
      }
      if (lp.solutionNote) {
        leftBodyHTML += `<p class="page-body-paragraph anim-assemble anim-from-left delay-5" style="font-size:0.96rem; color:var(--ink-secondary); margin-top:4px;"><strong>Engineered Methodology:</strong> ${formatFlyWords(lp.solutionNote, 480, 'from-left')}</p>`;
      }
      if (lp.disclaimer) {
        leftBodyHTML += `<div class="anim-assemble anim-from-left delay-6" style="font-family:var(--font-mono); font-size:0.75rem; color:var(--ink-accent); border-left:3px solid var(--ink-accent); padding-left:10px; margin-top:5px; line-height:1.35;">${formatFlyWords(lp.disclaimer, 520, 'from-left')}</div>`;
      }
    }

    // -------------------------------------------------------------
    // 2. RIGHT PAGE HTML
    // -------------------------------------------------------------
    let rightBodyHTML = '';

    // Large Museum Matte Photo (if present on Right Page)
    if (rp.photo) {
      rightBodyHTML += `
        <div class="book-photo-frame anim-assemble anim-photo-float delay-2">
          <img src="${rp.photo}" alt="${formatHumanText(sp.chapterTitle)} Photographic Plate" loading="lazy">
          <div class="book-photo-caption">${formatFlyWords(rp.photoCaption, 420, 'from-bottom')}</div>
        </div>
      `;
    }

    if (rp.secondaryHeading) {
      rightBodyHTML += `<h2 class="page-secondary-title anim-assemble anim-from-top delay-2">${formatFlyWords(rp.secondaryHeading, 200, 'from-top')}</h2>`;
    }

    if (rp.secondaryText) {
      rightBodyHTML += `<p class="page-body-paragraph anim-assemble anim-from-right delay-3">${formatFlyWords(rp.secondaryText, 300, 'from-right')}</p>`;
    }

    // Domains Grid (About Spread)
    if (rp.domains) {
      rightBodyHTML += `
        <div class="anim-assemble anim-from-right delay-4" style="display:flex; flex-direction:column; gap:5px; margin:4px 0;">
          ${rp.domains.map((d, i) => `
            <div style="background:var(--book-paper-light); border:1px solid var(--book-border); padding:5px 10px; border-radius:3px;">
              <strong style="font-family:var(--font-technical); color:var(--ink-primary); font-size:0.92rem;">${formatFlyWords(d.name, 340 + i * 30, 'from-right')}:</strong>
              <span style="font-size:0.92rem; color:var(--ink-body);"> ${formatFlyWords(d.desc, 380 + i * 30, 'from-right')}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Skill Groups (Right Page Software & Analytical)
    if (rp.skillGroups) {
      rightBodyHTML += rp.skillGroups.map((sg, i) => `
        <div class="anim-assemble anim-from-right delay-${Math.min(7, 4 + i)}" style="margin: 4px 0;">
          <div style="font-family:var(--font-technical); font-size:0.92rem; font-weight:700; color:var(--ink-primary); margin-bottom:3px;">${formatFlyWords(sg.title, 340 + i * 40, 'from-right')}</div>
          <div class="skill-tag-cloud">
            ${sg.skills.map(sk => `<span class="skill-badge-chip">${formatFlyWords(sk, 380 + i * 30, 'from-bottom')}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    // Research Pillars (Right Page Focus)
    if (rp.pillars) {
      rightBodyHTML += rp.pillars.map((p, i) => `
        <div class="pillar-card anim-assemble anim-from-right delay-${Math.min(7, 4 + i)}">
          <div class="pillar-code">${formatFlyWords(p.code, 340 + i * 40, 'from-right')}</div>
          <div class="pillar-title">${formatFlyWords(p.title, 370 + i * 40, 'from-right')}</div>
          <div class="pillar-desc">${formatFlyWords(p.desc, 400 + i * 40, 'from-right')}</div>
        </div>
      `).join('');
    }

    // 9-Step Process Flow (Ambertex)
    if (rp.processSteps) {
      rightBodyHTML += `
        <div class="flow-step-grid anim-assemble anim-from-right delay-4">
          ${rp.processSteps.map((st, i) => `
            <div class="flow-step-card">
              <span class="flow-step-num">${formatFlyWords(st.step, 320 + i * 30, 'from-top')}</span>
              <div class="flow-step-info">
                <div class="flow-step-name">${formatFlyWords(st.name, 350 + i * 30, 'from-right')}</div>
                <div class="flow-step-desc">${formatFlyWords(st.desc, 380 + i * 30, 'from-right')}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Profile Cards (Spread 18)
    if (rp.profileCards) {
      rightBodyHTML += rp.profileCards.map((c, i) => `
        <div class="profile-card anim-assemble anim-from-right delay-${Math.min(7, 4 + i)}">
          <div class="profile-card-title">${formatFlyWords(c.title, 340 + i * 40, 'from-right')}</div>
          <div class="profile-card-handle">${formatFlyWords(c.handle, 370 + i * 40, 'from-right')}</div>
          <div class="profile-card-desc">${formatFlyWords(c.desc, 400 + i * 40, 'from-right')}</div>
          <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="btn-book-action btn-primary" style="padding:5px 12px; font-size:0.78rem;">
            ${formatFlyWords(c.cta, 440 + i * 40, 'from-bottom')}
          </a>
        </div>
      `).join('');
    }

    // Document Summary Cards (Resume Spread 19)
    if (rp.docSummaryCards) {
      rightBodyHTML += `
        <div class="anim-assemble anim-from-right delay-4" style="display:flex; flex-direction:column; gap:5px; margin:6px 0;">
          ${rp.docSummaryCards.map((cd, i) => `
            <div style="background:var(--book-paper-light); border:1px solid var(--book-border); padding:6px 10px; border-radius:3px;">
              <div style="font-family:var(--font-technical); font-size:0.92rem; font-weight:700; color:var(--ink-primary);">${formatFlyWords(cd.label, 340 + i * 30, 'from-right')}</div>
              <div style="font-size:0.9rem; color:var(--ink-body); margin-top:2px;">${formatFlyWords(cd.detail, 380 + i * 30, 'from-right')}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Bullet Lists (Key Features / Learnings / Highlights)
    const listItems = rp.keyFeatures || rp.learnings || rp.highlights;
    if (listItems && listItems.length > 0) {
      rightBodyHTML += `
        <ul class="book-bullet-list anim-assemble anim-from-right delay-4">
          ${listItems.map((item, i) => `<li>${formatFlyWords(item, 340 + i * 35, 'from-right')}</li>`).join('')}
        </ul>
      `;
    }

    // Tags Cloud
    if (rp.tags) {
      rightBodyHTML += `
        <div class="skill-tag-cloud anim-assemble anim-from-bottom delay-5">
          ${rp.tags.map((t, i) => `<span class="skill-badge-chip" style="background:#E2D4B8;">${formatFlyWords(t, 400 + i * 25, 'from-bottom')}</span>`).join('')}
        </div>
      `;
    }

    // Contact Form (Spread 20)
    if (rp.isContactForm) {
      rightBodyHTML += `
        <form class="book-contact-form anim-assemble anim-from-bottom delay-4" id="book-contact-form">
          <input type="text" id="contact-name" placeholder="Your Full Name" required>
          <input type="email" id="contact-email" placeholder="Your Email Address" required>
          <input type="text" id="contact-subject" placeholder="Inquiry Subject / Opportunity" required>
          <textarea id="contact-message" placeholder="Message details regarding projects or collaboration..." required></textarea>
          <button type="submit" class="btn-book-action btn-primary" style="width:100%; padding:9px; font-size:0.86rem;">
            TRANSMIT MESSAGE ↗
          </button>
          <div id="contact-feedback" style="display:none; font-family:var(--font-mono); font-size:0.76rem; padding:6px; border-radius:3px;"></div>
        </form>
      `;
    }

    // Action Buttons
    if (rp.actions && rp.actions.length > 0) {
      rightBodyHTML += `
        <div class="book-action-row anim-assemble anim-from-bottom delay-6">
          ${rp.actions.map(a => {
            if (a.modalId) {
              return `
                <button class="btn-book-action ${a.primary ? 'btn-primary' : ''} btn-open-modal" data-modal-target="${a.modalId}">
                  ${formatFlyWords(a.label, 500, 'from-bottom')}
                </button>
              `;
            } else if (a.action === 'jump-projects') {
              return `
                <button class="btn-book-action ${a.primary ? 'btn-primary' : ''}" id="btn-jump-projects">
                  ${formatFlyWords(a.label, 500, 'from-bottom')}
                </button>
              `;
            } else if (a.action === 'jump-resume') {
              return `
                <button class="btn-book-action ${a.primary ? 'btn-primary' : ''}" id="btn-jump-resume">
                  ${formatFlyWords(a.label, 500, 'from-bottom')}
                </button>
              `;
            } else {
              return `
                <a href="${a.url}" ${a.target ? `target="${a.target}"` : ''} ${a.download ? `download="${a.download}"` : ''} rel="noopener noreferrer" class="btn-book-action ${a.primary ? 'btn-primary' : ''}">
                  ${formatFlyWords(a.label, 500, 'from-bottom')}
                </a>
              `;
            }
          }).join('')}
        </div>
      `;
    }

    // Social Links
    if (rp.socials) {
      rightBodyHTML += `
        <div class="anim-assemble anim-from-bottom delay-7" style="display:flex; gap:6px; margin-top:6px;">
          ${rp.socials.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="btn-book-action" style="padding:5px 10px; font-size:0.74rem;">
              ${formatFlyWords(s.name, 540, 'from-bottom')}
            </a>
          `).join('')}
        </div>
      `;
    }

    // Append both pages as individual StPageFlip page blocks
    pagesHTML += `
      <div class="book-page page-left" data-page-index="${sp.leftPageNum - 1}">
        <div class="page-content-wrapper">
          ${leftBodyHTML}
        </div>
        <footer class="book-page-footer anim-assemble anim-from-bottom delay-6">
          <span class="footer-page-num">${formatFlyWords(String(sp.leftPageNum).padStart(2, '0'), 580, 'from-bottom')}</span>
          <span>${formatFlyWords(BOOK_DATA.author.name.toUpperCase() + ' · ' + sp.category, 620, 'from-bottom')}</span>
        </footer>
      </div>

      <div class="book-page page-right" data-page-index="${sp.rightPageNum - 1}">
        <div class="page-content-wrapper">
          ${rightBodyHTML}
        </div>
        <footer class="book-page-footer anim-assemble anim-from-bottom delay-6">
          <span>${formatFlyWords('ENGINEERING FIELD HANDBOOK', 620, 'from-bottom')}</span>
          <span class="footer-page-num">${formatFlyWords(String(sp.rightPageNum).padStart(2, '0'), 580, 'from-bottom')}</span>
        </footer>
      </div>
    `;
  });

  container.innerHTML = pagesHTML;
}

/* ==========================================================================
   CASE STUDY MODALS SETUP
   ========================================================================== */
function setupModals() {
  document.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) modal.classList.add('open');
    });
  });

  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.case-study-modal-backdrop').forEach(m => m.classList.remove('open'));
    });
  });

  document.querySelectorAll('.case-study-modal-backdrop').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) m.classList.remove('open');
    });
  });
}

/* ==========================================================================
   GLOBAL CTAs & JUMP ACTIONS
   ========================================================================== */
function setupGlobalActions(engine) {
  const jumpProjects = document.getElementById('btn-jump-projects');
  if (jumpProjects) {
    jumpProjects.addEventListener('click', () => {
      engine.flipToPage(8); // Page 9 (Project 01)
    });
  }

  const jumpResume = document.getElementById('btn-jump-resume');
  if (jumpResume) {
    jumpResume.addEventListener('click', () => {
      engine.flipToPage(36); // Page 37 (Resume)
    });
  }
}

/* ==========================================================================
   CONTACT FORM HANDLER
   ========================================================================== */
function setupContactForm() {
  const form = document.getElementById('book-contact-form');
  const feedback = document.getElementById('contact-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    feedback.style.display = 'block';
    feedback.style.background = '#E8DCBF';
    feedback.style.color = 'var(--ink-primary)';
    feedback.style.border = '1.5px solid var(--book-border)';
    feedback.innerHTML = `
      <strong>Message Prepared:</strong> Thank you, ${name}. Direct email dispatch opened for <a href="mailto:gokularasan.28eee@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}" style="color:var(--ink-primary); font-weight:700; text-decoration:underline;">gokularasan.28eee@gmail.com</a>.
    `;
    form.reset();
  });
}

/* ==========================================================================
   REAL-TIME VINTAGE SEIKO DESK CLOCK CONTROLLER
   Synchronizes analog hour, minute, and continuous sweeping second hands.
   ========================================================================== */
function initDeskClock() {
  const hourHand = document.getElementById('clock-hand-hour');
  const minHand = document.getElementById('clock-hand-minute');
  const secHand = document.getElementById('clock-hand-second');
  if (!hourHand || !minHand || !secHand) return;

  function tick() {
    const now = new Date();
    const ms = now.getMilliseconds();
    const seconds = now.getSeconds() + ms / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    const secDeg = seconds * 6;  // 360 / 60
    const minDeg = minutes * 6;  // 360 / 60
    const hourDeg = hours * 30;  // 360 / 12

    secHand.style.transform = `rotate(${secDeg.toFixed(2)}deg)`;
    minHand.style.transform = `rotate(${minDeg.toFixed(2)}deg)`;
    hourHand.style.transform = `rotate(${hourDeg.toFixed(2)}deg)`;

    requestAnimationFrame(tick);
  }

  tick();
}

