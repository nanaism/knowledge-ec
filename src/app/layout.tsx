import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oga's Knowledge Store",
  description: "テクノロジー専門のコンテンツECサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className}   antialiased`}>
        <Header />
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  );
}
