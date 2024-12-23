import { Providers } from "../providers";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: ["favicon.ico"],
};

export function getRootLayout(lang: string) {
  function RootLayout({ children }: { children: ReactNode }) {
    return (
      <html lang={lang} suppressHydrationWarning>
        <body>
          <Providers lang={lang}>{children}</Providers>
        </body>
      </html>
    );
  }
  return RootLayout;
}
