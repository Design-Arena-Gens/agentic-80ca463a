import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-80ca463a.vercel.app"),
  title: "Ben Siran | Artist, Singer & Master Educator",
  description:
    "Discover Ben Siran, an English mentor with 13+ years of experience and a master of the arts. Voice, visuals, storytelling—crafted for your growth.",
  openGraph: {
    title: "Ben Siran | Artist, Singer & Master Educator",
    description:
      "Discover Ben Siran, an English mentor with 13+ years of experience and a master of the arts. Voice, visuals, storytelling—crafted for your growth.",
    url: "https://agentic-80ca463a.vercel.app",
    siteName: "Ben Siran Creative Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Siran | Artist, Singer & Master Educator",
    description:
      "Discover Ben Siran, an English mentor with 13+ years of experience and a master of the arts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
