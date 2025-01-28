"use client";
import "./globals.css";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define routes where the footer should NOT appear
  const noFooterRoutes = ["/workspace"];

  // Determine if the footer should be shown
  const showFooter = !noFooterRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        <main className="max-w-[1920px] mx-auto">{children}</main>
        {showFooter && <Footer />}
      </body>
    </html>
  );
}
