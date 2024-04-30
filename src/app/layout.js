
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Providers, } from './providers'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});


export const metadata = {
  title: "The Clouds Club",
  description: "Bringing Cannabis culture to Germany",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          </Providers>
      </body>
    </html >
  );
}
