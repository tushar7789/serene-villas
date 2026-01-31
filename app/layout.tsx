import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import RootProvider from "./_components/rootProvider";

export const metadata: Metadata = {
  title: "Serene Villas",
  description: "Rich with natural intimacy",
};

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <SessionProvider>
        <body className="h-screen w-screen flex flex-col z-10">
          <RootProvider child={children} />
        </body>
      </SessionProvider>
    </html>
  );
}
