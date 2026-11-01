import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DeviceMockup } from "./DeviceMockup";
import { DashboardPreview } from "./DashboardPreview";
import { PzemPreview } from "./PzemPreview";
import { ExternalLink } from "lucide-react";
import { PurifierPreview } from "./SmartPurifierShowcase";

const projects = {
  karhutla: {
    tag: "Pantau Karhutla",
    l1: "Setiap titik api,",
    l2: "terpantau seketika.",
    desc: "Dashboard pemantauan kebakaran hutan dan lahan berbasis data satelit NASA FIRMS, CHIRPS, dan NOAA. Pipeline ETL otomatis via GitHub Actions.",
    link: "https://karhutla.annasafyah.dev/",
    tags: ["Automated ETL Pipeline", "Python", "JavaScript", "GitHub Actions", "NASA FIRMS / CHIRPS / NOAA data", "Machine Learning", "Forecasting"],
    glow: "rgba(14,165,233,.25)",
  },
  pzem: {
    tag: "Hemat Daya",
    l1: "Pakai listrik secukupnya,",
    l2: "hemat setiap watt.",
    desc: "Pantau pemakaian listrik secara realtime dengan sensor PZEM-004T, temukan pemborosan, dan tekan tagihan bulanan Anda.",
    link: "https://test-reading-the-pzem.firebaseapp.com/monitoring.html",
    tags: ["ESP32", "Firebase", "Python", "GitHub Actions", "AIoT", "Forecasting", "Machine Learning"],
    glow: "rgba(16,185,129,.2)",
  },
  purifier: {
    tag: "Smart Purifier",
    l1: "Asap terdeteksi,",
    l2: "udara langsung disaring.",
    desc: "Sistem IoT end-to-end yang memantau asap karhutla dan mengatur kecepatan kipas HEPA via PWM secara otomatis — closed-loop control untuk kualitas udara lokal.",
    tags: ["ESP32", "MQTT · Mosquitto", "PWM Control", "Python", "PostgreSQL + TimescaleDB", "Docker", "AWS EC2 (Ubuntu)", "Grafana"],
    glow: "rgba(14,165,233,.18)",
    status: "On Going",
  },
} as const;

type Key = keyof typeof projects;

export function ProjectShowcase() {
  const [key, setKey] = useState<Key>("karhutla");
  const p = projects[key];

  return (
    <div className="relative overflow-hidden rounded-none bg-[#060a12] border-[2px] border-black md:col-span-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-700"
        style={{ background: `radial-gradient(ellipse, ${p.glow}, transparent 70%)` }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[.04] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative px-6 py-8">
        {/* Toggle buttons */}
        <div className="mb-8 flex justify-center">
          <div className="flex gap-2 border-[2px] border-black bg-black p-1 shadow-[4px_4px_0_0_#FFD700]">
            {(Object.keys(projects) as Key[]).map((k) => (
              <button
                key={k}
                onClick={() => setKey(k)}
                className={[
                  "px-4 py-1.5 text-sm font-['Space_Grotesk'] font-semibold transition-all duration-200 border-[2px]",
                  key === k
                    ? "bg-[#FFD700] text-black border-[#FFD700] shadow-none"
                    : "bg-transparent text-slate-400 border-transparent hover:text-white",
                ].join(" ")}
              >
                {projects[k].tag}
              </button>
            ))}
          </div>
        </div>

        {/* Content: text left, mockup right */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={key + "-text"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="text-slate-100"
            >
              <h3 className="text-3xl font-bold leading-tight tracking-tight font-['Space_Grotesk'] lg:text-4xl">
                {p.l1}<br />
                <span className="bg-gradient-to-r from-yellow-300 via-[#FFD700] to-yellow-500 bg-clip-text text-transparent">
                  {p.l2}
                </span>
              </h3>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
                {p.desc}
              </p>

              {/* Tech stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white border-[2px] border-white text-black text-xs font-['JetBrains_Mono'] font-bold shadow-[3px_3px_0_0_#FFD700]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {(p.link || p.status) && (
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#FFD700] hover:text-yellow-300 transition-colors"
                    >
                      <ExternalLink className="size-3.5" />
                      Lihat live demo
                    </a>
                  )}
                  {p.status && (
                    <span className="inline-flex items-center gap-2 border border-yellow-400/60 bg-yellow-400/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-yellow-400">
                      <span className="size-2 animate-pulse rounded-full bg-yellow-400" />
                      {p.status}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Device mockup */}
          <AnimatePresence mode="wait">
            <motion.div
              key={key + "-mockup"}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pb-10 pr-10"
            >
              <DeviceMockup type="laptop">
                {key === "karhutla"
                  ? <DashboardPreview variant="desktop" />
                  : key === "pzem"
                    ? <PzemPreview variant="desktop" />
                    : <PurifierPreview variant="desktop" />}
              </DeviceMockup>
              <div className="absolute bottom-0 right-0 w-36">
                <DeviceMockup type="mobile">
                  {key === "karhutla"
                    ? <DashboardPreview variant="mobile" />
                    : key === "pzem"
                      ? <PzemPreview variant="mobile" />
                      : <PurifierPreview variant="mobile" />}
                </DeviceMockup>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
