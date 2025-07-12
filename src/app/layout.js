import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anurag Kumar | Software Engineer",
  description: "Portfolio website of Anurag Kumar, a software engineer specializing in web development.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212]`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
