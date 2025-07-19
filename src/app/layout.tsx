import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubikSans = Rubik({
  subsets: ['latin'],
  weight: [ '400', '500', '600', '700', '900'], 
  variable: '--font-rubik',
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Marketthink",
  description: "Digital Marketing Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon/Category.png" type="image/png" />
      </head>
      <body
        className={`${rubikSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
