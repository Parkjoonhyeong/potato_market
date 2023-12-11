import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { metadata } from "./metadata"
import Footerbar from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="w-full h-full overflow-hidden flex flex-col justify-betwee">
          <Navbar />
          {children}
          <Footerbar />
        </body>
      </html>
    </>
  )
}
