import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pragathi Co-operative Society",
  description:
    "Serving communities across Mangalore with trusted cooperative banking services.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={raleway.className}>
      <Providers>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
