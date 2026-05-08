import type { Metadata } from "next";
import { Geist, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const baseUrl = "https://www.delacasapastabar.com";

export const metadata: Metadata = {
  title: "De La Casa | Pasta Bar Oslo",
  description: "Build your own perfect pasta at De La Casa in Frogner, Oslo. Choose your pasta, sauce and toppings – freshly made for you in minutes. Book a table today.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "De La Casa | Pasta Bar Oslo",
    description: "Build your own perfect pasta at De La Casa in Frogner, Oslo. Fresh ingredients, made to order.",
    url: baseUrl,
    siteName: "De La Casa",
    locale: "en_NO",
    type: "website",
    images: [{ url: "/pastas.jpg", width: 1200, height: 630, alt: "De La Casa pasta bar Oslo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "De La Casa | Pasta Bar Oslo",
    description: "Build your own perfect pasta at De La Casa in Frogner, Oslo.",
    images: ["/pastas.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${crimsonText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
