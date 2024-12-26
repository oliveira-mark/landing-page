import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Sales With QuizCommerce",
  description: "A digital Personal Shopper that does the selling for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
