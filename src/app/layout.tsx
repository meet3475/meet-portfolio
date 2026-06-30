import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Meet Dobariya — Frontend Developer",
  description:
    "Portfolio of Meet Dobariya, a frontend developer building Angular, React, Next.js and Three.js experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
