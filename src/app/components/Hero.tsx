import { Minus, Square, X, Search } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Window Container */}
      <div className="relative w-full max-w-4xl">
        {/* Windows 95 Style Window */}
        <div className="bg-[#F0F0F0] border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          {/* Title Bar */}
          <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 flex items-center justify-between border-b-[2px] border-black">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border border-black" />
              <span className="font-['JetBrains_Mono'] text-white text-sm font-bold">
                portfolio.exe — Annasafyah Hayati
              </span>
            </div>
            <div className="flex gap-1">
              <button className="w-5 h-5 bg-[#C0C0C0] border-[2px] border-white border-b-black border-r-black flex items-center justify-center hover:bg-[#D0D0D0]">
                <Minus className="w-3 h-3" />
              </button>
              <button className="w-5 h-5 bg-[#C0C0C0] border-[2px] border-white border-b-black border-r-black flex items-center justify-center hover:bg-[#D0D0D0]">
                <Square className="w-2 h-2" />
              </button>
              <button className="w-5 h-5 bg-[#C0C0C0] border-[2px] border-white border-b-black border-r-black flex items-center justify-center hover:bg-[#D0D0D0]">
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-12">
            {/* Terminal Output Style */}
            <div className="font-['JetBrains_Mono'] space-y-4 mb-8">
              <div className="text-sm">
                <span className="text-[#00FF00]">annasafyah@kairo31</span>
                <span className="text-black">:</span>
                <span className="text-blue-600">~</span>
                <span className="text-black">$ whoami</span>
              </div>
              <h1 className="text-5xl font-['Space_Grotesk'] font-bold mb-4 leading-tight">
                AIoT ENGINEER<br />& DATA SCIENTIST
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl font-['JetBrains_Mono']">
                Physics graduate who builds the full data pipeline — from ESP32
                sensors to SARIMAX forecasting and reinforcement learning agents.
                Deployed a live energy monitoring system with ~60,000 validated
                records and calibrated 50+ environmental sensors as an intern.
              </p>
            </div>

            {/* Command Palette Style Search */}
            <div className="mt-8 max-w-2xl">
              <div className="bg-white border-[2px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center gap-3 px-4 py-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Jump to project... (⌘K)"
                  className="flex-1 outline-none font-['JetBrains_Mono'] text-sm bg-transparent"
                />
                <kbd className="px-2 py-1 bg-[#F0F0F0] border-[2px] border-black text-xs font-['JetBrains_Mono']">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Quick Stats — real numbers from resume */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <div className="bg-[#FFD700] border-[2px] border-black px-4 py-2 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                <div className="font-['JetBrains_Mono'] text-2xl font-bold">~60K</div>
                <div className="font-['JetBrains_Mono'] text-xs">Sensor Records</div>
              </div>
              <div className="bg-[#00FF00] border-[2px] border-black px-4 py-2 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                <div className="font-['JetBrains_Mono'] text-2xl font-bold">3.34%</div>
                <div className="font-['JetBrains_Mono'] text-xs">MAPE (1-day forecast)</div>
              </div>
              <div className="bg-white border-[2px] border-black px-4 py-2 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                <div className="font-['JetBrains_Mono'] text-2xl font-bold">50+</div>
                <div className="font-['JetBrains_Mono'] text-xs">Sensors Calibrated</div>
              </div>
              <div className="bg-black text-white border-[2px] border-black px-4 py-2 shadow-[3px_3px_0_0_#FFD700]">
                <div className="font-['JetBrains_Mono'] text-2xl font-bold text-[#FFD700]">2×</div>
                <div className="font-['JetBrains_Mono'] text-xs text-gray-300">Intl. Conference</div>
              </div>
            </div>
          </div>
        </div>

        {/* Blinking Cursor Effect */}
        <div className="mt-8 font-['JetBrains_Mono'] text-sm flex items-center gap-2">
          <span className="text-[#00FF00]">annasafyah@kairo31</span>
          <span className="text-black">:</span>
          <span className="text-blue-600">~</span>
          <span className="text-black">$</span>
          <span className="inline-block w-2 h-4 bg-black animate-pulse ml-1" />
        </div>
      </div>
    </section>
  );
}
