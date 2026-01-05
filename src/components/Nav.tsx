import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur dark:border-white/5 dark:bg-[#0b0b0b]/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold tracking-tight">
          Taha<span className="text-zinc-600 dark:text-zinc-400">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-600 dark:text-zinc-400">
          <a className="hover:text-zinc-900 dark:hover:text-zinc-50 transition" href="#work">
            Work
          </a>
          <a className="hover:text-zinc-900 dark:hover:text-zinc-50 transition" href="#about">
            About
          </a>
          <a className="hover:text-zinc-900 dark:hover:text-zinc-50 transition" href="#skills">
            Skills
          </a>
          <a className="hover:text-zinc-900 dark:hover:text-zinc-50 transition" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-zinc-700 hover:text-zinc-900 hover:bg-black/5 dark:text-zinc-300 dark:hover:text-zinc-50 dark:hover:bg-white/5"

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
            className="text-zinc-700 hover:text-zinc-900 hover:bg-black/5 dark:text-zinc-300 dark:hover:text-zinc-50 dark:hover:bg-white/5"

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
