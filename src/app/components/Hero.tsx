import { Minus, Square, X, ArrowDownToLine, ArrowRight } from "lucide-react";

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
          <div className="p-6 sm:p-8 md:p-12">
            {/* Terminal Output Style */}
            <div className="font-['JetBrains_Mono'] space-y-4 mb-8">
              <h1 className="text-4xl sm:text-5xl font-['Space_Grotesk'] font-bold mb-4 leading-tight">
                IoT ENGINEER<br />& DATA ENGINEER
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl font-['JetBrains_Mono']">
                Physics graduate in Electronics &amp; Instrumentation connecting
                calibrated sensor hardware to IoT data systems, analytics, and
                hardware QA/QC.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex min-h-20 flex-col justify-center border-[2px] border-black bg-[#FFD700] px-4 py-3 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                <div className="font-['JetBrains_Mono'] text-2xl font-black leading-none sm:text-3xl">14.7%</div>
                <div className="mt-2 font-['JetBrains_Mono'] text-[10px] font-bold uppercase leading-tight tracking-wide sm:text-xs">Energy Saved</div>
              </div>
              <div className="flex min-h-20 flex-col justify-center border-[2px] border-black bg-[#00FF00] px-4 py-3 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                <div className="font-['JetBrains_Mono'] text-2xl font-black leading-none sm:text-3xl">4.1M</div>
                <div className="mt-2 font-['JetBrains_Mono'] text-[10px] font-bold uppercase leading-tight tracking-wide sm:text-xs">Satellite Records</div>
              </div>
              <div className="flex min-h-20 flex-col justify-center border-[2px] border-black bg-white px-4 py-3 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                <div className="font-['JetBrains_Mono'] text-2xl font-black leading-none sm:text-3xl">60+</div>
                <div className="mt-2 font-['JetBrains_Mono'] text-[10px] font-bold uppercase leading-tight tracking-wide sm:text-xs">Sensors Calibrated</div>
              </div>
              <div className="flex min-h-20 flex-col justify-center border-[2px] border-black bg-black px-4 py-3 text-white shadow-[3px_3px_0_0_#FFD700]">
                <div className="font-['JetBrains_Mono'] text-2xl font-black leading-none text-[#FFD700] sm:text-3xl">100%</div>
                <div className="mt-2 font-['JetBrains_Mono'] text-[10px] font-bold uppercase leading-tight tracking-wide text-gray-300 sm:text-xs">HIL Reliability</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#FFD700] px-5 py-3 border-[2px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-['JetBrains_Mono'] font-bold"
              >
                Lihat Proyek <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/CV_Annasafyah_Hayati.pdf"
                download
                className="inline-flex items-center gap-2 bg-white px-5 py-3 border-[2px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-['JetBrains_Mono'] font-bold"
              >
                Download CV (PDF) <ArrowDownToLine className="w-4 h-4" />
              </a>
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
