import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DadBod Studios",
  description: "Indie games built after bedtime. Home of Project Sunder.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}