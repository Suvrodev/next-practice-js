// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next-js App",
  description: "Learning Next js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
