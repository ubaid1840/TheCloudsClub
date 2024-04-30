
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Providers, } from './providers'
import NextTopLoader from 'nextjs-toploader';
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
        <NextTopLoader
         color="#2299DD"
         initialPosition={0.08}
         crawlSpeed={200}
         height={3}
         crawl={true}
         showSpinner={true}
         easing="ease"
         speed={200}
         shadow="0 0 10px #2299DD,0 0 5px #2299DD"
         template='<div class="bar" role="bar"><div class="peg"></div></div> 
         <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
         zIndex={1600}
         showAtBottom={false}/>
        <Providers>
          {children}
        </Providers>

      </body>
    </html >
  );
}
