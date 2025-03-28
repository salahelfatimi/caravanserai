'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import suite_privee from '../../app/data/suite_privee';

export default function Suites_page_privees() {
    // Carousel for the first suite
    const [emblaRefLeft] = useEmblaCarousel(
        { loop: true, direction: 'ltr' }, 
        [AutoScroll({ speed: 1, stopOnInteraction: true, stopOnMouseEnter: false, stopOnFocusIn: false })]
    );

    // Carousel for the second suite
    const [emblaRefRight] = useEmblaCarousel(
        { loop: true, direction: 'ltr' }, 
        [AutoScroll({ speed: 1, stopOnInteraction: true, stopOnMouseEnter: false, stopOnFocusIn: false })]
    );

    return (
        <div className="flex flex-col gap-6 py-20 bg-primary bg-contain lg:bg-[url(/img/bg.svg)]">
            <h2 className="text-6xl md:text-7xl text-center font-boska font-medium text-white capitalize">
                private pool suites
            </h2>
            <p className="container text-center text-white">
                Step into a world of luxury and comfort with our <strong>Majorelle and Beldi</strong> King Suites with private pools. Enjoy a refined atmosphere, premium amenities, and a peaceful retreat. Scroll through the images to explore each space and find the perfect accommodation for your stay.
            </p>

            {/* First Carousel - Scrolls Left */}
            <div className="flex flex-col overflow-hidden relative select-none cursor-grab active:cursor-grabbing" ref={emblaRefLeft}>
                <div className="flex transition-transform ease-out duration-700">
                    {suite_privee[0].images.map((suite, index) => (
                        <div key={index} className="p-4 flex">
                            <div className="rounded-2xl border-4 border-white overflow-hidden shadow-lg bg-white">
                                <Image
                                    src={suite}
                                    width={1000}
                                    height={1000}
                                    className="lg:min-w-[40rem] min-w-[20rem] h-[15rem] lg:h-[20rem]  object-cover"
                                    alt={`Suite ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center container'>
                <h2 className=' text-center bg-white p-2 font-bold text-primary text-sm lg:text-xl '>Suite Lit King-Size avec Piscine Privée - Beldi</h2>

            </div>
       
            {/* Second Carousel - Scrolls Right */}
            <div className="overflow-hidden relative select-none cursor-grab active:cursor-grabbing" ref={emblaRefRight}>
                <div className="flex transition-transform ease-out duration-700">
                    {suite_privee[1].images.map((suite, index) => (
                        <div key={index} className="p-4 flex">
                            <div className="rounded-2xl border-4 border-white overflow-hidden shadow-lg bg-white">
                                <Image
                                    src={suite}
                                    width={1000}
                                    height={1000}
                                    className="lg:min-w-[40rem] min-w-[20rem] h-[15rem] lg:h-[20rem] object-cover"
                                    alt={`Suite ${index + 1}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center container'>
                <h2 className=' text-center bg-white p-2 font-bold text-primary text-sm lg:text-xl '>Suite King avec Piscine Privée - Majorelle</h2>
            </div>
        </div>
    );
}

