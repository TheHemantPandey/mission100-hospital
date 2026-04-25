import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Ensures text is visible while font loads
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Ensures text is visible while font loads
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
      <head>
        {/* PWA Manifest and Theme Color */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />

        {/* Preconnect to Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Razorpay Script - Optimized for non-blocking load */}
        <Script 
          src="https://checkout.razorpay.com/v1/checkout.js" 
          strategy="lazyOnload" 
        />
      </head>
      
      <body className="min-h-full bg-[#f7f9fc] flex flex-col overflow-x-hidden selection:bg-green-100">
        <Navbar />
        
        {/* Responsive main container */}
        <main className="grow w-full min-h-screen">
          {children}
        </main>

        <Footer />   
        <WhatsAppButton />   
      </body>
    </html>
  );
}