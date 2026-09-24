import Link from "next/link";

export function LabHeader({ active }: { active: "explorer" | "discovery" }) {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/8 bg-[#080b10]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-[1540px] flex-wrap items-center justify-between gap-3 px-5 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="DriveFalsify home">
            <span className="grid size-9 place-items-center rounded-lg bg-[#d7ff3f] text-[13px] font-black text-[#080b10]">DF</span>
            <span>
              <span className="block text-[15px] font-bold tracking-[-0.02em] text-white">DriveFalsify</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-[#7d8798]">Safety Scenario Lab</span>
            </span>
          </Link>
          <nav className="flex items-center gap-1 rounded-xl border border-white/8 bg-white/[0.025] p-1" aria-label="Primary navigation">
            <Link href="/" aria-current={active === "explorer" ? "page" : undefined} className={`rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${active === "explorer" ? "bg-white/10 text-white" : "text-[#949cab] hover:bg-white/5 hover:text-white"}`}>Scenario Explorer</Link>
            <Link href="/failure-discovery" aria-current={active === "discovery" ? "page" : undefined} className={`rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${active === "discovery" ? "bg-white/10 text-white" : "text-[#949cab] hover:bg-white/5 hover:text-white"}`}>Failure Discovery</Link>
          </nav>
        </div>
      </header>
      <div className="border-b border-[#d7ff3f]/15 bg-[#d7ff3f]/[0.055] px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-[#d7ff3f] sm:text-xs">
        Independent Research Prototype — Synthetic Driving Scenarios &amp; Results
      </div>
    </>
  );
}

export function ResearchFooter() {
  return (
    <footer className="mt-10 border-t border-white/8 py-6 text-center text-xs leading-5 text-[#667181]">
      No backend · No CARLA · No real RL training · No autonomous-driving datasets · No Zenseact data · No claims of validated vehicle safety
    </footer>
  );
}
