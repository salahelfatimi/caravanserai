'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import suites from '../../app/data/suites';

export default function Suites_Page() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps', dragFree: true },
        [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false })])
    return (
        <div className="flex flex-col gap-6 py-10 bg-contain lg:bg-[url(/img/bg-yellow.svg)]">
            <h2 className="text-6xl md:text-7xl text-center font-boska font-medium text-primary">Suites & Rooms</h2>
            <p className={`container text-center text-black`}>Step into a world of luxury and comfort with our elegant suites and rooms. Enjoy a refined atmosphere, premium amenities, and a peaceful retreat. Scroll through the images to explore each space and find the perfect accommodation for your stay.</p>
            <div className="overflow-hidden relative select-none cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex transition-transform ease-out duration-700">
                    {suites.map((suite, index) => (
                        <div key={index} className="  pl-10 ">
                            <div className=" overflow-hidden ">
                                <div className="flex gap-10">
                                    {suite.images.map((image, index) => (
                                        <div key={index} >
                                            <Image src={image} alt={`caravan serai`} title={`caravan serai`} width={1000} quality={50} height={1000} className="min-w-[40rem] max-w-[40rem] object-bottom object-cover h-full w-full border-4 shadow-2xl border-primary rounded-2xl" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    );
}

