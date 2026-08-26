import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Rayyan Masroor | Full-Stack Developer & AI Automation Engineer",
  description:
    "Full-Stack Developer and AI Automation Engineer building production web apps and agentic workflows. Final-year CS student based in Islamabad, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".reveal,.reveal-child{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
      </head>
      <body className="bg-bg text-text-primary font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
