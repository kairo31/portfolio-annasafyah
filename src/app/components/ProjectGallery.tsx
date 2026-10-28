import { Circle, ExternalLink, BookOpen, Cpu } from "lucide-react";
import { useState } from "react";
import { ProjectShowcase } from "./ProjectShowcase";

interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  metric: string;
  metricLabel: string;
  period: string;
  tags: string[];
  size: "small" | "medium" | "large";
  isAcademic?: boolean;
  link?: string;
}

const projects: Project[] = [
  {
    id: 4,
    name: "arr-sensor-calibration",
    description:
      "Calibrated and validated 50+ Automatic Rainfall Recorder sensors, 10+ soil moisture sensors, and other environmental monitoring devices. Systematic HIL testing via RealTerm achieved 100% serial transmission reliability.",
    language: "C++",
    languageColor: "#f34b7d",
    metric: "100%",
    metricLabel: "HIL serial reliability",
    period: "Jan – Jun 2025",
    tags: ["Calibration", "HIL", "RealTerm", "ESP32", "Sensors"],
    size: "medium",
  },
  {
    id: 5,
    name: "icma-sure-2026-paper",
    description:
      "Assessment of Energy Saving Capabilities of a Proximal Policy Optimization Agent in Residential Energy Management System. Presented at ICMA-SURE 2026, Banyumas.",
    language: "LaTeX",
    languageColor: "#3D6117",
    metric: "ICMA-SURE",
    metricLabel: "2026 · Banyumas",
    period: "2026",
    tags: ["Research", "PPO", "Energy", "Conference"],
    size: "small",
    isAcademic: true,
  },
  {
    id: 6,
    name: "rc-qed-1446-paper",
    description:
      "Iron Behavior in the Earth's Core: A Computational Approach. International conference paper presented at RC-QED 1446, Surabaya.",
    language: "Python",
    languageColor: "#3572A5",
    metric: "RC-QED",
    metricLabel: "1446 · Surabaya",
    period: "2025",
    tags: ["Research", "Computational Physics", "Conference"],
    size: "small",
    isAcademic: true,
  },
];

export function ProjectGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block bg-black text-white px-4 py-2 border-[2px] border-black mb-4">
            <h2 className="font-['JetBrains_Mono'] text-sm">
              <span className="text-[#00FF00]">ls</span> ./projects
            </h2>
          </div>
          <h3 className="text-4xl font-['Space_Grotesk'] font-bold mb-2">
            Projects & Research
          </h3>
          <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
            // Thesis, internship work, and conference publications
          </p>
        </div>

        {/* Interactive showcase — Pantau Karhutla & AIoT with toggle */}
        <div className="mb-6">
          <ProjectShowcase />
        </div>

        {/* Bento Grid — remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={[
                "bg-white border-[2px] border-black transition-all duration-150 cursor-pointer flex flex-col",
                hoveredId === project.id
                  ? "shadow-none translate-x-1 translate-y-1"
                  : "shadow-[4px_4px_0_0_rgba(0,0,0,1)]",
                project.size === "large" ? "md:col-span-2" : "",
              ].join(" ")}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-6 flex flex-col flex-1">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="flex items-center gap-2">
                    {project.isAcademic ? (
                      <BookOpen className="w-4 h-4 text-gray-400 shrink-0" />
                    ) : (
                      <Cpu className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                    <h4 className="font-['JetBrains_Mono'] font-bold text-base leading-tight">
                      {project.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 shrink-0" />
                </div>

                {/* Description */}
                <p className="font-['JetBrains_Mono'] text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#F0F0F0] border-[1px] border-black text-xs font-['JetBrains_Mono']"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-gray-600 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Circle className="w-3 h-3" fill={project.languageColor} stroke="none" />
                      <span>{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-black">{project.metric}</span>
                      <span className="text-gray-400">{project.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-gray-400">{project.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View GitHub Link */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/kairo31"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_0_#FFD700] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-['JetBrains_Mono'] font-bold"
          >
            View All on GitHub → github.com/kairo31
          </a>
        </div>
      </div>
    </section>
  );
}
