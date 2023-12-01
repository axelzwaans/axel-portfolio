import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AZ | Web Developer",
  description: "Web Developer/Designer based in Scotland",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
