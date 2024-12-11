import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/shared/header";

export const metadata: Metadata = {
  title: "Darkcodelab",
  description: "Deepan Chakravarthi's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
