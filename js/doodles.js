/**
 * GOKULARASAN — TECHNICAL DOODLES & ENGINEERING SKETCHES ENGINE
 * Generates authentic, detailed, hand-drawn vector engineering sketches,
 * circuit schematics, physical formulas, and diagrams for every Left Page.
 */

class TechnicalDoodles {
  static render(containerId, doodleType, title) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let svgContent = '';
    switch (doodleType) {
      case 'circuit-core':
        svgContent = this.getCircuitCoreSVG();
        break;
      case 'sensor-network':
        svgContent = this.getSensorNetworkSVG();
        break;
      case 'hex-matrix':
        svgContent = this.getHexMatrixSVG();
        break;
      case 'toolkit-schematic':
        svgContent = this.getToolkitSchematicSVG();
        break;
      case 'energy-schematic':
        svgContent = this.getEnergySchematicSVG();
        break;
      case 'oil-schematic':
        svgContent = this.getOilSchematicSVG();
        break;
      case 'motor-schematic':
        svgContent = this.getMotorSchematicSVG();
        break;
      case 'solar-schematic':
        svgContent = this.getSolarSchematicSVG();
        break;
      case 'cnc-schematic':
        svgContent = this.getCNCSchematicSVG();
        break;
      case 'spinning-flow':
        svgContent = this.getSpinningFlowSVG();
        break;
      case 'math-geometry':
        svgContent = this.getMathGeometrySVG();
        break;
      case 'physics-calculus':
        svgContent = this.getPhysicsCalculusSVG();
        break;
      case 'kct-eee-schematic':
        svgContent = this.getKCTSchematicSVG();
        break;
      case 'hackathon-ops':
        svgContent = this.getHackathonOpsSVG();
        break;
      case 'water-schematic':
        svgContent = this.getWaterSchematicSVG();
        break;
      case 'green-building':
        svgContent = this.getGreenBuildingSVG();
        break;
      case 'climate-cycle':
        svgContent = this.getClimateCycleSVG();
        break;
      case 'network-directory':
        svgContent = this.getNetworkDirectorySVG();
        break;
      case 'resume-stamp':
        svgContent = this.getResumeStampSVG();
        break;
      case 'signal-dispatch':
        svgContent = this.getSignalDispatchSVG();
        break;
      default:
        svgContent = this.getCircuitCoreSVG();
    }

