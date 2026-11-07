export const personalInfo = {
  name: "Harshitha G S",
  title: "ECE Engineer & Full-Stack Developer",
  subtitle: "Blending Silicon & Software: VLSI, Embedded Systems, IoT, and Modern Web Applications",
  email: "harshitha.gemburu9705@gmail.com",
  phone: "+91 9743791172",
  phoneDisplay: "+91 97437 91172",
  location: "Shikaripura, Shimoga / Davangere, Karnataka",
  address: "Mudigoudru Keri, 53/1 Near PLD Bank, Shikaripura - 577427, Shimoga (D)",
  linkedin: "https://linkedin.com/in/harshitha-gs",
  github: "https://github.com/harshitha-gs",
  status: "Available for Internships & Full-time Roles",
  summary:
    "I am an Electronics and Communication Engineering (ECE) student passionate about bridging hardware and software. With hands-on experience in VLSI chip design, Embedded IoT with Edge AI, and full-stack MERN web engineering, I craft resilient end-to-end solutions from gate-level circuits to scalable web platforms."
}

export const education = [
  {
    institution: "GM University",
    degree: "UG - Bachelor of Technology in Electronics & Communication Engineering (ECE)",
    period: "Aug 2023 – Present",
    score: "CGPA: 6.99",
    location: "Davangere, Karnataka",
    status: "Currently Pursuing (3rd Year)",
    highlights: [
      "Core Coursework: VLSI Design, Microcontrollers & Embedded Systems, Digital Signal Processing, Power Electronics, Analog Circuits.",
      "Active participant in technical symposiums, hardware hackathons, and semiconductor workshops."
    ]
  },
  {
    institution: "Akshara PU College",
    degree: "Pre-University Course (PUC / 12th Grade) - PCMC",
    period: "Completed 2023",
    score: "Score: 88.33%",
    location: "Shikaripura, Karnataka",
    status: "Distinction",
    highlights: ["Strong foundation in Physics, Chemistry, Mathematics, and Computer Science."]
  },
  {
    institution: "Banasiri Lions Educational Society(R)",
    degree: "Secondary School Leaving Certificate (SSLC / 10th Grade)",
    period: "Completed 2021",
    score: "Score: 87.04%",
    location: "Shikaripura, Karnataka",
    status: "Distinction",
    highlights: ["Academic excellence with leadership roles in science exhibitions and school cultural events."]
  }
]

export const experience = [
  {
    role: "Web Development Intern",
    company: "Amdox Technologies",
    period: "Mar 2026 – May 2026",
    type: "Remote Internship",
    description:
      "Engineered robust web applications combining responsive frontend experiences with secure backend data pipelines.",
    responsibilities: [
      "Spearheaded the development of a modern Job Listing Portal featuring secure user authentication, role-based job management, and dynamic applicant tracking.",
      "Engineered a high-integrity Certificate Verification System allowing instant validation, search, and tamper-resistant digital certificate downloads using unique IDs.",
      "Optimized client-side rendering times by 35% through modular React architecture and efficient state management."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "JWT Auth"]
  }
]

