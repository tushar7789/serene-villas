import type { Metadata } from "next";
import "./globals.css";

import Navigation from "@/_components/navigation";

export const metadata: Metadata = {
  title: "Serene Villas",
  description: "Rich with natural intimacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-rows-2">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
