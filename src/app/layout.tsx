import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HYU book",
  description: "한양대 에리카 소속된 사람들에게 책을 추천해주는 사이트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
