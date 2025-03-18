import Book from "@/components/pages/book";
import { CheckCircle, Flower, Leaf, Users } from "lucide-react";
import Image from "next/image";

export default function Hammam_and_messages(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/spa/spa_1.jpg'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Hammam & Massages - A Journey to Relaxation at Caravan Serai</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Experience the Art of Moroccan Well-Being                    </p>
                </div>
            </div>
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai, we invite you to immerse yourself in the ancient Moroccan tradition of Hammam & Massages, a ritual designed to cleanse, rejuvenate, and relax both the body and mind. Our spa experience combines authentic techniques with premium natural ingredients, ensuring a deep sense of tranquility and renewal.</p>
            </div>
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2">
                    <Image src={'/img/spa/spa_2.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">The Traditional Hammam Ritual</h2>
                    <p className="text-sm ">Step into our luxurious Hammam, where warm steam opens your pores, detoxifies your skin, and prepares you for an exfoliating ritual like no other.</p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" font-bold text-xl text-primary">What to Expect:</h3>
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li>A steam bath that deeply cleanses and purifies the skin.</li>
                            <li>A traditional <strong>black soap application</strong>, rich in olive oil, to soften the skin.</li>
                            <li>A gentle yet effective <strong>exfoliation (gommage)</strong> using a kessa glove to remove dead skin cells.</li>
                            <li>A soothing <strong>Ghassoul (clay mask)</strong> enriched with minerals to nourish and revitalize your skin.</li>
                            <li>A final <strong>hydration treatment</strong> with luxurious Argan oil for silky-smooth skin.</li>
                        </ul>
                        <p className=" text-sm ">The Hammam is more than just a cleansing ritual; it’s a spiritual journey that leaves you feeling <strong>refreshed, renewed, and re-energized</strong>  .</p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Ultimate Spa Experience</h2>
                <p className=" text-center">Indulge in the ultimate relaxation at Caravan Serai. Whether you're seeking a solo escape, a couple’s retreat, or a group experience, we promise a moment of pure bliss.</p>
                <Book/>
            
           </div>
           <div className=" flex lg:flex-row  flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 ">
                    <Image src={'/img/spa_and_wellness/hammam_and_messages/hammam_and_messages.jpg'} width={1920} height={1080} className="  h-full w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">A Selection of Relaxing & Therapeutic Massages</h2>
                    <p className="text-sm ">After your Hammam session, extend your moment of well-being with one of our expertly performed <strong>massages</strong>.</p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" font-bold text-xl text-primary"> Our Signature Massages : </h3>
                        <ul className=" list-disc list-inside text-sm space-y-2 ">
                            <li><strong>Relaxing Moroccan Massage</strong> – A full-body massage with warm Argan oil to melt away tension.</li>
                            <li><strong>Deep Tissue Massage</strong> – Ideal for relieving muscle tension and improving circulation.</li>
                            <li><strong>Hot Stone Therapy</strong>  – Smooth, heated stones applied to key points on the body for ultimate relaxation.</li>
                            <li><strong>Reflexology</strong> – A foot massage that stimulates pressure points to promote overall wellness.</li>
                            <li><strong>Slimming Massage</strong> – Designed to tone and firm the body while improving circulation.</li>
                        </ul>
                        <p className="text-sm ">Each massage is tailored to your individual needs, ensuring a deeply <strong>soothing and restorative</strong> experience.</p>
                    </div>
                </div>
            </div>
          
        </div>
    )
}