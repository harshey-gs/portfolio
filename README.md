# Harshitha G S — Responsive Student Portfolio Website

A student portfolio website for **Harshitha G S** (Electronics & Communication Engineering student at GM University), built using **React**, **HTML5**, **CSS3**, and **JavaScript** with **Three.js** and **Vite**.

Inspired by **[Deskform](https://deskform.framer.website/)**, the portfolio features an interactive **Desktop OS experience** with draggable glassmorphism windows, desktop icons, and a floating dock, alongside a dedicated **Scroll Flow View** for mobile responsiveness and quick recruiter browsing. The hero background features a **3D Voxel Sunset Meadow** (`MeadowBlush`) built in Three.js where the cursor dynamically sways and parts the grass.

---

## 🌟 Key Sections & Features

1. **Home / Hero Experience**:
   - 3D Voxel Sunset Meadow background with instanced geometry, realistic wind physics, cube clouds, square sun, blooming flowers, and mouse-parting grass.
   - Glassmorphic Hero HUD with status pills, dynamic role tags (*VLSI & Verilog*, *Embedded C & IoT*, *MERN Full-Stack*), and quick action buttons.
   - Top Menu Bar with live digital clock, date, status indicator (*"Open to ECE & Web Internships"*), quick time-of-day switcher (Sunset, High Noon, Starry Night), and view mode toggle.

2. **About Me**:
   - Personal biography and engineering philosophy.
   - Academic background: **GM University** (UG ECE, CGPA: 6.99), **Akshara PU College** (PUC, 88.33%), and **Banasiri Lions Educational Society** (SSLC, 87.04%).
   - Professional Experience: **Web Development Intern @ Amdox Technologies** (Job Listing Portal & Certificate Verification System).
   - Languages: English (Professional), Kannada (Native), Hindi (Conversational).

3. **Skills & Capabilities**:
   - **Hardware & VLSI Design**: Verilog HDL, Cadence Virtuoso, Embedded C, Arduino UNO, ESP32, NI Multisim, LabVIEW, Sensors & Actuators, TRIAC & DIAC Power Electronics.
   - **Software & Full-Stack Web**: Python, React.js, JavaScript (ES6+), HTML5 & CSS3, Node.js & Express.js, MongoDB, Tailwind CSS, REST APIs.
   - **Developer Tools**: Git & GitHub, VS Code, Linux/Windows CLI, Postman, Edge AI toolchains.
   - **Hardware-to-Cloud Dual Engine**: Interactive spectrum showing end-to-end expertise from transistor logic to responsive cloud applications.

4. **Projects (6 Comprehensive Showcases)**:
   - **AIoT-Based Smart Agriculture with Edge AI & Digital Twin** (ESP32, Sensors, Cloud Digital Twin).
   - **4-Bit LFSR using D Flip-Flops** (Verilog HDL, Cadence Virtuoso EDA).
   - **Verificate** (MERN Stack, Tamper-Proof Cryptographic ID Validation).
   - **Spark-Careers** (MERN Stack, Startup Job Board & Candidate Funnel).
   - **TRIAC-Based Dimmer Circuit AC Lamp Control** (Multisim, Power Electronics).
   - **Password-Based Smart Door Lock System** (Arduino UNO, Embedded C, 4x4 Keypad, Servo).
   - Includes an interactive **Blueprint Inspector** with architecture highlights and code snippets.

5. **Resume & Certifications**:
   - Formatted printable digital CV matching the official resume layout.
   - One-click **Print / Save as PDF** functionality.
   - Verified Certifications: NIELIT & SoCTeamup *RTL, IP Integration, and SoC Signoff* Bootcamp, x-workz *Web Design & Development*, and I-STEM *Samavesha Episode-7* Organization.

6. **Contact Section**:
   - Direct contact channels with one-click copy and toast notification feedback (Email: `harshitha.gemburu9705@gmail.com`, Phone: `+91 9743791172`, Location: Shikaripura / Davangere, Karnataka).
   - Verified links to **LinkedIn** and **GitHub**.
   - Interactive Contact Form with client-side validation and celebratory **confetti** upon dispatch.

7. **3D Meadow Lab (Easter Egg Window)**:
   - Real-time sliders allowing visitors to control wind gusts, grass density, flower counts, cloud speeds, and continuous day/night cycles.

---

## 🚀 Running the Project Locally

```bash
cd portfolio

# Install dependencies (already installed in workspace)
npm install

# Start Vite dev server
npm run dev

# Build production bundle
npm run build

# Preview production bundle
npm run preview
```

---

## 📁 Project Architecture

```
portfolio/
├── dist/                      # Production build assets
├── node_modules/              # Dependencies
├── src/
│   ├── components/
│   │   ├── windows/           # Deskform OS Application Windows
│   │   │   ├── AboutWindow.jsx
│   │   │   ├── ProjectsWindow.jsx
│   │   │   ├── SkillsWindow.jsx
│   │   │   ├── ResumeWindow.jsx
│   │   │   ├── ContactWindow.jsx
│   │   │   └── MeadowSettingsWindow.jsx
│   │   ├── MeadowBlush.jsx    # Three.js 3D Voxel Sunset Meadow
│   │   ├── TopMenuBar.jsx     # macOS/Deskform style top status bar
│   │   ├── DesktopIcons.jsx   # Desktop surface application icons
│   │   ├── DesktopWindow.jsx  # Draggable, minimizable glass window container
│   │   ├── HeroCard.jsx       # Floating welcome HUD
│   │   ├── Dock.jsx           # Magnified floating dock
│   │   └── ScrollFlowView.jsx # Dedicated responsive one-page scroll view
│   ├── data/
│   │   └── portfolioData.js   # Structured data extracted from resume
│   ├── App.jsx                # Main application state and window manager
│   ├── main.jsx               # React DOM entry point
│   └── index.css              # Glassmorphism, animations, and typography styles
├── index.html                 # HTML5 template with Google Fonts
├── package.json
└── vite.config.js
```
