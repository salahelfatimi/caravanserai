import Book from "@/components/pages/book";
import { Clock } from "lucide-react";
import Image from "next/image";

export async function generateMetadata() {
    return {
      title: "Hands & Feet Care at Caravan Serai Marrakech",
      alternates: {
        canonical: "/spa_and_wellness/hands_and_feet",
      },
      openGraph: {
        title: "Caravan Serai",
        description: "Pamper your hands and feet with luxurious treatments at Caravan Serai Marrakech. Our professional care will leave your skin soft, smooth, and revitalized. Book your appointment today for the ultimate relaxation experience!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/spa_and_wellness/hands_and_feet`,
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

export default function Hands_and_feet(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/spa_and_wellness/hands_and_feet/hands_and_feet.jpg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Hands & Feet Care – Mains et Pieds</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Pamper Your Hands & Feet with Luxurious Moroccan Care</p>
                </div>
            </div>   
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai Spa, we believe that self-care starts from head to toe. Our specialized manicure, pedicure, and henna treatments ensure that your hands and feet are nourished, revitalized, and looking their best. Whether you need a quick refresh or an indulgent beauty treatment, we’ve got you covered.</p>
            </div> 
            <div className=" flex lg:flex-row-reverse  flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <video autoPlay playsInline loop muted className="w-full h-full object-cover " about="Caravan Serai" title="Caravan Serai" > 
                        <source src="/vid/spa_and_wellness/hands_and_feet/hands_and_feet.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Henna Tattoo – 150 DHS</h2>
                    <p className="text-sm ">Experience the beauty of traditional Moroccan henna art, crafted by skilled artists.</p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" font-bold text-xl text-primary"> What’s Included ?</h3>
                        <ul className=" list-disc list-inside text-sm space-y-2 ">
                            <li><strong>Natural Henna</strong> – Made from organic ingredients</li>
                            <li><strong>Long-Lasting Designs</strong> – Stays up to two weeks</li>
                            <li><strong>Authentic Moroccan Patterns</strong> – Custom designs available</li>
                
                        </ul>
                        <span className=" font-bold bg-white border-primary border-4 w-fit p-2 text-primary rounded-full flex items-center  gap-2"><Clock/> 30-45 minutes</span>
                    </div>
                </div>
            </div> 
            <div className=" flex lg:flex-row  flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 ">
                    <Image src={'/img/spa_and_wellness/hands_and_feet/hands_and_feet_1.jpg'} width={1920} height={1080} className="  h-full w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Manicure Express – 100 DHS</h2>
                    <p className="text-sm ">A fast and effective manicure designed for busy individuals who still want elegant, well-groomed hands.
                    </p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" font-bold text-xl text-primary"> What’s Included?</h3>
                        <ul className=" list-disc list-inside text-sm space-y-2 ">
                            <li><strong>Nail Shaping</strong> – Trimmed and filed for a perfect shape</li>
                            <li><strong>Cuticle Care</strong> – Hydration and softening for a neat finish</li>
                            <li><strong>Buff & Polish</strong> – A natural shine or your choice of color</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Ultimate Hands & Feet Experience</h2>
                <p className=" text-center">Visit Caravan Serai for the Best Hands & Feet Treatments in Marrakech!</p>
                <Book/>      
            </div>  
            <div className=" flex lg:flex-row-reverse  flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 ">
                    <Image src={'/img/spa_and_wellness/hands_and_feet/hands_and_feet_2.jpg'} width={1920} height={1080} className="  h-full w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Pedicure Express – 150 DHS</h2>
                    <p className="text-sm ">Treat your feet to a refreshing and hydrating pedicure that leaves them soft and beautiful.</p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" font-bold text-xl text-primary"> What’s Included ?</h3>
                        <ul className=" list-disc list-inside text-sm space-y-2 ">
                            <li><strong>Exfoliation</strong> – Removes dry skin & calluses</li>
                            <li><strong>Nail Grooming</strong> – Shaped and buffed for a polished look</li>
                            <li><strong>Deep Moisturizing</strong> – Hydrates and soothes tired feet</li>
                        </ul>
                    </div>
                </div>
            </div>   
            
        </div>
    )
}