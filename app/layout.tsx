// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";

import {
  Petit_Formal_Script,
  Fredericka_the_Great,
  Noto_Serif_Display,
  Kalnia,
} from "next/font/google";

const petit = Petit_Formal_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const fredericka = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const kalnia = Kalnia({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const noto = Noto_Serif_Display({
  weight: ["100", "400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// include Kalnia in the list of fonts
const allFonts = `${petit.className} ${fredericka.className} ${kalnia.className} ${noto.className}`;

export const metadata: Metadata = {
  title: "Brillx",
  description: "Learn, Share, and Grow with Brillx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={allFonts}>
        {children}
      </body>
    </html>
  );
}
