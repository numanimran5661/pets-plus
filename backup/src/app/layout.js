import localFont from "next/font/local";
import { Be_Vietnam_Pro } from 'next/font/google';
import "../styles/globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: "--font-vietnam-pro",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Pets&Plus",
  description: "Find pets from trusted sources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
