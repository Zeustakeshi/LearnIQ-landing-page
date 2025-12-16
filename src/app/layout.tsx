import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
});

const notoSerif = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "LearnIQ - Nền tảng học tập thông minh",
  description: "Trải nghiệm học tập thế hệ mới với LearnIQ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="vi">
        <body
          className={`${beVietnamPro.variable} ${notoSerif.variable} antialiased bg-[#FDFCF8] text-slate-800 font-sans`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
