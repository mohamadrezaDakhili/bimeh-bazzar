import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bimeh Bazzar",
  description: "پلتفرم خرید بیمه آنلاین",
  keywords: "بیمه, بیمه بازار, خرید بیمه, بیمه آنلاین",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.className} antialiased flex justify-center items-center bg-white`}
      >
        <div className="min-w-[360px] max-w-[480px] w-full">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
