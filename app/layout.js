import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mission 100 - Helping you Live Longer | Preventive Healthcare",
  description: "Mission 100 is dedicated to preventive healthcare, wellness, and helping you live a longer, healthier life through expert guidance and specialized health sections.",
  verification: {
    google: "fCeSX-03IsU_gkhDYs-AmvW3GG0Ggo9fQd0bWwzj71E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f7f9fc] flex flex-col">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />   
        <WhatsAppButton />   
      </body>
    </html>
  );
}