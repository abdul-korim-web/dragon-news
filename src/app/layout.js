import {  Poppins } from "next/font/google";
import "./globals.css";import { ToastContainer } from "react-toastify";
;



const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
})
export const metadata = {
  title: "Dragon News",
  description: "This is a news website ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
      {children}
       <ToastContainer />
      </body>
    </html>
  );
}
