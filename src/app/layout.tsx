import { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Taha — Full-Stack Software Engineer",
  description:
    "Full-stack engineer building scalable fintech systems and applied AI solutions.",
  openGraph: {
    title: "Taha — Full-Stack Software Engineer",
    description: "Fintech • Systems • Applied AI",
    url: siteUrl,
    siteName: "Taha.dev",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Taha — Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha — Full-Stack Software Engineer",
    description: "Fintech • Systems • Applied AI",
    images: [`${siteUrl}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="text-zinc-50">{children}</body>
    </html>
  );
}
