import { Cpu, BrainCircuit, FlaskConical, GraduationCap, TrendingUp, BrainCog } from "lucide-react";

const skillGroups = [
  {
    title: "QA/QC & Testing",
    skills: ["Sensor Calibration & Testing", "Quality Inspection", "Hardware-in-the-Loop", "Root Cause Analysis", "Data Quality Checks", "pytest", "RealTerm", "Modbus Poll"],
  },
  {
    title: "IoT & Hardware",
    skills: ["ESP32", "ESP32-CAM", "Mappi32", "PZEM-004T", "DHT22", "Modbus / TTL", "MQTT Telemetry", "Arduino IDE (C++)", "Soldering"],
  },
  {
    title: "Data & Analytics",
    skills: ["Python", "pandas", "scikit-learn", "xarray", "SciPy", "SQL", "PostgreSQL / TimescaleDB", "ETL Pipelines", "SARIMAX", "Machine Learning", "Gymnasium", "Stable-Baselines3", "PyTorch", "Optuna", "Reinforcement Learning (PPO / SAC)", "Energy Dispatch Optimization", "MILP", "Microsoft Excel"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS (EC2)", "Docker", "SQLite", "Git", "GitHub Actions", "Firebase", "Grafana", "Google Colab", "Plotly", "Leaflet", "React", "Vite", "Three.js", "Microsoft Fabric", "VS Code"],
  },
];

const certifications = [
  {
    title: "ICMA-SURE 2026",
    description: "International conference presenter — residential energy optimization with PPO.",
  },
  {
    title: "RC-QED 1446",
    description: "International conference presenter — computational study of Earth's core iron behavior.",
  },
  {
    title: "Microsoft Fabric — Dicoding",
    description: "Belajar Penerapan Data Science dengan Microsoft Fabric · Aug–Sep 2026.",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    description: "Amazon Web Services · Aug–Sep 2026.",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    description: "Forage · Jul–Aug 2026.",
  },
];

const highlights = [
  {
    icon: Cpu,
    title: "IoT Systems",
    description:
      "End-to-end sensor-to-cloud pipelines: ESP32 data acquisition, Firebase Realtime Database, and live dashboards.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    description:
      "Time-series forecasting (SARIMAX) and reinforcement learning (PPO) agents for real-world energy optimization.",
  },
  {
    icon: FlaskConical,
    title: "Hardware Validation",
    description:
      "Calibrated 60+ environmental sensors. Hardware-in-the-Loop testing with 100% serial reliability.",
  },
  {
    icon: GraduationCap,
    title: "Research & Comms",
    description:
      "Two international conference presentations. Educational YouTube demos and IoT webinar moderation.",
  },
];

const experience = [
  {
    role: "Engineer Intern",
    company: "Mertani & Karya Merapi Teknologi (KMTek)",
    location: "Sleman, Yogyakarta",
    period: "Jan 2025 – Jun 2025",
    bullets: [
      "Calibrated & validated 50+ ARR sensors, 10+ soil moisture sensors to company standards.",
      "Achieved 100% serial data transmission reliability via RealTerm HIL testing across all prototypes.",
      "Produced educational YouTube build demos (Power Tracker, Smart Stick, Fruit Detector, ESP32-CAM) and moderated a face recognition webinar.",
    ],
  },
  {
    role: "Lab Assistant – Algorithms & Programming",
    company: "Universitas Jenderal Soedirman",
    location: "Banyumas, Indonesia",
    period: "Mar 2024 – Jun 2024",
    bullets: [
      "Mentored 100+ students in foundational Pascal programming and supervised 5+ IoT sensor projects.",
    ],
  },
  {
    role: "Lab Assistant – Electricity & Fluid Dynamics",
    company: "Universitas Jenderal Soedirman",
    location: "Banyumas, Indonesia",
    period: "Mar 2023 – Jun 2024",
    bullets: [
      "Taught 100+ students per course. Trained circuit assembly and multimeter measurement to validate theory.",
    ],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block bg-black text-white px-4 py-2 border-[2px] border-black mb-4">
            <h2 className="font-['JetBrains_Mono'] text-sm">
              <span className="text-[#00FF00]">cat</span> ./about.txt
            </h2>
          </div>
          <h3 className="text-4xl font-['Space_Grotesk'] font-bold mb-4">
            About Me
          </h3>
          <p className="font-['JetBrains_Mono'] text-sm text-gray-600 max-w-3xl leading-relaxed">
            Physics graduate (Electronics &amp; Instrumentation) targeting IoT Engineer and Data Engineer roles, connecting calibrated
            sensor hardware to data pipelines and forecasting. Built an energy monitoring system that saved 14.7% energy in a 29-day
            test and an automated pipeline processing 4.1M satellite records. Calibrated 60+ sensors and tested prototypes with 100%
            serial transmission reliability.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-[#F0F0F0] border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <highlight.icon className="w-8 h-8 mb-3" />
              <h4 className="font-['JetBrains_Mono'] font-bold mb-2">
                {highlight.title}
              </h4>
              <p className="font-['JetBrains_Mono'] text-xs text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills grouped by domain */}
        <div className="bg-black border-[3px] border-black p-8 shadow-[8px_8px_0_0_#FFD700] mb-12">
          <h4 className="font-['JetBrains_Mono'] font-bold text-[#FFD700] mb-6">
            // Skills by Domain
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="border-[2px] border-[#333] bg-[#111] p-5">
                <h5 className="mb-4 font-['JetBrains_Mono'] text-sm font-bold text-white">
                  {group.title}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#555] bg-black px-2 py-1 font-['JetBrains_Mono'] text-xs text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-6 inline-block border-[2px] border-black bg-black px-4 py-2 text-white">
            <h4 className="font-['JetBrains_Mono'] text-sm">
              <span className="text-[#00FF00]">cat</span> ./certifications.txt
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <div
                key={certification.title}
                className="border-[2px] border-black bg-[#F0F0F0] p-5 shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
              >
                <h5 className="font-['JetBrains_Mono'] text-sm font-bold">
                  {certification.title}
                </h5>
                <p className="mt-2 font-['JetBrains_Mono'] text-xs leading-relaxed text-gray-600">
                  {certification.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-12">
          <div className="inline-block bg-black text-white px-4 py-2 border-[2px] border-black mb-6">
            <h4 className="font-['JetBrains_Mono'] text-sm">
              <span className="text-[#00FF00]">git</span> log --experience
            </h4>
          </div>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <div
                key={i}
                className="bg-[#F0F0F0] border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h5 className="font-['Space_Grotesk'] font-bold text-lg">
                      {job.role}
                    </h5>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs bg-black text-[#FFD700] px-3 py-1 border border-black whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-1">
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="font-['JetBrains_Mono'] text-xs text-gray-700 leading-relaxed flex gap-2"
                    >
                      <span className="text-[#00FF00] shrink-0">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal-style philosophy */}
        <div className="bg-[#0a0a0a] border-[2px] border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <div className="font-['JetBrains_Mono'] text-sm space-y-2">
            <div className="text-gray-600">// Seeking roles in</div>
            <div className="text-[#00FF00]">
              const <span className="text-[#FFD700]">target</span> = {"{"}
            </div>
            <div className="text-white pl-6">
              primary:{" "}
              <span className="text-orange-400">"IoT Engineer / Data Engineer"</span>,
            </div>
            <div className="text-white pl-6">
              domain:{" "}
              <span className="text-orange-400">"Industrial IoT &amp; Smart Systems"</span>,
            </div>
            <div className="text-white pl-6">
              strengths:{" "}
              <span className="text-orange-400">
                ["sensor calibration", "ML pipelines", "firmware + data"]
              </span>,
            </div>
            <div className="text-white pl-6">
              availability: <span className="text-[#00FF00]">"Open to opportunities"</span>
            </div>
            <div className="text-[#00FF00]">{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
