import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CaveDen",
    default: "CaveDen — The UK Garden Build Authority",
  },
  description:
    "Blueprints, build systems, community and curated gear for garden offices, man caves and outdoor rooms — engineered to a standard you'll be proud of for decades.",
  openGraph: {
    title: "CaveDen — The UK Garden Build Authority",
    description: "Blueprints, build systems, community and curated gear for garden offices, man caves and outdoor rooms.",
    type: "website",
    locale: "en_GB",
    url: "https://caveden.co.uk",
    siteName: "CaveDen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} antialiased selection:bg-brass selection:text-obsidian`}
    >
      <body className="bg-obsidian text-concrete min-h-screen">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
