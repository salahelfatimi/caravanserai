import Book from "@/components/pages/book";
import Image from "next/image";

export async function generateMetadata() {
    return {
      title: "Body Care at Caravan Serai Marrakech",
      alternates: {
        canonical: "/spa_and_wellness/body_care",
      },
      openGraph: {
        title: "Caravan Serai",
        description: "Rejuvenate your body and skin with luxurious body care treatments at Caravan Serai Marrakech. Indulge in nourishing treatments designed to leave you feeling refreshed and glowing. Book your session today!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/spa_and_wellness/body_care`,
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

export default function Body_care(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/spa_and_wellness/body_care/body_care.jpg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white"> Body Care – Caravan Serai's Paradise</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Indulge in a complete body care ritual at Caravan Serai Spa, combining traditional Moroccan techniques with modern relaxation methods. This all-in-one treatment is designed to detoxify, nourish, and refresh your body while offering a moment of pure well-being.</p>
                </div>
            </div>    
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2">
                    <Image src={'/img/spa_and_wellness/body_care/body_care_1.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Body Care – Caravan Serai's Paradise (500 DHS)</h2>
                    <p className="text-sm ">Revitalize with our Body Care package: a purifying Hammam, soothing 30-minute massage, and express manicure or pedicure. Enjoy a complimentary beverage and leave feeling refreshed at Caravan Serai Spa.</p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" font-bold text-xl text-primary">This treatment includes : </h3>
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li> Hammam au Savon Beldi et Argile (30 min) – A deep-cleansing Moroccan Hammam using black soap and Ghassoul clay to purify and soften the skin.</li>
                            <li>Massage Relaxant (30 min) – A soothing relaxing massage designed to relieve tension and improve circulation.</li>
                            <li>Manicure ou Pédicure Express – A quick yet effective nail treatment to keep your hands or feet looking perfect.</li>
                            <li>Boisson Chaude/Froide au Choix – Enjoy a refreshing or warm beverage of your choice for a complete relaxation experience.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Ultimate Body Care Experience</h2>
                <p className=" text-center">Indulge in the ultimate relaxation at Caravan Serai. Whether you're seeking a solo escape, a couple’s retreat, or a group experience, we promise a moment of pure bliss.</p>
                <Book/>
            </div>      
        </div>
    )
}