import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import Footer from "./components/footer/page";
import Navbar from "./components/home/nav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechBlog ~ CRUD Functinality With Shadcn UI",
  description: "A full-featured blog application built with Next.js. It includes CRUD functionality, Clerk authentication, and a clean user interface for managing blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer />

        </body>
      </html>
    </ClerkProvider>
  );
}
