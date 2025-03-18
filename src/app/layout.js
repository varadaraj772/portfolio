// app/layout.js
import "./globals.css";
import { Manrope } from "next/font/google";
import Head from 'next/head';

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

        <link rel="icon" href="/icon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#ffffff" />  
 
        <meta name="mobile-web-app-capable" content="yes" /> 

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> 
        <meta name="apple-mobile-web-app-title" content="Sanith Suvarna" /> 


        <title>Sanith Suvarna | UI/UX Designer | Mangalore</title>
        <meta name="description" content="Sanith Suvarna is a Mangalore-based UI/UX Designer and Developer with 4+ years of experience. Expertise in Figma, Adobe Photoshop, and creating responsive web and mobile app UIs." />
        <meta name="keywords" content="UI/UX designer, Figma, Adobe Photoshop, responsive web design, mobile app UI, Mangalore, Sanith Suvarna, user interface design, user experience design, web design, app design, UI design, UX design" />
        <meta name="author" content="Sanith Suvarna" />


        <link rel="canonical" href="https://sanithsuvarna.vercel.app" />


        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}