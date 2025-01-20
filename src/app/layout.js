import Footer from "@/components/Footer";
import "../globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-[1920px]  mx-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
