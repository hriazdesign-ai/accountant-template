import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/lib/content";
import { createPageMetadata, defaultDescription, siteUrl } from "@/lib/seo";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  ...createPageMetadata({ description: defaultDescription }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${instrumentSerif.variable} ${ibmPlexSerif.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
