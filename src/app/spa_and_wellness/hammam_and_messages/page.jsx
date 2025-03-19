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
               <p className=" container text-center text-white font-medium text-xs lg:text-base">Experience the Ultimate Moroccan Spa Ritual at Caravan Serai, where centuries-old traditions meet modern luxury. Our Hammam and massage treatments offer a deeply purifying, rejuvenating, and stress-relieving experience designed to restore your mind and body.</p>
            </div>
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2">
                    <Image src={'/img/spa/spa_2.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Royal Hammam (45 min) – 300 DHS</h2>
                    <p className="text-sm ">Indulge in the ultimate Moroccan bath experience, designed to detoxify, soften, and refresh your skin.</p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" font-bold text-xl text-primary">This treatment includes : </h3>
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li><strong>Deep cleansing with traditional Moroccan black soap</strong> infused with eucalyptus.</li>
                            <li><strong>Exfoliation (gommage) using a kessa glove</strong> to remove dead skin and improve circulation.</li>
                            <li><strong>A soothing body wrap with Ghassoul clay</strong>, rich in minerals that purify and hydrate your skin.</li>
                            <li><strong>Aromatic mist and hydration</strong> for a soft and radiant glow.</li>
                        </ul>
                        <p className=" text-sm ">Perfect for <strong>detoxifying the skin</strong> and feeling <strong>completely refreshed</strong> .</p>
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
                <div className=" space-y-3">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">- Toning Massage (40 min) – 300 DHS</h2>
                    <p className="text-sm ">A dynamic and energizing full-body massage designed to stimulate circulation, relieve tension, and invigorate the muscles. Using a combination of deep tissue and stretching techniques, this massage helps reduce fatigue, enhance flexibility, and improve overall well-being. Ideal after a long day of travel or exploring Marrakech!</p>
                </div>
                <div className=" space-y-3">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">- Relaxing Massage (40 min) – 300 DHS</h2>
                    <p className="text-sm ">Unwind with our soothing relaxation massage, designed to melt away stress and tension. This gentle, full-body massage uses slow, flowing movements with nourishing oils to promote deep relaxation and tranquility. Experience the ultimate escape from daily stress and emerge feeling renewed and refreshed.</p>
                </div>
                    
                </div>
            </div>
          
        </div>
    )
}