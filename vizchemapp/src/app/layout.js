import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vizchem.co.in",
  description: "Genrated By Mohammad Kareem",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
     
      <body className={inter.className}>{children}

      {/* <Navbar/> */}
      </body>
    </html>
  );
}
