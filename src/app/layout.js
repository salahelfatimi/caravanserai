import Navbar from "@/components/pages/navbar/navbar";
import "./globals.css";
import Footer from "@/components/pages/footer/footer";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Customize based on your design
    display: 'swap',
});


export const metadata = {
  title: {  template: "Caravan Serai Marrakesh | %s" } ,
  description: "Book your stay at Caravan Serai Marrakesh. Enjoy spa treatments, hammams, fine dining, and elegant accommodations in a serene oasis.",
  keywords: ["Caravan Serai", "Marrakech", "Morocco", "luxury hotel", "boutique hotel", "spa", "hammam", "restaurant", "activities", "suites", "private suites", "book now"],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={` ${montserratAlternates.className}`}>
        <main>
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
