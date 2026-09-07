import type { Metadata } from "next";
import { Host_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samychaffai.com"),

  title: {
    default: "Samy Chaffai — Film Director & Content Creator",
    template: "%s | Samy Chaffai",
  },

  description:
    "Official portfolio of Samy Chaffai, film director and content creator known for cinematic storytelling, branded collaborations, original series, and digital content.",

  alternates: {
    canonical: "https://www.samychaffai.com",
  },

  openGraph: {
    title: "Samy Chaffai — Film Director & Content Creator",
    description:
      "Film director and content creator creating cinematic stories, original series, and branded experiences.",
    url: "https://www.samychaffai.com",
    siteName: "Samy Chaffai",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Samy Chaffai — Film Director & Content Creator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Samy Chaffai — Film Director & Content Creator",
    description:
      "Film director and content creator creating cinematic stories, original series, and branded experiences.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
