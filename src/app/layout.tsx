import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { ArchitectChat } from "@/components/ai/ArchitectChat";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne", // Keeping variable name to avoid changing page.tsx if possible, but actually let's just rename it.
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

const jetbrains = JetBrains_Mono({
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
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} antialiased selection:bg-[#8B6F47] selection:text-[#FAF7F2]`}
    >
      <body className="bg-obsidian text-concrete h-full">
        <SmoothScrollProvider>
          {children}
          <ArchitectChat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
