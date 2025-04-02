import Book from "@/components/pages/book";
import Menu from "@/components/pages/menu";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

export async function generateMetadata() {
    return {
      title: "Caravan Serai | Exceptional Dining Experience with Multiple Restaurants",
      description: "Explore a variety of exceptional dining experiences at Caravan Serai in Marrakech. From authentic Moroccan cuisine to international flavors, our restaurants offer something for every taste. Browse our menu options today!",
      alternates: {
        canonical: "/restaurants/menu",
      },
      openGraph: {
        title: "Caravan Serai | Exceptional Dining Experience with Multiple Restaurants",
        description: "Explore a variety of exceptional dining experiences at Caravan Serai in Marrakech. From authentic Moroccan cuisine to international flavors, our restaurants offer something for every taste. Browse our menu options today!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/restaurants/franch`,
        robots: {
          index: true,
          follow: true,
        },
        siteName: "Caravan Serai",
        images: [
          {
            url: `/opengraph-image.jpg`,
            secureUrl: `/opengraph-image.jpg`,
            width: 1200,
            height: 675,
            alt: "Caravan Serai",
          }
        ],
        type: "website",
  
      },
    }
}

export default function Page() {
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/restaurant/restaurant_3.jpg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Carte / Menu – Caravan Serai Restaurant</h1>
                </div>
            </div>
            <Menu/>
            <div className="p-6 shadow-lg rounded-xl bg-tertiary text-white container w-fit animate-bounce ">
              <h2 className="text-2xl font-medium flex items-center justify-center gap-2 text-yellow-500"><AlertCircle size={40}/> Other dishes are available on request . </h2>
            </div>
            <div className=" flex flex-col   gap-10 py-10 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
                <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
                <Book/>
            </div> 
        </div>
        
    )
}