import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0b]/75 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold tracking-tight">
          Taha<span className="text-zinc-400">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
          <a className="hover:text-zinc-50 transition" href="#work">
            Work
          </a>
          <a className="hover:text-zinc-50 transition" href="#about">
            About
          </a>
          <a className="hover:text-zinc-50 transition" href="#skills">
            Skills
          </a>
          <a className="hover:text-zinc-50 transition" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-zinc-300 hover:text-zinc-50"
          >
            <a
              aria-label="GitHub"
              href="https://github.com/SMTahaWaqar"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-zinc-300 hover:text-zinc-50"
          >
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/syed-muhammad-taha-waqar-736773232/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
