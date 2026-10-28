import { ReactNode } from "react";

export function DeviceMockup({ type, children }: { type: "laptop" | "mobile"; children: ReactNode }) {
  if (type === "mobile")
    return (
      <div className="relative rounded-[2.6rem] bg-gradient-to-b from-slate-700 to-slate-900 p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,.8),0_0_0_1px_rgba(255,255,255,.06)]">
        <div className="relative overflow-hidden rounded-[2rem] bg-black aspect-[9/19.5]">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    );
  return (
    <div className="relative">
      <div className="rounded-t-2xl bg-gradient-to-b from-slate-700 to-slate-900 p-3 pb-4 shadow-[0_0_0_1px_rgba(255,255,255,.06)]">
        <div className="mx-auto mb-2 size-1.5 rounded-full bg-slate-600" />
        <div className="overflow-hidden rounded-md bg-black aspect-[16/10]">{children}</div>
      </div>
      <div className="relative -mx-[6%] h-4 rounded-b-2xl bg-gradient-to-b from-slate-500 to-slate-800 shadow-[0_30px_60px_-10px_rgba(0,0,0,.9)]">
        <div className="mx-auto h-1.5 w-1/6 rounded-b-lg bg-slate-900/70" />
      </div>
    </div>
  );
}
