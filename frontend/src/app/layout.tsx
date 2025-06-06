import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/fesk.css";
import "@/components/SideNavToggle.css";
import SideNav from '@/components/SideNav';
import StickyHeader from '@/components/StickyHeader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Launchpad FESK",
  description: "FESK app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" data-theme="dim">
      <head>

      </head>
      <body>
        <SideNav />

        <div>
          <StickyHeader />

          <div id="my-container">

            {children}

          </div>

        </div>
      </body>
    </html>
  );
}
