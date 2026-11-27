import { ExternalLink } from "lucide-react";
import { useState } from "react";

type ProjectCategory = "IoT & Hardware" | "Data & ML" | "QA/QC";

interface Project {
  id: string;
  name: string;
  description: string;
  detail: string;
  image?: string;
  imageAlt: string;
  metric: string;
  period?: string;
  categories: ProjectCategory[];
  tags: string[];
  demo?: string;
  source?: string;
}

const projects: Project[] = [
  {
    id: "adaptive-hepa",
    name: "Adaptive HEPA Air Purifier — Digital Twin",
    description:
      "Python digital twin for evaluating PM2.5 control strategies, paired with an ESP32-S3 firmware controller.",
    detail:
      "The simulator compares air-quality control strategies and optional biometric inputs. The C++ control logic is tested against the Python simulator, with Monte Carlo scenarios and automated tests.",
    image: "/hepa-purifier-concept.png",
    imageAlt: "Concept diagram of an adaptive air purifier responding to wildfire smoke",
    metric: "Simulator",
    categories: ["IoT & Hardware", "Data & ML", "QA/QC"],
    tags: ["Digital Twin", "Python", "PM2.5", "Monte Carlo", "C++", "ESP32-S3", "PlatformIO", "pytest"],
    source:
      "https://github.com/kairo31/Adaptive-HEPA-Air-Purifier-for-Wildfire-Smoke-Mitigation--Digital-Twin-Simulation---ESP32-S3-Firmwar",
  },
  {
    id: "aiot-energy",
    name: "AIoT Energy Management",
    description:
      "End-to-end energy monitoring and forecasting with ESP32, PZEM-004T, Firebase, SARIMAX, and a PPO optimization agent.",
    detail:
      "Calibrated sensor nodes (R² > 0.98), collected about 60,000 validated records, achieved 3.34% next-day forecast MAPE, and saved 14.7% energy in a 29-day forecast-driven test. Presented at ICMA-SURE 2026.",
    image: "/aiot-energy-optimizer.webp",
    imageAlt: "Energy monitoring system dashboard shown on laptop and mobile",
    metric: "14.7% energy saved",
    period: "Jan – Apr 2026",
    categories: ["IoT & Hardware", "Data & ML"],
    tags: ["ESP32", "PZEM-004T", "SARIMAX", "PPO", "Firebase"],
    demo: "https://test-reading-the-pzem.firebaseapp.com/monitoring.html",
  },
  {
    id: "pantau-karhutla",
    name: "Pantau Karhutla",
    description:
      "Automated wildfire monitoring and forecasting dashboard built from NASA FIRMS, CHIRPS rainfall, and NOAA climate data.",
    detail:
      "Built an idempotent Python ETL pipeline processing 4.1 million NASA FIRMS detections into about 43,000 daily records. Forecasts were validated using leave-one-year-out cross-validation and a 549-forecast rolling-origin backtest.",
    image: "/pantau-karhutla.webp",
    imageAlt: "Pantau Karhutla interactive wildfire monitoring dashboard preview",
    metric: "4.1M satellite detections",
    period: "Oct 2026",
    categories: ["Data & ML"],
    tags: ["Python", "ETL", "NASA FIRMS", "CHIRPS", "Forecasting"],
    demo: "https://karhutla.annasafyah.dev/",
  },
  {
    id: "hardware-validation",
    name: "Sensor Calibration & HIL Testing",
    description:
      "Field sensor verification and prototype testing during hardware internships at Mertani and Karya Merapi Teknologi.",
    detail:
      "Calibrated 50+ Automatic Rainfall Recorder sensors and 10+ soil moisture sensors, configured 20+ field sensors over TTL/Modbus, and tested five smart automation prototypes. All prototypes reached 100% serial transmission reliability in pre-deployment HIL tests.",
    image: "/hardware-validation.svg",
    imageAlt: "Hardware validation summary showing calibration and HIL test results",
    metric: "100% serial reliability",
    period: "Jan – Jun 2025",
    categories: ["IoT & Hardware", "QA/QC"],
    tags: ["Calibration", "HIL", "RealTerm", "Modbus", "ESP32"],
  },
  {
    id: "sales-analysis",
    name: "Sales Data Analysis",
    description:
      "Cleaned transaction data, derived monthly and margin fields, and built an Excel dashboard with Pivot Tables and charts.",
    detail:
      "The analysis uses XLOOKUP/VLOOKUP, SUMIFS, INDEX-MATCH, and IFS to prepare and summarize sales performance.",
    image: "/sales-analysis.svg",
    imageAlt: "Illustrative Excel analysis graphic listing formulas and Pivot Tables",
    metric: "Excel dashboard",
    period: "Excel project",
    categories: ["Data & ML"],
    tags: ["Excel", "XLOOKUP", "SUMIFS", "Pivot Tables"],
  },
];

export function ProjectGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const categories: Array<ProjectCategory | "All"> = [
    "All",
    "IoT & Hardware",
    "Data & ML",
    "QA/QC",
  ];
  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(category));

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
            Projects &amp; Research
          </h3>
          <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
            // IoT systems, data projects, and hardware validation
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter projects">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={[
                "border-[2px] border-black px-4 py-2 font-['JetBrains_Mono'] text-sm font-bold transition-all",
                category === item
                  ? "bg-[#FFD700] shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
                  : "bg-white hover:bg-gray-100",
              ].join(" ")}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={[
                "bg-white border-[2px] border-black transition-all duration-150 flex flex-col",
                hoveredId === project.id
                  ? "shadow-none translate-x-1 translate-y-1"
                  : "shadow-[4px_4px_0_0_rgba(0,0,0,1)]",
              ].join(" ")}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-video w-full border-b-[2px] border-black object-cover"
                  loading="lazy"
                />
              ) : null}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <h4 className="font-['JetBrains_Mono'] text-lg font-bold leading-tight">
                    {project.name}
                  </h4>
                  <span className="border border-black bg-[#FFD700] px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold">
                    {project.metric}
                  </span>
                </div>

                <p className="mb-4 flex-1 font-['JetBrains_Mono'] text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>

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

                <div className="mb-4 flex items-center justify-between gap-2 border-t border-gray-200 pt-4 font-['JetBrains_Mono'] text-xs text-gray-500">
                  <span>{project.categories.join(" · ")}</span>
                  {project.period && <span>{project.period}</span>}
                </div>

                <div className="flex flex-wrap items-center gap-4 border-t border-gray-200 pt-4 font-['JetBrains_Mono'] text-xs font-bold">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-black hover:text-blue-700"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-400" aria-disabled="true">
                      Live Demo unavailable
                    </span>
                  )}
                  <a
                    href={project.source ?? "https://github.com/kairo31"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-700"
                  >
                    {project.source ? "Source Code" : "GitHub profile"}
                  </a>
                  <details className="basis-full">
                    <summary className="w-fit cursor-pointer text-blue-800 hover:underline">
                      Case Study
                    </summary>
                    <p className="mt-3 border-l-2 border-[#FFD700] pl-3 font-normal leading-relaxed text-gray-700">
                      {project.detail}
                    </p>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </div>

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
