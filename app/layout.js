import { Analytics } from "@vercel/analytics/react";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const BASE_URL = "https://abutaher.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abu Taher | MERN Stack Developer",
    template: "%s | Abu Taher",
  },
  description:
    "Abu Taher is a professional MERN stack developer specialising in building scalable, high-performance web applications with React, Next.js, and Node.js. Discover his latest projects and technical expertise.",
  keywords: [
    "Abu Taher",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Expert",
    "Full Stack Engineer",
    "Node.js Developer",
    "Portfolio",
    "Web Development Services",
  ],
  authors: [{ name: "Abu Taher", url: BASE_URL }],
  creator: "Abu Taher",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Abu Taher | Portfolio",
    title: "Abu Taher | MERN Stack Developer",
    description:
      "Specialising in high-performance web applications using React, Next.js, and Node.js. View my professional portfolio.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abu Taher — MERN Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Taher | MERN Stack Developer",
    description:
      "Specialising in high-performance web applications using React, Next.js, and Node.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": "-1",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abu Taher",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.png`,
  sameAs: [
    "https://github.com/abutaher",
    "https://linkedin.com/in/abutaher",
    "https://facebook.com/abutaher",
  ],
  jobTitle: "MERN Stack Developer",
  description:
    "Specialising in scalable web applications using React, Next.js, and Node.js.",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        id="root"
        className={`${outfit.variable} ${plusJakarta.variable} font-sans`}
      >
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
