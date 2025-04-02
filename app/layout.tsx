import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import PageTransition from "./pageTransition";

export const metadata: Metadata = {
  title: "Magazine",
  description: "zzhe's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" href="/favicon.ico/book.png"></link>
      </head>
      <body className="antialiased">
          <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
