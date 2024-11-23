import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const Fellix = localFont({
  src: "./fonts/Fellix-Medium.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TatvaFlow</title>
      </head>
      <body
        className={cn(inter.className, "antialiased min-h-screen")}
      >
        {children}
      </body>
    </html>
  );
}
