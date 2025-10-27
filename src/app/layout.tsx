// src/app/layout.tsx
import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // <-- IMPORTUJEMY DOSTAWCĘ

// Konfiguracja czcionek
const openSans = Open_Sans({
  subsets: ["latin-ext"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin-ext"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Kwiat Lotosu - Masaż Myszyniec | Region Ostrołęka, Olsztyn, Łomża",
  description:
    "Szukasz masażu w okolicach Ostrołęki, Olsztyna, Łomży lub Przasnysza? Odkryj gabinet Kwiat Lotosu w Myszyńcu. Profesjonalne terapie i relaks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
