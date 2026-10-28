import { Flame, Map, Bell, Wind, Thermometer, Droplets, LayoutGrid, Satellite } from "lucide-react";

const spots = [
  [22, 38, 3], [27, 44, 2], [31, 40, 1], [48, 58, 3], [52, 62, 2], [55, 55, 1],
  [63, 46, 2], [70, 52, 1], [40, 70, 2], [78, 66, 1], [45, 48, 1], [58, 70, 3],
];

const bars = [12, 18, 9, 24, 31, 27, 40, 36, 52, 47, 61, 44];

const provinces = [
  ["Riau", 214, 92], ["Kalimantan Barat", 168, 72], ["Sumatera Selatan", 131, 56], ["Kalimantan Tengah", 97, 41],
];

function HotspotMap({ compact }: { compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/5 bg-[radial-gradient(ellipse_at_center,#0f1a2b,#070b14)]">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#fff1_1px,transparent_1px),linear-gradient(90deg,#fff1_1px,transparent_1px)] [background-size:20px_20px]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M10 30 L30 28 L38 45 L30 52 L18 48 Z" fill="#16233a" stroke="#24395a" strokeWidth=".4" />
        <path d="M42 40 L66 36 L72 55 L60 74 L44 70 L40 55 Z" fill="#16233a" stroke="#24395a" strokeWidth=".4" />
        <path d="M74 50 L84 48 L86 66 L76 70 Z" fill="#16233a" stroke="#24395a" strokeWidth=".4" />
        <path d="M30 80 L60 82 L62 85 L30 84 Z" fill="#16233a" />
      </svg>
      {spots.map(([x, y, s], i) => (
        <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
          <span
            className={`absolute inset-0 rounded-full animate-ping ${s === 3 ? "bg-blue-500/60" : s === 2 ? "bg-sky-400/50" : "bg-cyan-300/40"}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
          <span
            className={`relative block rounded-full ${compact ? "size-1.5" : "size-2"} ${s === 3 ? "bg-blue-500 shadow-[0_0_10px_#3b82f6]" : s === 2 ? "bg-sky-400 shadow-[0_0_8px_#38bdf8]" : "bg-cyan-300"}`}
          />
        </span>
      ))}
      <div className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[7px] tracking-wider text-sky-300">
        ● LIVE · MODIS/VIIRS
      </div>
    </div>
  );
}

export function DashboardPreview({ variant }: { variant: "desktop" | "mobile" }) {
  if (variant === "mobile")
    return (
      <div className="flex h-full flex-col gap-2 bg-[#0a0f1a] px-3 pb-3 pt-9 text-slate-100 [font-family:'Space_Grotesk']">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold">
            <Flame className="size-3.5 text-sky-500" />Pantau Karhutla
          </div>
          <Bell className="size-3.5 text-slate-400" />
        </div>
        <div className="rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 p-3">
          <div className="text-[8px] uppercase tracking-widest text-sky-100/80">Titik panas 24 jam</div>
          <div className="text-3xl font-bold">1.284</div>
          <div className="text-[8px] text-sky-100">▲ 18% dari kemarin</div>
        </div>
        <div className="h-32"><HotspotMap compact /></div>
        <div className="grid grid-cols-3 gap-1.5">
          {([[Thermometer, "34°"], [Wind, "18km"], [Droplets, "41%"]] as const).map(([I, v], i) => (
            <div key={i} className="rounded-lg bg-white/5 p-1.5 text-center">
              <I className="mx-auto size-3 text-sky-400" />
              <div className="text-[10px] font-semibold">{v}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5 rounded-xl bg-white/5 p-2">
          {provinces.slice(0, 3).map(([n, v, p]) => (
            <div key={n as string}>
              <div className="flex justify-between text-[8px]">
                <span className="text-slate-400">{n}</span>
                <span className="font-mono">{v}</span>
              </div>
              <div className="h-1 rounded bg-white/5">
                <div className="h-full rounded bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${p}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="flex h-full bg-[#0a0f1a] text-slate-100 [font-family:'Space_Grotesk']">
      <aside className="flex w-11 flex-col items-center gap-3 border-r border-white/5 py-3">
        <div className="grid size-6 place-items-center rounded-md bg-gradient-to-br from-sky-500 to-blue-600">
          <Flame className="size-3.5" />
        </div>
        {[LayoutGrid, Map, Satellite, Bell].map((I, i) => (
          <I key={i} className={`size-3.5 ${i === 1 ? "text-sky-400" : "text-slate-600"}`} />
        ))}
      </aside>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold">Monitoring Kebakaran Hutan & Lahan</div>
            <div className="font-mono text-[7px] text-slate-500">Update terakhir 14:32 WIB · Indonesia</div>
          </div>
          <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[7px] font-medium text-blue-400">
            Status: SIAGA
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            ["Titik Panas", "1.284", "▲ 18%", "text-blue-400"],
            ["Kepercayaan Tinggi", "412", "▲ 6%", "text-sky-400"],
            ["Luas Terbakar", "3.906 ha", "▲ 2%", "text-cyan-300"],
            ["Provinsi Terdampak", "14", "— 0", "text-slate-400"],
          ].map(([l, v, d, c]) => (
            <div key={l} className="rounded-lg border border-white/5 bg-white/[.03] p-2">
              <div className="text-[7px] uppercase tracking-wider text-slate-500">{l}</div>
              <div className="text-sm font-bold">{v}</div>
              <div className={`font-mono text-[7px] ${c}`}>{d}</div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          <div className="col-span-2"><HotspotMap /></div>
          <div className="flex flex-col gap-2">
            <div className="flex-1 rounded-lg border border-white/5 bg-white/[.03] p-2">
              <div className="mb-1.5 text-[8px] font-semibold">Tren 12 Hari</div>
              <div className="flex h-14 items-end gap-[3px]">
                {bars.map((b, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-blue-600 to-cyan-400"
                    style={{ height: `${(b / 61) * 100}%`, opacity: 0.4 + i / 20 }} />
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-1.5 rounded-lg border border-white/5 bg-white/[.03] p-2">
              <div className="text-[8px] font-semibold">Provinsi Teratas</div>
              {provinces.map(([n, v, p]) => (
                <div key={n as string}>
                  <div className="flex justify-between text-[7px]">
                    <span className="text-slate-400">{n}</span>
                    <span className="font-mono">{v}</span>
                  </div>
                  <div className="h-1 rounded bg-white/5">
                    <div className="h-full rounded bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
