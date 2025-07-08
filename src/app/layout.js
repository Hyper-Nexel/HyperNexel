// app/layout.js
import Footer from "./components/commons/Footer";
import Navbar from "./components/commons/Navbar";
import "./globals.css";

export const metadata = {
  title: "Hyper Nexel Brand",
  description: "Next.js + Tailwind setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Manrope font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
