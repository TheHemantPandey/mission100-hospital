import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// --- NEW ENHANCED METADATA ---
export const metadata = {
  // Title Template: Automatically adds "| Mission 100 Hospital" to all sub-pages
  title: {
    default: "Mission 100 Hospital | Preventive Healthcare & Diagnostics",
    template: "%s | Mission 100 Hospital"
  },
  description: "Mission 100 Hospital is dedicated to preventive healthcare, wellness, and advanced pathology lab tests to help you live a longer, healthier life.",
  keywords: ["Hospital", "Mission 100", "Preventive Healthcare", "Lab Tests", "Pathology", "Doctor Appointment"],
  metadataBase: new URL('https://www.mission100hospital.com'), // Change this to your live domain
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "fCeSX-03IsU_gkhDYs-AmvW3GG0Ggo9fQd0bWwzj71E", // Preserved your verification key
  },
  openGraph: {
    title: "Mission 100 Hospital | Preventive Healthcare",
    description: "Expert guidance and specialized health sections for a longer, healthier life.",
    url: "https://www.mission100hospital.com",
    siteName: "Mission 100 Hospital",
    images: [
      {
        url: "/icon.png", // Uses the icon seen in your project structure
        width: 1200,
        height: 630,
        alt: "Mission 100 Hospital Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission 100 Hospital",
    description: "Preventive healthcare and specialized diagnostics.",
    images: ["/icon.png"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <Script 
          src="https://checkout.razorpay.com/v1/checkout.js" 
          strategy="lazyOnload" 
        />
      </head>
      
      <body className="min-h-full bg-[#f7f9fc] flex flex-col overflow-x-hidden selection:bg-green-100">
        <Navbar />
        
        <main className="grow w-full min-h-screen">
          {children}
        </main>

        <Footer />   
        <WhatsAppButton />   
      </body>
    </html>
  );
}