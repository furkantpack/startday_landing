import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";

import { PostHogProvider } from "@/app/providers";
import {
  defaultDescription,
  defaultTitle,
  seoKeywords,
  shortTitle,
  siteName,
  siteUrl,
  socialImage,
  structuredData,
} from "@/lib/seo";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: seoKeywords,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Startday | The Weekend That Turns Strangers Into Founders",
    description:
      "Meet ambitious builders, find your future co-founder, validate startup ideas, and launch something meaningful in one weekend.",
    url: siteUrl,
    siteName,
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: shortTitle,
    description: "The weekend that turns strangers into founders.",
    images: [socialImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffe779",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${plexMono.variable} font-[family-name:var(--font-sans)] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
