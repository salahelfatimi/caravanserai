import { useEffect, useRef } from "react";
import Image from "next/image";
import caravanseraiImages from "../data/instagram";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Instagram() {
    const imageRefs = useRef([]); 

      useEffect(() => {
        imageRefs.current.forEach((image,index) => {
            gsap.fromTo(image,
                { scale: 0.8, opacity: 0},
                
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
        <div className="py-20 ">
            <div className="gap-10 flex flex-col items-center ">
                <h2 className="font-boska font-bold text-primary text-3xl lg:text-6xl leading-tight text-center">
                    Escape to Paradise at Caravan Serai Hotel & Spa
                </h2>
                <div className="columns-2 lg:columns-4 container space-y-4">
                    <div className="min-h-52 flex flex-col gap-4 bg-primary p-4 items-center justify-center">
                        <h2 className="font-boska  lg:text-4xl font-medium text-white">Inspiré par vous</h2>
                        <p className=" lg:text-2xl font-boska text-white">@caravanserai_marrakech</p>
                        <p className=" lg:text-2xl font-boska text-white">#CaravanSeraiMarrakech</p>
                        <p className=" lg:text-2xl font-boska text-white">#TravelInStyle</p>
                        <p className=" lg:text-2xl font-boska text-white">#LuxurySpa</p>
                        <p className=" lg:text-2xl font-boska text-white">#MoroccanEscape</p>
                    </div>
                    {caravanseraiImages.map((ele, index) => (
                        <div key={index} ref={(el) => (imageRefs.current[index] = el)} >
                            <Image quality={50} width={500} height={500} src={ele} alt="Caravan Serai" title="Caravan Serai" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
}