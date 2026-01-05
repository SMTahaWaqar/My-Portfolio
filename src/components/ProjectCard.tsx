import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Project } from "@/data/constants";

type Props = Pick<
  Project,
  "title" | "desc" | "tags" | "note" | "details" | "template"
>;

export default function ProjectCard({
  title,
  desc,
  tags,
  note,
  details,
  template,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b] rounded-3xl">
          <Card className="relative h-full overflow-hidden rounded-3xl border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.035]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-zinc-400">{note}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 transition group-hover:text-zinc-100">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{desc}</p>

            <div className="mt-5 flex flex-wrap gap-2 opacity-70 transition duration-300 group-hover:opacity-100">
              {tags.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-200"
                >
                  {t}
                </Badge>
              ))}
            </div>

            <div className="mt-6 text-xs text-zinc-500">
              Click to open case study
            </div>

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
          </Card>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border-white/10 bg-[#0b0b0b] text-zinc-50 p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-semibold tracking-tight">
            {title}
          </DialogTitle>
          <p className="text-sm text-zinc-400">{note}</p>
          <p className="text-xs text-zinc-500 mt-1">
            {template === "PAR"
              ? "Problem → Approach → Result"
              : "What I built → Challenges → Outcome"}
          </p>
        </DialogHeader>

        <Separator className="bg-white/10" />

        <div className="space-y-6">
          <div>
            <p className="text-sm text-zinc-400">{details.aTitle}</p>
            <p className="mt-2 text-sm md:text-base text-zinc-200 leading-relaxed">
              {details.aBody}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">{details.bTitle}</p>
            <p className="mt-2 text-sm md:text-base text-zinc-200 leading-relaxed">
              {details.bBody}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">{details.cTitle}</p>
            <p className="mt-2 text-sm md:text-base text-zinc-200 leading-relaxed">
              {details.cBody}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {details.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-zinc-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {details.links?.github ? (
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/10 bg-transparent hover:bg-white/5"
              >
                <a href={details.links.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            ) : null}

            {details.links?.demo ? (
              <Button asChild className="rounded-2xl">
                <a href={details.links.demo} target="_blank" rel="noreferrer">
                  Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
        <p className="mt-6 text-xs text-zinc-500 text-center">
          Press{" "}
          <kbd className="rounded border border-white/10 px-1.5 py-0.5">
            Esc
          </kbd>{" "}
          to close
        </p>
      </DialogContent>
    </Dialog>
  );
}
