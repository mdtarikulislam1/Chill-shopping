// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// ${geistSans.variable} ${geistMono.variable} 
// });

export const metadata = {
  title: "Shope and chil",
  description: "Shope beautiful and cutting product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
       <main>   
         {children}
       </main>
      </body>
    </html>
  );
}
