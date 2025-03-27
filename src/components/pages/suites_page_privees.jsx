'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import suite_privee from '../../app/data/suite_privee';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Suites_page_privees() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true},
        [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false })]);

    return (
        <div className="flex flex-col gap-6 py-20 bg-primary bg-contain lg:bg-[url(/img/bg.svg)]">
            <h2 className="text-6xl md:text-7xl text-center font-boska font-medium text-white capitalize">private pool suites </h2>
            <p className={`container text-center text-white`}>Step into a world of luxury and comfort with our **Majorelle and Beldi** King Suites with private pools. Enjoy a refined atmosphere, premium amenities, and a peaceful retreat. Scroll through the images to explore each space and find the perfect accommodation for your stay.</p>
            <div className="overflow-hidden relative select-none cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex transition-transform ease-out duration-700">
                    {suite_privee.map((suite, index) => (
                        <div key={index} className=" p-4">
                            <div className="rounded-2xl border-4  border-white overflow-hidden shadow-lg bg-white " >
                                <div className="relative w-[24rem] lg:w-[57rem]">
                                    <SuiteCarousel images={suite.images} title={'caravanserai marrakech'} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className=' w-full  flex items-center justify-center'>
                <button className={` bg-white rounded-2xl hover:bg-primary border-2 w-fit border-white hover:text-white duration-700 text-primary text-xl font-medium  px-8 py-2`}>
                    See All Suites piscines prive
                </button>
            </div> */}
        </div>
    );
}

function SuiteCarousel({ images, title }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1, delay: 3000 })
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <div key={index} className="flex-[0_0_100%] relative h-[20rem] lg:h-[30rem] ">
                            <Image src={image} alt={`${title}`} title={`${title}`} width={1000} quality={50} height={1000} className="object-bottom  object-cover h-full w-full" />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={scrollPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <ChevronLeft />
            </button>
            <button onClick={scrollNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <ChevronRight />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div key={index} className={`w-3 h-3 rounded-full transition-all duration-500 ${selectedIndex === index ? 'bg-white' : 'bg-gray-400'}`} />
                ))}
            </div>
        </div>
    );
}