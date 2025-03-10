'use client'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { Montserrat_Alternates } from 'next/font/google'
const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Customize based on your design
    display: 'swap',
  })

export default function Activitte() {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true
    }, [AutoScroll({ playOnInit: true, speed:1 , stopOnInteraction:false, stopOnMouseEnter: false , stopOnFocusIn : false})])
    
    const activite = [
        {
            image: "/img/activite/art.png",
            title: "🎨 Art Exhibitions",
            description: "Immerse yourself in Marrakech’s vibrant art scene with stunning exhibitions featuring local and international artists."
        },
        {
            image: "/img/activite/bicycle.png",
            title: "🚴 Bicycle Rentals",
            description: "Pedal your way through Marrakech’s hidden gems, from lively souks to breathtaking desert landscapes."
        },
        {
            image: "/img/activite/billard.png",
            title: "🎱 Billiards & Game Room",
            description: "Relax and challenge your friends to a game of billiards in our cozy lounge with Moroccan-style decor."
        },
        {
            image: "/img/activite/hiking.png",
            title: "⛰️ Hiking & Cycling",
            description: "Venture into the stunning Moroccan countryside with guided hikes and thrilling cycling trails."
        },
        {
            image: "/img/activite/spa.png",
            title: "🛀 Spa & Wellness",
            description: "Indulge in rejuvenating treatments, traditional hammams, and relaxing massages using Moroccan argan oil."
        },
        {
            image: "/img/activite/windsurfing.png",
            title: "🌊 Windsurfing & Water Sports",
            description: "Experience the thrill of windsurfing and other water sports just a short trip away from the hotel."
        },
        {
            image: "/img/activite/yoga.png",
            title: "🧘 Yoga Sessions",
            description: "Find your inner peace with guided yoga sessions in a tranquil setting, surrounded by nature."
        }
    ];
    

    return (
        <div className="relative h-screen bg-primary flex flex-col lg:flex-row-reverse gap-10 lg:gap-0  items-center">
            {/* Left side with image slider */}
            <div className="lg:w-1/2 h-[30rem] md:h-full overflow-hidden bg-white select-none cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex h-full w-full transition-transform duration-700 ease-linear ">
                    {activite.map((ele, index) => (
                        <div key={index} className="relative flex-none w-full h-full">
                            <Image width={1920} height={1080} quality={50} src={ele.image} alt={ele.title} title={ele.title} className="w-full h-full object-cover "/>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-60  p-6">
                                <h3 className="text-2xl lg:text-4xl font-bold text-center font-boska">{ele.title}</h3>
                                <p className={`text-lg    mt-2 text-center ${montserratAlternates.className}`}>{ele.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Right side with text */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center text-white container">
                <h2 className=" text-5xl text-center font-boska font-medium mb-10">
                    Adventures, Culture & Pure Fun
                </h2>
                <p className={` ${montserratAlternates.className} text-base lg:text-lg text-center font-boska mb-4`}>
                    From sunrise bike rides through palm groves to sunset yoga on the terrace, Caravan Serai turns every moment into an adventure. Explore local art, dive into Moroccan culture, or challenge your friends to a game of billiards — because at Caravan Serai, every day is a new story waiting to be written.
                </p>
                <button className="bg-white hover:bg-primary border-2 border-white hover:text-white duration-700 text-primary text-2xl font-boska px-8 py-2">
                    Book Now
                </button>
            </div>
        </div>

    )
}
