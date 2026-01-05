import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { projects, skills } from "@/data/constants";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-[#0b0b0b] dark:text-zinc-50 transition-colors duration-300">
      <Nav />
      <Reveal>
        <Hero />
      </Reveal>

      <div className="border-t border-black/10 dark:border-white/5" />

      <Reveal delay={80}>
        <Section
          id="work"
          eyebrow="Selected work"
          title="Projects with real-world constraints"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                tags={p.tags}
                note={p.note}
                details={p.details}
                template={p.template}
              />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border bg-white border-black/10 dark:bg-white/[0.02] dark:border-white/5 p-6 md:p-8">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Want the details? Each project will get a dedicated page later
              (problem → approach → results). For now, this is the “signal-only”
              cut.
            </p>
          </div>
        </Section>
      </Reveal>

      <div className="border-t border-black/10 dark:border-white/5" />

      <Reveal delay={80}>
        <Section
          id="about"
          eyebrow="Background"
          title="Engineer first. Tasteful UI by default."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border bg-white border-black/10 dark:bg-white/[0.02] dark:border-white/5 p-6 md:p-8">
              <p className="text-zinc-300 leading-relaxed">
                I'm a full-stack software engineer working remotely with an
                international team on fintech SaaS. I care about clean
                architecture, predictable systems, and the kind of UI that feels
                calm and fast.
              </p>
            </div>

            <div className="rounded-3xl border bg-white border-black/10 dark:bg-white/[0.02] dark:border-white/5 p-6 md:p-8">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Now</p>
              <p className="mt-2 text-zinc-800 dark:text-zinc-200">
                Building production features across payouts, competitions, and
                dashboards.
              </p>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Previously
              </p>
              <p className="mt-2 text-zinc-800 dark:text-zinc-200">
                Computer Systems Engineering — FYP in computer vision (YOLO +
                OCR).
              </p>
            </div>
          </div>
        </Section>
      </Reveal>

      <div className="border-t border-black/10 dark:border-white/5" />

      <Reveal delay={80}>
        <Section id="skills" eyebrow="Toolbox" title="Things I can ship with">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-2xl border border-black/10 bg-white px-3 py-1.5 text-sm text-zinc-800 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>
      </Reveal>

      <div className="border-t border-black/10 dark:border-white/5" />

      <Reveal delay={80}>
        <Section
          id="contact"
          eyebrow="Say hi"
          title="Let's build something clean and scalable"
        >
          <div className="rounded-3xl border bg-white border-black/10 dark:bg-white/[0.02] dark:border-white/5 p-6 md:p-8">
            <p className="text-zinc-700 dark:text-zinc-300">
              Best way to reach me: email. I’m open to remote roles, interesting
              product work, and collaborations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="mailto:syedtaha.hsn@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> syedtaha.hsn@gmail.com
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-2xl bg-transparent border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <a
                  href="https://github.com/SMTahaWaqar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-2xl bg-transparent border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <a
                  href="https://www.linkedin.com/in/syed-muhammad-taha-waqar-736773232/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Section>
      </Reveal>

      <footer className="border-t border-black/10 dark:border-white/5 py-10">
        <div className="mx-auto max-w-5xl px-4 text-sm text-zinc-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Taha</span>
          <span className="hidden md:inline">
            Built with Next.js • Tailwind • shadcn/ui
          </span>
        </div>
      </footer>
    </main>
  );
}
