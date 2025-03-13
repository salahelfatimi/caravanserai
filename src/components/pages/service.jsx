import { useEffect, useRef } from "react";
import { Montserrat_Alternates } from "next/font/google";
import services from "../data/services"; // Import the service list
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['400', '500', '700'], 
    display: 'swap',
});

const ServiceList = () => {
    const serviceRefs = useRef([]);

    useEffect(() => {
        serviceRefs.current.forEach((service, index) => {
            gsap.from(service, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: index * 0.05,
                scrollTrigger: {
                    trigger: service,
                    start: "top 80%", 
                    end: "bottom 20%", 
                    toggleActions: "play none none none",
                },
            });
        });
    }, []);

    return (
        <div className="bg-primary bg-cover bg-[url(/img/bg.svg)]">
            <div className="flex flex-col gap-6 py-20 container">
                <h2 className="text-3xl lg:text-6xl text-center font-boska font-medium text-white">
                    Premium Hotel Services for an Unforgettable Stay
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                    {services.map(({ title, description, icon: Icon }, index) => (
                        <div
                            key={index}
                            ref={(el) => (serviceRefs.current[index] = el)} // Store each service card element in the ref
                            className="flex items-center space-x-4 p-4 border rounded-lg bg-white duration-700 cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <Icon className="w-8 h-8 text-primary" />
                            <div>
                                <h3 className={`${montserratAlternates.className} text-xs lg:text-lg font-medium`}>{title}</h3>
                                <p className={`${montserratAlternates.className} text-xs text-gray-600`}>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceList;