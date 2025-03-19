import Book from "@/components/pages/book";
import Image from "next/image";

export default function hiking_and_cycling(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/experiences/hiking_and_cycling/hiking_and_cycling.jpg'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Hiking and Cycling at Caravan Serai Hotel & Spa</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Discover Marrakech's Natural Beauty Through Outdoor Adventures</p>
                </div>
            </div> 
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai Hotel & Spa, we believe in offering our guests more than just relaxation. Immerse yourself in the stunning landscapes of Marrakech with our exclusive Hiking and Cycling experiences. Whether you're looking for an adventurous hike through the Atlas Mountains or a peaceful cycling tour through the picturesque countryside, we provide the perfect outdoor activities for nature lovers and adventure seekers.</p>
            </div>
            <div className=" flex lg:flex-row flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2">
                    <Image src={'/img/experiences/hiking_and_cycling/hiking_and_cycling_2.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Cycling through the Countryside</h2>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">- Perfect for Cyclists of All Levels</h3>
                        <p >Marrakech's countryside offers a range of cycling routes that allow you to explore the area's natural beauty, including olive groves, desert landscapes, and scenic rural villages.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">- Electric and Traditional Bikes</h3>
                        <p >Choose between traditional bicycles or electric bikes for a more relaxed ride. Whether you prefer a leisurely pedal or a bit more adventure, we have the right bike for you.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">- Guided Cycling Tours</h3>
                        <p >Take part in a guided cycling tour to get the most out of your experience. Our knowledgeable guides will ensure you discover hidden gems, local culture, and breathtaking landscapes that you might miss on your own.</p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
                <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
                <Book/>
            </div>   
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2">
                    <Image src={'/img/experiences/hiking_and_cycling/hiking_and_cycling_1.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Hiking Adventures in the Atlas Mountains</h2>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">- Scenic Trails for All Levels</h3>
                        <p >Whether you're a beginner or an experienced hiker, the Atlas Mountains offer trails suitable for everyone. From short, leisurely walks to more challenging treks, you’ll be surrounded by the breathtaking beauty of Morocco’s landscapes.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">- Guided Hikes</h3>
                        <p >Whether you're a beginner or an experienced hiker, the Atlas Mountains offer trails suitable for everyone. From short, leisurely walks to more challenging treks, you’ll be surrounded by the breathtaking beauty of Morocco’s landscapes.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">- Unique Views and Wildlife</h3>
                        <p >The Atlas Mountains are home to stunning views, ancient villages, and diverse wildlife. Hiking here offers an unparalleled opportunity to connect with nature and enjoy Morocco's natural wonders.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}