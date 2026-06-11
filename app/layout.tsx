import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Jannatul Ferdaues - AI Engineer & Researcher",
  description: "Final-year CS student at Daffodil International University | Specializing in Computer Vision, Deep Learning, and NLP. 5+ AI projects shipped with strong results. Open to AI Engineer internships.",
  keywords: ["AI Engineer", "Computer Vision", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Machine Learning", "Jannatul Ferdaues", "Soha"],
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
      <body
        suppressHydrationWarning

        className="min-h-full flex flex-col">
        <ScrollProgress />
        {/* {children} */}
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
