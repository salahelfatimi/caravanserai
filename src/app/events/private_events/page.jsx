import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
    return {
      title: "Private Events at Caravan Serai Marrakech",
      alternates: {
        canonical: "/events/private_events",
      },
      openGraph: {
        title: "Caravan Serai",
        description: "Host your private event at Caravan Serai Marrakech. Whether it's a birthday, anniversary, or intimate gathering, our luxurious venue offers the perfect setting for unforgettable moments. Book your private event today!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/private_events`,
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
                <Image src={'/img/events/private_events/private_events.jpg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Private Events at Caravan Serai</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">A Unique Venue for Your Special Moments</p>
                </div>
            </div>
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai, we understand that each event is unique and deserves to be celebrated in a setting that is both elegant and memorable. Whether you’re hosting an intimate gathering or a grand celebration, our venue provides the perfect atmosphere for any occasion.</p>
            </div>
            <div className="  p-4 lg:p-10 flex flex-col gap-4  bg-top bg-[url(/img/bg-yellow.svg)] items-center justify-center ">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Why Host Your Private Event at Caravan Serai?</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li><strong>Elegant Moroccan Setting</strong> – Celebrate your special occasion in the heart of Marrakech, surrounded by stunning Moroccan architecture, lush gardens, and tranquil courtyards.</li>
                            <li><strong>Tailored Event Planning</strong> – Our dedicated event planning team will work closely with you to personalize every detail, ensuring a flawless experience.</li>
                            <li><strong>Gourmet Dining</strong> – Enjoy a menu crafted to suit your event, featuring both traditional Moroccan flavors and international cuisine.</li>
                            <li><strong>Exclusive Use of Venue</strong> – Whether it’s a corporate event, a family celebration, or a private gathering, we offer exclusive access to our beautiful space.</li>
                            <li><strong>Professional Service</strong> – From decoration to entertainment, our experienced staff will ensure every aspect of your event is handled with care and precision.</li>
                        </ul>
                    </div>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Services We Offer</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li><strong>Birthday Parties</strong> – Celebrate your milestones with an unforgettable event.</li>
                            <li><strong>Corporate Events</strong> – Host meetings, conferences, or team-building activities in a sophisticated environment.</li>
                            <li><strong>Private Dinners</strong> – Enjoy a private dining experience with bespoke menus and personalized service.</li>
                            <li><strong>Themed Celebrations</strong> – From intimate dinners to large-scale gatherings, we can help bring your vision to life.</li>
                        </ul>
                    </div>
                    <Link href="/contact" className=" text-center hover:bg-white hover:text-primary border-primary border duration-700 bg-primary w-fit p-2 px-6 text-2xl font-medium text-white rounded-full">Book Your Private Event</Link>
            </div>
            <div className="  flex lg:flex-row-reverse gap-10 py-10  flex-col items-center justify-center ">
                <div className=" h-screen w-full">
                    <video autoPlay playsInline loop muted className="w-full h-full  object-cover " about="Caravan Serai" title="Caravan Serai" > 
                        <source src="/vid/events/private_events/private_events_1.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=" h-screen w-full">
                    <video autoPlay playsInline loop muted className="w-full h-full  object-cover " about="Caravan Serai" title="Caravan Serai" > 
                        <source src="/vid/events/private_events/private_events_3.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=" h-screen w-full">
                    <video autoPlay playsInline loop muted className="w-full h-full  object-cover " about="Caravan Serai" title="Caravan Serai" > 
                        <source src="/vid/events/private_events/private_events.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=" h-screen w-full">
                    <video autoPlay playsInline loop muted className="w-full h-full  object-cover " about="Caravan Serai" title="Caravan Serai" > 
                        <source src="/vid/events/private_events/private_events_2.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}