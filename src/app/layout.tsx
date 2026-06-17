import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "World-class Music Production Courses | Lessons in London",
  description: "LEARN MORE at “The World's Boutique Music Production School” — Approved by 3 DAWs. Many locations from LA to Hong Kong, and LIVE online.",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://www.garnishmusicproduction.com/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "World-class Music Production Courses | Lessons in London",
    description: "LEARN MORE at “The World's Boutique Music Production School” — Approved by 3 DAWs. Many locations from LA to Hong Kong, and LIVE online.",
    url: "https://www.garnishmusicproduction.com/",
    siteName: "Garnish Music Production School",
    images: [
      {
        url: "https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/LogClass-800.jpg",
        secureUrl: "https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/LogClass-800.jpg",
        width: 1185,
        height: 800,
        alt: "Logic Pro X",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World-class Music Production Courses | Lessons in London",
    description: "LEARN MORE at “The World's Boutique Music Production School” — Approved by 3 DAWs. Many locations from LA to Hong Kong, and LIVE online.",
    images: ["https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/LogClass-800.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
