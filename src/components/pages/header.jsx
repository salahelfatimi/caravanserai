'use client'
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    useEffect(() => {
        gsap.to(".header-image, .header-overlay", {
            scale: 1.5,
            scrollTrigger: {
                trigger: ".header-image",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);
    return (
        <div className=" overflow-hidden bg-white ">
            <div className="relative">
                <div className="header-overlay absolute top-0 left-0 w-full h-full bg-black z-10 opacity-60"></div>
                <Image src="/img/header.png" loading="eager" alt="Caravan Serai" title="Caravan Serai" width={1920} height={1080} className="   shadow-2xl header-image object-cover h-screen w-screen object-center" />
                <div className="z-20 flex flex-col w-full md:w-fit items-center  gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <Image loading="eager" src="/img/Logo_single_white.png" height={500} width={500} alt="Caravan Serai" title="Caravan Serai" className=" w-44" />
                    <h1 className="font-boska font-medium text-4xl lg:text-7xl">
                        Timeless tranquility and historic charm at Caravan Serai
                    </h1>
                    <div>
                        <Link href={'/book_at_caravan_serai'} className={`bg-primary hover:bg-white hover:text-primary duration-700  text-white text-2xl font-boska px-8 py-4 mt-4`}>
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}