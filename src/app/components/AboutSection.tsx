import React from "react";
import { Cpu, BrainCircuit, FlaskConical, GraduationCap, TrendingUp, BrainCog } from "lucide-react";

// CDN base URLs
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

type SkillIcon =
  | { type: "img"; src: string; white?: boolean; padded?: boolean; blend?: boolean }
  | { type: "lucide"; Icon: React.ElementType };

const skills: { name: string; category: string; icon: SkillIcon }[] = [
  {
    name: "Python",
    category: "Language",
    icon: { type: "img", src: `${DEVICON}/python/python-original.svg` },
  },
  {
    name: "C++",
    category: "Language",
    icon: { type: "img", src: `${DEVICON}/cplusplus/cplusplus-original.svg` },
  },
  {
    name: "SQL",
    category: "Language",
    icon: { type: "img", src: `${DEVICON}/postgresql/postgresql-original.svg` },
  },
  {
    name: "NumPy",
    category: "Data Science",
    icon: { type: "img", src: `${DEVICON}/numpy/numpy-original.svg` },
  },
  {
    name: "Pandas",
    category: "Data Science",
    icon: { type: "img", src: `${DEVICON}/pandas/pandas-original.svg` },
  },
  {
    name: "Matplotlib",
    category: "Data Science",
    icon: { type: "img", src: `${DEVICON}/matplotlib/matplotlib-original.svg` },
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    icon: { type: "lucide", Icon: BrainCog },
  },
  {
    name: "Forecasting",
    category: "AI/ML",
    icon: { type: "lucide", Icon: TrendingUp },
  },
  {
    name: "Arduino IDE",
    category: "IoT Hardware",
    icon: { type: "img", src: `${DEVICON}/arduino/arduino-original.svg` },
  },
  {
    name: "Firebase",
    category: "Cloud",
    icon: { type: "img", src: `${DEVICON}/firebase/firebase-plain.svg` },
  },
  {
    name: "AWS Cloud",
    category: "Cloud",
    icon: { type: "img", src: "/icons/aws.png", padded: true },
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    icon: { type: "img", src: `${DEVICON}/github/github-original.svg` },
  },
  {
    name: "Microsoft Fabric",
    category: "Data Eng.",
    icon: { type: "img", src: "/icons/microsoft-fabric.png", blend: true },
  },
  {
    name: "RealTerm",
    category: "Tool",
    icon: { type: "lucide", Icon: Cpu },
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
      "Calibrated 50+ ARR and soil moisture sensors. Hardware-in-the-Loop testing with 100% serial reliability.",
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
    company: "KMTek – Karya Merapi Teknologi",
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
            Physics graduate (Electronics &amp; Instrumentation) who builds end-to-end data systems, from ESP32 sensor
            calibration and IoT data collection to automated ETL pipelines, forecasting, and reinforcement learning models. Delivered two
            projects with live dashboards: an IoT energy-monitoring system (∼60,000 validated records, 14.7% energy saved) and a wildfire
            platform processing 4.1M satellite detections. Seeking Quality Engineer, IoT Engineer, Data Science or Data Engineer / Analyst roles.
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

        {/* Tech Stack — Codedex badge style */}
        <div className="bg-black border-[3px] border-black p-8 shadow-[8px_8px_0_0_#FFD700] mb-12">
          <h4 className="font-['JetBrains_Mono'] font-bold text-[#FFD700] mb-6">
            // Tech Stack
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-2 bg-[#111] border-[2px] border-[#333] p-4 cursor-default
                           hover:border-[#FFD700] hover:shadow-[0_0_12px_rgba(255,215,0,0.35)] transition-all duration-200"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center">
                  {skill.icon.type === "img" ? (
                    <img
                      src={skill.icon.src}
                      alt={skill.name}
                      className={[
                        "w-10 h-10 object-contain",
                        skill.icon.padded ? "bg-white rounded p-1" : "",
                      ].join(" ")}
                      style={{
                        ...(skill.icon.white ? { filter: "brightness(0) invert(1)" } : {}),
                        ...(skill.icon.blend ? { mixBlendMode: "screen" } : {}),
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <skill.icon.Icon className="w-10 h-10 text-[#FFD700]" />
                  )}
                </div>
                {/* Skill name */}
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-white text-center leading-tight">
                  {skill.name}
                </span>
                {/* Category */}
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#888] text-center leading-tight">
                  {skill.category}
                </span>
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
              <span className="text-orange-400">"Quality Engineer / IoT Engineer"</span>,
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
