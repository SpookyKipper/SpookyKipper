import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spooky Kipper",
  description: "Introduction of Spooky Kipper. About, interests, awards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

<style>dfd</style>
      <Script src="https://cdn.spooky.hk/mainProfileScripts/darkmode.js?ver=2" strategy="afterInteractive"></Script>
       {/*   <Script src="https://cdn.spooky.hk/mainProfileScripts/translateConfig.js?ver=1" strategy="afterInteractive"></Script>
        <Script src="https://cdn.spooky.hk/mainProfileScripts/gtranslateFloat.js?ver=1" strategy="afterInteractive"></Script>*/}
<Script src="https://cdn.spooky.hk/mainProfileScripts/conveythis.js?api_key=pub_54308d9aa11251628ed095b7a69cae77"></Script>
        
<button className={"darkmode-toggle"} id="darkmode-toggle">🌓</button>
      </body>
    </html>
  );
}
