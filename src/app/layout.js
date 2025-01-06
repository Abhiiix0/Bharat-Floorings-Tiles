import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header bgImg={bgImgs} title="Press releases" />
        <main className=" max-w-[1920px] mx-auto px-[20px] lg:px-[100px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
