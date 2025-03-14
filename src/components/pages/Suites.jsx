'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import suites from '../data/suites';

export default function Suites() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps', dragFree: true },
    [AutoScroll({ playOnInit: true, speed:1 , stopOnInteraction:false, stopOnMouseEnter: false , stopOnFocusIn : false})])
    return (
        <div className="flex flex-col gap-6 py-20 bg-white ">
            <h2 className="text-6xl md:text-7xl text-center font-boska font-medium text-primary">Suites & Rooms</h2>
            <p className={`container text-center`}>Step into a world of luxury and comfort with our elegant suites and rooms. Enjoy a refined atmosphere, premium amenities, and a peaceful retreat. Scroll through the images to explore each space and find the perfect accommodation for your stay.</p>
            <div className="overflow-hidden relative select-none cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex transition-transform ease-out duration-700">
                    {suites.map((suite,index) => (
                        <div key={index} className="min-w-full lg:min-w-[30%] p-4">
                            <div className="rounded-2xl border-4 border-primary overflow-hidden shadow-lg bg-white">
                                <div className="relative">
                                    <SuiteCarousel images={suite.images} title={suite.title} />
                                </div>
                                {/* <h3 className={`${montserratAlternates.className}   font-medium text-xl font-boska bg-primary py-3 text-white flex items-center justify-center`}>{suite.title}</h3> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' w-full  flex items-center justify-center'>
                <button className={` bg-primary rounded-2xl hover:bg-white border-2 w-fit border-primary hover:text-primary duration-700 text-white text-xl font-medium  px-8 py-2`}>
                    See All Suites 
                </button>
            </div>
          
        </div>
    );
}

function SuiteCarousel({ images, title }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ stopOnInteraction: false, speed: 1, delay: 3000 }) 
    ]);

    return (
        <div className=" overflow-hidden pointer-events-none" ref={emblaRef}>
            <div className=" flex">
                {images.map((image, index) => (
                    <div key={index} className=" flex-[0_0_100%] min-w-0 relative h-72">
                       <Image src={image} alt={`${title}`} title={`${title}`} width={1000} quality={50} height={1000} className="object-bottom object-cover  h-full w-full " />
                    </div>
                ))}
            </div>
        </div>
    );
}