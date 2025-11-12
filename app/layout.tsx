import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPA - Offers",
  description: "SPA Coupons and Offers Page",
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

