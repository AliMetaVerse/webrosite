import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WidgetInjector } from "@/components/widget-injector";
import { readWidgets } from "@/lib/widgets";
import { themeBootScript } from "@/components/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webropol — Survey & Reporting platform with advanced AI",
  description:
    "The most versatile Survey and Reporting platform with advanced AI capabilities. Secure, GDPR-compliant, and accessible. One platform, endless possibilities.",
  keywords: [
    "survey platform",
    "reporting",
    "AI surveys",
    "employee experience",
    "customer experience",
    "GDPR",
    "Webropol",
  ],
  openGraph: {
    title: "Webropol — Survey & Reporting platform with advanced AI",
    description:
      "One platform, endless possibilities. Turn data into actionable insights.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const widgets = await readWidgets();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies the saved design theme before first paint (no flash). */}
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <link
          rel="stylesheet"
          href="https://kit.fontawesome.com/50ef2d3cf8.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-fg">
        <Navbar initialWidgets={widgets} />
        <main className="flex-1">{children}</main>
        <Footer />
        <WidgetInjector widgets={widgets} />
      </body>
    </html>
  );
}