export const projects = [
  {
    id: "smart-agri-edge-ai",
    title: "AIoT Smart Agriculture with Edge AI & Digital Twin",
    period: "May 2026 – Jun 2026",
    category: "Embedded & IoT",
    featured: true,
    badge: "Hardware + Edge AI",
    tagline: "Intelligent autonomous irrigation backed by cloud digital twins",
    description:
      "An automated smart agriculture ecosystem monitoring real-time soil moisture, temperature, and ambient humidity. Deploys Edge AI inference on ESP32 microcontrollers to predict crop water stress and trigger automated solenoid valve irrigation, while syncing sensor telemetry to a cloud-based Digital Twin dashboard.",
    technologies: ["ESP32", "Edge AI", "Digital Twin", "IoT Sensors", "Cloud Computing", "Wi-Fi Telemetry", "Embedded C"],
    deliverables: [
      "Low-latency Edge AI thresholding algorithm running directly on microcontrollers.",
      "Bidirectional Digital Twin mirror syncing hardware telemetry to a cloud visual dashboard.",
      "Substantial 40% reduction in water wastage verified during prototype testing."
    ],
    codeSnippet: `// ESP32 Edge AI Telemetry Loop
void loop() {
  float soilMoist = readSoilSensor();
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Edge AI inference: compute irrigation index
  float irrigationScore = edgeAI_Model(soilMoist, temp, humidity);
  if (irrigationScore > THRESHOLD) {
    digitalWrite(PUMP_RELAY_PIN, HIGH);
    sendDigitalTwinUpdate("IRRIGATION_ACTIVE", irrigationScore);
  } else {
    digitalWrite(PUMP_RELAY_PIN, LOW);
  }
  delay(5000);
}`
  },
  {
    id: "lfsr-flip-flops",
    title: "4-Bit LFSR using D Flip-Flops",
    period: "May 2026 – Jul 2026",
    category: "VLSI & Digital",
    featured: true,
    badge: "VLSI / Verilog",
    tagline: "Pseudo-random binary sequence generator implemented in Verilog",
    description:
      "Implemented a 4-bit Linear Feedback Shift Register (LFSR) architecture utilizing D flip-flops coupled with XOR feedback logic to generate maximal-length pseudo-random binary sequences (PRBS). Simulated and synthesized in Cadence EDA tools to analyze timing closure, propagation delays, and silicon gate count.",
    technologies: ["Verilog HDL", "Cadence Virtuoso", "Digital Logic", "PRBS Generation", "EDA Simulation"],
    deliverables: [
      "Designed maximal-length primitive polynomial feedback (x^4 + x^3 + 1).",
      "Achieved zero glitch propagation across Cadence timing simulation waveforms.",
      "Foundational hardware primitive for Built-In Self-Test (BIST) and data scrambling."
    ],
    codeSnippet: `// 4-bit LFSR Verilog Module
module lfsr_4bit (
    input wire clk,
    input wire rst_n,
    output reg [3:0] q
);
  wire feedback;
  // Polynomial: x^4 + x^3 + 1
  assign feedback = q[3] ^ q[2];

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n)
      q <= 4'b1001; // Seed non-zero state
    else
      q <= {q[2:0], feedback};
  end
endmodule`
  },
  {
    id: "verificate",
    title: "Verificate – Tamper-Proof Certificate Verification System",
    period: "Apr 2026 – May 2026",
    category: "Full-Stack Web",
    featured: true,
    badge: "MERN Stack",
    tagline: "Instant cryptographic credential validation using unique IDs",
    description:
      "A secure, web-based certificate verification platform designed to eliminate credential fraud. Features an administrative portal for issuing verified certificates with unique hashes, a public instant-lookup search engine, and automated PDF export with verifiable QR codes.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Crypto Hashes", "Tailwind CSS", "REST APIs"],
    deliverables: [
      "Sub-second verification queries powered by indexed MongoDB collections.",
      "Tamper-proof certificate identification tokens with cryptographic checksums.",
      "Responsive recruiter-friendly UI with single-click PDF export & verification sharing."
    ],
    codeSnippet: `// Express API: Certificate Verification
router.get('/verify/:certId', async (req, res) => {
  try {
    const cert = await Certificate.findOne({ certificateId: req.params.certId });
    if (!cert) {
      return res.status(404).json({ valid: false, message: 'Certificate Not Found' });
    }
    const isAuthentic = verifyHash(cert.data, cert.signature);
    return res.json({ valid: isAuthentic, details: cert });
  } catch (err) {
    res.status(500).json({ error: 'Verification failed' });
  }
});`
  },
  {
    id: "spark-careers",
    title: "Spark-Careers – Modern Startup Job Listing Portal",
    period: "Mar 2026 – Apr 2026",
    category: "Full-Stack Web",
    featured: false,
    badge: "MERN Stack",
    tagline: "Tech-startup career platform with streamlined candidate tracking",
    description:
      "Engineered a polished tech-startup job board featuring high-conversion landing pages, real-time job filtering, rich search parameters (location, salary, experience), employer job creation dashboards, and frictionless candidate application submission.",
    technologies: ["MERN Stack", "Tailwind CSS", "State Management", "RESTful Architecture", "SPA"],
    deliverables: [
      "Dynamic filtering system capable of multi-criteria query narrowing without page reloads.",
      "Employer CTA pipeline for posting listings and reviewing candidate profiles.",
      "Mobile-first responsive architecture tested across all viewport dimensions."
    ]
  },
  {
    id: "triac-dimmer",
    title: "TRIAC-Based Dimmer Circuit AC Lamp Control",
    period: "Mar 2026 – May 2026",
    category: "Hardware & Circuits",
    featured: false,
    badge: "Power Electronics",
    tagline: "Phase angle modulated AC lamp brightness control simulated in Multisim",
    description:
      "Designed and simulated a high-efficiency solid-state dimmer circuit for controlling incandescent and AC load illumination. Utilized a DIAC triggering network coupled with an adjustable RC phase delay to govern the TRIAC firing angle across the 230V AC waveform.",
    technologies: ["NI Multisim", "TRIAC & DIAC", "Power Electronics", "RC Timing", "Circuit Simulation"],
    deliverables: [
      "Precise firing angle modulation spanning 15° to 165° of the AC sinusoidal half-cycle.",
      "Snubber circuit integration to suppress inductive voltage spikes and dV/dt transients.",
      "Analyzed power factor, harmonic distortion, and thermal dissipation thresholds."
    ]
  },
  {
    id: "arduino-door-lock",
    title: "Password-Based Smart Door Lock System",
    period: "Oct 2025 – Nov 2025",
    category: "Embedded & IoT",
    featured: false,
    badge: "Embedded C / Arduino",
    tagline: "Secure passcode keypad access control with servo deadbolt actuation",
    description:
      "Constructed a standalone physical security access control system using an Arduino UNO, 4x4 matrix keypad, 16x2 LCD screen, and SG90 servomotor. Users authenticate with a secure 4-digit PIN ('1234') to engage the servo mechanical lock with visual and audible feedback.",
    technologies: ["Arduino UNO", "Embedded C", "HMI Keypad", "Servomotor", "LCD Display", "Security Logic"],
    deliverables: [
      "Non-blocking keypad scanning routine with anti-tamper timeout lockouts.",
      "Real-time status prompts on a 16x2 I2C LCD screen accompanied by dual-color LED signals.",
      "Smooth PWM servomotor motion profile ensuring zero mechanical gear strain."
    ]
  }
]

