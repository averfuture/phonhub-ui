import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhonHub",
  description: "Thinking Amortization Better",
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
