import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="workshop-layout">
          {children}
        </main>
      </body>
    </html>
  );
}
