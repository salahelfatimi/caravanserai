import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
    return {
      title: "Weddings & Celebrations At Caravan Serai Marrakech",
      alternates: {
        canonical: "/events/weddings",
      },
      openGraph: {
        title: "Caravan Serai",
        description: "Celebrate your special day at Caravan Serai Marrakech. From weddings to anniversaries, our stunning venue and expert planners will create unforgettable memories. Book your celebration with us today!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/weddings`,
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

export default function Weddings(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/events/weddings_and_celebrations/weddings_and_celebrations_4.jpg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Weddings & Celebrations at Caravan Serai</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Create Unforgettable Memories in a Magical Setting</p>
                </div>
            </div>
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai, we offer the perfect backdrop for your dream wedding or special celebration. Nestled in the heart of Marrakech, our enchanting venue blends Moroccan elegance with modern luxury, creating an unforgettable experience for you and your guests.</p>
            </div>
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <Image src={'/img/events/weddings_and_celebrations/weddings_and_celebrations_2.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Why Choose Caravan Serai?</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li> Exquisite Moroccan Ambiance – Celebrate in a breathtaking riad with stunning architecture, lush gardens, and serene courtyards.</li>
                            <li>Personalized Event Planning – Our dedicated team will assist in planning and coordinating every detail to perfection.</li>
                            <li>Gourmet Dining Experience – Indulge in a curated menu featuring traditional Moroccan and international cuisine.</li>
                            <li>Luxury Accommodation – Offer your guests a relaxing stay in our beautifully designed rooms and suites.</li>
                            <li>Seamless Service – From décor to entertainment, we ensure every aspect of your event runs smoothly.</li>
                        </ul>
                    </div>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Services We Offer</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li>Weddings & Receptions – Say "I do" in a romantic Moroccan setting.</li>
                            <li>Engagement Parties – Celebrate love with an intimate gathering.</li>
                            <li>Anniversaries – Mark your milestones in an elegant atmosphere.</li>
                            <li>Private Events – From birthdays to corporate celebrations, we cater to all occasions.</li>
                        </ul>
                    </div>
                    <Link href="/contact" className=" text-center hover:bg-white hover:text-primary border-primary border duration-700 bg-primary w-full p-2 px-3 text-2xl font-medium text-white rounded-full">Book Your Celebration</Link>
                </div>
            </div>
        </div>
    )
}