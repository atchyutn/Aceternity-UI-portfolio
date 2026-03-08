import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atchyut Nagabhairava | Software Engineer | Full Stack Developer",
  description:
    "Software Engineer at TCS building enterprise applications, scalable SaaS platforms, and AI-enabled products with Next.js, React, Ruby on Rails, and OpenAI APIs.",
  keywords:
    "Atchyut Nagabhairava, Software Engineer, Full Stack Developer, Hyderabad, Next.js, React, Ruby on Rails, OpenAI API, SaaS architecture, enterprise applications",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Atchyut Nagabhairava | Software Engineer & AI Product Builder",
    description:
      "Portfolio of Atchyut Nagabhairava featuring enterprise engineering experience, AI-enabled product development, and scalable web platforms.",
    type: "website",
    url: "https://atchyutn.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atchyut Nagabhairava | Software Engineer & AI Product Builder",
    description:
      "Enterprise software engineering, AI integrations, and product-focused full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
