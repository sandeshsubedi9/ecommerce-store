import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "react-hot-toast";
import { SetApiCookie } from "@/actions/set-api-url";
import { Suspense } from "react";

const font = Urbanist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ecommerce Store",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Suspense>
          <SetApiCookie />
        </Suspense>
          <ModalProvider />
          <Toaster />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
