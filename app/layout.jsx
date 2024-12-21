import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TimAyman-Portifolio",
  description: "Tim Ayman Legend Developer since 2021",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}

      </body>
    </html>
  );
}
