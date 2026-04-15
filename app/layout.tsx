import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FLOW∞Grace | 売れない原因を言語化し、心と仕組み、両方から売れる自分をつくる。",
  description:
    "AIの効率と、人のぬくもりを掛け合わせた「愛のあるWeb制作」を提供しています。LP・LINE・GASの仕組みを整える前に、「売れない理由」を一緒に言語化しましょう。",
  openGraph: {
    title: "FLOW∞Grace | 売れない原因を言語化し、心と仕組み、両方から売れる自分をつくる。",
    description:
      "AIの効率と、人のぬくもりを掛け合わせた「愛のあるWeb制作」を提供しています。",
    type: "website",
    locale: "ja_JP",
  },
};

export const viewport: Viewport = {
  themeColor: "#EFEBE0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${notoSansJP.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
