import { Inter } from "next/font/google";
import Header from "./ui/header";
import Footer from "./ui/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// use this layout to modify html and body tags
// e.g. assign font
// add metadata

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
