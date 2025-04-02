'use client'
import { useEffect, useRef } from "react";
import services from "../../app/data/services"; // Import the service list
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceList = () => {
    const serviceRefs = useRef([]);

    useEffect(() => {
        serviceRefs.current.forEach((image, index) => {
            gsap.fromTo(image,
                { scale: 0.8, opacity: 0 },

                {
                    scale: 1, opacity: 1, duration: 1, delay: index * 0.05, ease: "power3.out",
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
        <div className="bg-primary bg-contain lg:bg-[url(/img/bg.svg)]">
            <div className="flex flex-col gap-6 py-20 container">
                <h2 className="text-3xl lg:text-6xl text-center font-boska font-medium text-white">
                    Caravan Serai Services for an Unforgettable Stay
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                    {services.map(({ title, description, icon: Icon }, index) => (
                        <div key={index} ref={(el) => (serviceRefs.current[index] = el)} className="flex items-center space-x-4 p-4 border rounded-lg bg-white duration-700 cursor-pointer hover:shadow-lg transition-shadow" >
                            <Icon className="w-8 h-8 text-primary" />
                            <div>
                                <h3 className={` text-xs lg:text-lg font-medium`}>{title}</h3>
                                <p className={` text-xs text-gray-600`}>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceList;