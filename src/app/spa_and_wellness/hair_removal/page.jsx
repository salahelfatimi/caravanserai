import hair_removal from "@/components/data/hair_removal";
import Book from "@/components/pages/book";
import Image from "next/image";

export default function Hair_removal(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/spa_and_wellness/hair_removal/hair_removal.jpg'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Hair Removal – Épilation Parfaite</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Smooth, Silky Skin with Expert Waxing Services at Caravan Serai Spa. <br/> Our professional hair removal treatments ensure long-lasting results, leaving your skin feeling soft, smooth, and flawless.</p>
                </div>
            </div>  
            <div className="flex flex-col gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)]">
                <h2 className="text-3xl font-boska md:text-5xl text-center font-bold text-primary">
                    Our Hair Removal Services
                </h2>
                <p className="text-center text-gray-600">Experience smooth, long-lasting results with our professional hair removal services.</p>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-6 px-6">
                    {hair_removal.map((service, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-white border-2 border-primary shadow-lg rounded-2xl">
                        <h3 className="text-lg font-medium">{service.title}</h3>
                        <p className="text-gray-600 text-center">{service.description}</p>
                        <span className="text-primary font-bold mt-2">{service.price}</span>
                    </div>
                    ))}
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