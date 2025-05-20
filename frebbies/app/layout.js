import { Rubik } from "next/font/google";
import "./styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Lasles VPN"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
