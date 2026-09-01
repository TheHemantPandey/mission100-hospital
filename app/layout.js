import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HospitalPopup from "@/components/HospitalPopup"; // 1. IMPORTED POPUP COMPONENT
import Script from 'next/script';
import ImageProtection from "@/components/ImageProtection";
import ScrollRestoration from "@/components/ScrollRestoration";

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
  title: {
    default: "Mission 100 Hospital | Preventive Healthcare & Diagnostics",
    template: "%s | Mission 100 Hospital"
  },
  description: "Mission 100 Hospital is dedicated to preventive healthcare, wellness, and advanced pathology lab tests to help you live a longer, healthier life.",
  keywords: ["Hospital", "Mission 100", "Preventive Healthcare", "Lab Tests", "Pathology", "Doctor Appointment"],
  metadataBase: new URL('https://www.mission100hospital.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "fCeSX-03IsU_gkhDYs-AmvW3GG0Ggo9fQd0bWwzj71E",
  },
  openGraph: {
    title: "Mission 100 Hospital | Preventive Healthcare",
    description: "Expert guidance and specialized health sections for a longer, healthier life.",
    url: "https://www.mission100hospital.com",
    siteName: "Mission 100 Hospital",
    images: [
      {
        url: "/icon.png",
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

        {/* Google Analytics 4 (GA4) */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script
            id="microsoft-clarity-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
              `,
            }}
          />
        )}
      </head>

      <body className="min-h-full bg-[#f7f9fc] flex flex-col overflow-x-hidden selection:bg-green-100">

        <ScrollRestoration />
        <ImageProtection />

        <HospitalPopup />

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