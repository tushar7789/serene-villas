import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

import Navigation from "@/_components/navigation";

export const metadata: Metadata = {
  title: "Serene Villas",
  description: "Rich with natural intimacy",
};


// const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="h-screen w-screen flex flex-col" >
        <Navigation />
        <div className={`flex-1 overflow-x-hidden scroll-m-0`}>
          {children}
        </div>
      </body>
    </html>
  );
}
