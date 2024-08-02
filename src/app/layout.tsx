import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atchyut Nagabhairava | Web & Mobile Development | AI Enthusiast",
  description:
    "Atchyut Nagabhairava offers expert consultations and web development services, specializing in AI solutions, automating tasks, and helping businesses build innovative web apps. Explore my portfolio of projects in Next.js, DynamoDB, Tailwind CSS, and more.",
  keywords:
    "web development, consultations, AI solutions, Atchyut Nagabhairava, build web apps, automation, emerging finance tools, Next.js, DynamoDB, Tailwind CSS",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Atchyut Nagabhairava | Web Development & AI Solutions",
    description:
      "Atchyut Nagabhairava offers expert consultations and web development services, specializing in AI solutions, automating tasks, and helping businesses build innovative web apps.",
    type: "website",
    url: "https://atchyutn.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Atchyut Nagabhairava | Web Development & AI Solutions",
    description:
      "Atchyut Nagabhairava offers expert consultations and web development services, specializing in AI solutions, automating tasks, and helping businesses build innovative web apps."
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
