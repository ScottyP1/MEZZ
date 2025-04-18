import "./globals.css";

import ParticleBackground from "@/components/ParticleBackground";
import Nav from "@/components/Nav";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mezz",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div>
          <Nav2 />
          <ParticleBackground />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
