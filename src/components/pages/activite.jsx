'use client'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { Montserrat_Alternates } from 'next/font/google'
import activite from '../data/activite'
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
    
   
    return (
        <div className="relative pb-20 lg:pb-0 bg-primary flex flex-col lg:flex-row-reverse gap-10 lg:gap-0 w-full items-center">
            {/* Left side with image slider */}
            <div className="lg:w-1/2 w-full overflow-hidden bg-white select-none cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex  w-full transition-transform duration-700 ease-linear ">
                    {activite.map((ele, index) => (
                        <div key={index} className="relative flex-none w-full ">
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
            <div className="lg:w-1/2 flex flex-col  items-center justify-center text-white container">
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
