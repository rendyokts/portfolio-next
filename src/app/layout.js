import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layouts from "./commons/components/Layouts";
import SpotifyTop from "./commons/components/elements/SpotifyTop";
import TopLoader from "./commons/components/elements/TopLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Reza | Portfolio",
  description: "Personal website, portfolio, roadmap, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={sora.className}>
        <Providers>
          <SpotifyTop />
          <TopLoader />
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
