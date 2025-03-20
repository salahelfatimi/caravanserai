import Book from "@/components/pages/book";
import Image from "next/image";

export default function Billiards(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/experiences/billiards/billiards.jpg'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white"> Billiards at Caravan Serai Hotel & Spa </h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Enjoy Billiards in Marrakech – Fun, Relaxation, and Entertainment</p>
                </div>
            </div>    
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai Hotel & Spa, we believe in offering more than just luxurious accommodations and spa services. Our Billiards Room provides a great escape for those looking to unwind, relax, and enjoy a classic game in a comfortable and inviting atmosphere. Whether you're an expert or a beginner, our high-quality billiards table is perfect for all skill levels.</p>
            </div>  
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2">
                    <Image src={'/img/experiences/billiards/billiards_1.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div >
                    <div className="flex flex-col gap-4 p-4 lg:w-1/2">
                        <h3 className=" font-bold text-xl text-primary">Why Choose Our Billiards Room ? </h3>
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li>Unmatched Comfort: Our billiards room is designed with your comfort in mind. Enjoy the game in a space where relaxation and fun come together perfectly.</li>
                            <li>Ideal for Groups or Solo Play: Whether you’re hanging out with friends or simply looking for solo entertainment, the billiards table is the perfect place to relax and have fun.</li>
                            <li>Available for All Guests: The billiards room is available for all of our hotel guests, so you can enjoy a game whenever you like during your stay.</li>
                        </ul>
                    </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
                <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
                <Book/>
            </div>   
        </div>
    )
}