    container.innerHTML = `
      <div class="doodle-header">
        <span class="doodle-plate-tag">TECHNICAL SKETCH // FIELD LOG</span>
        <span class="doodle-title-text">${title || 'ENGINEERING SCHEMATIC'}</span>
      </div>
      <div class="doodle-svg-wrapper">
        ${svgContent}
      </div>
      <div class="doodle-footer-notes">
        <span>HAND-DRAWN FIELD SCHEMATIC</span>
        <span>REV. 2026</span>
      </div>
    `;
  }

  // 1. Core Circuit Schematic (Intro)
  static getCircuitCoreSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Grid coordinate background -->
        <defs>
          <pattern id="doodleGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(26, 73, 128, 0.08)" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodleGrid)"/>

        <!-- Microcontroller IC Box (ESP32) -->
        <rect x="160" y="140" width="180" height="240" rx="8" class="sketch-box"/>
        <text x="250" y="170" text-anchor="middle" class="sketch-text bold">ESP32-WROOM-32</text>
        <text x="250" y="190" text-anchor="middle" class="sketch-text tiny">DUAL CORE 240MHz</text>

        <!-- IC Pins -->
        <!-- Left Pins -->
        <line x1="120" y1="210" x2="160" y2="210" class="sketch-line"/>
        <text x="110" y="214" class="sketch-text tiny">3V3</text>
        <line x1="120" y1="240" x2="160" y2="240" class="sketch-line"/>
        <text x="110" y="244" class="sketch-text tiny">EN</text>
        <line x1="120" y1="270" x2="160" y2="270" class="sketch-line"/>
        <text x="110" y="274" class="sketch-text tiny">GPIO34 (ADC)</text>
        <line x1="120" y1="300" x2="160" y2="300" class="sketch-line"/>
        <text x="110" y="304" class="sketch-text tiny">GPIO35 (ADC)</text>
        <line x1="120" y1="330" x2="160" y2="330" class="sketch-line"/>
        <text x="110" y="334" class="sketch-text tiny">GND</text>

        <!-- Right Pins -->
        <line x1="340" y1="210" x2="380" y2="210" class="sketch-line"/>
        <text x="390" y="214" class="sketch-text tiny">GPIO21 (SDA)</text>
        <line x1="340" y1="240" x2="380" y2="240" class="sketch-line"/>
        <text x="390" y="244" class="sketch-text tiny">GPIO22 (SCL)</text>
        <line x1="340" y1="270" x2="380" y2="270" class="sketch-line"/>
        <text x="390" y="274" class="sketch-text tiny">TXD0</text>
        <line x1="340" y1="300" x2="380" y2="300" class="sketch-line"/>
        <text x="390" y="304" class="sketch-text tiny">RXD0</text>
        <line x1="340" y1="330" x2="380" y2="330" class="sketch-line"/>
        <text x="390" y="334" class="sketch-text tiny">5V_VIN</text>

        <!-- Crystal Oscillator & Decoupling Capacitors -->
        <rect x="220" y="70" width="60" height="30" class="sketch-box"/>
        <text x="250" y="90" text-anchor="middle" class="sketch-text tiny">40.00 MHz</text>
        <line x1="235" y1="100" x2="235" y2="140" class="sketch-line"/>
        <line x1="265" y1="100" x2="265" y2="140" class="sketch-line"/>

        <!-- Hand-drawn Antenna Traces -->
        <path d="M 230 40 L 230 20 L 270 20 L 270 40 L 250 40 L 250 20" fill="none" class="sketch-line-thick"/>
        <text x="250" y="15" text-anchor="middle" class="sketch-text tiny accent">PCB 2.4GHz ANTENNA</text>

        <!-- Ohm's Law & Power Equation Doodle Notes -->
        <circle cx="80" cy="450" r="45" class="sketch-circle-dash"/>
        <line x1="35" y1="450" x2="125" y2="450" class="sketch-line"/>
        <line x1="80" y1="450" x2="80" y2="495" class="sketch-line"/>
        <text x="80" y="435" text-anchor="middle" class="sketch-text bold">V</text>
        <text x="60" y="475" text-anchor="middle" class="sketch-text bold">I</text>
        <text x="100" y="475" text-anchor="middle" class="sketch-text bold">R</text>
        <text x="80" y="515" text-anchor="middle" class="sketch-text tiny">V = I × R</text>

        <!-- AC Sine Wave Doodle -->
        <path d="M 220 460 Q 250 420, 280 460 T 340 460" fill="none" class="sketch-line-thick accent"/>
        <line x1="200" y1="460" x2="360" y2="460" class="sketch-line-dash"/>
        <text x="280" y="495" text-anchor="middle" class="sketch-text tiny">v(t) = V_m sin(ωt + φ)</text>
        <text x="280" y="520" text-anchor="middle" class="sketch-text tiny accent">P_active = V_rms · I_rms · cos(φ)</text>

        <!-- Solar PV Diode Equation -->
        <rect x="360" y="420" width="125" height="75" rx="4" class="sketch-box-dash"/>
        <text x="422" y="445" text-anchor="middle" class="sketch-text tiny bold">PHOTOVOLTAIC</text>
        <text x="422" y="465" text-anchor="middle" class="sketch-text tiny">I = I_ph - I_0[e^(qV/nkT) - 1]</text>
        <text x="422" y="485" text-anchor="middle" class="sketch-text tiny accent">EFFICIENCY: η = P_max / P_in</text>
      </svg>
    `;
  }

  // 2. Sensor Network & Philosophy (About)
  static getSensorNetworkSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Central Gateway Node -->
        <circle cx="250" cy="270" r="38" class="sketch-circle-thick accent"/>
        <text x="250" y="265" text-anchor="middle" class="sketch-text bold">EDGE DAQ</text>
        <text x="250" y="282" text-anchor="middle" class="sketch-text tiny">GATEWAY</text>

        <!-- 7 Surrounding Sensor Nodes -->
        <!-- Node 1: Solar -->
        <circle cx="250" cy="100" r="28" class="sketch-circle"/>
        <line x1="250" y1="128" x2="250" y2="232" class="sketch-line-dash"/>
        <text x="250" y="98" text-anchor="middle" class="sketch-text tiny bold">SOLAR PV</text>
        <text x="250" y="112" text-anchor="middle" class="sketch-text tiny">V_oc / I_sc</text>

        <!-- Node 2: Embedded -->
        <circle cx="390" cy="170" r="28" class="sketch-circle"/>
        <line x1="365" y1="188" x2="280" y2="245" class="sketch-line-dash"/>
        <text x="390" y="168" text-anchor="middle" class="sketch-text tiny bold">EMBEDDED</text>
        <text x="390" y="182" text-anchor="middle" class="sketch-text tiny">ESP32 / MCU</text>

        <!-- Node 3: Telemetry -->
        <circle cx="390" cy="370" r="28" class="sketch-circle"/>
        <line x1="365" y1="352" x2="280" y2="295" class="sketch-line-dash"/>
        <text x="390" y="368" text-anchor="middle" class="sketch-text tiny bold">TELEMETRY</text>
        <text x="390" y="382" text-anchor="middle" class="sketch-text tiny">MQTT / HTTP</text>

        <!-- Node 4: Power Flow -->
        <circle cx="250" cy="450" r="28" class="sketch-circle"/>
        <line x1="250" y1="422" x2="250" y2="308" class="sketch-line-dash"/>
        <text x="250" y="448" text-anchor="middle" class="sketch-text tiny bold">MACHINES</text>
        <text x="250" y="462" text-anchor="middle" class="sketch-text tiny">VFD / Motors</text>

        <!-- Node 5: Energy Efficiency -->
        <circle cx="110" cy="370" r="28" class="sketch-circle"/>
        <line x1="135" y1="352" x2="220" y2="295" class="sketch-line-dash"/>
        <text x="110" y="368" text-anchor="middle" class="sketch-text tiny bold">EFFICIENCY</text>
        <text x="110" y="382" text-anchor="middle" class="sketch-text tiny">THD / Losses</text>

        <!-- Node 6: Industrial Quality -->
        <circle cx="110" cy="170" r="28" class="sketch-circle"/>
        <line x1="135" y1="188" x2="220" y2="245" class="sketch-line-dash"/>
        <text x="110" y="168" text-anchor="middle" class="sketch-text tiny bold">QUALITY</text>
        <text x="110" y="182" text-anchor="middle" class="sketch-text tiny">ISO / 5S / TQM</text>

        <!-- Field Annotation Callouts -->
        <path d="M 50 510 L 450 510" class="sketch-line"/>
        <text x="250" y="530" text-anchor="middle" class="sketch-text tiny italic">"Theory without practical hardware verification is incomplete."</text>
      </svg>
    `;
  }

  // 3. Hexagonal Domain Matrix (Focus)
  static getHexMatrixSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Central Hexagon -->
        <polygon points="250,210 320,250 320,330 250,370 180,330 180,250" class="sketch-polygon-thick accent"/>
        <text x="250" y="285" text-anchor="middle" class="sketch-text bold">6-CORE</text>
        <text x="250" y="305" text-anchor="middle" class="sketch-text tiny">RESEARCH</text>

        <!-- Six Focus Branches -->
        <line x1="250" y1="210" x2="250" y2="90" class="sketch-line-thick"/>
        <rect x="180" y="60" width="140" height="35" rx="4" class="sketch-box"/>
        <text x="250" y="82" text-anchor="middle" class="sketch-text tiny bold">01. RENEWABLE ENERGY</text>

        <line x1="320" y1="250" x2="420" y2="180" class="sketch-line-thick"/>
        <rect x="350" y="160" width="140" height="35" rx="4" class="sketch-box"/>
        <text x="420" y="182" text-anchor="middle" class="sketch-text tiny bold">02. EMBEDDED SYSTEMS</text>

        <line x1="320" y1="330" x2="420" y2="400" class="sketch-line-thick"/>
        <rect x="350" y="380" width="140" height="35" rx="4" class="sketch-box"/>
        <text x="420" y="402" text-anchor="middle" class="sketch-text tiny bold">03. SMART ENERGY</text>

        <line x1="250" y1="370" x2="250" y2="490" class="sketch-line-thick"/>
        <rect x="180" y="470" width="140" height="35" rx="4" class="sketch-box"/>
        <text x="250" y="492" text-anchor="middle" class="sketch-text tiny bold">04. INDUSTRIAL TECH</text>

        <line x1="180" y1="330" x2="80" y2="400" class="sketch-line-thick"/>
        <rect x="10" y="380" width="140" height="35" rx="4" class="sketch-box"/>
        <text x="80" y="402" text-anchor="middle" class="sketch-text tiny bold">05. IoT & SENSORS</text>

        <line x1="180" y1="250" x2="80" y2="180" class="sketch-line-thick"/>
        <rect x="10" y="160" width="140" height="35" rx="4" class="sketch-box"/>
        <text x="80" y="182" text-anchor="middle" class="sketch-text tiny bold">06. SUSTAINABILITY</text>
      </svg>
    `;
  }

  // 4. Toolkit Schematic (Skills)
  static getToolkitSchematicSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Bus architecture diagram -->
        <rect x="40" y="60" width="420" height="40" rx="4" class="sketch-box-thick accent"/>
        <text x="250" y="85" text-anchor="middle" class="sketch-text bold" fill="#fff">SYSTEM INTEGRATION & INSTRUMENTATION BUS</text>

        <!-- Layer 1: Hardware Layer -->
        <rect x="60" y="140" width="170" height="110" rx="6" class="sketch-box"/>
        <text x="145" y="165" text-anchor="middle" class="sketch-text bold">ELECTRICAL MACHINES</text>
        <text x="145" y="185" text-anchor="middle" class="sketch-text tiny">Stator/Rotor Assembly</text>
        <text x="145" y="205" text-anchor="middle" class="sketch-text tiny">VFD & Inverter Drives</text>
        <text x="145" y="225" text-anchor="middle" class="sketch-text tiny">Harmonics & Losses</text>

        <!-- Layer 2: Embedded MCU Layer -->
        <rect x="270" y="140" width="170" height="110" rx="6" class="sketch-box"/>
        <text x="355" y="165" text-anchor="middle" class="sketch-text bold">MICROCONTROLLERS</text>
        <text x="355" y="185" text-anchor="middle" class="sketch-text tiny">ESP32 Dual Core</text>
        <text x="355" y="205" text-anchor="middle" class="sketch-text tiny">Arduino UNO / Nano</text>
        <text x="355" y="225" text-anchor="middle" class="sketch-text tiny">STM32 Architecture</text>

        <!-- Bus connectors -->
        <line x1="145" y1="100" x2="145" y2="140" class="sketch-line-thick"/>
        <line x1="355" y1="100" x2="355" y2="140" class="sketch-line-thick"/>

        <!-- Layer 3: Simulation & Tools -->
        <rect x="60" y="290" width="380" height="110" rx="6" class="sketch-box"/>
        <text x="250" y="315" text-anchor="middle" class="sketch-text bold">SIMULATION & IDE SUITE</text>
        <text x="150" y="345" text-anchor="middle" class="sketch-text tiny">• MATLAB / Simulink</text>
        <text x="150" y="370" text-anchor="middle" class="sketch-text tiny">• NI Multisim Circuit</text>
        <text x="350" y="345" text-anchor="middle" class="sketch-text tiny">• STM32CubeIDE / Keil</text>
        <text x="350" y="370" text-anchor="middle" class="sketch-text tiny">• Vivado / Wokwi IoT</text>

        <!-- Bottom standards stamp -->
        <rect x="120" y="440" width="260" height="60" rx="4" class="sketch-box-dash"/>
        <text x="250" y="465" text-anchor="middle" class="sketch-text tiny bold">INDUSTRY QUALITY FRAMEWORK</text>
        <text x="250" y="485" text-anchor="middle" class="sketch-text tiny accent">ISO 9001 · 5S METHODOLOGY · TQM PRACTICES</text>
      </svg>
    `;
  }

  // 5. Energy Monitor Wiring (Project 01)
  static getEnergySchematicSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- 230V AC Mains Input -->
        <rect x="40" y="100" width="90" height="70" rx="4" class="sketch-box"/>
        <text x="85" y="130" text-anchor="middle" class="sketch-text bold">230V AC</text>
        <text x="85" y="150" text-anchor="middle" class="sketch-text tiny">MAINS 50Hz</text>

        <!-- ACS712 Current Sensor -->
        <rect x="190" y="80" width="110" height="70" rx="4" class="sketch-box-thick accent"/>
        <text x="245" y="110" text-anchor="middle" class="sketch-text bold">ACS712</text>
        <text x="245" y="130" text-anchor="middle" class="sketch-text tiny">HALL CURRENT (IP)</text>

        <!-- Load Bulb -->
        <circle cx="410" cy="115" r="28" class="sketch-circle"/>
        <text x="410" y="118" text-anchor="middle" class="sketch-text tiny bold">LOAD</text>

        <!-- Wiring connections for AC loop -->
        <line x1="130" y1="115" x2="190" y2="115" class="sketch-line-thick"/>
        <line x1="300" y1="115" x2="382" y2="115" class="sketch-line-thick"/>
        <line x1="410" y1="143" x2="410" y2="200" class="sketch-line-thick"/>
        <line x1="410" y1="200" x2="85" y2="200" class="sketch-line-thick"/>
        <line x1="85" y1="200" x2="85" y2="170" class="sketch-line-thick"/>

        <!-- ZMPT101B Voltage Transformer Module -->
        <rect x="190" y="220" width="110" height="70" rx="4" class="sketch-box"/>
        <text x="245" y="250" text-anchor="middle" class="sketch-text bold">ZMPT101B</text>
        <text x="245" y="270" text-anchor="middle" class="sketch-text tiny">VOLTAGE SENSOR</text>

        <!-- Tapping voltage across mains -->
        <line x1="150" y1="115" x2="150" y2="255" class="sketch-line-dash"/>
        <line x1="150" y1="255" x2="190" y2="255" class="sketch-line-dash"/>
        <line x1="350" y1="200" x2="350" y2="255" class="sketch-line-dash"/>
        <line x1="350" y1="255" x2="300" y2="255" class="sketch-line-dash"/>

        <!-- Microcontroller (Arduino / ESP32) -->
        <rect x="160" y="340" width="180" height="110" rx="8" class="sketch-box-thick"/>
        <text x="250" y="375" text-anchor="middle" class="sketch-text bold">MICROCONTROLLER</text>
        <text x="250" y="395" text-anchor="middle" class="sketch-text tiny">ARDUINO UNO / ESP32</text>
        <text x="250" y="420" text-anchor="middle" class="sketch-text tiny accent">TELEMETRY ENGINE</text>

        <!-- Analog sensor lines to MCU -->
        <line x1="245" y1="150" x2="245" y2="340" class="sketch-line accent"/>
        <text x="255" y="180" class="sketch-text tiny">Analog ADC (I)</text>
        <line x1="245" y1="290" x2="245" y2="340" class="sketch-line accent"/>
        <text x="255" y="315" class="sketch-text tiny">Analog ADC (V)</text>

        <!-- Live Calculation formula -->
        <rect x="60" y="470" width="380" height="60" rx="4" class="sketch-box-dash"/>
        <text x="250" y="495" text-anchor="middle" class="sketch-text tiny bold">ACTIVE POWER & ENERGY COMPUTATION</text>
        <text x="250" y="515" text-anchor="middle" class="sketch-text tiny accent">P = V_rms × I_rms × PF  |  kWh = Σ (P × Δt) / 3.6×10^6</text>
      </svg>
    `;
  }

  // 6. Oil Impurity Sensor Array (Project 02)
  static getOilSchematicSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Oil Test Vessel Container -->
        <rect x="120" y="100" width="260" height="190" rx="10" class="sketch-box-thick"/>
        <path d="M 120 150 Q 250 160, 380 150 L 380 280 Q 250 290, 120 280 Z" fill="rgba(194, 107, 30, 0.12)"/>
        <text x="250" y="130" text-anchor="middle" class="sketch-text bold">OIL SAMPLE CHAMBER</text>
        <text x="250" y="210" text-anchor="middle" class="sketch-text tiny italic" fill="var(--accent-amber)">TEST OIL MEDIUM (FRESH vs USED)</text>

        <!-- Sensor Probes entering vessel -->
        <!-- Probe 1: Impedance Plate -->
        <line x1="160" y1="60" x2="160" y2="240" class="sketch-line-thick accent"/>
        <rect x="154" y="220" width="12" height="35" class="sketch-box-thick"/>
        <text x="160" y="45" text-anchor="middle" class="sketch-text tiny bold">IMPEDANCE</text>

        <!-- Probe 2: Moisture Sensor -->
        <line x1="220" y1="60" x2="220" y2="230" class="sketch-line-thick"/>
        <circle cx="220" cy="235" r="8" class="sketch-circle"/>
        <text x="220" y="45" text-anchor="middle" class="sketch-text tiny bold">MOISTURE</text>

        <!-- Probe 3: pH Electrode -->
        <line x1="280" y1="60" x2="280" y2="245" class="sketch-line-thick"/>
        <rect x="274" y="235" width="12" height="20" rx="3" class="sketch-box"/>
        <text x="280" y="45" text-anchor="middle" class="sketch-text tiny bold">pH PROBE</text>

        <!-- Probe 4: Temperature DS18B20 -->
        <line x1="340" y1="60" x2="340" y2="225" class="sketch-line-thick"/>
        <circle cx="340" cy="230" r="6" class="sketch-circle-thick"/>
        <text x="340" y="45" text-anchor="middle" class="sketch-text tiny bold">TEMP °C</text>

        <!-- HIOKI LCR Meter Interface -->
        <rect x="80" y="320" width="150" height="90" rx="6" class="sketch-box"/>
        <text x="155" y="350" text-anchor="middle" class="sketch-text bold">HIOKI IM3536</text>
        <text x="155" y="370" text-anchor="middle" class="sketch-text tiny">LCR / IMPEDANCE</text>
        <text x="155" y="390" text-anchor="middle" class="sketch-text tiny accent">4Hz – 8MHz SWEEP</text>

        <!-- MCU Processing Node -->
        <rect x="270" y="320" width="150" height="90" rx="6" class="sketch-box"/>
        <text x="345" y="350" text-anchor="middle" class="sketch-text bold">ESP32 SENSOR DAQ</text>
        <text x="345" y="370" text-anchor="middle" class="sketch-text tiny">MULTIVARIATE FUSION</text>
        <text x="345" y="390" text-anchor="middle" class="sketch-text tiny accent">THRESHOLD ALARM</text>

        <!-- Connecting lines -->
        <line x1="160" y1="60" x2="155" y2="320" class="sketch-line-dash"/>
        <line x1="280" y1="60" x2="345" y2="320" class="sketch-line-dash"/>

        <!-- Research note -->
        <rect x="50" y="440" width="400" height="75" rx="4" class="sketch-box-dash"/>
        <text x="250" y="465" text-anchor="middle" class="sketch-text tiny bold">ELECTROCHEMICAL IMPEDANCE FORMULA</text>
        <text x="250" y="485" text-anchor="middle" class="sketch-text tiny">Z(ω) = R_s + R_ct / [1 + (jω R_ct C_dl)^α]</text>
        <text x="250" y="505" text-anchor="middle" class="sketch-text tiny accent">PRELIMINARY SCREENING & CALIBRATION BENCH</text>
      </svg>
    `;
  }

  // 7. Motor Stator & Coil Winding (Internship 01)
  static getMotorSchematicSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Motor Stator Outer Ring -->
        <circle cx="250" cy="230" r="140" class="sketch-circle-thick"/>
        <circle cx="250" cy="230" r="100" class="sketch-circle"/>
        <circle cx="250" cy="230" r="50" class="sketch-circle-thick accent"/>
        <text x="250" y="235" text-anchor="middle" class="sketch-text bold">ROTOR SHAFT</text>

        <!-- Stator Slots & Winding Poles -->
        <!-- 8 Stator Slots -->
        <circle cx="250" cy="110" r="12" class="sketch-circle"/>
        <text x="250" y="114" text-anchor="middle" class="sketch-text tiny">U1</text>

        <circle cx="335" cy="145" r="12" class="sketch-circle"/>
        <text x="335" y="149" text-anchor="middle" class="sketch-text tiny">V1</text>

        <circle cx="370" cy="230" r="12" class="sketch-circle"/>
        <text x="370" y="234" text-anchor="middle" class="sketch-text tiny">W1</text>

        <circle cx="335" cy="315" r="12" class="sketch-circle"/>
        <text x="335" y="319" text-anchor="middle" class="sketch-text tiny">U2</text>

        <circle cx="250" cy="350" r="12" class="sketch-circle"/>
        <text x="250" y="354" text-anchor="middle" class="sketch-text tiny">V2</text>

        <circle cx="165" cy="315" r="12" class="sketch-circle"/>
        <text x="165" y="319" text-anchor="middle" class="sketch-text tiny">W2</text>

        <circle cx="130" cy="230" r="12" class="sketch-circle"/>
        <text x="130" y="234" text-anchor="middle" class="sketch-text tiny">U1'</text>

        <circle cx="165" cy="145" r="12" class="sketch-circle"/>
        <text x="165" y="149" text-anchor="middle" class="sketch-text tiny">V1'</text>

        <!-- Magnetic Flux Arrows -->
        <path d="M 250 180 Q 280 200, 250 220" fill="none" class="sketch-line-thick accent"/>
        <text x="285" y="205" class="sketch-text tiny accent">Φ_B (RMF)</text>

        <!-- Motor Equations -->
        <rect x="60" y="410" width="380" height="110" rx="4" class="sketch-box-dash"/>
        <text x="250" y="435" text-anchor="middle" class="sketch-text bold">SYNCHRONOUS SPEED & SLIP</text>
        <text x="250" y="460" text-anchor="middle" class="sketch-text tiny">N_s = (120 × f) / P  |  Slip s = (N_s - N_r) / N_s</text>
        <text x="250" y="485" text-anchor="middle" class="sketch-text tiny">Torque T ∝ (s × E_2^2 × R_2) / [R_2^2 + (s × X_2)^2]</text>
        <text x="250" y="505" text-anchor="middle" class="sketch-text tiny accent">ELECTROMOTIVE POWER DRIVES // 7-DAY FIELD LOG</text>
      </svg>
    `;
  }

  // 8. Solar EPC Diagram (Internship 02)
  static getSolarSchematicSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Solar PV Strings -->
        <rect x="40" y="80" width="100" height="120" rx="4" class="sketch-box-thick accent"/>
        <line x1="40" y1="120" x2="140" y2="120" class="sketch-line"/>
        <line x1="40" y1="160" x2="140" y2="160" class="sketch-line"/>
        <line x1="90" y1="80" x2="90" y2="200" class="sketch-line"/>
        <text x="90" y="65" text-anchor="middle" class="sketch-text tiny bold">PV STRING (DC)</text>

        <!-- DC Disconnect / Protection -->
        <rect x="180" y="115" width="50" height="50" rx="4" class="sketch-box"/>
        <text x="205" y="145" text-anchor="middle" class="sketch-text tiny">DC SPD</text>

        <line x1="140" y1="140" x2="180" y2="140" class="sketch-line-thick"/>
        <line x1="230" y1="140" x2="270" y2="140" class="sketch-line-thick"/>

        <!-- Solar Inverter (Sungrow / Growatt / Deye / ABB) -->
        <rect x="270" y="90" width="130" height="100" rx="6" class="sketch-box-thick"/>
        <text x="335" y="125" text-anchor="middle" class="sketch-text bold">INVERTER</text>
        <text x="335" y="145" text-anchor="middle" class="sketch-text tiny">MPPT + DC/AC</text>
        <text x="335" y="165" text-anchor="middle" class="sketch-text tiny accent">GRID SYNC 50Hz</text>

        <!-- AC Output / Meter / Grid -->
        <line x1="400" y1="140" x2="440" y2="140" class="sketch-line-thick"/>
        <circle cx="460" cy="140" r="20" class="sketch-circle"/>
        <text x="460" y="144" text-anchor="middle" class="sketch-text tiny bold">GRID</text>

        <!-- Inverter Topology Comparison Table -->
        <rect x="40" y="240" width="420" height="160" rx="6" class="sketch-box"/>
        <text x="250" y="265" text-anchor="middle" class="sketch-text bold">INVERTER COMPARATIVE ARCHITECTURE</text>
        
        <line x1="40" y1="280" x2="460" y2="280" class="sketch-line"/>
        <text x="60" y="300" class="sketch-text tiny bold">MANUFACTURER</text>
        <text x="180" y="300" class="sketch-text tiny bold">TOPOLOGY</text>
        <text x="320" y="300" class="sketch-text tiny bold">PEAK EFFICIENCY</text>

        <text x="60" y="325" class="sketch-text tiny">• SUNGROW</text>
        <text x="180" y="325" class="sketch-text tiny">Multi-MPPT String</text>
        <text x="320" y="325" class="sketch-text tiny">98.8%</text>

        <text x="60" y="350" class="sketch-text tiny">• GROWATT</text>
        <text x="180" y="350" class="sketch-text tiny">On/Off/Hybrid PV</text>
        <text x="320" y="350" class="sketch-text tiny">98.4%</text>

        <text x="60" y="375" class="sketch-text tiny">• DEYE / ABB (FIMER)</text>
        <text x="180" y="375" class="sketch-text tiny">Low-Voltage Hybrid</text>
        <text x="320" y="375" class="sketch-text tiny">98.6%</text>

        <!-- Harmonic Loss Note -->
        <rect x="40" y="425" width="420" height="85" rx="4" class="sketch-box-dash"/>
        <text x="250" y="450" text-anchor="middle" class="sketch-text tiny bold">VFD HARMONICS & MITIGATION</text>
        <text x="250" y="470" text-anchor="middle" class="sketch-text tiny">THD_v = sqrt(Σ V_n^2) / V_1  |  Active Harmonic Filter (AHF)</text>
        <text x="250" y="490" text-anchor="middle" class="sketch-text tiny accent">MARA SIGNEX SOLAR EXPERTS // 150-HOUR EPC LOG</text>
      </svg>
    `;
  }

  // 9. CNC & INTEC Fair (Industrial Exposure 01)
  static getCNCSchematicSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- 3-Axis CNC Machine Sketch -->
        <rect x="120" y="80" width="260" height="240" rx="8" class="sketch-box-thick"/>
        <text x="250" y="110" text-anchor="middle" class="sketch-text bold">CNC MACHINING CENTER</text>
        
        <!-- X-Y-Z Axes -->
        <line x1="250" y1="140" x2="250" y2="240" class="sketch-line-thick accent"/>
        <line x1="180" y1="200" x2="320" y2="200" class="sketch-line-thick accent"/>
        <circle cx="250" cy="200" r="16" class="sketch-circle-thick"/>
        <text x="250" y="204" text-anchor="middle" class="sketch-text tiny bold">SPINDLE</text>

        <text x="260" y="150" class="sketch-text tiny bold">+Z</text>
        <text x="330" y="204" class="sketch-text tiny bold">+X</text>
        <text x="180" y="270" class="sketch-text tiny bold">+Y</text>

        <!-- Workpiece Platform -->
        <rect x="170" y="250" width="160" height="40" rx="2" class="sketch-box"/>
        <text x="250" y="275" text-anchor="middle" class="sketch-text tiny">WORKPIECE FIXTURE</text>

        <!-- INTEC Observations -->
        <rect x="50" y="360" width="400" height="150" rx="6" class="sketch-box-dash"/>
        <text x="250" y="390" text-anchor="middle" class="sketch-text bold">INTEC 2026 // CODISSIA OBSERVATION LOG</text>
        <text x="70" y="420" class="sketch-text tiny">• High-speed servo motors & optical linear encoders</text>
        <text x="70" y="445" class="sketch-text tiny">• Precision multi-axis tool changers and industrial pneumatic clamping</text>
        <text x="70" y="470" class="sketch-text tiny">• Direct interactions with plant managers on industry automation needs</text>
        <text x="250" y="495" text-anchor="middle" class="sketch-text tiny accent">COIMBATORE INDUSTRIAL TRADE FAIR</text>
      </svg>
    `;
  }

  // 10. Ambertex Spinning Process Flow & Rooftop PV
  static getSpinningFlowSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <text x="250" y="40" text-anchor="middle" class="sketch-text bold">RAW COTTON TO YARN PROCESS</text>

        <!-- 9-Step Vertical Flow Pipeline -->
        <rect x="40" y="70" width="120" height="35" rx="4" class="sketch-box"/>
        <text x="100" y="92" text-anchor="middle" class="sketch-text tiny">1. RAW BALE</text>
        <line x1="160" y1="87" x2="190" y2="87" class="sketch-line-thick"/>

        <rect x="190" y="70" width="120" height="35" rx="4" class="sketch-box"/>
        <text x="250" y="92" text-anchor="middle" class="sketch-text tiny">2. BALE OPENING</text>
        <line x1="310" y1="87" x2="340" y2="87" class="sketch-line-thick"/>

        <rect x="340" y="70" width="120" height="35" rx="4" class="sketch-box"/>
        <text x="400" y="92" text-anchor="middle" class="sketch-text tiny">3. CLEANING</text>

        <!-- Row 2 -->
        <rect x="40" y="130" width="120" height="35" rx="4" class="sketch-box-thick accent"/>
        <text x="100" y="152" text-anchor="middle" class="sketch-text tiny">4. CARDING</text>
        <line x1="160" y1="147" x2="190" y2="147" class="sketch-line-thick"/>

        <rect x="190" y="130" width="120" height="35" rx="4" class="sketch-box"/>
        <text x="250" y="152" text-anchor="middle" class="sketch-text tiny">5. COMBING</text>
        <line x1="310" y1="147" x2="340" y2="147" class="sketch-line-thick"/>

        <rect x="340" y="130" width="120" height="35" rx="4" class="sketch-box"/>
        <text x="400" y="152" text-anchor="middle" class="sketch-text tiny">6. SIMPLEX</text>

        <!-- Row 3 -->
        <rect x="40" y="190" width="120" height="35" rx="4" class="sketch-box"/>
        <text x="100" y="212" text-anchor="middle" class="sketch-text tiny">7. RING SPIN</text>
        <line x1="160" y1="207" x2="190" y2="207" class="sketch-line-thick"/>

        <rect x="190" y="190" width="120" height="35" rx="4" class="sketch-box"/>
        <text x="250" y="212" text-anchor="middle" class="sketch-text tiny">8. AUTO-CONE</text>
        <line x1="310" y1="207" x2="340" y2="207" class="sketch-line-thick"/>

        <rect x="340" y="190" width="120" height="35" rx="4" class="sketch-box-thick accent"/>
        <text x="400" y="212" text-anchor="middle" class="sketch-text tiny">9. YARN CONE</text>

        <!-- Large Rooftop Solar PV Observation Doodle -->
        <rect x="50" y="270" width="400" height="150" rx="8" class="sketch-box"/>
        <text x="250" y="300" text-anchor="middle" class="sketch-text bold">AMBERTEX ROOFTOP SOLAR INSTALLATION</text>
        
        <!-- Solar array drawing -->
        <g stroke="var(--accent-eng-blue)" stroke-width="1.5" fill="none">
          <rect x="80" y="320" width="80" height="40"/>
          <rect x="170" y="320" width="80" height="40"/>
          <rect x="260" y="320" width="80" height="40"/>
          <rect x="350" y="320" width="80" height="40"/>
        </g>
        <text x="250" y="390" text-anchor="middle" class="sketch-text tiny bold">~1,500 ROOFTOP SOLAR PV PANELS</text>
        <text x="250" y="408" text-anchor="middle" class="sketch-text tiny">INTEGRATED WITH HEAVY CONTINUOUS INDUCTION LOADS</text>

        <!-- Waste recycling note -->
        <rect x="50" y="445" width="400" height="65" rx="4" class="sketch-box-dash"/>
        <text x="250" y="470" text-anchor="middle" class="sketch-text tiny bold">CLOSED-LOOP FIBER WASTE RECOVERY</text>
        <text x="250" y="490" text-anchor="middle" class="sketch-text tiny accent">Pneumatic collection · Hydraulic compression · Secondary reuse</text>
      </svg>
    `;
  }

  // 11. Mathematics & Classical Geometry (Education 01)
  static getMathGeometrySVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Drafting Compass & Circles -->
        <circle cx="250" cy="200" r="110" class="sketch-circle-thick"/>
        <circle cx="250" cy="200" r="70" class="sketch-circle-dash"/>
        
        <!-- Geometric Triangle Inscribed -->
        <polygon points="250,90 345,255 155,255" class="sketch-polygon-thick accent"/>
        <line x1="250" y1="90" x2="250" y2="255" class="sketch-line-dash"/>
        <circle cx="250" cy="200" r="4" class="sketch-circle-thick"/>

        <!-- Angle Annotations -->
        <text x="250" y="125" text-anchor="middle" class="sketch-text tiny bold">θ = 60°</text>
        <text x="250" y="275" text-anchor="middle" class="sketch-text tiny">EQUILATERAL GEOMETRY</text>

        <!-- Euclidean Proof Formulas -->
        <rect x="50" y="350" width="400" height="150" rx="6" class="sketch-box-dash"/>
        <text x="250" y="380" text-anchor="middle" class="sketch-text bold">FOUNDATIONAL MATHEMATICS & SCIENCE</text>
        <text x="80" y="415" class="sketch-text tiny">• Pythagorean Theorem: a² + b² = c²</text>
        <text x="80" y="440" class="sketch-text tiny">• Trigonometric Identities: sin²θ + cos²θ = 1</text>
        <text x="80" y="465" class="sketch-text tiny">• 10th Standard Academic Foundation: 96.40%</text>
        <text x="250" y="488" text-anchor="middle" class="sketch-text tiny accent">SHALOM CONVENT MATRICULATION HR. SEC. SCHOOL</text>
      </svg>
    `;
  }

  // 12. Physics & Calculus (Education 02)
  static getPhysicsCalculusSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Integral Calculus Curves -->
        <line x1="50" y1="260" x2="450" y2="260" class="sketch-line-thick"/>
        <line x1="80" y1="50" x2="80" y2="300" class="sketch-line-thick"/>
        
        <path d="M 80 260 Q 200 40, 420 180" fill="none" class="sketch-line-thick accent"/>
        <text x="420" y="160" class="sketch-text tiny bold">f(x) = ∫ e^(-t) dt</text>

        <!-- Shaded Riemann Sum Area -->
        <path d="M 160 260 L 160 145 Q 220 100, 300 130 L 300 260 Z" fill="rgba(26, 73, 128, 0.1)"/>
        <text x="230" y="210" text-anchor="middle" class="sketch-text tiny bold">AREA = ∫ a→b f(x) dx</text>

        <!-- Maxwell & Faraday Formulas -->
        <rect x="50" y="340" width="400" height="170" rx="6" class="sketch-box-dash"/>
        <text x="250" y="370" text-anchor="middle" class="sketch-text bold">PHYSICS & ELECTROMAGNETIC PRINCIPLES</text>
        <text x="80" y="405" class="sketch-text tiny">• Faraday's Law: ℰ = -dΦ_B / dt</text>
        <text x="80" y="430" class="sketch-text tiny">• Gauss's Law: ∮ E · dA = Q_encl / ε_0</text>
        <text x="80" y="455" class="sketch-text tiny">• 10th: 96.40%  |  11th: 90.60%  |  12th: 93.83%</text>
        <text x="250" y="490" text-anchor="middle" class="sketch-text tiny accent">SREE GOKULAM MATRIC HIGHER SECONDARY SCHOOL</text>
      </svg>
    `;
  }

  // 13. KCT EEE Laboratory (Education 03)
  static getKCTSchematicSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Power Transmission Tower Doodle -->
        <path d="M 250 80 L 190 320 L 310 320 Z" class="sketch-polygon-thick"/>
        <line x1="160" y1="160" x2="340" y2="160" class="sketch-line-thick"/>
        <line x1="140" y1="230" x2="360" y2="230" class="sketch-line-thick"/>
        <line x1="200" y1="80" x2="300" y2="80" class="sketch-line-thick"/>

        <!-- Transmission Cables -->
        <path d="M 160 160 Q 90 200, 20 180" class="sketch-line-dash"/>
        <path d="M 340 160 Q 410 200, 480 180" class="sketch-line-dash"/>

        <!-- KCT EEE Insignia & Bench Specs -->
        <rect x="50" y="350" width="400" height="160" rx="8" class="sketch-box-thick accent"/>
        <text x="250" y="380" text-anchor="middle" class="sketch-text bold">KUMARAGURU COLLEGE OF TECHNOLOGY</text>
        <text x="250" y="405" text-anchor="middle" class="sketch-text tiny bold">DEPARTMENT OF ELECTRICAL & ELECTRONICS ENGINEERING</text>
        
        <text x="70" y="435" class="sketch-text tiny">• Power Systems, Electrical Machines & High Voltage Lab</text>
        <text x="70" y="460" class="sketch-text tiny">• Embedded Systems, IoT Telemetry & Renewable Energy</text>
        <text x="250" y="490" text-anchor="middle" class="sketch-text tiny accent">COIMBATORE, TAMIL NADU // B.E. EEE</text>
      </svg>
    `;
  }

  // 14. Hackathon Ops Sprint (Hackathon 01)
  static getHackathonOpsSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- 3-Day Sprint Timeline -->
        <line x1="80" y1="100" x2="80" y2="460" class="sketch-line-thick accent"/>

        <!-- Day 1 -->
        <circle cx="80" cy="120" r="14" class="sketch-circle-thick"/>
        <text x="80" y="125" text-anchor="middle" class="sketch-text tiny bold">D1</text>
        <rect x="120" y="105" width="320" height="50" rx="4" class="sketch-box"/>
        <text x="135" y="125" class="sketch-text tiny bold">DAY 1: PROBLEM STATEMENT & TEAM ONBOARDING</text>
        <text x="135" y="145" class="sketch-text tiny">Logistics, participant coordination, ideation kickoff</text>

        <!-- Day 2 -->
        <circle cx="80" cy="240" r="14" class="sketch-circle-thick"/>
        <text x="80" y="245" text-anchor="middle" class="sketch-text tiny bold">D2</text>
        <rect x="120" y="225" width="320" height="50" rx="4" class="sketch-box"/>
        <text x="135" y="245" class="sketch-text tiny bold">DAY 2: 24-HR PROTOTYPE DEVELOPMENT</text>
        <text x="135" y="265" class="sketch-text tiny">Mentor alignment, hardware troubleshooting, milestone review</text>

        <!-- Day 3 -->
        <circle cx="80" cy="360" r="14" class="sketch-circle-thick"/>
        <text x="80" y="365" text-anchor="middle" class="sketch-text tiny bold">D3</text>
        <rect x="120" y="345" width="320" height="50" rx="4" class="sketch-box"/>
        <text x="135" y="365" class="sketch-text tiny bold">DAY 3: FINAL JURY EVALUATION & CLOSING</text>
        <text x="135" y="385" class="sketch-text tiny">Pitch sessions, judging logistics, awards facilitation</text>

        <!-- Leadership stamp -->
        <rect x="80" y="440" width="360" height="60" rx="4" class="sketch-box-dash"/>
        <text x="260" y="465" text-anchor="middle" class="sketch-text tiny bold">KUMARAGURU LIVESTOCK HACKATHON 2026</text>
        <text x="260" y="485" text-anchor="middle" class="sketch-text tiny accent">MANAGEMENT TEAM // RESOURCE & CRISIS COORDINATION</text>
      </svg>
    `;
  }

  // 15. Water Quality Schematic (Hackathon 02)
  static getWaterSchematicSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Sensor Probes entering Water Sample -->
        <rect x="100" y="100" width="300" height="200" rx="8" class="sketch-box-thick"/>
        <path d="M 100 160 Q 250 170, 400 160 L 400 300 L 100 300 Z" fill="rgba(26, 107, 99, 0.12)"/>
        <text x="250" y="135" text-anchor="middle" class="sketch-text bold">WATER QUALITY SAMPLE VESSEL</text>

        <!-- pH Sensor -->
        <rect x="140" y="60" width="40" height="150" rx="4" class="sketch-box"/>
        <text x="160" y="85" text-anchor="middle" class="sketch-text tiny bold">pH</text>

        <!-- Turbidity Sensor -->
        <rect x="230" y="60" width="40" height="160" rx="4" class="sketch-box"/>
        <text x="250" y="85" text-anchor="middle" class="sketch-text tiny bold">TURB</text>

        <!-- Temp Sensor -->
        <rect x="320" y="60" width="40" height="140" rx="4" class="sketch-box"/>
        <text x="340" y="85" text-anchor="middle" class="sketch-text tiny bold">TEMP</text>

        <!-- MCU & Telemetry node -->
        <rect x="100" y="340" width="300" height="80" rx="6" class="sketch-box-thick accent"/>
        <text x="250" y="370" text-anchor="middle" class="sketch-text bold">U & ME HACKATHON // CIT</text>
        <text x="250" y="395" text-anchor="middle" class="sketch-text tiny">REAL-TIME IoT WATER QUALITY INDEXING</text>

        <!-- Callout notes -->
        <rect x="60" y="450" width="380" height="60" rx="4" class="sketch-box-dash"/>
        <text x="250" y="475" text-anchor="middle" class="sketch-text tiny bold">COLLABORATIVE RAPID PROTOTYPING</text>
        <text x="250" y="495" text-anchor="middle" class="sketch-text tiny accent">COIMBATORE INSTITUTE OF TECHNOLOGY // AUG 2025</text>
      </svg>
    `;
  }

  // 16. Green Building & IGBC (Event 03)
  static getGreenBuildingSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Eco Habitat Architecture Sketch -->
        <polygon points="250,80 120,180 380,180" class="sketch-polygon-thick"/>
        <rect x="140" y="180" width="220" height="160" class="sketch-box-thick"/>
        
        <!-- Rooftop Solar PV -->
        <line x1="250" y1="80" x2="380" y2="180" class="sketch-line-thick accent"/>
        <text x="340" y="120" class="sketch-text tiny bold accent">SOLAR PV</text>

        <!-- Natural Daylighting Windows -->
        <rect x="170" y="210" width="60" height="60" class="sketch-box"/>
        <rect x="270" y="210" width="60" height="60" class="sketch-box"/>
        
        <!-- Rainwater Harvesting Tank -->
        <rect x="70" y="290" width="60" height="90" rx="4" class="sketch-box-dash"/>
        <text x="100" y="340" text-anchor="middle" class="sketch-text tiny">RAIN TANK</text>
        <line x1="140" y1="180" x2="100" y2="290" class="sketch-line-dash"/>

        <!-- Event Coordinator Card -->
        <rect x="50" y="400" width="400" height="110" rx="6" class="sketch-box-dash"/>
        <text x="250" y="430" text-anchor="middle" class="sketch-text bold">IGBC POSTER & MODEL MAKING COMPETITION</text>
        <text x="250" y="455" text-anchor="middle" class="sketch-text tiny">Student Coordinator // Promotion & Event Flow</text>
        <text x="250" y="485" text-anchor="middle" class="sketch-text tiny accent">KUMARAGURU COLLEGE OF TECHNOLOGY // OCT 2025</text>
      </svg>
    `;
  }

  // 17. Climate Conclave Lifecycle (Event 04)
  static getClimateCycleSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Circular Ecological Flow -->
        <circle cx="250" cy="230" r="130" class="sketch-circle-dash"/>
        
        <!-- 4 Action Nodes -->
        <circle cx="250" cy="100" r="28" class="sketch-circle-thick accent"/>
        <text x="250" y="104" text-anchor="middle" class="sketch-text tiny bold">POLICY</text>

        <circle cx="380" cy="230" r="28" class="sketch-circle-thick"/>
        <text x="380" y="234" text-anchor="middle" class="sketch-text tiny bold">ENERGY</text>

        <circle cx="250" cy="360" r="28" class="sketch-circle-thick accent"/>
        <text x="250" y="364" text-anchor="middle" class="sketch-text tiny bold">ECOLOGY</text>

        <circle cx="120" cy="230" r="28" class="sketch-circle-thick"/>
        <text x="120" y="234" text-anchor="middle" class="sketch-text tiny bold">COMMUNITY</text>

        <!-- Center Summit Insignia -->
        <rect x="190" y="195" width="120" height="70" rx="4" class="sketch-box-thick"/>
        <text x="250" y="225" text-anchor="middle" class="sketch-text bold">SCCA'25</text>
        <text x="250" y="245" text-anchor="middle" class="sketch-text tiny">MICROCOSM</text>

        <!-- Conclave Organization Card -->
        <rect x="50" y="430" width="400" height="85" rx="6" class="sketch-box-dash"/>
        <text x="250" y="455" text-anchor="middle" class="sketch-text bold">STUDENT CONCLAVE FOR CLIMATE ACTION</text>
        <text x="250" y="475" text-anchor="middle" class="sketch-text tiny">Organizer // Speaker Logistics & Stakeholder Operations</text>
        <text x="250" y="495" text-anchor="middle" class="sketch-text tiny accent">KUMARAGURU YUGAM // YEAR 2025</text>
      </svg>
    `;
  }

  // 18. Network Directory (Profiles)
  static getNetworkDirectorySVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="180" r="45" class="sketch-circle-thick accent"/>
        <text x="250" y="175" text-anchor="middle" class="sketch-text bold">GOKULARASAN</text>
        <text x="250" y="195" text-anchor="middle" class="sketch-text tiny">B.E. EEE</text>

        <!-- Linked Nodes -->
        <circle cx="100" cy="320" r="35" class="sketch-circle"/>
        <text x="100" y="324" text-anchor="middle" class="sketch-text tiny bold">LINKEDIN</text>
        <line x1="215" y1="205" x2="130" y2="295" class="sketch-line-thick"/>

        <circle cx="250" cy="350" r="35" class="sketch-circle"/>
        <text x="250" y="354" text-anchor="middle" class="sketch-text tiny bold">GITHUB</text>
        <line x1="250" y1="225" x2="250" y2="315" class="sketch-line-thick"/>

        <circle cx="400" cy="320" r="35" class="sketch-circle"/>
        <text x="400" y="324" text-anchor="middle" class="sketch-text tiny bold">EMAIL</text>
        <line x1="285" y1="205" x2="370" y2="295" class="sketch-line-thick"/>

        <!-- Note -->
        <rect x="50" y="440" width="400" height="70" rx="4" class="sketch-box-dash"/>
        <text x="250" y="465" text-anchor="middle" class="sketch-text tiny bold">PROFESSIONAL REPOSITORIES & NETWORKING</text>
        <text x="250" y="485" text-anchor="middle" class="sketch-text tiny accent">Open-Source Codebases · Technical Inquiries · Industry Contact</text>
      </svg>
    `;
  }

  // 19. Resume Stamp & Schema
  static getResumeStampSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Engineering Document Archive Stamp -->
        <rect x="80" y="80" width="340" height="260" rx="8" class="sketch-box-thick"/>
        <circle cx="250" cy="180" r="60" class="sketch-circle-dash accent"/>
        <text x="250" y="175" text-anchor="middle" class="sketch-text bold">VERIFIED</text>
        <text x="250" y="195" text-anchor="middle" class="sketch-text tiny">DOCUMENT</text>
        
        <text x="250" y="270" text-anchor="middle" class="sketch-text bold">GOKULARASAN // B.E. EEE</text>
        <text x="250" y="295" text-anchor="middle" class="sketch-text tiny">KUMARAGURU COLLEGE OF TECHNOLOGY</text>

        <!-- Official Seal Box -->
        <rect x="60" y="380" width="380" height="120" rx="6" class="sketch-box-dash"/>
        <text x="250" y="410" text-anchor="middle" class="sketch-text bold">ACADEMIC & INDUSTRY ARCHIVE</text>
        <text x="80" y="440" class="sketch-text tiny">• 2 Technical Internships (Motor Mfg & Solar EPC)</text>
        <text x="80" y="465" class="sketch-text tiny">• 2 Developing Hardware Lab Projects</text>
        <text x="80" y="490" class="sketch-text tiny">• Documented Conclave Leadership & Hackathon Results</text>
      </svg>
    `;
  }

  // 20. Signal Dispatch & Contact
  static getSignalDispatchSVG() {
    return `
      <svg viewBox="0 0 500 560" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Radio/Telemetry Antenna Wave -->
        <line x1="250" y1="120" x2="250" y2="280" class="sketch-line-thick accent"/>
        <circle cx="250" cy="120" r="10" class="sketch-circle-thick accent"/>
        
        <!-- Concentric RF Wave Arcs -->
        <path d="M 210 100 Q 250 70, 290 100" fill="none" class="sketch-line-dash"/>
        <path d="M 180 80 Q 250 40, 320 80" fill="none" class="sketch-line-dash"/>
        <path d="M 150 60 Q 250 10, 350 60" fill="none" class="sketch-line-dash"/>

        <!-- Antenna Base Tripod -->
        <line x1="250" y1="280" x2="180" y2="350" class="sketch-line-thick"/>
        <line x1="250" y1="280" x2="320" y2="350" class="sketch-line-thick"/>
        <line x1="250" y1="280" x2="250" y2="360" class="sketch-line-thick"/>

        <!-- Message Envelope Circuit -->
        <rect x="120" y="380" width="260" height="100" rx="6" class="sketch-box-thick"/>
        <polygon points="120,380 250,440 380,380" fill="none" class="sketch-line"/>
        <text x="250" y="465" text-anchor="middle" class="sketch-text tiny bold">DIRECT INQUIRY DISPATCH</text>
      </svg>
    `;
  }
}
