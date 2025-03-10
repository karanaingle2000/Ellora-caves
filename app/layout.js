
import "./globals.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import { ToastContainer } from "react-toastify";


export const metadata = {
  title: "Urban Express",
  description: "Urban Express offers the best transport service in Dubai. Reliable, fast, and convenient travel options for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <ToastContainer position="top-center" />
        <div className="block sm:hidden">
          <MobileHeader />
        </div>

        <div className="sm:block hidden">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
