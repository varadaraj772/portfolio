import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Sanith Suvarna | UI/UX Designer | Mangalore",
  description:
    "Sanith Suvarna is a Mangalore-based UI/UX Designer with 4+ years of experience. Expertise in Figma, Adobe Photoshop, and creating responsive web and mobile app UIs.",
  keywords:
    "UI/UX designer, Figma, Adobe Photoshop, responsive web design, mobile app UI, Mangalore, Sanith Suvarna, user interface design, user experience design, web design, app design, UI design, UX design",
  author: "Sanith Suvarna",
  applicationName: "Sanith Suvarna Portfolio",
  generator: "Next.js",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black-translucent",
  appleMobileWebAppTitle: "Sanith Suvarna",
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://sanithsuvarna.vercel.app",
    title: "Sanith Suvarna | UI/UX Designer | Mangalore",
    description:
      "Sanith Suvarna is a Mangalore-based UI/UX Designer with 4+ years of experience in Figma, Adobe Photoshop, and UI design.",
    images: [
      {
        url: "https://sanithsuvarna.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanith Suvarna UI/UX Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanith Suvarna | UI/UX Designer | Mangalore",
    description:
      "Sanith Suvarna is a Mangalore-based UI/UX Designer with 4+ years of experience in Figma, Adobe Photoshop, and UI design.",
    creator: "@sanithsuvarna",
    images: ["https://sanithsuvarna.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
