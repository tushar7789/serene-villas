import type { Metadata } from "next";
import Image from "next/image";
import { Oswald } from 'next/font/google';
import "./globals.css";

import Navigation from "@/_components/navigation";
import BackgroundImage from "../../public/static_images/bg-i_16x9.png";

export const metadata: Metadata = {
  title: "Serene Villas",
  description: "Rich with natural intimacy",
};


const oswald = Oswald({ subsets: ['latin'], weight: ['400', '600'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.className}>
      <body className="h-screen w-screen flex flex-col">
        <Image
          src={BackgroundImage}
          alt="bg-image"
          fill={true} // Makes the image fill the parent
          sizes="100vw"
          className="z-0"
        />
        <Navigation />
        <div className="flex-1 z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
