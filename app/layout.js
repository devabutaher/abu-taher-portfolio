import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://abutaher.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abu Taher | Web Developer",
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
    title: "Abu Taher | Web Developer",
    description:
      "Abu Taher is a MERN stack developer specialising in React, Next.js, and Node.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abu Taher — Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Taher | Web Developer",
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
        className={`${inter.className} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-gray-950 to-slate-950`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
