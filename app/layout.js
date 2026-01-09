import "./globals.css";
import { ThemeProvider } from "next-themes";
import CursorEffect from "@/components/CursorEffect";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ramesh – Portfolio",
  description: "Frontend Developer Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Background Elements */}
        <div className="gradient-bg"></div>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>

        <ThemeProvider attribute="class" defaultTheme="dark">
          <CursorEffect />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
