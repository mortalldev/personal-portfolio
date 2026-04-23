import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import { Slide, ToastContainer } from "react-toastify";
import Script from "next/script"; // GA4 uchun

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mortal | Frontend Web Developer",
  description:
    "Explore the portfolio of Muhammadjon, a Professional Frontend Developer specializing in Next.js, TypeScript, and modern web solutions.",
  keywords: [
    "Mortal'Dev",
    "Frontend Developer",
    "Next.js Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Muhammad Tursunboev" }],
  openGraph: {
    title: "Mortal Dev | Personal Portfolio",
    description: "Frontend Web Developer — Building the future of the web.",
    url: "https://www.mortaldev.uz",
    siteName: "Mortal'Dev Portfolio",
    images: [
      {
        url: "https://www.mortaldev.uz/website-overview.png",
        width: 1200,
        height: 630,
        alt: "Mortal'Dev Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal'Dev | Frontend Developer",
    description: "Building modern web applications.",
    images: ["https://www.mortaldev.uz/website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-UZ">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Analytics GA4 Script */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
          transition={Slide}
        />
        <main className="text-white min-h-screen">
          <div className="container mx-auto px-4">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
