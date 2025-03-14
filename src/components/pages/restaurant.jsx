import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import restaurant from "../data/restaurant";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";



gsap.registerPlugin(ScrollTrigger);

export default function Restaurant() {
    const imageRefs = useRef([]);
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps', dragFree: true}, 
    [AutoScroll({ playOnInit: true, speed:1 , stopOnInteraction:false, stopOnMouseEnter: false , stopOnFocusIn : false})])
    
    useEffect(() => {
        imageRefs.current.forEach((image) => {
            gsap.fromTo(image,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%", 
                        toggleActions: "play none none play",
                    }
                }
            );
        });
    }, []);

    return (
        <div className="py-20  ">
            <h2 className="text-4xl md:text-7xl text-center font-boska font-semibold mb-10 text-primary">A Culinary Journey – Taste the Essence of Morocco</h2>
            <div className="lg:columns-3 columns-2 container space-y-5 p-5 bg-cover lg:block hidden">
                {restaurant.map((ele, index) => (
                    <div key={index} ref={el => imageRefs.current[index] = el}>
                       <Image className="rounded-2xl border-4 border-primary  object-cover object-bottom" src={`/img/restaurant/${ele}`} width={1920} height={1080} alt="Caravan Serai" title="Caravan Serai" />
                    </div>
                ))}
            </div>
            <div className="w-fit overflow-hidden bg-white select-none cursor-grab active:cursor-grabbing block lg:hidden" ref={emblaRef}>
                <div className="flex  w-fit transition-transform duration-700 ease-linear ">
                    {restaurant.map((ele, index) => (
                        <div key={index} className="relative flex-none w-fit pl-10 ">
                            <Image width={1920} height={1080} quality={50} src={`/img/restaurant/${ele}`}  className="rounded-2xl border-4 border-primary w-full h-[20rem] object-cover " alt="Caravan Serai" title="Caravan Serai"/>
                           
                        </div>
                    ))}
                </div>
            </div>
              <p className={` text-sm lg:text-lg container text-center pt-10`}>
                Indulge in a sensory feast at Caravan Serai’s restaurant, where authentic Moroccan flavors meet refined culinary artistry. From fragrant tagines to delicate pastries, every dish is crafted with fresh, locally sourced ingredients and a touch of tradition. <br />
                Sip on refreshing mint tea, savor the richness of Moroccan spices, and let each bite transport you to a world of culinary delight. Whether dining under the stars or in our elegant indoor space, every meal is an experience to remember.
              </p>
        </div>
    );
}