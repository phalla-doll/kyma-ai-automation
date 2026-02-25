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

      {/* How it works */}
      <section className="relative z-10 bg-[#050505] text-white pt-32 pb-32 px-4 md:px-8 border-t border-white/10">
        {/* Dark Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0 px-4 md:px-8 max-w-[1600px] mx-auto w-full">
          <div className="w-full h-full grid grid-cols-4">
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-r border-white/10 h-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="mb-16 flex items-center gap-2 text-[#c4f000] font-mono text-xs md:text-sm uppercase tracking-widest">
            <span>[03]</span>
            <span>How it works_</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-[80px] leading-[0.9] font-black tracking-tighter uppercase mb-24 max-w-4xl">
            From chaos to clockwork in <span className="text-[#c4f000]">[30]</span> days.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col gap-6 border-t border-white/20 pt-8">
              <span className="font-mono text-4xl text-[#c4f000]">01 //</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Audit & Architecture</h3>
              <p className="text-white/60 leading-relaxed">
                We map your existing workflows, identify the highest-ROI bottlenecks, and design a custom AI architecture to automate them.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col gap-6 border-t border-white/20 pt-8">
              <span className="font-mono text-4xl text-[#c4f000]">02 //</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Development & Training</h3>
              <p className="text-white/60 leading-relaxed">
                We build your custom AI agents, integrate them with your existing tools, and train them on your specific company data.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col gap-6 border-t border-white/20 pt-8">
              <span className="font-mono text-4xl text-[#c4f000]">03 //</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Deployment & Scale</h3>
              <p className="text-white/60 leading-relaxed">
                We deploy the systems into production, monitor their performance, and scale them across other departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 bg-[#f4f4f0] text-black pt-32 pb-32 px-4 md:px-8 border-t border-black/10">
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
          <div className="mb-16 flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-widest text-black/60">
            <span>[04]</span>
            <span>Investment_</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-[80px] leading-[0.9] font-black tracking-tighter uppercase mb-24 max-w-4xl">
            Pay for outcomes, not hours.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plan 1 */}
            <div className="border border-black p-8 md:p-12 flex flex-col bg-white">
              <div className="mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Pilot System</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-black/60">For single-workflow automation</p>
              </div>
              <div className="text-5xl font-black tracking-tighter mb-12">
                $10k <span className="text-xl text-black/40 font-mono tracking-normal">/mo</span>
              </div>
              <ul className="flex flex-col gap-4 font-mono text-sm mb-12 flex-grow">
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 shrink-0" /> 1 Custom AI Agent</li>
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 shrink-0" /> Integration with 3 tools</li>
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 shrink-0" /> 24/7 Monitoring</li>
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 shrink-0" /> Weekly Optimization</li>
              </ul>
              <button className="w-full py-4 bg-black text-white font-mono text-sm uppercase tracking-widest hover:bg-[#c4f000] hover:text-black transition-colors">
                Start Pilot
              </button>
            </div>

            {/* Plan 2 */}
            <div className="border border-black p-8 md:p-12 flex flex-col bg-black text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#c4f000] text-black font-mono text-[10px] uppercase tracking-widest px-4 py-2 font-bold">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Enterprise Scale</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-white/60">For department-wide automation</p>
              </div>
              <div className="text-5xl font-black tracking-tighter mb-12">
                $25k <span className="text-xl text-white/40 font-mono tracking-normal">/mo</span>
              </div>
              <ul className="flex flex-col gap-4 font-mono text-sm mb-12 flex-grow text-white/80">
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 text-[#c4f000] shrink-0" /> Unlimited Custom AI Agents</li>
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 text-[#c4f000] shrink-0" /> Unlimited Integrations</li>
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 text-[#c4f000] shrink-0" /> Dedicated AI Engineer</li>
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 text-[#c4f000] shrink-0" /> Custom LLM Fine-tuning</li>
                <li className="flex items-start gap-3"><Zap className="w-4 h-4 mt-0.5 text-[#c4f000] shrink-0" /> SLA Guarantees</li>
              </ul>
              <button className="w-full py-4 bg-[#c4f000] text-black font-mono text-sm uppercase tracking-widest hover:bg-white transition-colors">
                Scale Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 bg-[#050505] text-white pt-32 pb-32 px-4 md:px-8 border-t border-white/10 overflow-hidden">
        {/* Dark Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0 px-4 md:px-8 max-w-[1600px] mx-auto w-full">
          <div className="w-full h-full grid grid-cols-4">
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-r border-white/10 h-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="mb-16 flex items-center gap-2 text-[#c4f000] font-mono text-xs md:text-sm uppercase tracking-widest">
            <span>[05]</span>
            <span>Proof_</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col gap-8">
              <Star className="w-8 h-8 text-[#c4f000] fill-current" />
              <p className="text-2xl md:text-4xl font-medium leading-tight tracking-tight">
                "KYMA automated our entire customer onboarding process. What used to take a team of 5 people two weeks now happens instantly. It's completely transformed our margins."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden relative">
                  <Image src="https://picsum.photos/100/100?random=20" alt="Sarah J." fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold uppercase tracking-tight">Sarah Jenkins</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">COO @ Boltshift</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <Star className="w-8 h-8 text-[#c4f000] fill-current" />
              <p className="text-2xl md:text-4xl font-medium leading-tight tracking-tight">
                "We were skeptical about AI replacing our complex data entry workflows. Within 30 days, KYMA's agents were operating at 99.9% accuracy, running 24/7."
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden relative">
                  <Image src="https://picsum.photos/100/100?random=21" alt="Marcus T." fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold uppercase tracking-tight">Marcus Torres</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">VP Ops @ Lightspeed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section className="relative z-10 bg-[#c4f000] text-black pt-32 pb-16 px-4 md:px-8 border-t border-black/10">
        <div className="relative z-10 max-w-[1600px] mx-auto w-full flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-widest text-black/60">
            <span>[06]</span>
            <span>Initiate_</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-[120px] leading-[0.85] font-black tracking-tighter uppercase mb-12 max-w-6xl">
            Ready to replace your bottlenecks?
          </h2>

          <button className="group flex items-center justify-between w-full max-w-md pb-4 border-b-4 border-black hover:border-black/50 transition-colors mb-32">
            <span className="font-mono text-xl md:text-2xl uppercase tracking-widest font-bold">Book an Audit</span>
            <div className="w-4 h-4 bg-black group-hover:bg-black/50 transition-colors" />
          </button>

          <footer className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/20 font-mono text-[10px] uppercase tracking-widest">
            <span>© 2026 KYMA AI Automation</span>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
