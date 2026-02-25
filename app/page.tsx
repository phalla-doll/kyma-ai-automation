import Image from "next/image";
import { Menu, Play, Star, Zap, Command, Crosshair, CircleDot } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#c4f000] selection:text-black overflow-hidden relative">
      {/* Global Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 px-4 md:px-8 max-w-[1600px] mx-auto w-full">
        <div className="w-full h-full grid grid-cols-4">
          <div className="border-l border-white/10 mix-blend-overlay h-full" />
          <div className="border-l border-white/10 mix-blend-overlay h-full" />
          <div className="border-l border-white/10 mix-blend-overlay h-full" />
          <div className="border-l border-r border-white/10 mix-blend-overlay h-full" />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-4 md:px-8 py-6 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter">KYMA®</span>
        </div>
        <div className="hidden md:flex items-center gap-32 text-xs font-mono text-white/60 uppercase tracking-widest">
          <span>AI Automation Specialists</span>
          <span>San Francisco, CA 12:16 PM</span>
        </div>
        <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-[#c4f000] transition-colors">
          <Menu className="w-5 h-5" />
          <span className="hidden sm:inline">Menu</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4 md:px-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col">
          <div className="mb-6 flex items-center gap-2 text-[#c4f000] font-mono text-xs md:text-sm uppercase tracking-widest">
            <span>[01]</span>
            <span>Eliminate your bottleneck_</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-black tracking-tighter uppercase mb-12 max-w-[1400px]">
            Scale your operations <span className="text-[#c4f000]">[10x]</span> without hiring <span className="text-[#c4f000]">[100]</span> people.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              <p className="text-lg md:text-xl text-white/70 max-w-md leading-relaxed">
                We build custom AI systems that handle your repetitive work, so you can focus on growth, not grunt work.
              </p>

              <button className="group flex items-center justify-between w-full max-w-[240px] pb-4 border-b border-[#c4f000] hover:border-white transition-colors">
                <span className="font-mono text-xs uppercase tracking-widest">See how it works</span>
                <div className="w-2 h-2 bg-[#c4f000] group-hover:bg-white transition-colors" />
              </button>

              {/* Trust Section */}
              <div className="mt-12 lg:mt-32 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] overflow-hidden relative bg-neutral-800">
                      <Image
                        src={`https://picsum.photos/100/100?random=${i + 10}`}
                        alt="Avatar"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#c4f000]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                    Trusted by 50+ companies
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (Video/Image Card) */}
            <div className="lg:col-span-4 flex flex-col gap-6 mt-12 lg:mt-0">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 leading-relaxed max-w-[250px]">
                What used to take 6 hours now runs automatically without human oversight.
              </p>
              
              <div className="relative aspect-square bg-[#0a0a0a] border border-white/10 p-2 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c4f000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                
                {/* Hexagon SVG Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-50">
                  <svg width="60%" height="60%" viewBox="0 0 100 100" className="drop-shadow-[0_0_15px_rgba(196,240,0,0.5)]">
                    <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="none" stroke="#c4f000" strokeWidth="1" />
                  </svg>
                </div>

                <Image
                  src="https://picsum.photos/800/800?random=1"
                  alt="AI Automation"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Elements */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <div className="mb-6">
                    <button className="w-12 h-12 rounded-full bg-[#c4f000] text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-1" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#c4f000]">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c4f000] animate-pulse" />
                      <span>Live Automation</span>
                    </div>
                    <span>2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Background Text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-[-1] opacity-10 translate-y-1/4">
          <h2 className="text-[25vw] font-black tracking-tighter leading-none text-center whitespace-nowrap">
            KYMA
          </h2>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="relative z-20 bg-[#f4f4f0] text-black border-y border-black/10">
        <div className="flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee py-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
                  <Zap className="w-6 h-6" /> Boltshift
                </div>
                <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
                  <CircleDot className="w-6 h-6" /> Lightspeed
                </div>
                <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
                  <Command className="w-6 h-6" /> Command+R
                </div>
                <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
                  <Crosshair className="w-6 h-6" /> Clandestine
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative z-10 bg-[#f4f4f0] text-black pt-32 pb-48 px-4 md:px-8">
        {/* Light Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0 px-4 md:px-8 max-w-[1600px] mx-auto w-full">
          <div className="w-full h-full grid grid-cols-4">
            <div className="border-l border-black/5 h-full" />
            <div className="border-l border-black/5 h-full" />
            <div className="border-l border-black/5 h-full" />
            <div className="border-l border-r border-black/5 h-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="mb-8 flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-widest text-black/60">
            <span>[02]</span>
            <span>Who we are_</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-[80px] leading-[0.9] font-black tracking-tighter uppercase max-w-5xl">
            Humans should do human work. AI should do everything else. We build the systems that make this happen.
          </h2>
        </div>
      </section>
    </main>
  );
}
