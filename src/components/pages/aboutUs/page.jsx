'use client'
import Image from "next/image";
import Discover_marrakech from "./discover_marrakech";
import { HeartHandshake, MousePointerClick, ShieldCheck } from "lucide-react";
import Book from "../book";

export default function AboutUsPage(){
    return(
        <div>
            <div className="relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/aboutUs/about_us_1.jpg'} loading="eager" width={1920} height={1080} alt="Caravan Serai" title="Caravan Serai" className="absolute inset-0 h-full w-full object-bottom object-cover"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container">
                    <h1 className="font-boska font-medium text-6xl lg:text-8xl text-white">About Caravan Serai Marrakech</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Located in the heart of Marrakech’s Palmeraie, Caravan Serai is a luxurious boutique hotel inspired by the historic caravanserais, where travelers once rested on their journeys across the desert. Our 4-star hotel blends traditional Moroccan charm with modern comforts, offering a tranquil escape from the bustling city.</p>
                </div>
            </div>
            <div className=" flex flex-col  items-center justify-center gap-6 bg-primary py-10 bg-top  bg-[url(/img/bg.svg)]">
                <h2 className=" text-center text-white text-3xl md:text-5xl font-boska font-bold uppercase">A Sanctuary of Relaxation & Wellness</h2>
                <p className=" text-white text-center">Indulge in a luxurious spa experience, where ancient Moroccan rituals meet modern wellness. Our hammam, massage therapies, and beauty treatments are designed to restore balance and well-being.</p>
            </div>
            <div className=" flex flex-col lg:flex-row bg-white  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 ">
                    <Image src={'/img/aboutUs/about_us_2.jpg'} width={1920} height={1080} className=" h-[50rem] object-cover" alt="Caravan Serai" title="Caravan Serai" />
                </div>
                <div className="lg:w-1/2 flex flex-col gap-8 justify-center p-4 ">
                    <h2 className="text-4xl text-start font-boska font-bold  text-primary " >Experience Authentic Moroccan Elegance</h2>
                    <p>Located in the heart of Marrakech’s Palmeraie, Caravan Serai is a luxurious boutique hotel inspired by the historic caravanserais, where travelers once rested on their journeys across the desert. Our 4-star hotel blends traditional Moroccan charm with modern comforts, offering a tranquil escape from the bustling city.</p>
                    <h3 className="text-primary font-bold text-lg">Why Stay at Caravan Serai?</h3>
                    <ul className=" *:text-sm space-y-3 ">
                        <li><strong>Prime Location</strong> – Situated in La Palmeraie, just minutes from Marrakech’s Medina and major attractions.</li>
                        <li><strong>Authentic Moroccan Hospitality</strong> - Authentic Moroccan Hospitality – Experience warm, personalized service in a setting designed for relaxation.</li>
                        <li><strong>Luxury Accommodations</strong> – Choose from our 16 elegantly designed rooms and suites, featuring private terraces, intricate Moroccan décor, and stunning views of the Atlas Mountains.</li>
                        <li><strong>World-Class Amenities</strong> – Unwind at our outdoor swimming pool, rejuvenate in our traditional hammam & spa, or savor gourmet Moroccan and international cuisine at our on-site restaurant.</li>
                        <li><strong>Exclusive Experiences</strong> – Explore Marrakech with desert excursions, camel rides, quad biking, golf, and more.</li>

                    </ul>
                </div>
            </div>
           <Discover_marrakech/>
           <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
                <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
                <Book/>
                <div className="py-10 px-6 text-center">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Best Price Guarantee */}
                        <div className="flex flex-col items-center p-4 bg-white border-2 border-primary shadow-lg rounded-2xl">
                        <ShieldCheck size={40} className="text-primary mb-2" />
                        <h3 className="text-lg font-medium">Best Price Guarantee</h3>
                        <p className="text-gray-600">Book direct for exclusive offers.</p>
                        </div>

                        {/* Easy Online Booking */}
                        <div className="flex flex-col items-center p-4 bg-white border-2 border-primary shadow-lg rounded-2xl">
                        <MousePointerClick size={40} className="text-primary mb-2" />
                        <h3 className="text-lg  font-medium">Easy Online Booking</h3>
                        <p className="text-gray-600">Secure your stay in just a few clicks.</p>
                        </div>

                        {/* Unmatched Hospitality */}
                        <div className="flex flex-col items-center p-4 bg-white border-2 border-primary shadow-lg rounded-2xl">
                        <HeartHandshake size={40} className="text-primary mb-2" />
                        <h3 className="text-lg font-medium">Unmatched Hospitality</h3>
                        <p className="text-gray-600">Let us take care of your every need.</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}