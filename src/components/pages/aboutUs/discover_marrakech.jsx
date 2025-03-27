import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import discover_marrakech from "@/app/data/discover_marrakech";



gsap.registerPlugin(ScrollTrigger);

export default function Restaurant() {
    const imageRefs = useRef([]);
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps', dragFree: true },
        [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })])

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
        <div className="py-20  bg-primary bg-contain  bg-top bg-[url(/img/bg-yellow.svg)] ">
            <h2 className="text-4xl md:text-7xl text-center font-boska font-semibold mb-4 text-white">Discover Marrakech & Beyond</h2>
            <p className=" text-center mb-10 text-white ">Caravan Serai offers easy access to Marrakech’s top attractions, including:</p>

            <div className="lg:columns-3 columns-1 container space-y-5 p-5 bg-cover">
                {discover_marrakech.map((ele, index) => (
                    <div key={index} ref={el => imageRefs.current[index] = el}  className="relative border-4 border-white rounded-2xl">
                        <h2 className=" absolute inset-0 z-10 flex items-center justify-center text-center font-extrabold text-white text-2xl">{ele.title}</h2>
                        <div className=" absolute inset-0 bg-black z-0 opacity-30 rounded-2xl "></div>
                        <Image className="rounded-2xl   object-cover object-bottom "  src={`/img/aboutUs/discover_marrakech/${ele.url}`} width={1920} height={1080} alt="Caravan Serai" title="Caravan Serai" />
                    </div>
                ))}
            </div>
            
        </div>
    );
}