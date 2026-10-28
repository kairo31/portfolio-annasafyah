import { Zap, Activity, Gauge, Waves, Plug, LayoutGrid, History, Settings, Wifi } from "lucide-react";

const wave = [42, 48, 45, 60, 72, 66, 58, 80, 92, 85, 70, 64, 76, 88, 95, 82, 68, 60, 55, 62];

const path = (h: number) =>
  wave.map((v, i) => `${i ? "L" : "M"}${(i / (wave.length - 1)) * 100} ${h - (v / 100) * h}`).join(" ");

const metrics = [
  [Zap, "Tegangan", "220.4", "V"],
  [Activity, "Arus", "1.86", "A"],
  [Gauge, "Daya", "410.2", "W"],
  [Plug, "Energi", "12.84", "kWh"],
  [Waves, "Frekuensi", "50.0", "Hz"],
  [Gauge, "Faktor Daya", "0.94", "PF"],
] as const;

function PowerChart({ h = 60 }: { h?: number }) {
  return (
    <svg viewBox={`0 0 100 ${h}`} preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id="pz" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#38bdf8" stopOpacity=".45" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((y) => (
        <line key={y} x1="0" x2="100" y1={h * y} y2={h * y} stroke="#ffffff10" strokeWidth=".3" />
      ))}
      <path d={`${path(h)} L100 ${h} L0 ${h} Z`} fill="url(#pz)" />
      <path d={path(h)} fill="none" stroke="#38bdf8" strokeWidth=".8" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function Ring({ value, size = 64 }: { value: number; size?: number }) {
  const r = 26, c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className="-rotate-90">
      <circle cx="32" cy="32" r={r} fill="none" stroke="#ffffff10" strokeWidth="6" />
      <circle cx="32" cy="32" r={r} fill="none" stroke="url(#rg)" strokeWidth="6"
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - value)} />
      <defs>
        <linearGradient id="rg">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PzemPreview({ variant }: { variant: "desktop" | "mobile" }) {
  if (variant === "mobile")
    return (
      <div className="flex h-full flex-col gap-2 bg-[#0a0f1a] px-3 pb-3 pt-9 text-slate-100 [font-family:'Space_Grotesk']">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold">
            <Zap className="size-3.5 text-sky-400" />Hemat Daya
          </div>
          <span className="flex items-center gap-1 text-[8px] text-emerald-400">
            <Wifi className="size-3" />Online
          </span>
        </div>
        <div className="relative flex items-center gap-3 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 p-3">
          <div className="relative">
            <Ring value={0.41} size={58} />
            <div className="absolute inset-0 grid place-items-center text-[9px] font-bold">41%</div>
          </div>
          <div>
            <div className="text-[8px] uppercase tracking-widest text-sky-100/80">Pemakaian saat ini</div>
            <div className="text-2xl font-bold">410<span className="text-xs font-medium"> W</span></div>
            <div className="text-[8px] text-sky-100">Hemat 12% dari kemarin</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {metrics.filter((_, i) => i !== 2).map(([I, l, v, u]) => (
            <div key={l} className="rounded-lg bg-white/5 p-2">
              <div className="flex items-center gap-1 text-[7px] text-slate-400">
                <I className="size-2.5 text-sky-400" />{l}
              </div>
              <div className="font-mono text-[12px] font-semibold">{v}<span className="text-[8px] text-slate-500"> {u}</span></div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-white/5 p-2">
          <div className="mb-1 text-[8px] font-semibold">Pemakaian 1 jam terakhir</div>
          <div className="h-[calc(100%-14px)]"><PowerChart /></div>
        </div>
      </div>
    );

  return (
    <div className="flex h-full bg-[#0a0f1a] text-slate-100 [font-family:'Space_Grotesk']">
      <aside className="flex w-11 flex-col items-center gap-3 border-r border-white/5 py-3">
        <div className="grid size-6 place-items-center rounded-md bg-gradient-to-br from-sky-500 to-blue-600">
          <Zap className="size-3.5" />
        </div>
        {[LayoutGrid, Activity, History, Settings].map((I, i) => (
          <I key={i} className={`size-3.5 ${i === 1 ? "text-sky-400" : "text-slate-600"}`} />
        ))}
      </aside>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold">Penghematan Daya · PZEM-004T</div>
            <div className="font-mono text-[7px] text-slate-500">Target hari ini 15 kWh · terpakai 12.84 kWh (86%)</div>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[7px] font-medium text-emerald-400">
            <span className="size-1 animate-pulse rounded-full bg-emerald-400" />Mode Hemat Aktif
          </div>
        </div>
        <div className="grid grid-cols-6 gap-1.5">
          {metrics.map(([I, l, v, u]) => (
            <div key={l} className="rounded-lg border border-white/5 bg-white/[.03] p-1.5">
              <div className="flex items-center gap-1 text-[6px] uppercase tracking-wider text-slate-500">
                <I className="size-2.5 text-sky-400" />{l}
              </div>
              <div className="font-mono text-[11px] font-bold">{v}<span className="text-[7px] font-normal text-slate-500"> {u}</span></div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          <div className="col-span-2 flex flex-col rounded-lg border border-white/5 bg-white/[.03] p-2">
            <div className="mb-1 flex justify-between text-[8px]">
              <span className="font-semibold">Grafik Pemakaian Daya</span>
              <span className="font-mono text-sky-400">● 410.2 W</span>
            </div>
            <div className="flex-1"><PowerChart /></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/5 bg-white/[.03] p-2">
              <div className="relative">
                <Ring value={0.41} size={48} />
                <div className="absolute inset-0 grid place-items-center text-[8px] font-bold">41%</div>
              </div>
              <div>
                <div className="text-[7px] text-slate-500">Status Pemakaian</div>
                <div className="text-[10px] font-semibold">Efisien</div>
              </div>
            </div>
            <div className="flex-1 space-y-1 rounded-lg border border-white/5 bg-white/[.03] p-2">
              <div className="text-[8px] font-semibold">Potensi Hemat Bulan Ini</div>
              <div className="font-mono text-sm font-bold text-cyan-300">Rp 42.300</div>
              <div className="text-[6px] text-slate-500">≈ 29 kWh lebih hemat dari bulan lalu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
