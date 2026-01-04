import { ACCENT } from "@/data/constants";
import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="mt-1 text-sm text-zinc-200">{value}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-16 md:pt-20 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        {/* subtle grid texture */}
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.06),transparent_40%)]" />
          <div className="relative">
            <p className="text-sm text-zinc-400">
              Karachi • Remote • Fintech + Applied AI
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Full-Stack Engineer
              <span className={` ${ACCENT}`}> building systems that ship.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
              I build production-grade fintech features and AI-driven systems
              with a focus on clean architecture, performance, and a calm,
              reliable UX.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#work">
                  View work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/10 bg-transparent hover:bg-white/5"
              >
                <a href="#contact">Contact</a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="rounded-2xl text-zinc-300 hover:text-zinc-50"
              >
                <a href="mailto:syedtaha.hsn@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> syedtaha.hsn@gmail.com
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              <MiniStat label="Focus" value="Fintech SaaS + AI Systems" />
              <MiniStat label="Stack" value="Next.js • NestJS • MongoDB" />
              <MiniStat label="Style" value="Clean architecture, fast UX" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
