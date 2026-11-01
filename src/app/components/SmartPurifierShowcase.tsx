import { motion } from "motion/react";
import {
  Activity,
  Cloud,
  Database,
  Droplets,
  Fan,
  LayoutGrid,
  Server,
  Settings,
  Thermometer,
  Wind,
} from "lucide-react";
import { ReactNode } from "react";
import { DeviceMockup } from "./DeviceMockup";

const smoke = [18, 22, 20, 35, 58, 74, 81, 69, 52, 44, 38, 47, 63, 72, 60, 41, 30, 26, 22, 20];
const fan = smoke.map((value) => Math.min(100, Math.round(value * 1.15 + 8)));
const line = (data: number[], height: number) =>
  data.map((value, index) => `${index ? "L" : "M"}${(index / (data.length - 1)) * 100} ${height - (value / 100) * height}`).join(" ");

const tone = (value: number, warn: number, crit: number) =>
  value >= crit
    ? "text-red-400 bg-red-500/10 border-red-500/30"
    : value >= warn
      ? "text-yellow-300 bg-yellow-400/10 border-yellow-400/30"
      : "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";

const stats = [
  { icon: Cloud, label: "Asap (MQ-2)", value: 72, unit: "ppm", style: tone(72, 40, 70) },
  { icon: Thermometer, label: "Suhu", value: 36.2, unit: "°C", style: tone(36.2, 33, 38) },
  { icon: Droplets, label: "Kelembapan", value: 48, unit: "%", style: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
  { icon: Fan, label: "Fan PWM", value: 91, unit: "%", style: "text-sky-300 bg-sky-500/10 border-sky-500/30" },
];

function Series({ height = 50 }: { height?: number }) {
  return (
    <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className="h-full w-full">
      <rect x="0" y="0" width="100" height={height * 0.3} fill="#ef444412" />
      <rect x="0" y={height * 0.3} width="100" height={height * 0.3} fill="#facc150d" />
      {[0.3, 0.6].map((position) => (
        <line key={position} x1="0" x2="100" y1={height * position} y2={height * position} stroke="#ffffff14" strokeDasharray="1 1" strokeWidth=".3" />
      ))}
      <path d={`${line(smoke, height)} L100 ${height} L0 ${height} Z`} fill="#f9731622" />
      <path d={line(smoke, height)} fill="none" stroke="#fb923c" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <path d={line(fan, height)} fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function FanIcon({ size }: { size: string }) {
  return <Fan className={`${size} animate-spin text-sky-300 [animation-duration:0.6s]`} />;
}

export function PurifierPreview({ variant }: { variant: "desktop" | "mobile" }) {
  if (variant === "mobile") {
    return (
      <div className="flex h-full flex-col gap-2 bg-[#0a0f1a] px-3 pb-3 pt-9 text-slate-100 [font-family:'Space_Grotesk']">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold"><Wind className="size-3.5 text-sky-400" />Smart Purifier</div>
          <span className="rounded border border-red-500/30 bg-red-500/10 px-1 text-[7px] text-red-400">ASAP TINGGI</span>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 p-3">
          <div className="relative grid size-20 place-items-center rounded-full border-4 border-white/20"><FanIcon size="size-10" /></div>
          <div className="mt-2 text-[8px] uppercase tracking-widest text-sky-100/80">HEPA Fan · Auto</div>
          <div className="text-2xl font-bold">91<span className="text-xs"> % PWM</span></div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {stats.slice(0, 3).map((stat) => (
            <div key={stat.label} className={`rounded-lg border p-1.5 text-center ${stat.style}`}>
              <stat.icon className="mx-auto size-3" />
              <div className="font-mono text-[10px] font-semibold">{stat.value}<span className="text-[7px]">{stat.unit}</span></div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-white/5 p-2">
          <div className="mb-1 flex justify-between text-[8px]"><span className="font-semibold">Asap vs Fan</span><span className="font-mono text-slate-500">1h</span></div>
          <div className="h-[calc(100%-14px)]"><Series /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full bg-[#111217] text-slate-100 [font-family:'Space_Grotesk']">
      <aside className="flex w-11 flex-col items-center gap-3 border-r border-white/5 bg-[#0b0c10] py-3">
        <div className="grid size-6 place-items-center rounded-md bg-gradient-to-br from-orange-400 to-yellow-400 text-black"><Activity className="size-3.5" /></div>
        {[LayoutGrid, Database, Server, Settings].map((Icon, index) => <Icon key={index} className={`size-3.5 ${index === 0 ? "text-sky-400" : "text-slate-600"}`} />)}
      </aside>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold">Smart Karhutla Purifier · Grafana</div>
            <div className="font-mono text-[7px] text-slate-500">ESP32 → MQTT (Mosquitto) → listener.py → TimescaleDB · AWS EC2</div>
          </div>
          <div className="flex gap-1 font-mono text-[7px]"><span className="rounded border border-white/10 px-1.5 py-0.5 text-slate-400">Last 1h</span><span className="rounded border border-white/10 px-1.5 py-0.5 text-slate-400">⟳ 5s</span></div>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {stats.map((stat) => (
            <div key={stat.label} className={`rounded border p-2 ${stat.style}`}>
              <div className="flex items-center gap-1 text-[6px] uppercase tracking-wider opacity-80"><stat.icon className="size-2.5" />{stat.label}</div>
              <div className="font-mono text-base font-bold">{stat.value}<span className="text-[8px] font-normal"> {stat.unit}</span></div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          <div className="col-span-2 flex flex-col rounded border border-white/5 bg-[#181b1f] p-2">
            <div className="mb-1 flex items-center justify-between text-[8px]"><span className="font-semibold">Kepadatan Asap & Respons Fan (PWM)</span><span className="flex gap-2 font-mono text-[6px]"><span className="text-orange-400">— smoke_ppm</span><span className="text-sky-400">-- fan_pwm</span></span></div>
            <div className="flex-1"><Series /></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-1 items-center gap-2 rounded border border-white/5 bg-[#181b1f] p-2"><FanIcon size="size-7" /><div><div className="text-[7px] text-slate-500">HEPA Actuator</div><div className="text-[10px] font-semibold text-sky-300">AUTO · 91%</div><div className="font-mono text-[6px] text-slate-500">closed-loop control</div></div></div>
            <div className="flex-1 space-y-1 rounded border border-white/5 bg-[#181b1f] p-2 font-mono text-[6px] text-slate-400"><div className="text-[8px] font-semibold text-slate-100 [font-family:'Space_Grotesk']">MQTT Stream</div><div><span className="text-emerald-400">karhutla/node1</span> {"{"}"smoke":72{"}"}</div><div><span className="text-emerald-400">karhutla/node1</span> {"{"}"temp":36.2{"}"}</div><div><span className="text-emerald-400">karhutla/fan</span> {"{"}"pwm":232{"}"}</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tech = ["ESP32", "MQTT · Mosquitto", "PWM Control", "Python", "PostgreSQL + TimescaleDB", "Docker", "AWS EC2 (Ubuntu)", "Grafana"];

export default function SmartPurifierShowcase() {
  return (
    <section className="relative mb-6 overflow-hidden border-[2px] border-black bg-[#060a12] text-slate-100 shadow-[4px_4px_0_0_rgba(0,0,0,1)] [font-family:'Space_Grotesk',sans-serif]">
      <div className="pointer-events-none absolute inset-0 opacity-[.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[600px] w-[800px] rounded-full bg-[radial-gradient(ellipse,rgba(14,165,233,.18),transparent_70%)] blur-2xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-xl lg:mx-0">
          <div className="mb-5 inline-flex items-center gap-2 border border-yellow-400/60 bg-yellow-400/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-yellow-400">
            <span className="size-2 animate-pulse rounded-full bg-yellow-400" /> On Going
          </div>
          <h3 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Asap terdeteksi,<br /><span className="text-yellow-400">udara langsung disaring.</span></h3>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-400">Sistem IoT end-to-end yang memantau asap karhutla dan mengatur kecepatan kipas HEPA via PWM secara otomatis — closed-loop control untuk kualitas udara lokal.</p>
          <div className="mt-6 flex flex-wrap gap-2.5">{tech.map((item) => <span key={item} className="bg-white px-2.5 py-1 font-mono text-xs font-medium text-black shadow-[3px_3px_0_#facc15]">{item}</span>)}</div>
        </motion.div>
        <div className="relative pb-10 pr-6 sm:pr-16">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}><DeviceMockup type="laptop"><PurifierPreview variant="desktop" /></DeviceMockup></motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="absolute bottom-0 right-0 w-28 sm:w-40"><DeviceMockup type="mobile"><PurifierPreview variant="mobile" /></DeviceMockup></motion.div>
        </div>
      </div>
    </section>
  );
}
