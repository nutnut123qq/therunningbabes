import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Running Babes — BABÉ Stop AKN",
  description:
    "Hành trình thoát vòng lặp. Giải chạy đầu tiên của BABÉ tại Việt Nam — Cùng BABÉ thoát khỏi vòng lặp mụn, tái tạo năng lượng cho làn da và tâm trí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
