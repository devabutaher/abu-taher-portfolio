export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://abutaher.vercel.app/sitemap.xml",
  };
}
