import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav/nav";
import "@/styles/globals.css";
import AppConfig from "@/config/appConfig";

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
      <body className={`${inter.className} bg-slate-800`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
