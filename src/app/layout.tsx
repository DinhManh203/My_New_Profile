'use client';

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import PageTransitionEvent from "@/components/pageTransition";
import StairTransition from "@/components/stairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [initialLoading, setInitialLoading] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => {
    setInitialLoading(false)
  }, 1000)
  return () => clearTimeout(timer)
}, [])


  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransitionEvent>
          {initialLoading ? (
            <div
              className="spinner-container"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
              }}
            >
              <ClipLoader color="#00ff99" loading={initialLoading} size={50} />
            </div>
          ) : (
            children
          )}
        </PageTransitionEvent>
      </body>
    </html>
  );
}
