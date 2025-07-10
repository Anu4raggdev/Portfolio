import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const SocialSidebar = dynamic(() => import('@/components/SocialSidebar'), { ssr: true });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Developer & Designer",
  description: "My personal portfolio showcasing projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}
