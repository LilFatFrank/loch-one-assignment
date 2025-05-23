import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loch One",
  description: "Assignment for a responsive landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased scroll-smooth lg:h-dvh h-full`}
      >
        <img src={"/assets/loch-one-bg.png"} alt="bg" className="w-full h-full fixed -z-1" />
        {children}
      </body>
    </html>
  );
}
