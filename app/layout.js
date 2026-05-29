import { Analytics } from "@vercel/analytics/react";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { ScrollProgressBar } from "@/components/utils/ScrollProgressBar";
import { BackToTop } from "@/components/utils/BackToTop";
import "./globals.css";
import "./design-system.css";

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
    default: "Abu Taher | Premium MERN Stack Developer Portfolio",
    template: "%s | Abu Taher",
  },
  description:
    "Abu Taher is an elite MERN stack developer specializing in scalable, high-performance web applications. Expert in React, Next.js, Node.js, MongoDB, and modern web technologies. Explore award-winning portfolio projects.",
  keywords: [
    "Abu Taher",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Expert",
    "Full Stack Engineer",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Expert",
    "Web Developer Portfolio",
    "Freelance Developer",
    "Remote Developer",
    "Web Development Services",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Abu Taher", url: BASE_URL }],
  creator: "Abu Taher",
  publisher: "Abu Taher",
  applicationName: "Abu Taher Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Abu Taher | MERN Stack Developer",
    title: "Abu Taher | Premium MERN Stack Developer",
    description:
      "Expert MERN stack developer specializing in scalable web applications. React, Next.js, Node.js, and MongoDB expertise.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abu Taher — Premium MERN Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abutaher",
    creator: "@abutaher",
    title: "Abu Taher | Premium MERN Stack Developer",
    description:
      "Expert in building scalable web applications using React, Next.js, Node.js, and MongoDB.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": "-1",
      "max-video-preview": "-1",
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "Technology",
  classification: "Web Development, Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Abu Taher",
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}#person`,
      name: "Abu Taher",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
      sameAs: [
        "https://github.com/abutaher",
        "https://linkedin.com/in/abutaher",
        "https://twitter.com/abutaher",
        "https://facebook.com/abutaher",
      ],
      jobTitle: "MERN Stack Developer",
      email: "contact@abutaher.com",
      description:
        "Elite MERN stack developer specializing in scalable, high-performance web applications.",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Web Development",
      ],
      givenName: "Abu",
      familyName: "Taher",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}#website`,
      name: "Abu Taher Portfolio",
      url: BASE_URL,
      description: "Portfolio showcasing MERN stack development expertise",
      creator: {
        "@id": `${BASE_URL}#person`,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}#business`,
      name: "Abu Taher Web Development",
      url: BASE_URL,
      image: `${BASE_URL}/og-image.png`,
      description: "MERN Stack Development Services",
      priceRange: "$$",
    },
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
        <ScrollProgressBar />
        <BackToTop />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
