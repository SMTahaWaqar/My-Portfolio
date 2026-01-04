import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function ProjectCard({
  title,
  desc,
  tags,
  href,
  note,
}: {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  note: string;
}) {
  return (
    <a href={href} className="group block">
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

        {/* reveal area */}
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

        {/* subtle corner glow on hover */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
      </Card>
    </a>
  );
}
