import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  align = "left",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";

  return (
    <section id={id} className="py-24 md:py-28">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div
          className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
        >
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{eyebrow}</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>

        <div className={isCenter ? "mt-10" : "mt-10"}>{children}</div>
      </div>
    </section>
  );
}
