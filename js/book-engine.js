/**
 * GOKULARASAN — 3D PRINTED BOOK ENGINE (StPageFlip Wrapper & Simultaneous Zoom-Opening)
 * Realistic 3D paper bending, dynamic curling shadows, interactive mouse/touch drag,
 * page-edge click turns, keyboard navigation, simultaneous 3D cover opening,
 * seamless bottom spread scrubber, and physical dynamic content-arrival assembly.
 */

class PrintedBookEngine {
  constructor() {
    this.pageFlip = null;
    this.currentPage = 0;
    this.totalPages = 40;
    this.totalSpreads = 20;
    this.isOpen = false;
    this.isDraggingScrubber = false;
    this.audioCtx = null;
    this.assemblyTimer = null;
    this.settleTimer = null;

    // DOM Elements
    this.deskScene = document.getElementById('desk-cover-scene');
    this.bookStage = document.getElementById('open-book-stage');
    this.flipContainer = document.getElementById('book-flip-container');
    this.openBookHotspot = document.getElementById('desk-book-hotspot');

    // Scrubber DOM Elements
    this.scrubber = document.getElementById('book-bottom-scrubber');
    this.scrubberTrack = document.getElementById('scrubber-track');
    this.scrubberFill = document.getElementById('scrubber-fill');
    this.scrubberThumb = document.getElementById('scrubber-thumb');
    this.scrubberLabel = document.getElementById('scrubber-label');
    this.btnPrev = document.getElementById('scrubber-btn-prev');
    this.btnNext = document.getElementById('scrubber-btn-next');

    // Scroll debounce
    this.scrollAccumulator = 0;
    this.scrollThreshold = 100;
    this.scrollTimer = null;

    this.init();
  }

