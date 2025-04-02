import Navbar from "@/components/pages/navbar/navbar";
import "./globals.css";
import Footer from "@/components/pages/footer/footer";
import { Montserrat_Alternates } from "next/font/google";
import GoogleTranslate from "@/components/tools/googleTranslate";
import { GoogleAnalytics } from '@next/third-parties/google'
import MessageCookies from "@/components/tools/cookies/message";

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
});


export const metadata = {
  title: {  template: "Caravan Serai | %s" } ,
  description: "Book your stay at Caravan Serai marrakech. Enjoy spa treatments, hammams, fine dining, and elegant accommodations in a serene oasis.",
  keywords: ["Caravan Serai", "caravan serai marrakech", "caravan serai", "caravanserai", "caravan+serai+marrakech+morocco", "caravan serai hotel", "caravan saray", "caravan serai marrakech morocco", "hotels in marrakech with pool", "caravansérail", "hotel caravanserai marrakech", "caravansérail maroc","hotel caravan serail"],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={` ${montserratAlternates.className}`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID}/>
        <MessageCookies/>

        <main>
          <Navbar/>
          {children}
          <Footer/>
          <div className=" w-fit h-fit  fixed bottom-10 right-4 z-[100]  ">
            <GoogleTranslate/> 
          </div>
        </main>
      </body>
    </html>
  );
}
