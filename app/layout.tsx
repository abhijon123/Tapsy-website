import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { siteContent } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tapsy.app"),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: [
    "Tapsy",
    "video reviews",
    "restaurant reviews",
    "authentic reviews",
    "30-second reviews",
    "reels review",
    "food discovery",
  ],
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    type: "website",
    url: "https://tapsy.app",
    images: [
      {
        url: "/assets/app-reel-bellavista.png",
        width: 1200,
        height: 630,
        alt: "Tapsy Video Review Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ["/assets/app-reel-bellavista.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