export const skillCategories = [
  {
    title: "Hardware & VLSI Design",
    icon: "Cpu",
    description: "Digital logic, RTL modeling, and semiconductor circuit analysis",
    skills: [
      { name: "Verilog HDL", level: 85, tag: "RTL & Digital" },
      { name: "Cadence Virtuoso / Tools", level: 80, tag: "VLSI EDA" },
      { name: "Embedded C", level: 88, tag: "Firmware" },
      { name: "Arduino & ESP32", level: 90, tag: "Microcontrollers" },
      { name: "NI Multisim", level: 82, tag: "Circuit Simulation" },
      { name: "LabVIEW", level: 75, tag: "Instrumentation" },
      { name: "Sensors & Actuators", level: 88, tag: "IoT & HMI" },
      { name: "Power Electronics", level: 80, tag: "TRIAC / DIAC" }
    ]
  },
  {
    title: "Software & Full-Stack Web",
    icon: "Code",
    description: "Scalable web architectures and algorithmic programming",
    skills: [
      { name: "Python", level: 85, tag: "Core & Scripting" },
      { name: "React.js", level: 88, tag: "Frontend UI" },
      { name: "JavaScript (ES6+)", level: 88, tag: "Web Core" },
      { name: "HTML5 & CSS3", level: 92, tag: "Semantic & Responsive" },
      { name: "Node.js & Express", level: 82, tag: "Backend APIs" },
      { name: "MongoDB", level: 80, tag: "Database" },
      { name: "Tailwind CSS", level: 88, tag: "Modern Styling" },
      { name: "RESTful APIs", level: 85, tag: "Architecture" }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    icon: "Wrench",
    description: "Version control, workflow efficiency, and environments",
    skills: [
      { name: "Git & GitHub", level: 88, tag: "Version Control" },
      { name: "VS Code", level: 92, tag: "Primary IDE" },
      { name: "Linux / Windows CLI", level: 82, tag: "Shell Scripting" },
      { name: "Postman", level: 85, tag: "API Testing" },
      { name: "Digital Twin Platforms", level: 78, tag: "AIoT" },
      { name: "Edge AI Toolchains", level: 76, tag: "TinyML" }
    ]
  },
  {
    title: "Soft Skills & Languages",
    icon: "Sparkles",
    description: "Interpersonal communication and multilingual agility",
    skills: [
      { name: "Teamwork & Collaboration", level: 95, tag: "Soft Skill" },
      { name: "Adaptability & Quick Learning", level: 95, tag: "Soft Skill" },
      { name: "Active Listening", level: 90, tag: "Communication" },
      { name: "English", level: 90, tag: "Professional Proficiency" },
      { name: "Kannada", level: 98, tag: "Native Tongue" },
      { name: "Hindi", level: 85, tag: "Conversational" }
    ]
  }
]

export const certifications = [
  {
    id: "rtl-soc-signoff",
    title: '30 Hours Bootcamp: "RTL, IP Integration, and SoC Signoff"',
    issuer: "NIELIT & SoCTeamup Semiconductors",
    date: "Sep 2026",
    credential: "Verified Certificate",
    description:
      "Comprehensive semiconductor intensive covering Register-Transfer Level (RTL) coding best practices, Intellectual Property (IP) block integration, synthesis constraints, static timing analysis (STA), and System-on-Chip (SoC) signoff validation.",
    skillsGained: ["RTL Integration", "SoC Signoff", "Static Timing Analysis", "Verilog Modeling"]
  },
  {
    id: "web-design-dev",
    title: "Web Design and Development Certification",
    issuer: "x-workz Bangalore & CIGSRD GM University",
    date: "Mar 2025",
    credential: "Verified Certificate",
    description:
      "Hands-on program mastering modern web standards, semantic HTML, responsive CSS design patterns, client-side JavaScript architecture, and API consumption.",
    skillsGained: ["Responsive Web Design", "DOM Manipulation", "Modern JavaScript", "Component Architecture"]
  },
  {
    id: "samavesha-event",
    title: "Samavesha Episode-7 Event Organisation",
    issuer: "I-STEM (Indian Science, Technology & Engineering Facilities Map)",
    date: "Nov 2024",
    credential: "Verified Leadership & Organization",
    description:
      "Recognized for leadership and coordination in organizing Samavesha Episode-7 under the national I-STEM initiative fostering research facility accessibility and industry-academia synergy.",
    skillsGained: ["Technical Event Management", "Public Communication", "Team Coordination"]
  }
]
