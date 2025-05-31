import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ting Wei Fan | Software Engineer",
  description:
    "Ting Wei Fan's fullstack portfolio showcasing projects in web development, AI tools, and web applications.",
  icons: {
    icon: [
      { url: "/metadata/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/metadata/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/metadata/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/metadata/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/metadata/android-chrome-512x512.png",
      },
    ],
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
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Navbar />
        <div className="w-full bg-white h-[67px]" />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
