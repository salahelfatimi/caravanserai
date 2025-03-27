import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
    return {
      title: "Professional Meeting & Event Space",
      alternates: {
        canonical: "/events/seminars",
      },
      openGraph: {
        title: "Caravan Serai",
        description: "Host your next seminar or corporate event at Caravan Serai Marrakech. Our luxurious venue offers a perfect setting for seminars, conferences, and business meetings. Book your event space today!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/seminars`,
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

export default function Seminars(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/events/seminar/seminar.jpg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Seminars at Caravan Serai</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Host Your Next Seminar in a Stylish and Productive Setting</p>
                </div>
            </div>
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai, we provide the ideal environment for hosting seminars, workshops, and business conferences. Our venue combines modern facilities with traditional Moroccan charm, ensuring that your event is both productive and inspiring.</p>
            </div>
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <Image src={'/img/events/weddings_and_celebrations/weddings_and_celebrations_6.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className="  lg:p-10 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Why Choose Caravan Serai for Your Seminar?</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li> <strong>Professional Environment</strong> – Our venue is equipped with modern amenities to support all your seminar needs, from high-quality audio-visual equipment to comfortable seating arrangements.</li>
                            <li><strong>Inspiring Atmosphere</strong> – Located in the heart of Marrakech, our Moroccan-inspired setting will provide your attendees with a unique and refreshing environment.</li>
                            <li><strong>Customizable Spaces</strong> – Whether you need a small intimate setting or a larger space for a bigger seminar, we offer flexible options to suit your event size and style.</li>
                            <li><strong>Dedicated Event Team</strong> – Our experienced team will be there every step of the way, assisting with planning, setup, and ensuring everything runs smoothly.</li>
                            <li><strong>Catering Options</strong> – Keep your attendees refreshed with our gourmet catering services, offering a variety of options for coffee breaks, lunch, and more.</li>
                        </ul>
                    </div>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Services We Offer</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li><strong>Seminar and Workshop Hosting</strong> – Perfect for corporate training, educational seminars, or specialized workshops.</li>
                            <li><strong>Business Conferences</strong> – A professional space for large conferences and business networking events.</li>
                            <li><strong>Networking Events</strong> – A stylish setting for networking opportunities, fostering collaboration and growth.</li>
                            <li><strong>Team-building Events</strong> – Organize productive and engaging team-building activities to strengthen bonds within your team.</li>
                            <li><strong>Product Launches</strong> – Showcase your brand and products in a unique and memorable environment.</li>
                        </ul>
                    </div>
                    <Link href="/contact" className=" text-center hover:bg-white hover:text-primary border-primary border duration-700 bg-primary w-full p-2 px-3 text-2xl font-medium text-white rounded-full">Book Your Seminar</Link>
                </div>
                <div className="lg:w-1/2 h-screen">
                    <Image src={'/img/events/weddings_and_celebrations/weddings_and_celebrations_5.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
            </div>
        </div>
    )
}