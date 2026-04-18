import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://abutaher.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abu Taher | Full-Stack Developer",
    template: "%s | Abu Taher",
  },
  description:
    "Abu Taher is a MERN stack developer specialising in React, Next.js, and Node.js. Available for freelance and full-time opportunities.",
  keywords: [
    "Abu Taher",
    "Web Developer",
    "React",
    "Next.js",
    "MERN Stack",
    "Portfolio",
  ],
  authors: [{ name: "Abu Taher", url: BASE_URL }],
  creator: "Abu Taher",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Abu Taher | Portfolio",
    title: "Abu Taher | Full-Stack Developer",
    description:
      "Abu Taher is a MERN stack developer specialising in React, Next.js, and Node.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abu Taher — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Taher | Full-Stack Developer",
    description:
      "Abu Taher is a MERN stack developer specialising in React, Next.js, and Node.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${inter.className} bg-gradient-to-r from-slate-900 to-slate-700 fireworks`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
