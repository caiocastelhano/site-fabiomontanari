import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fabio Montanari",
  description: "Official website of Fabio Montanari — a brazilian director, screenwriter, and educator",
  metadataBase: new URL("https://site-fabiomontanari.vercel.app/"),
  openGraph: {
    title: "Fabio Montanari",
    description: "Official website of Fabio Montanari — a brazilian director, screenwriter, and educator",
    url: "https://site-fabiomontanari.vercel.app/",
    siteName: "Fabio Montanari",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabio Montanari",
      },
    ],
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Montanari",
    description: "Official website of Fabio Montanari — a brazilian director, screenwriter, and educator",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
