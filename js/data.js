/**
 * GOKULARASAN — AUTHENTIC ENGINEERING FIELD HANDBOOK DATA STORE
 * Humanized, articulate, and verified narrative derived from Gokularasan's resume and engineering logs.
 * Structured for 20 double-page spreads (40 distinct printed book pages).
 */

const BOOK_DATA = {
  author: {
    name: "Gokularasan",
    title: "Electrical & Electronics Engineering Student",
    degree: "B.E. Electrical and Electronics Engineering",
    institution: "Kumaraguru College of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    email: "gokularasan.28eee@gmail.com",
    headline: "Electrical Engineering Student Exploring Energy, Embedded Systems & Intelligent Technologies",
    tagline: "Engineering ideas into practical systems.",
    bio: "An Electrical and Electronics Engineering student passionate about renewable power, embedded systems, IoT telemetry, and practical hardware engineering. I bridge theoretical physical principles with operational industrial machinery through laboratory prototypes, field internships, and hands-on investigation.",
    profileImage: "assets/images/gokularasan-portrait.jpg",
    resumePdf: "assets/docs/gokularasan-resume.pdf"
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/gokularasan183/",
    github: "https://github.com/gokularasan-bot",
    email: "mailto:gokularasan.28eee@gmail.com",
    kctLinkedin: "https://www.linkedin.com/school/kct/posts/",
    electromotiveLinkedin: "https://www.linkedin.com/company/electromotive-power-drives/home/"
  },

  spreads: [
    // SPREAD 01: FRONTISPIECE PORTRAIT (Page 1) & INTRODUCTION (Page 2)
    {
      id: "spread-01-intro",
      spreadNumber: 1,
      leftPageNum: 1,
      rightPageNum: 2,
      category: "IDENTITY & ORIGIN",
      chapterTitle: "Gokularasan",
      chapterSubtitle: "B.E. Electrical & Electronics Engineering — Kumaraguru College of Technology",
      leftPage: {
        isFullPortraitPage: true,
        portraitPhoto: "assets/images/gokularasan-portrait.jpg",
        portraitCaption: "PLATE 1.0 — Gokularasan, Electrical & Electronics Engineering student at Kumaraguru College of Technology."
      },
      rightPage: {
        secondaryHeading: "Engineering with Purpose",
        secondaryText: "Welcome to my personal engineering field log. Here, theoretical principles meet working hardware, laboratory telemetry, and real industrial installations.",
        highlights: [
          "Hands-on prototype development in **Classroom Energy Telemetry** and **Cooking Oil Quality Screening**.",
          "Practical industrial immersion in **Electric Motor Manufacturing (45 hrs)** and **Commercial Solar EPC (150 hrs)**.",
          "Active campus leadership in **Microcosm Climate Conclaves** and **Innovation Hackathons**."
        ],
        actions: [
          { label: "EXPLORE PROJECTS ↗", action: "jump-projects", primary: true },
          { label: "OFFICIAL RESUME ↗", action: "jump-resume", primary: false }
        ],
        socials: [
          { name: "LinkedIn ↗", url: "https://www.linkedin.com/in/gokularasan183/" },
          { name: "GitHub ↗", url: "https://github.com/gokularasan-bot" },
          { name: "Email ↗", url: "mailto:gokularasan.28eee@gmail.com" }
        ]
      }
    },

    // SPREAD 02: ABOUT & ENGINEERING PERSPECTIVE (Pages 3 & 4)
    {
      id: "spread-02-about",
      spreadNumber: 2,
      leftPageNum: 3,
      rightPageNum: 4,
      category: "ENGINEERING PHILOSOPHY",
      chapterTitle: "About the Engineer",
      chapterSubtitle: "Connecting Analytical Equations with Physical Machinery",
      leftPage: {
        headerTag: "CHAPTER 02 // PERSPECTIVE",
        title: "Bridging Theory & Practice",
        lead: "Physical engineering begins where mathematical equations meet operational reality.",
        dropCap: "M",
        bodyText: "y engineering journey is driven by a deep curiosity for understanding how fundamental electrical and physical principles translate into operational, real-world machines and systems. Rather than treating theory as abstract textbook equations, I emphasize bridging the gap between classroom analytical concepts and **practical hardware deployment**.",
        subParagraph: "From **sensor integration** and **embedded firmware** to **renewable power topologies** and **industrial manufacturing workflows**, every project is treated as an exercise in verifiable measurement and functional optimization.",
        specs: [
          { label: "Core Methodology", value: "First-Principles Hardware Prototyping" },
          { label: "Guiding Tenets", value: "Energy Efficiency, Measurement Accuracy, Reliability" },
          { label: "Validation Standard", value: "Experimental Bench Testing & Industrial Exposure" }
        ]
      },
      rightPage: {
        secondaryHeading: "Core Areas of Technical Investigation",
        secondaryText: "A structured breakdown of primary engineering domains explored through coursework, laboratory prototypes, and industry internships:",
        domains: [
          { name: "Renewable Energy", desc: "**Solar EPC operations**, On-Grid/Hybrid PV configurations, inverter analysis (*Sungrow, Growatt, Deye, ABB*)." },
          { name: "Embedded Systems", desc: "**ESP32, STM32, Arduino** microcontrollers, multi-sensor data acquisition, and embedded firmware." },
          { name: "IoT & Smart Monitoring", desc: "**Real-time electrical telemetry**, sensor fusion, cloud dashboards, and threshold alert automation." },
          { name: "Electrical Machines", desc: "**Motor stator coil winding**, VFD speed regulation, industrial quality frameworks (*ISO, 5S, TQM*)." },
          { name: "Energy Optimization", desc: "**Harmonic distortion mitigation**, power loss reduction, and load profiling." },
          { name: "Sustainability", desc: "**Climate action initiatives**, resource efficiency, and industrial closed-loop recycling." }
        ]
      }
    },

    // SPREAD 03: TECHNICAL TOOLKIT & SKILLS (Pages 5 & 6)
    {
      id: "spread-03-skills",
      spreadNumber: 3,
      leftPageNum: 5,
      rightPageNum: 6,
      category: "TECHNICAL COMPETENCY",
      chapterTitle: "Engineering Toolkit",
      chapterSubtitle: "Demonstrated Hardware, Software & Analytical Competencies",
      leftPage: {
        headerTag: "CHAPTER 03 // TOOLKIT",
        title: "Hardware & Power Systems",
        lead: "Verified technical capabilities acquired through laboratory implementation.",
        dropCap: "C",
        bodyText: "ompetencies are demonstrated through functional project hardware implementations, industrial internships, and documented studies — *not self-assigned percentage bars*. My technical foundation spans **power electrical systems**, **power electronics**, **embedded firmware**, and **modern simulation suites**.",
        skillGroups: [
          {
            title: "Electrical & Energy Systems",
            skills: ["Electrical Machines", "Solar PV Systems", "On-Grid / Off-Grid / Hybrid Solar", "Energy Monitoring", "VFD Fundamentals", "Harmonics & Power Losses", "Power Systems Fundamentals"]
          },
          {
            title: "Embedded Hardware & IoT",
            skills: ["ESP32 Microcontroller", "Arduino (UNO / Nano)", "STM32 Fundamentals", "Sensor Interfacing (ADC / I2C / SPI)", "IoT Telemetry Dashboards", "Blynk IoT Platform", "Real-Time Data Acquisition"]
          }
        ]
      },
      rightPage: {
        secondaryHeading: "Software Tools & Analytical Skills",
        secondaryText: "Engineering software tools utilized for modeling, circuit simulation, firmware development, and industrial workflows:",
        skillGroups: [
          {
            title: "Engineering Software & IDEs",
            skills: ["Arduino IDE", "STM32CubeIDE", "Keil µVision", "MATLAB", "Multisim", "Wokwi Simulator", "Xilinx Vivado", "Blynk IoT Platform"]
          },
          {
            title: "Professional & Analytical Skills",
            skills: ["Technical Research", "Comparative System Analysis", "Engineering Documentation", "Data Interpretation", "Team Leadership", "Event Coordination", "Stakeholder Communication"]
          }
        ]
      }
    },

    // SPREAD 04: WHAT I'M EXPLORING — RESEARCH MATRIX (Pages 7 & 8)
    {
      id: "spread-04-focus",
      spreadNumber: 4,
      leftPageNum: 7,
      rightPageNum: 8,
      category: "RESEARCH & ROADMAP",
      chapterTitle: "What I'm Exploring",
      chapterSubtitle: "Active Technical Investigation Domains & Development Directions",
      leftPage: {
        headerTag: "CHAPTER 04 // ACTIVE EXPLORATION",
        title: "Applied Research Matrix",
        lead: "Six strategic development tracks connecting academic inquiry to industrial application.",
        dropCap: "T",
        bodyText: "o build comprehensive engineering competence, my active investigation is organized into six interconnected domains. These pillars combine theoretical rigor with physical laboratory experimentation, industrial site observations, and prototype refinement.",
        pillars: [
          { code: "DOM-01", title: "Renewable Energy & Solar EPC", desc: "**Comparative inverter topologies**, DC/AC conversion efficiency, grid synchronization, and utility plant operations." },
          { code: "DOM-02", title: "Embedded Edge Microcontrollers", desc: "**Low-power firmware architectures**, real-time interrupt handling, multi-channel ADC sampling, and hardware bus protocols." },
          { code: "DOM-03", title: "Classroom & Industrial Telemetry", desc: "**Continuous electrical load profiling**, peak demand detection, and automated tariff computation." }
        ]
      },
      rightPage: {
        secondaryHeading: "Advanced Technology Tracks",
        secondaryText: "Investigation of industrial automation, smart sensor arrays, and sustainable engineering:",
        pillars: [
          { code: "DOM-04", title: "Industrial Machines & Quality", desc: "**Stator coil winding techniques**, VFD harmonic filtering, CNC precision systems, and ISO / 5S / TQM frameworks." },
          { code: "DOM-05", title: "Physical & Chemical Sensor Arrays", desc: "**Impedance spectroscopy**, optical turbidity, electrochemical pH monitoring, and thermal compensation algorithms." },
          { code: "DOM-06", title: "Sustainability & Climate Engineering", desc: "**Industrial closed-loop waste fiber recovery**, rooftop solar synchronization, and student conclave initiatives." }
        ]
      }
    },

    // SPREAD 05: PROJECT 01 — CLASSROOM ENERGY MONITORING (Pages 9 & 10)
    {
      id: "spread-05-proj-01",
      spreadNumber: 5,
      leftPageNum: 9,
      rightPageNum: 10,
      category: "LABORATORY PROTOTYPE 01",
      chapterTitle: "Classroom Energy Monitoring System",
      chapterSubtitle: "IoT-Based Real-Time Electrical Load Acquisition & Cost Tracking",
      leftPage: {
        headerTag: "PROJECT 01 // LAB PROTOTYPE",
        title: "Real-Time Energy Telemetry",
        lead: "Transforming discrete classroom electrical loads into continuous, actionable telemetry.",
        dropCap: "C",
        bodyText: "lassroom energy consumption is traditionally recorded only on monthly bulk utility meters, making it difficult to continuously monitor discrete loads, pinpoint peak demand intervals, eliminate idle off-hour waste, and detect abnormal electrical draw.",
        specs: [
          { label: "Status", value: "Developing Laboratory Prototype" },
          { label: "Microcontroller", value: "Arduino UNO / ESP32 MCU" },
          { label: "Voltage Sensing", value: "ZMPT101B Active Transformer Module" },
          { label: "Current Sensing", value: "ACS712 Hall-Effect Sensor Module" },
          { label: "Output Telemetry", value: "Active Power (W), Energy (kWh), Tariff (₹)" }
        ],
        solutionNote: "The system captures real-time electrical parameters through dedicated analog conditioning circuitry and streams active power and tariff calculations to a digital monitoring interface."
      },
      rightPage: {
        photo: "assets/images/project-energy-monitor.jpg",
        photoCaption: "PLATE 5.1 — Experimental test rig with Arduino UNO, ZMPT101B voltage sensor, ACS712 current sensor, terminal block, and electrical load fixture.",
        secondaryHeading: "Key Technical Capabilities",
        keyFeatures: [
          "Continuous active power (**W**) and cumulative energy consumption tracking (**kWh**)",
          "Real-time classroom current (**A**) and voltage (**V**) acquisition with RMS conversion",
          "Estimated electricity cost calculation based on configurable tariff algorithms",
          "Live IoT digital telemetry dashboard and historical load curve profiling",
          "Threshold-based over-current and abnormal consumption alerts",
          "Modular architecture designed for multi-classroom campus network scaling"
        ],
        tags: ["Arduino UNO / ESP32", "ACS712 Sensor", "ZMPT101B Module", "Embedded Systems", "IoT Telemetry", "Energy Efficiency"],
        actions: [
          { label: "OPEN LAB CASE STUDY REPORT", modalId: "modal-proj-01", primary: true }
        ]
      }
    },

    // SPREAD 06: PROJECT 02 — SMART COOKING OIL IMPURITY DETECTION (Pages 11 & 12)
    {
      id: "spread-06-proj-02",
      spreadNumber: 6,
      leftPageNum: 11,
      rightPageNum: 12,
      category: "LABORATORY PROTOTYPE 02",
      chapterTitle: "Cooking Oil Impurity Detection",
      chapterSubtitle: "Low-Cost Multi-Parameter Sensor Array for Oil Quality Screening",
      leftPage: {
        headerTag: "PROJECT 02 // RESEARCH CONCEPT",
        title: "Electrochemical & Physical Screening",
        lead: "A multi-parameter sensor methodology for preliminary evaluation of cooking oil degradation.",
        dropCap: "R",
        bodyText: "epeated frying causes rapid chemical degradation of cooking oil, generating harmful polar compounds and free fatty acids. Certified laboratory testing is costly and time-consuming. This research investigates a low-cost, multi-sensor methodology for rapid preliminary screening based on measurable physical and electrochemical characteristics.",
        specs: [
          { label: "Status", value: "Preliminary Research & Bench Study" },
          { label: "Core Instrumentation", value: "HIOKI Impedance Analyzer, Multi-Well Fixture" },
          { label: "Measured Parameters", value: "Impedance, Moisture, pH, Temperature" },
          { label: "Processing Edge", value: "ESP32 MCU with Thermal Compensation" }
        ],
        disclaimer: "RESEARCH DISCLAIMER: This system is intended strictly as a preliminary screening concept. Sensor readings require calibration against certified laboratory methods before being used for formal food-safety decisions."
      },
      rightPage: {
        photo: "assets/images/project-oil-detector.jpg",
        photoCaption: "PLATE 6.1 — Bench measurement setup featuring the HIOKI Impedance Analyzer, PC interface software, multi-well test fixture with sensor array, and oil sample container.",
        secondaryHeading: "System Concept & Measurement Array",
        keyFeatures: [
          "**Impedance spectroscopy analysis** for dielectric property shifts in used oil",
          "**Water/moisture contamination detection** via capacitive and resistive sensing",
          "**Electrochemical pH monitoring** for comparative chemical breakdown assessment",
          "**Real-time sample temperature measurement** with thermal compensation algorithms",
          "**Comparative data logging** between fresh and repeated-use oil samples",
          "**Threshold-based warning indication** on IoT monitoring dashboard"
        ],
        tags: ["ESP32 MCU", "HIOKI Impedance Analyzer", "pH Sensor", "Moisture Sensor", "Temperature (DS18B20)", "IoT Dashboard"],
        actions: [
          { label: "OPEN LAB CASE STUDY REPORT", modalId: "modal-proj-02", primary: true }
        ]
      }
    },

    // SPREAD 07: INTERNSHIP 01 — ELECTROMOTIVE POWER DRIVES (Pages 13 & 14)
    {
      id: "spread-07-intern-01",
      spreadNumber: 7,
      leftPageNum: 13,
      rightPageNum: 14,
      category: "INDUSTRIAL INTERNSHIP",
      chapterTitle: "Electromotive Power Drives",
      chapterSubtitle: "Electrical Motor Manufacturing & Industrial Quality Practices",
      leftPage: {
        headerTag: "INTERNSHIP 01 // MANUFACTURING",
        title: "Motor Production & Assembly",
        lead: "Hands-on exposure to industrial electric motor fabrication and quality standards.",
        dropCap: "D",
        bodyText: "uring May 2025, I completed a 7-day intensive industrial internship (**45 working hours**) at *Electromotive Power Drives Pvt. Ltd.* in Coimbatore. The internship provided direct exposure to industrial assembly lines, stator copper coil winding, motor testing benches, and industrial quality management frameworks.",
        specs: [
          { label: "Company", value: "Electromotive Power Drives Pvt. Ltd." },
          { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
          { label: "Duration", value: "May 2025 (7 Days | 45 Working Hours)" },
          { label: "Role", value: "Industrial Engineering Intern" },
          { label: "Key Standards", value: "ISO Standards, 5S System, TQM" }
        ],
        quote: "Observing stator winding and motor testing in person connected classroom electromagnetic theory with physical industrial production."
      },
      rightPage: {
        secondaryHeading: "Key Learnings & Industrial Insights",
        secondaryText: "Documented engineering practices and quality assurance methodologies:",
        learnings: [
          "Studied full manufacturing workflow for industrial **induction and synchronous electric motors**",
          "Observed **precision copper coil winding techniques** for electric motor stators and field cores",
          "Analyzed key electromagnetic and mechanical components: laminations, bearings, rotors, and enclosures",
          "Learned practical implementation of **ISO quality standards**, **5S workplace organization**, and **TQM checkpoints**",
          "Gained foundational understanding of manufacturing cost structures and quality assurance checkpoints",
          "Connected theoretical electrical machine equations directly to real-world industrial factory workflows"
        ],
        actions: [
          { label: "VIEW COMPANY PROFILE ↗", url: "https://www.linkedin.com/company/electromotive-power-drives/home/", target: "_blank" },
          { label: "VIEW LINKEDIN POST ↗", url: "https://www.linkedin.com/feed/update/urn:li:activity:7351296976560316416/", target: "_blank" },
          { label: "GOOGLE MAPS LOCATION ↗", url: "https://maps.app.goo.gl/kkbNx2hxR6go9wR28", target: "_blank" }
        ]
      }
    },

    // SPREAD 08: INTERNSHIP 02 — MARA SIGNEX SOLAR EXPERTS (Pages 15 & 16)
    {
      id: "spread-08-intern-02",
      spreadNumber: 8,
      leftPageNum: 15,
      rightPageNum: 16,
      category: "INDUSTRIAL INTERNSHIP",
      chapterTitle: "MaRa Signex Solar Experts",
      chapterSubtitle: "Solar Energy Systems & EPC Commercial Operations",
      leftPage: {
        headerTag: "INTERNSHIP 02 // RENEWABLE ENERGY",
        title: "Solar EPC & Plant Engineering",
        lead: "150-hour intensive immersion into commercial solar energy engineering and plant operations.",
        dropCap: "F",
        bodyText: "rom June 1 to June 20, 2026, I completed an intensive 20-day industrial internship (**150 working hours**) at *MaRa Signex Solar Experts* in Coimbatore. The program offered comprehensive practical exposure to commercial solar Engineering, Procurement, and Construction (**EPC**) operations and utility-scale solar installations.",
        specs: [
          { label: "Company", value: "MaRa Signex Solar Experts" },
          { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
          { label: "Duration", value: "June 1 – June 20, 2026 (20 Days | 150 Hours)" },
          { label: "Role", value: "Solar Energy / EPC Intern" },
          { label: "Focus Areas", value: "On-Grid/Off-Grid/Hybrid PV, Inverters, VFDs, Harmonics" }
        ],
        quote: "Understanding inverter topologies and harmonic filtering is critical for designing efficient commercial solar plants."
      },
      rightPage: {
        secondaryHeading: "Key Learnings & Comparative Research",
        secondaryText: "Engineering insights developed across solar EPC workflows and equipment analysis:",
        learnings: [
          "Gained practical exposure to commercial solar **EPC operations** and site installation protocols",
          "Analyzed engineering requirements for **On-Grid, Off-Grid, and Hybrid solar photovoltaic topologies**",
          "Conducted comparative technical analysis of commercial solar inverters: *Sungrow, Growatt, Deye, and ABB (FIMER)*",
          "Studied **Variable Frequency Drives (VFDs)**, harmonic distortion, power losses, and mitigation techniques",
          "Prepared technical presentations and engineering documentation on solar technologies and EPC workflows",
          "Applied theoretical electrical power concepts to operational rooftop and ground-mounted solar installations"
        ],
        actions: [
          { label: "VIEW LINKEDIN POST ↗", url: "https://www.linkedin.com/feed/update/urn:li:activity:7506575308909658112/", target: "_blank" },
          { label: "GOOGLE MAPS LOCATION ↗", url: "https://maps.app.goo.gl/5QGkw4ouCRtxrr6R8", target: "_blank" }
        ]
      }
    },

    // SPREAD 09: INDUSTRIAL EXPOSURE 01 — INTEC 2026 (Pages 17 & 18)
    {
      id: "spread-09-expo-01",
      spreadNumber: 9,
      leftPageNum: 17,
      rightPageNum: 18,
      category: "INDUSTRIAL EXPOSURE",
      chapterTitle: "INTEC 2026",
      chapterSubtitle: "International Machine Tools & Industrial Manufacturing Trade Fair",
      leftPage: {
        headerTag: "EXPOSURE 01 // TRADE FAIR",
        title: "Machine Tools Ecosystem",
        lead: "Field visit to South India's premier international industrial technology exhibition.",
        dropCap: "I",
        bodyText: "n June 2026, I attended **INTEC 2026** at the CODISSIA Trade Fair Complex in Coimbatore. The exhibition showcased cutting-edge industrial machinery, **multi-axis CNC machines**, automated manufacturing cells, power transmission systems, and industrial robotics.",
        specs: [
          { label: "Event", value: "INTEC 2026 — International Machine Tools Exhibition" },
          { label: "Venue", value: "CODISSIA Trade Fair Complex, Coimbatore" },
          { label: "Dates", value: "June 4 – 8, 2026" },
          { label: "Ecosystem Scope", value: "CNC Machinery, Automation, Industrial Power, Robotics" }
        ],
        quote: "Interacting directly with manufacturing engineers clarified the exacting reliability and precision required in heavy industrial machinery."
      },
      rightPage: {
        secondaryHeading: "Key Observations & Industry Interactions",
        secondaryText: "Insights gained through interaction with industrial manufacturers and practicing engineers:",
        learnings: [
          "Explored industrial **CNC machine tools**, servo drive configurations, and precision linear motion systems",
          "Interacted directly with practicing engineers, technical product managers, and industrial plant heads",
          "Observed how classroom engineering concepts in electrical drives and controls operate in heavy industrial machinery",
          "Discussed motor drive sizing, power quality requirements, and real-time controller integration",
          "Gained valuable perspective on industry expectations, workforce skill requirements, and engineering benchmarks",
          "Broadened technical understanding of precision manufacturing and factory automation technologies"
        ],
        actions: [
          { label: "VIEW LINKEDIN POST ↗", url: "https://www.linkedin.com/feed/update/urn:li:activity:7506590220268728320/", target: "_blank" }
        ]
      }
    },

    // SPREAD 10: INDUSTRIAL EXPOSURE 02 — AMBERTEX UNIVERSAL (Pages 19 & 20)
    {
      id: "spread-10-expo-02",
      spreadNumber: 10,
      leftPageNum: 19,
      rightPageNum: 20,
      category: "INDUSTRIAL VISIT",
      chapterTitle: "Ambertex Universal Spinning",
      chapterSubtitle: "Raw-Cotton-to-Finished-Yarn Process & 1,500-Panel Rooftop Solar Sync",
      leftPage: {
        headerTag: "EXPOSURE 02 // INDUSTRIAL VISIT",
        title: "Textile Automation & Clean Power",
        lead: "Industrial study of large-scale yarn spinning and synchronous rooftop solar generation.",
        dropCap: "O",
        bodyText: "n June 9, 2026, I visited *Ambertex Universal Spinning Division* to observe the continuous industrial conversion of raw cotton bales into high-grade finished yarn, and to study how industrial automation, pneumatic systems, and **renewable solar energy** operate in harmony.",
        specs: [
          { label: "Facility", value: "Ambertex Universal Spinning Division" },
          { label: "Date of Visit", value: "June 9, 2026" },
          { label: "Solar Installation", value: "~1,500 High-Efficiency Rooftop PV Panels" },
          { label: "Power Integration", value: "Synchronized with Continuous Spinning Mill Load" },
          { label: "Waste Management", value: "Pneumatic Secondary Fiber Recovery System" }
        ],
        solarHighlight: "ROOFTOP SOLAR STUDY: Analyzed the synchronization of **~1,500 rooftop solar panels** with high-demand, continuous spinning machinery, mitigating peak daytime grid energy costs."
      },
      rightPage: {
        secondaryHeading: "9-Step Industrial Spinning Process Flow",
        secondaryText: "Comprehensive documentation of the sequential manufacturing process observed:",
        processSteps: [
          { step: "01", name: "Bale Arrival & Grading", desc: "Inspection and quality grading of incoming raw cotton." },
          { step: "02", name: "Bale Opening & Plucking", desc: "Mechanical plucking to loosen compressed cotton fibers." },
          { step: "03", name: "Cleaning & Optical Clearing", desc: "High-speed extraction of trash and optical foreign-fiber sorting." },
          { step: "04", name: "Carding Machine", desc: "Individualizing fibers into a continuous, uniform card sliver." },
          { step: "05", name: "Drawing & Combing", desc: "Doubling slivers to ensure parallel alignment and uniformity." },
          { step: "06", name: "Simplex / Roving", desc: "Imparting gentle protective twist onto bobbins for ring spinning." },
          { step: "07", name: "Ring Spinning", desc: "Final mechanical drafting and high-RPM twisting into yarn." },
          { step: "08", name: "Auto-Coning", desc: "Electronic yarn clearing, defect splicing, and packaging." },
          { step: "09", name: "Conditioning & Dispatch", desc: "Humidity conditioning, tensile strength testing, and packing." }
        ]
      }
    },

    // SPREAD 11: EDUCATION 01 — SHALOM CONVENT (Pages 21 & 22)
    {
      id: "spread-11-edu-01",
      spreadNumber: 11,
      leftPageNum: 21,
      rightPageNum: 22,
      category: "ACADEMIC FOUNDATION",
      chapterTitle: "Shalom Convent School",
      chapterSubtitle: "Foundational Primary & Secondary Academic Schooling",
      leftPage: {
        headerTag: "EDUCATION 01 // FOUNDATION",
        title: "Early Academic Acumen",
        lead: "Cultivating mathematical curiosity, discipline, and scientific inquiry.",
        dropCap: "S",
        bodyText: "*Shalom Convent Matriculation Higher Secondary School* provided my early academic foundation from LKG through Grade 8. It was here that my enthusiasm for mathematical problem-solving, structured logic, and natural sciences took root through rigorous coursework and competitive academic challenges.",
        specs: [
          { label: "Institution", value: "Shalom Convent Matric. Higher Sec. School" },
          { label: "Grade Levels", value: "LKG through 8th Standard" },
          { label: "10th Board Score", value: "96.40% (Distinction)" },
          { label: "Key Strengths", value: "Mathematics, Classical Geometry, Science" }
        ],
        quote: "The rigorous focus on foundational mathematics at Shalom Convent shaped my approach to analytical engineering problems."
      },
      rightPage: {
        photo: "assets/images/shalom-convent.jpg",
        photoCaption: "PLATE 11.1 — Shalom Convent Matriculation Higher Secondary School Campus.",
        secondaryHeading: "Academic Milestone & Developmental Impact",
        secondaryText: "Key developmental achievements during foundational schooling:",
        learnings: [
          "Developed deep discipline in **mathematical calculations, geometry, and structured reasoning**",
          "Consistently excelled in regional science exhibitions and academic competitions",
          "Established the foundational analytical habits that resulted in a **96.40% score in 10th standard**",
          "Cultivated early curiosity regarding physical forces, circuits, and mechanical systems"
        ],
        actions: [
          { label: "VIEW ON GOOGLE MAPS ↗", url: "https://maps.app.goo.gl/Kxp59Fgs5e44rKP77", target: "_blank" }
        ]
      }
    },

    // SPREAD 12: EDUCATION 02 — SREE GOKULAM (Pages 23 & 24)
    {
      id: "spread-12-edu-02",
      spreadNumber: 12,
      leftPageNum: 23,
      rightPageNum: 24,
      category: "HIGHER SECONDARY EDUCATION",
      chapterTitle: "Sree Gokulam School",
      chapterSubtitle: "Secondary & Higher Secondary Education (Physics, Chemistry, Mathematics)",
      leftPage: {
        headerTag: "EDUCATION 02 // HIGHER SECONDARY",
        title: "Physics & Calculus Rigor",
        lead: "Intensive training in core physical sciences and higher mathematics.",
        dropCap: "A",
        bodyText: "t *Sree Gokulam Matric Higher Secondary School* (Grades 9 through 12), I completed higher secondary education with a focused specialization in **Physics, Chemistry, and Mathematics**. The demanding curriculum built my proficiency in calculus, electromagnetic fields, optics, thermodynamics, and physical chemistry.",
        specs: [
          { label: "Institution", value: "Sree Gokulam Matric Higher Sec. School" },
          { label: "Grades", value: "9th Standard through 12th Standard" },
          { label: "Specialization", value: "Physics, Chemistry, Mathematics (PCM)" }
        ],
        scoreTable: [
          { exam: "10th Standard (SSLC)", score: "96.40%" },
          { exam: "11th Standard", score: "90.60%" },
          { exam: "12th Standard (HSC)", score: "93.83%" }
        ]
      },
      rightPage: {
        photo: "assets/images/sree-gokulam.jpg",
        photoCaption: "PLATE 12.1 — Sree Gokulam Matric Higher Secondary School Courtyard & Academic Block.",
        secondaryHeading: "Preparatory Foundation for Engineering",
        secondaryText: "Academic competencies and scientific principles mastered:",
        learnings: [
          "Rigorous mastery of **differential and integral calculus** applied to physical phenomena",
          "Deep theoretical foundation in **classical mechanics, electromagnetism, and DC/AC circuit theory**",
          "Consistently achieved outstanding scores across all state-level higher secondary examinations (**93.83% in 12th**)",
          "Built laboratory testing rigor and experimental documentation habits"
        ],
        actions: [
          { label: "VIEW ON GOOGLE MAPS ↗", url: "https://maps.app.goo.gl/ScC3pwNEqmDDB3jo9", target: "_blank" }
        ]
      }
    },

    // SPREAD 13: EDUCATION 03 — KUMARAGURU COLLEGE OF TECHNOLOGY (Pages 25 & 26)
    {
      id: "spread-13-edu-03",
      spreadNumber: 13,
      leftPageNum: 25,
      rightPageNum: 26,
      category: "UNDERGRADUATE DEGREE",
      chapterTitle: "Kumaraguru College of Technology",
      chapterSubtitle: "B.E. Electrical & Electronics Engineering — Coimbatore, Tamil Nadu",
      leftPage: {
        headerTag: "EDUCATION 03 // UNDERGRADUATE",
        title: "Electrical & Electronics Engineering",
        lead: "Undergraduate degree program combining power engineering, embedded hardware, and research.",
        dropCap: "P",
        bodyText: "ursuing a **Bachelor of Engineering in Electrical and Electronics Engineering** at *Kumaraguru College of Technology (KCT)*, Coimbatore. The academic curriculum combines rigorous theoretical coursework with hands-on laboratory experimentation in electric machines, power systems, power electronics, embedded systems, microcontrollers, and IoT.",
        specs: [
          { label: "Degree", value: "Bachelor of Engineering (B.E.)" },
          { label: "Major", value: "Electrical and Electronics Engineering (EEE)" },
          { label: "Institution", value: "Kumaraguru College of Technology (KCT)" },
          { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
          { label: "Affiliation", value: "Autonomous Institution affiliated with Anna University" }
        ],
        quote: "KCT provides an environment where laboratory experimentation directly translates into industry-relevant engineering solutions."
      },
      rightPage: {
        photo: "assets/images/kumaraguru-college.jpg",
        photoCaption: "PLATE 13.1 — Kumaraguru College of Technology (KCT) Main Administration Building & Campus.",
        secondaryHeading: "Academic Coursework & Laboratory Exposure",
        secondaryText: "Core curriculum and campus engineering engagement:",
        learnings: [
          "**Coursework**: Electrical Machines, Power Systems Analysis, Power Electronics, Control Systems, Microcontrollers, Analog & Digital Circuits, Renewable Energy Systems",
          "**Hands-on Labs**: Electric Machines Lab, Power Electronics Bench, Microcontroller & Embedded Systems Lab, IoT & Simulation Labs",
          "**Active campus leadership**: Organizing Committee member in Microcosm, student coordinator for sustainability conclaves, and hackathon management team"
        ],
        actions: [
          { label: "KCT INSTITUTION LINKEDIN ↗", url: "https://www.linkedin.com/school/kct/posts/", target: "_blank" },
          { label: "VIEW ON GOOGLE MAPS ↗", url: "https://maps.app.goo.gl/kjQR96LoxRraTisY9", target: "_blank" }
        ]
      }
    },

    // SPREAD 14: HACKATHON 01 — KUMARAGURU LIVESTOCK HACKATHON 2026 (Pages 27 & 28)
    {
      id: "spread-14-hack-01",
      spreadNumber: 14,
      leftPageNum: 27,
      rightPageNum: 28,
      category: "EVENT LEADERSHIP",
      chapterTitle: "Livestock Hackathon 2026",
      chapterSubtitle: "Management Team — 3-Day Technical Innovation Summit",
      leftPage: {
        headerTag: "HACKATHON 01 // MANAGEMENT",
        title: "3-Day Innovation Summit Operations",
        lead: "Orchestrating operations, teams, and resources across a multi-track engineering hackathon.",
        dropCap: "S",
        bodyText: "erved as part of the core management and organizing team for the *Kumaraguru Livestock Hackathon 2026*, held from **January 29 to 31, 2026**. The hackathon brought together multidisciplinary student teams, industry mentors, and domain evaluators to build technical solutions for agricultural and livestock challenges.",
        specs: [
          { label: "Event", value: "Kumaraguru Livestock Hackathon 2026" },
          { label: "Dates", value: "January 29 – 31, 2026 (3 Continuous Days)" },
          { label: "Role", value: "Management & Organizing Team" },
          { label: "Venue", value: "Kumaraguru Institutions, Coimbatore" }
        ],
        quote: "Real-time coordination across 3 continuous days sharpened my crisis management, team communication, and logistical leadership."
      },
      rightPage: {
        secondaryHeading: "Key Operational Responsibilities & Outcomes",
        secondaryText: "On-ground execution and coordination milestones achieved:",
        learnings: [
          "Coordinated **multi-track team communications**, ensuring smooth operational scheduling across all 3 days",
          "Managed **venue logistics**, physical hardware resources, and technical support requirements for participants",
          "Facilitated mentor check-in sessions, jury evaluations, and milestone evaluation tracking",
          "Handled dynamic operational challenges and time-sensitive requirements with composure and efficiency",
          "Strengthened practical capabilities in team leadership, decision-making, and large-scale event governance"
        ],
        actions: [
          { label: "VIEW LINKEDIN UPDATE ↗", url: "https://www.linkedin.com/feed/update/urn:li:activity:7424879276308738048/", target: "_blank" }
        ]
      }
    },

    // SPREAD 15: HACKATHON 02 — U & ME HACKATHON (CIT) (Pages 29 & 30)
    {
      id: "spread-15-hack-02",
      spreadNumber: 15,
      leftPageNum: 29,
      rightPageNum: 30,
      category: "HACKATHON PARTICIPATION",
      chapterTitle: "U & Me Hackathon",
      chapterSubtitle: "Participant — Coimbatore Institute of Technology (CIT)",
      leftPage: {
        headerTag: "HACKATHON 02 // CIT COIMBATORE",
        title: "Water Quality Monitoring Prototype",
        lead: "Engineering an IoT water sensing hardware prototype under competitive time constraints.",
        dropCap: "P",
        bodyText: "articipated in the *U & Me Hackathon* at Coimbatore Institute of Technology (CIT) on **23 August 2025**. Our team designed, integrated, and demonstrated a functional hardware prototype for real-time **Water Quality Monitoring**, connecting multi-parameter sensors with microcontroller data acquisition.",
        specs: [
          { label: "Event", value: "U & Me Hackathon" },
          { label: "Venue", value: "Coimbatore Institute of Technology (CIT)" },
          { label: "Date", value: "23 August 2025" },
          { label: "Project Title", value: "IoT Water Quality Monitoring System" },
          { label: "Role", value: "Hardware & Sensor Integration Lead" }
        ],
        quote: "Building a functional IoT hardware prototype under strict hackathon time limits tested both technical debugging and collaborative teamwork."
      },
      rightPage: {
        secondaryHeading: "Technical Learnings & Prototyping Achievements",
        secondaryText: "Engineering execution and competitive problem-solving milestones:",
        learnings: [
          "Collaboratively developed and integrated **multi-parameter sensors (pH, turbidity, temperature)** into a single microcontroller unit",
          "Configured embedded telemetry to stream live sensor readings to a digital dashboard",
          "Addressed sensor noise, calibration offsets, and power regulation under rapid prototyping conditions",
          "Delivered a structured technical pitch and live hardware demonstration before the evaluation panel",
          "Strengthened core capabilities in rapid hardware troubleshooting, team collaboration, and technical communication"
        ],
        tags: ["IoT Hardware", "Sensor Fusion", "Microcontroller Interfacing", "Rapid Prototyping", "Technical Pitch"]
      }
    },

    // SPREAD 16: EVENT 03 — IGBC POSTER & MODEL MAKING 2025 (Pages 31 & 32)
    {
      id: "spread-16-event-03",
      spreadNumber: 16,
      leftPageNum: 31,
      rightPageNum: 32,
      category: "EVENT COORDINATION",
      chapterTitle: "IGBC Green Building 2025",
      chapterSubtitle: "Student Coordinator — Indian Green Building Council (IGBC) Student Chapter",
      leftPage: {
        headerTag: "EVENT 03 // IGBC CHAPTER",
        title: "Sustainable Building Initiatives",
        lead: "Promoting green building methodologies and eco-conscious engineering solutions.",
        dropCap: "S",
        bodyText: "erved as **Student Coordinator** for the *IGBC Poster & Model Making Competition 2025*, organized by the Indian Green Building Council (IGBC) Student Chapter at Kumaraguru College of Technology on **7 October 2025**. The event encouraged student innovations in sustainable habitat design and energy-efficient building materials.",
        specs: [
          { label: "Event", value: "IGBC Poster & Model Making Competition 2025" },
          { label: "Organizing Body", value: "IGBC Student Chapter, KCT" },
          { label: "Date", value: "7 October 2025" },
          { label: "Role", value: "Student Coordinator" },
          { label: "Focus", value: "Green Building, Energy Conservation, Eco-Materials" }
        ],
        quote: "Coordinating the IGBC competition provided hands-on leadership experience in championing green engineering concepts."
      },
      rightPage: {
        secondaryHeading: "Coordination & Management Outcomes",
        secondaryText: "End-to-end execution of student competition logistics:",
        learnings: [
          "Designed promotional visual assets, digital announcement flyers, and event registration portals",
          "Managed participant registration databases, query handling, and schedule dissemination",
          "Coordinated directly with participants, faculty judges, and student volunteer teams",
          "Assisted in managing the physical exhibition floor, model displays, and judging rotations",
          "Deepened understanding of **green building standards**, energy efficiency ratings, and sustainable engineering design"
        ],
        actions: [
          { label: "VIEW LINKEDIN UPDATE ↗", url: "https://www.linkedin.com/feed/update/urn:li:activity:7381297915174100993/", target: "_blank" }
        ]
      }
    },

    // SPREAD 17: EVENT 04 — SCCA'25 CLIMATE CONCLAVE (Pages 33 & 34)
    {
      id: "spread-17-event-04",
      spreadNumber: 17,
      leftPageNum: 33,
      rightPageNum: 34,
      category: "CONCLAVE ORGANIZER",
      chapterTitle: "Student Conclave for Climate Action",
      chapterSubtitle: "Organizer (SCCA'25) — Kumaraguru Yugam / Kumaraguru Microcosm",
      leftPage: {
        headerTag: "EVENT 04 // CLIMATE CONCLAVE",
        title: "Climate Action Leadership",
        lead: "First major leadership initiative within Microcosm, championing student-led climate action.",
        dropCap: "S",
        bodyText: "erved as an **Organizer for the Student Conclave for Climate Action (SCCA'25)** during *Kumaraguru Yugam*, marking my first major leadership initiative in *Microcosm* — a student-led platform dedicated to sustainability, climate action, and the UN Sustainable Development Goals.",
        specs: [
          { label: "Event", value: "Student Conclave for Climate Action (SCCA'25)" },
          { label: "Organization", value: "Kumaraguru Microcosm / Kumaraguru Yugam" },
          { label: "Year", value: "2025" },
          { label: "Role", value: "Organizer & Committee Member" },
          { label: "Themes", value: "Renewable Transition, Climate Action, Circularity" }
        ],
        quote: "Organizing SCCA'25 underscored the vital responsibility of electrical engineers in the global transition toward clean, sustainable energy."
      },
      rightPage: {
        secondaryHeading: "Key Organizational Responsibilities & Impact",
        secondaryText: "Conclave planning, speaker coordination, and session execution:",
        learnings: [
          "Contributed to the end-to-end planning, stage logistics, and on-ground scheduling of the conclave",
          "Coordinated multi-functional student teams to execute panel sessions, workshops, and student presentations",
          "Facilitated interactions between student delegates, invited domain experts, and guest speakers",
          "Developed advanced capabilities in stakeholder management, team leadership, crisis handling, and large-scale conclave governance"
        ],
        actions: [
          { label: "VIEW LINKEDIN UPDATE ↗", url: "https://www.linkedin.com/feed/update/urn:li:activity:7305112478177218562/", target: "_blank" }
        ]
      }
    },

    // SPREAD 18: PROFESSIONAL PROFILES & NETWORKING (Pages 35 & 36)
    {
      id: "spread-18-profiles",
      spreadNumber: 18,
      leftPageNum: 35,
      rightPageNum: 36,
      category: "PROFESSIONAL DIRECTORY",
      chapterTitle: "Professional Profiles",
      chapterSubtitle: "Verified Technical Profiles, Code Repositories & Academic Network",
      leftPage: {
        headerTag: "DIRECTORY // CONNECT",
        title: "Technical Channels",
        lead: "Verified online profiles for technical networking and code review.",
        dropCap: "M",
        bodyText: "y professional channels provide transparent access to my ongoing firmware repositories, engineering project documentation, verified internship certifications, and technical updates in **Electrical Engineering**.",
        specs: [
          { label: "Primary Email", value: "gokularasan.28eee@gmail.com" },
          { label: "LinkedIn", value: "linkedin.com/in/gokularasan183" },
          { label: "GitHub", value: "github.com/gokularasan-bot" },
          { label: "Location", value: "Coimbatore, Tamil Nadu, India" }
        ]
      },
      rightPage: {
        secondaryHeading: "Public Profiles & Repositories",
        secondaryText: "Direct links to verified profiles and project archives:",
        profileCards: [
          {
            title: "LinkedIn Profile",
            handle: "in/gokularasan183",
            desc: "Professional networking, verified internship updates, and engineering posts.",
            url: "https://www.linkedin.com/in/gokularasan183/",
            cta: "VIEW LINKEDIN PROFILE ↗"
          },
          {
            title: "GitHub Repository",
            handle: "gokularasan-bot",
            desc: "Public codebases, embedded firmware, and Arduino/ESP32 repositories.",
            url: "https://github.com/gokularasan-bot",
            cta: "VIEW GITHUB CODEBASE ↗"
          },
          {
            title: "Direct Email Dispatch",
            handle: "gokularasan.28eee@gmail.com",
            desc: "Direct channel for recruitment inquiries, internships, and technical reviews.",
            url: "mailto:gokularasan.28eee@gmail.com",
            cta: "SEND EMAIL INQUIRY ↗"
          }
        ]
      }
    },

    // SPREAD 19: OFFICIAL RESUME SPECIFICATION (Pages 37 & 38)
    {
      id: "spread-19-resume",
      spreadNumber: 19,
      leftPageNum: 37,
      rightPageNum: 38,
      category: "CURRICULUM VITAE",
      chapterTitle: "Curriculum Vitae",
      chapterSubtitle: "Official Documented Engineering Resume of Gokularasan",
      leftPage: {
        headerTag: "DOCUMENT ARCHIVE // RESUME",
        title: "Verified Credentials",
        lead: "Comprehensive academic, technical, and industrial credential summary.",
        dropCap: "T",
        bodyText: "he official resume summarizes my complete academic coursework, technical skills across embedded systems and power engineering, industrial internship certifications, laboratory prototypes, and campus leadership initiatives.",
        specs: [
          { label: "Document Name", value: "Gokularasan_Resume.pdf" },
          { label: "Candidate", value: "Gokularasan" },
          { label: "Degree Track", value: "B.E. Electrical & Electronics Engineering" },
          { label: "Institution", value: "Kumaraguru College of Technology" },
          { label: "Primary Focus", value: "Solar EPC · Embedded Systems · IoT Telemetry" },
          { label: "Document Revision", value: "Vol. 2026 (Verified)" }
        ]
      },
      rightPage: {
        secondaryHeading: "Resume Access & Downloads",
        secondaryText: "View the complete verified curriculum vitae document online or download the official PDF file for review:",
        docSummaryCards: [
          { label: "Academic Standing", detail: "B.E. EEE at KCT (Autonomous) | 10th: 96.40% | 12th: 93.83%" },
          { label: "Industrial Experience", detail: "Electromotive Power Drives (45 hrs) · MaRa Signex Solar Experts (150 hrs)" },
          { label: "Laboratory Projects", detail: "Classroom Energy Monitoring (IoT) · Cooking Oil Quality Detection" },
          { label: "Leadership", detail: "Kumaraguru Livestock Hackathon · IGBC Green Building · SCCA'25 Conclave" }
        ],
        actions: [
          { label: "VIEW OFFICIAL RESUME (PDF) ↗", url: "assets/docs/gokularasan-resume.pdf", target: "_blank", primary: true },
          { label: "DOWNLOAD RESUME FILE ↓", url: "assets/docs/gokularasan-resume.pdf", download: "Gokularasan_Resume.pdf", primary: false }
        ]
      }
    },

    // SPREAD 20: CONTACT & TRANSMISSION (Pages 39 & 40)
    {
      id: "spread-20-contact",
      spreadNumber: 20,
      leftPageNum: 39,
      rightPageNum: 40,
      category: "COMMUNICATION & INQUIRY",
      chapterTitle: "Get in Touch",
      chapterSubtitle: "Open for Engineering Inquiries, Internships & Technical Collaboration",
      leftPage: {
        headerTag: "CHAPTER 20 // DISPATCH",
        title: "Collaboration & Inquiries",
        lead: "Direct communications channel for engineering opportunities and discussions.",
        dropCap: "I",
        bodyText: "am actively looking for challenging engineering opportunities, industrial internships, and collaborative research projects in **Renewable Energy, Solar EPC, Embedded Systems, and Smart IoT Telemetry**.",
        subParagraph: "Whether you are interested in discussing ongoing prototypes, evaluating technical competencies, or exploring professional engineering roles, please reach out via the communication channels below.",
        specs: [
          { label: "Direct Email", value: "gokularasan.28eee@gmail.com" },
          { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
          { label: "Response Window", value: "Within 24 Hours" }
        ]
      },
      rightPage: {
        secondaryHeading: "Dispatch an Inquiry",
        secondaryText: "Send a direct message or connect across verified professional channels:",
        isContactForm: true,
        socials: [
          { name: "LinkedIn Profile ↗", url: "https://www.linkedin.com/in/gokularasan183/" },
          { name: "GitHub Repositories ↗", url: "https://github.com/gokularasan-bot" }
        ]
      }
    }
  ]
};
