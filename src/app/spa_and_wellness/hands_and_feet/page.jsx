import Book from "@/components/pages/book";
import Image from "next/image";

export default function Hands_and_feet(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/spa_and_wellness/hands_and_feet/hands_and_feet.png'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Luxurious Hands & Feet Treatments at Caravan Serai</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">EPamper Your Hands & Feet with the Ultimate Moroccan Experience</p>
                </div>
            </div>   
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai, we offer luxurious hand and foot treatments designed to nourish, relax, and revitalize. Using natural Moroccan ingredients like Argan oil, Shea butter, and Black Soap, our expert therapists ensure your hands and feet receive the care they deserve.</p>
            </div> 
            <div className=" flex lg:flex-row  flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 ">
                    <Image src={'/img/spa_and_wellness/hands_and_feet/hands_and_feet_2.jpg'} width={1920} height={1080} className="  h-full w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Nourishing Hand Care – Hydration & Softness</h2>
                    <p className="text-sm ">Your hands go through a lot every day, and they deserve special attention. Our hand care treatments focus on deep hydration, gentle exfoliation, and nourishment, leaving your skin soft and rejuvenated.</p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" font-bold text-xl text-primary"> What’s Included?</h3>
                        <ul className=" list-disc list-inside text-sm space-y-2 ">
                            <li>Deep cleansing with Moroccan Black Soap</li>
                            <li>Exfoliation to remove dead skin cells</li>
                            <li>Hydrating massage with Argan oil</li>
                            <li>Nail shaping and cuticle care (optional)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Ultimate Hands & Feet Experience</h2>
                <p className=" text-center">Visit Caravan Serai for the Best Hands & Feet Treatments in Marrakech!</p>
                <Book/>
                        
            </div>     
        </div>
    )
}