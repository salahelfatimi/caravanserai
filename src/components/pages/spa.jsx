'use client'
import { useRef, useEffect } from "react";
import Image from "next/image";
import spa from "../../app/data/spa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function Restaurant() {
    const imageRefs = useRef([]);
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps', dragFree: true },
        [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })])

    useEffect(() => {
        imageRefs.current.forEach((image, index) => {
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
        <div className="py-20 bg-black bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">

            <h2 className="text-5xl md:text-7xl text-center font-boska font-semibold mb-10 text-white">Spa & Well-being at Caravan Serai: A Journey of Relaxation</h2>
            <div className="lg:columns-3 columns-2 container space-y-5 p-5 bg-cover lg:block hidden">
                {spa.map((ele, index) => (
                    <div key={index} ref={el => imageRefs.current[index] = el}>
                        <Image className="rounded-2xl border-4 border-primary  object-cover object-bottom" src={`${ele}`} width={1920} height={1080} alt="Caravan Serai" title="Caravan Serai" />
                    </div>
                ))}
            </div>
            <div className="w-fit overflow-hidden   select-none cursor-grab active:cursor-grabbing block lg:hidden" ref={emblaRef}>
                <div className="flex  w-fit transition-transform duration-700 ease-linear ">
                    {spa.map((ele, index) => (
                        <div key={index} className="relative flex-none w-fit pl-10 ">
                            <Image width={1920} height={1080} quality={50} src={`${ele}`} alt="Caravan Serai" title="Caravan Serai" className="rounded-2xl border-4 border-primary w-full h-[20rem] object-cover " />
                        </div>
                    ))}
                </div>
            </div>
            <p className={` text-xs md:text-lg container text-center pt-10 text-white`}>
                Reconnect with your senses in our wellness sanctuary, where tradition and relaxation blend harmoniously. Experience the Hammam & Steam Bath, a time-honored Moroccan ritual that detoxifies, purifies, and rejuvenates your skin with warm steam and natural black soap. Indulge in our Body & Beauty Treatments, offering soothing massages, invigorating body scrubs, and rejuvenating facials, all enriched with locally sourced argan oil and Moroccan beauty secrets. For a complete wellness experience, our Spa & Wellness Packages provide tailor-made combinations of massages, scrubs, and holistic rituals designed to restore balance and serenity.
            </p>
        </div>
    );
}