  init() {
    this.initAudio();
    this.initPageFlip();
    this.bindEvents();
    this.bindScrubber();
    this.updateScrubberUI(0);
  }

  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {}
  }

  playPaperRustle() {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      // Soft natural paper friction rustle
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.35);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  initPageFlip() {
    if (!window.St || !window.St.PageFlip) {
      console.warn("StPageFlip library not loaded.");
      return;
    }

    try {
      const pageWidth = Math.max(480, Math.round(window.innerWidth / 2));
      const pageHeight = Math.max(600, window.innerHeight);

      this.pageFlip = new St.PageFlip(this.flipContainer, {
        width: pageWidth,
        height: pageHeight,
        size: 'stretch',
        minWidth: 280,
        maxWidth: 3600,
        minHeight: 320,
        maxHeight: 2400,
        maxShadowOpacity: 0.25,
        showCover: false,
        mobileScrollSupport: false,
        drawShadow: true,
        flippingTime: 700,
        usePortrait: true,
        startPage: 0
      });

      const pages = document.querySelectorAll('.book-page');
      this.totalPages = pages.length;
      this.totalSpreads = Math.ceil(this.totalPages / 2);
      this.pageFlip.loadFromHTML(pages);

      // Event Listeners
      this.pageFlip.on('flip', (e) => {
        this.currentPage = e.data;
        if (this.isOpen) {
          this.updateScrubberUI(this.currentPage, true);
          this.triggerSpreadAssembly(this.currentPage, 420);
        }
        this.playPaperRustle();
      });

      this.pageFlip.on('changeState', (e) => {
        if (e.data === 'flipping') {
          this.playPaperRustle();
        } else if (e.data === 'read' && this.isOpen) {
          // Extra safety check: ensure the active spread is assembling if un-animated
          const leftIdx = Math.floor(this.currentPage / 2) * 2;
          const activePage = document.querySelector(`.book-page[data-page-index="${leftIdx}"]`);
          if (activePage && !activePage.classList.contains('page-assembling') && !activePage.classList.contains('page-settled')) {
            this.triggerSpreadAssembly(this.currentPage, 40);
          }
        }
      });

      // Window Resize Dynamic Sync
      window.addEventListener('resize', () => {
        if (this.pageFlip) {
          this.pageFlip.updateFromHtml(document.querySelectorAll('.book-page'));
        }
      });
    } catch (err) {
      console.error("Error initializing StPageFlip:", err);
    }
  }

  triggerSpreadAssembly(pageIndex, delayMs = 420) {
    if (!this.isOpen) return;

    clearTimeout(this.assemblyTimer);
    clearTimeout(this.settleTimer);

    const leftIdx = Math.floor(pageIndex / 2) * 2;
    const rightIdx = leftIdx + 1;

    // Reset all pages across the book
    // 1. Inactive pages are marked settled
    // 2. Active spread pages have page-assembling and page-settled removed immediately
    //    so they are in their un-assembled, off-page starting positions
    const allPages = document.querySelectorAll('.book-page');
    allPages.forEach(p => {
      const idx = parseInt(p.getAttribute('data-page-index'), 10);
      if (idx !== leftIdx && idx !== rightIdx) {
        p.classList.remove('page-assembling');
        p.classList.add('page-settled');
      } else {
        p.classList.remove('page-assembling', 'page-settled');
        // Force synchronous style reflow so browser commits off-screen starting coordinates
        void p.offsetHeight;
      }
    });

    // Schedule assembly to start as the turning page lands flat
    this.assemblyTimer = setTimeout(() => {
      const activePages = document.querySelectorAll(
        `.book-page[data-page-index="${leftIdx}"], .book-page[data-page-index="${rightIdx}"]`
      );

      activePages.forEach(p => {
        p.classList.add('page-assembling');
      });

      // Allow complete arrival animation sequence (up to 2000ms) before locking into settled state
      this.settleTimer = setTimeout(() => {
        activePages.forEach(p => {
          p.classList.remove('page-assembling');
          p.classList.add('page-settled');
        });
      }, 2000);
    }, delayMs);
  }

  bindEvents() {
    // Touch / Pointer Down for Tactile Physical Response (0-150ms)
    if (this.openBookHotspot) {
      this.openBookHotspot.addEventListener('pointerdown', () => {
        this.openBookHotspot.classList.add('touch-depress');
      });

      window.addEventListener('pointerup', () => {
        this.openBookHotspot.classList.remove('touch-depress');
      });

      // Pointer / Touch Click to Start Opening Sequence
      this.openBookHotspot.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openBook(0);
      });
    }

    // Clicking anywhere on the desk also opens the book
    if (this.deskScene) {
      this.deskScene.addEventListener('click', () => {
        if (!this.isOpen) this.openBook(0);
      });
    }

    // Natural Page-Click Navigation (Click left page to flip back, right page to flip forward)
    if (this.flipContainer) {
      this.flipContainer.addEventListener('click', (e) => {
        // Ignore clicks on buttons, links, form inputs, or modal backdrops
        if (e.target.closest('button, a, input, textarea, .case-study-modal-backdrop, .book-bottom-scrubber')) return;

        const rect = this.flipContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;

        if (clickX < width / 2) {
          // Left page clicked
          if (this.currentPage === 0) {
            // Clicking left page on Spread 01 returns smoothly to Cover Page
            this.closeBookToDesk();
          } else if (this.pageFlip) {
            this.pageFlip.flipPrev();
          }
        } else {
          // Right page clicked
          if (this.pageFlip) this.pageFlip.flipNext();
        }
      });
    }

    // Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (!this.isOpen) this.openBook(0);
        else if (this.pageFlip) this.pageFlip.flipNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (this.isOpen) {
          if (this.currentPage === 0) {
            this.closeBookToDesk();
          } else if (this.pageFlip) {
            this.pageFlip.flipPrev();
          }
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.closeBookToDesk();
      } else if (e.key === 'End') {
        e.preventDefault();
        this.openBook((this.totalSpreads - 1) * 2);
      } else if (e.key === 'Escape') {
        document.querySelectorAll('.case-study-modal-backdrop').forEach(m => m.classList.remove('open'));
      }
    });

    // Mouse Wheel Navigation (Smooth spread turning without page scrolling)
    window.addEventListener('wheel', (e) => {
      if (!this.isOpen) return;
      const activeModal = document.querySelector('.case-study-modal-backdrop.open');
      if (activeModal) return;

      this.scrollAccumulator += e.deltaY;
      if (Math.abs(this.scrollAccumulator) >= this.scrollThreshold) {
        if (this.scrollAccumulator > 0) {
          if (this.pageFlip) this.pageFlip.flipNext();
        } else {
          if (this.currentPage === 0) {
            this.closeBookToDesk();
          } else if (this.pageFlip) {
            this.pageFlip.flipPrev();
          }
        }
        this.scrollAccumulator = 0;
      }

      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(() => {
        this.scrollAccumulator = 0;
      }, 350);
    }, { passive: true });
  }

  bindScrubber() {
    if (!this.scrubberTrack) return;

    const handleScrub = (clientX) => {
      const rect = this.scrubberTrack.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      // Total 21 steps: 0 = Cover, 1..20 = Spread 1..20
      const targetStep = Math.round(ratio * this.totalSpreads);

      if (targetStep === 0) {
        if (this.isOpen) {
          this.closeBookToDesk();
        } else {
          this.updateScrubberUI(0);
        }
      } else {
        const targetSpread = targetStep;
        const targetPage = (targetSpread - 1) * 2;
        if (!this.isOpen) {
          this.openBook(targetPage);
        } else {
          this.updateScrubberUI(targetSpread, false);
          if (this.pageFlip) {
            this.pageFlip.flip(targetPage);
          }
        }
      }
    };

    // Track click & drag
    this.scrubberTrack.addEventListener('pointerdown', (e) => {
      this.isDraggingScrubber = true;
      handleScrub(e.clientX);
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDraggingScrubber) return;
      handleScrub(e.clientX);
    });

    window.addEventListener('pointerup', () => {
      this.isDraggingScrubber = false;
    });

    // Prev & Next Scrubber Buttons
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!this.isOpen) return;
        if (this.currentPage === 0) {
          this.closeBookToDesk();
        } else if (this.pageFlip) {
          this.pageFlip.flipPrev();
        }
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!this.isOpen) {
          this.openBook(0);
        } else if (this.pageFlip) {
          this.pageFlip.flipNext();
        }
      });
    }
  }

  updateScrubberUI(value, isFromPageFlip = false) {
    if (!this.isOpen && !isFromPageFlip) {
      if (this.scrubberFill) this.scrubberFill.style.width = '0%';
      if (this.scrubberThumb) this.scrubberThumb.style.left = '0%';
      if (this.scrubberLabel) this.scrubberLabel.textContent = 'COVER // FIELD NOTES';
      return;
    }

    let spreadNum = 1;
    if (isFromPageFlip) {
      spreadNum = Math.floor(value / 2) + 1;
    } else {
      spreadNum = value;
    }

    if (spreadNum === 0 || !this.isOpen) {
      if (this.scrubberFill) this.scrubberFill.style.width = '0%';
      if (this.scrubberThumb) this.scrubberThumb.style.left = '0%';
      if (this.scrubberLabel) this.scrubberLabel.textContent = 'COVER // FIELD NOTES';
      return;
    }

    const pct = Math.max(3, Math.min(98, (spreadNum / this.totalSpreads) * 100));
    if (this.scrubberFill) this.scrubberFill.style.width = `${pct}%`;
    if (this.scrubberThumb) this.scrubberThumb.style.left = `${pct}%`;
    if (this.scrubberLabel) {
      this.scrubberLabel.textContent = `SPREAD ${String(spreadNum).padStart(2, '0')} / ${String(this.totalSpreads).padStart(2, '0')}`;
    }
  }

  openBook(targetPageIndex = 0) {
    if (this.isOpen) {
      if (this.pageFlip && targetPageIndex !== undefined && targetPageIndex !== this.currentPage) {
        this.pageFlip.flip(targetPageIndex);
      }
      return;
    }
    this.isOpen = true;

    // Trigger Simultaneous Cinematic Camera Zoom
    if (this.deskScene) {
      this.deskScene.classList.add('entering-book');
    }

    this.playPaperRustle();

    // Fade in and focus the open reading spread seamlessly
    setTimeout(() => {
      if (this.bookStage) {
        this.bookStage.classList.add('active');
      }
      if (this.pageFlip && targetPageIndex !== undefined && targetPageIndex !== this.currentPage) {
        this.pageFlip.flip(targetPageIndex);
      }
      this.updateScrubberUI(targetPageIndex, true);
      this.triggerSpreadAssembly(targetPageIndex, 100);
    }, 450);
  }

  closeBookToDesk() {
    this.isOpen = false;
    clearTimeout(this.assemblyTimer);
    clearTimeout(this.settleTimer);
    document.querySelectorAll('.book-page').forEach(p => {
      p.classList.remove('page-assembling', 'page-settled');
    });

    if (this.deskScene) this.deskScene.classList.remove('entering-book');
    if (this.bookStage) this.bookStage.classList.remove('active');
    if (this.pageFlip) this.pageFlip.flip(0);
    this.currentPage = 0;
    this.updateScrubberUI(0);
  }

  flipToPage(pageIndex) {
    if (!this.isOpen) this.openBook(pageIndex);
    else if (this.pageFlip) {
      this.pageFlip.flip(pageIndex);
    }
  }
}
