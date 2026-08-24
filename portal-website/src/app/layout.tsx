import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portal — Every AI, one window",
    template: "%s — Portal",
  },
  description:
    "Open ChatGPT, Claude, Gemini, and more from one focused desktop window for Windows and macOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body>
        <template
          data-impeccable-contract
          dangerouslySetInnerHTML={{
            __html:
              "<!-- THESIS: Portal choreographs scattered AI windows into one reachable desktop surface and refuses the centered SaaS hero plus card grid. OWN-WORLD: #040508 graphite, #111114 window chrome, off-white type, #9b81f3 active violet, frosted panes, cool hairlines, broad Archivo. STORY: Visitors watch real Portal gather official AI sites, understand the one-click desktop benefit, then download Windows or macOS. FIRST VIEWPORT: Slim nav above an edge-to-edge 2.39:1 film; service windows converge toward Portal; a compact lower-left dock holds the headline and both downloads. FORM: Window Choreographer, grounded direction 1 of 7, seed 83e63ebf. FINISH: Unreviewed and undocumented is unfinished; finish with a verdict, DESIGN.md, and provenance on every shipping raster. -->",
          }}
        />
        <Navbar />
        <div className="site-content">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
