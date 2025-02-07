import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav/nav";
import "@/styles/globals.css";
import AppConfig from "@/config/appConfig";
import Background from "../components/shared/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Madimi+One&family=Moirai+One&family=MuseoModerno:ital,wght@0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-pink-300 container mx-auto p-2 overflow-x-hidden flex flex-col relative h-full`}
      >
        <Nav />
        <div className="h-14"></div>
        {children}
      </body>
    </html>
  );
}
