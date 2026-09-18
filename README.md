# Gokularasan — Professional Engineering Field Handbook & 3D Interactive Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> An authentic, physical-diary inspired 3D interactive engineering portfolio and research field handbook for **Gokularasan**, an Electrical and Electronics Engineering student at **Kumaraguru College of Technology**.

---

## 🌟 Features & Highlights

- **Atmospheric Living Desk Environment**:
  - Genuine vintage Seiko alarm desk clock with live, real-time synchronized analog hands.
  - Hot coffee mug with multi-strand rising thermal vapor steam and surface heat shimmer.
  - Living indoor plants gently swaying in a window breeze.
  - Interactive leather *Field Notes* journal with simultaneous 3D camera zoom transition.

- **40-Page 3D Printed Engineering Handbook**:
  - Realistic 3D paper bending, curling shadows, and center spine inward curvature powered by StPageFlip.
  - **Dynamic Self-Assembling Diary Animation**: Every single word, drop-capital, paragraph, spec table, skill badge chip, and photograph physically flies in from outside the page borders with organic 3D rotational trajectories and settles into place on page turns.
  - Zero internal scrollbars — authentic printed publication layout with locked running footers.

- **Comprehensive Technical Narrative**:
  - **20 Spreads / 40 Pages** detailing academic milestones, technical toolkit (power systems, embedded electronics, simulation suites), practical projects (Classroom Energy Telemetry, Cooking Oil Quality Screening), industrial internships (Electric Motor Manufacturing, Commercial Solar EPC), campus leadership, verified grade records, and official resume.
  - Interactive modal test lab reports with schematic deep-dives and engineering methodologies.
  - Transparent spread scrubber bar and tactile edge-click navigation.

---

## 📂 Project Structure

```text
├── index.html                  # Main application structure & living desk environment
├── README.md                   # Project overview & documentation
├── css/
│   ├── variables.css           # Color tokens, typography, and elevation shadows
│   ├── book.css                # Desk environment, camera zoom, and 3D stage layout
│   ├── components.css          # Printed typography, 3D spine curvature, and word-fly animations
│   └── responsive.css          # Responsive scaling for various viewport aspect ratios
├── js/
│   ├── data.js                 # Complete 40-page engineering handbook data store
│   ├── app.js                  # Dynamic renderer, word-level flight tokenizer, and live clock loop
│   └── book-engine.js          # StPageFlip 3D wrapper, spread assembly controller, and scrubber
└── assets/
    ├── docs/
    │   └── gokularasan-resume.pdf
    └── images/
        ├── desk-cover.jpg
        ├── gokularasan-portrait.jpg
        ├── kumaraguru-college.jpg
        ├── project-energy-monitor.jpg
        ├── project-oil-detector.jpg
        ├── shalom-convent.jpg
        ├── sree-gokulam.jpg
        ├── plant-top-branch.png
        └── plant-bottom-foliage.png
```

---

## 🚀 Getting Started

### Local Preview
No build steps or dependencies required. Simply open `index.html` in any modern web browser or serve with a local HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 👤 Author

**Gokularasan S**
- 🎓 *B.E. Electrical & Electronics Engineering* — Kumaraguru College of Technology
- 💼 [LinkedIn](https://www.linkedin.com/in/gokularasan183/)
- 🐙 [GitHub](https://github.com/gokularasan-bot)
- ✉️ [Email](mailto:gokularasan.28eee@gmail.com)

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
