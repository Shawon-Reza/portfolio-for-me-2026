

import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shawon Reza - Jr. Frontend Developer",
  description: "Jr. Frontend Developer with 1.5+ years of experience building high-performance web apps using React, Next.js, TypeScript & Tailwind CSS. Specialized in real-time features and modern UI/UX. Open to frontend opportunities.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "TypeScript", "Tailwind CSS", "WebSocket", "PERN Stack", "JavaScript", "Shawon Reza", "Jr Frontend"],
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">

      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R3W64TZWRP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-R3W64TZWRP');
`}
        </Script>

      </head>
      <body
        suppressHydrationWarning

        className="min-h-full flex flex-col">
        <ScrollProgress />
        <Toaster />
        {/* {children} */}
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
