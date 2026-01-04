import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taha - Full-Stack Software Engineer",
  description:
    "Full-stack engineer building scalable fintech systems and applied AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="text-zinc-50"
      >
        {children}
      </body>
    </html>
  );
}
