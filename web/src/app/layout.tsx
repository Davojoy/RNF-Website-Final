import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/lib/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RNF - Empowering Teenage Girls",
  description:
    "RNF is a non-profit organization dedicated to empowering teenage girls from marginalized communities through education, health awareness, and comprehensive support programs.",
  keywords: ["empowerment", "teenage girls", "education", "health", "Nigeria", "non-profit", "NGO"],
  authors: [{ name: "RNF Organization" }],
  openGraph: {
    title: "RNF - Empowering Teenage Girls",
    description: "Creating hope and possibilities through education, empowerment, and holistic support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
