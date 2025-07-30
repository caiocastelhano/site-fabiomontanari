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
  description: "Discover the work of Fabio Montanari — Brazilian screenwriter, director, and educator exploring storytelling, research, and creative consulting.",
  metadataBase: new URL("https://site-fabiomontanari.vercel.app/"),
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fabio Montanari",
    description: "Discover the work of Fabio Montanari — Brazilian screenwriter, director, and educator exploring storytelling, research, and creative consulting.",
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
    description: "Discover the work of Fabio Montanari — Brazilian screenwriter, director, and educator exploring storytelling, research, and creative consulting.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap&subset=latin-ext"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap&subset=latin-ext"
          media="all"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap&subset=latin-ext"
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
