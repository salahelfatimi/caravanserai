'use client'
import { Montserrat_Alternates } from 'next/font/google'
import Image from 'next/image'

export default function Activitte() {
    return (
        <div className="relative   bg-primary flex flex-col  w-full ">
            <div className=" ">
                <Image src={'/img/caravanserai/caravanseri_1.jpg'} width={1920} height={1080} quality={50} alt="Caravan Serai" title="Caravan Serai" className="w-full lg:h-[60rem] object-bottom object-cover"/>
            </div>
                <div className=" flex flex-col  items-center justify-center text-white py-20 container">
                    <h2 className=" text-4xl text-center font-boska font-medium mb-10">
                        Adventures, Culture & Pure Fun
                    </h2>
                    <p className={`text-sm lg:text-lg text-center font-boska mb-4`}>
                        From sunrise bike rides through palm groves to sunset yoga on the terrace, Caravan Serai turns every moment into an adventure. Explore local art, dive into Moroccan culture, or challenge your friends to a game of billiards — because at Caravan Serai, every day is a new story waiting to be written.
                    </p>
                    <button className="bg-white hover:bg-primary border-2 border-white hover:text-white duration-700 text-primary text-2xl font-boska px-8 py-2">
                        Book Now
                    </button>
                </div>
        </div>

    )
}
